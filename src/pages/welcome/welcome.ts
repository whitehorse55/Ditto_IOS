import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { MatchedProvider } from './../../providers/matched/matched';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Loading,
  ToastController,
  Platform,
  AlertController
} from 'ionic-angular';
import {
  Contacts,
  Contact,
  ContactField,
  ContactName
} from '@ionic-native/contacts';
import { ContactModel } from '../../Model/ContactModel';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { SMS } from '@ionic-native/sms';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from 'firebase';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [Contacts]
})
export class WelcomePage {
  public contactList: Array<any>;
  public contactListOnly: Array<any>;
  public contactTempList: Array<any>;

  public invitedUserArray: Array<any>;
  public usinguserarray: Array<any>;
  public usinguserphonearray: Array<any>;

  searchTerm: any;
  isFlag: Boolean; ////////////////////welcome and invite page flag
  isFromSetting: boolean;
  loading: Loading;
  searching: any = false;
  searchControl: FormControl;

  data_welcome = {};

  hasInvitedUser: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts,
    private loadingCtrl: LoadingController,
    private sms: SMS,
    private toastCtrl: ToastController,
    private plt: Platform,
    private authprovider: AuthProvider,
    private alertCtrl: AlertController,
    private matchedProvider: MatchedProvider,
    private localstorageprovider: LocalstorageProvider
  ) {
    this.searchControl = new FormControl();

    this.isFromSetting = false;
    this.isFlag = false;
    this.hasInvitedUser = false;

    this.contactList = [];
    this.contactTempList = [];
    this.contactListOnly = [];

    this.invitedUserArray = [];
    this.usinguserphonearray = [];
    this.usinguserarray = [];

    this.data_welcome = {
      img: 'assets/img/group.png',
      title: 'Hey There!',
      description:
        'Ditto is for hanging out with  your friends. Try inviting a few!',
      welcomebutton: 'OK'
    };

    this.getInvitedFriends();
  }

  ionViewDidLoad() {
    let fromSetting = this.navParams.get('kind');
    console.log('====================================');
    console.log(fromSetting);
    console.log('====================================');

    setTimeout(() => {
      if (fromSetting == 'find') {
        this.isFlag = true;
        this.isFromSetting = true;
        this.getContactListFromSetting();
      }
    }, 0);
  }

  getContactListFromSetting() {
    this.searchTerm = '';

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilterItems();
    });

    let countrycode = this.localstorageprovider.getUserinfo()['countrycode'];
    this.getContactInfo(countrycode);
  }

  getAllUsersUsingApp() {
    this.usinguserarray = [];

    this.matchedProvider
      .getAllUsingUsersArray()
      .then(suceess => {
        console.log('snapshotinfo', suceess);
        this.usinguserphonearray = suceess;

        suceess.forEach(element => {
          let contactmodel = new ContactModel();
          contactmodel.displayName = element['username'];
          contactmodel.image = element['imagearray'];
          contactmodel.isHasApp = true;
          contactmodel.phoneNumbers = element['phonenumber'];
          let array = this.setInvitedUserStatus(element['phonenumber']);
          if (array.length > 0) {
            contactmodel.isInvited = true;
          } else {
            contactmodel.isInvited = false;
          }

          contactmodel.isContact = false;
          this.usinguserarray.push(contactmodel);
        });

        console.log('this is usinguserarray', this.usinguserarray);
      })
      .catch(error => {
        this.usinguserphonearray = [];
      });
  }

  ////////////////function  : check friends list from firebase/////////
  getInvitedFriends() {
    let myinfo = this.localstorageprovider.getUserinfo();

    // this.showLoading();
    this.authprovider
      .getMyFriendsList(myinfo.id)
      .then(result => {
        // this.loading.dismiss();

        result.forEach(element => {
          this.authprovider
            .getFrindsInfoFromId(element['userkey'])
            .then(success => {
              this.invitedUserArray.push(success[0]['phonenumber']);

              if (this.invitedUserArray.length > 0) {
                this.hasInvitedUser = true;
              }
            });
        });

        this.getAllUsersUsingApp();
        console.log('this', this.invitedUserArray);
      })
      .catch(error => {
        // this.loading.dismiss();
        console.log('this is error', error);
        // this.showError(error)
      });
  }

  onSearchInput() {
    this.searching = true;
  }

  //////////////////function : when enter search key in search bar /////////////////////////
  setFilterItems() {
    console.log('this is filter input');
    if (this.searchTerm == '') {
      this.contactList = this.contactListOnly;
      console.log('this is contact list', this.contactList);
    } else {
      this.contactList = this.filterItems(this.searchTerm);
      console.log('this is contact list fileter', this.contactList);
    }
  }

  /////////////////function : get search result array fromm search key///////////////////
  filterItems(searchTerm) {
    return this.contactTempList.filter(contactmodel => {
      return (
        contactmodel.displayName
          .toUpperCase()
          .indexOf(searchTerm.toUpperCase()) > -1
      );
    });
  }

  onclickbuttons(data) {
    this.showLoading();
    setTimeout(() => {
      this.loading.dismiss();
      if (data == 'welcome') {
        this.searchTerm = '';
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.searching = false;
          this.setFilterItems();
        });

        let countrycode = this.localstorageprovider.getUserinfo()[
          'countrycode'
        ];
        console.log('this is countrycode', countrycode);
        this.getContactInfo(countrycode);
      }
    }, 5000);
  }

  //////////////////if platform is ios ////////////////
  getContactInfo(code) {
    this.searching = false;

    this.isFlag = true;
    var options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };

    this.contacts
      .find(['displayName', 'name', 'phoneNumbers'], options)
      .then(
        res => {
          console.log('this is ios res', res);
          this.contactList = [];
          this.contactTempList = [];
          res.forEach(element => {
            console.log('element count');
            let contactmodel = new ContactModel();

            if (this.plt.is('android')) {
              if (element.displayName) {
                contactmodel.displayName = element.displayName;
              } else {
                contactmodel.displayName = '';
              }
            } else if (this.plt.is('ios')) {
              if (element.name.givenName) {
                contactmodel.displayName = element.name.givenName;
              } else {
                contactmodel.displayName = '';
              }
            }

            //  phonenumber
            let phonenumbers = element.phoneNumbers;
            if (phonenumbers != null) {
              let phonenospace = phonenumbers[0]['value'].replace(/\s/g, '');
              contactmodel.phoneNumbers = phonenospace;

              if (phonenospace.charAt(0) != '+') {
                contactmodel.phoneNumbers = code + phonenospace;
              } else {
                contactmodel.phoneNumbers = phonenospace;
              }

              /////////////////////check user is using this app or not//////////
              let isHasApp = this.checkUserHasApp(contactmodel.phoneNumbers);
              if (isHasApp) {
                contactmodel.isHasApp = true;
              } else {
                contactmodel.isHasApp = false;
              }
              // ////////////////////////////////////////////////////////////////

              //////////////////// check friend or not///////////////////////////
              let status = this.setInvitedUserStatus(contactmodel.phoneNumbers);

              if (status.length > 0) {
                contactmodel.isInvited = true;
              } else {
                contactmodel.isInvited = false;
              }
            } else {
              contactmodel.phoneNumbers = '';
            }

            //  photo
            let photoimage = element.photos;
            if (photoimage != null) {
              photoimage.forEach(photo => {
                contactmodel.image = photo.value;
              });
            } else {
              contactmodel.image = '';
            }
            this.contactTempList.push(contactmodel);
            this.contactList.push(contactmodel);
            this.contactListOnly.push(contactmodel);
          });

          let firebasearray = this.compareInvitedArrayandAllUsers();

          if (firebasearray.length > 0) {
            this.contactTempList = this.contactTempList.concat(firebasearray);
          }

          /////////////////////////array sorting/////////////////////////////
          this.contactList.sort(this.sortStrings).sort(this.sortInviteStyles);
          this.contactListOnly
            .sort(this.sortStrings)
            .sort(this.sortInviteStyles);
          this.contactTempList
            .sort(this.sortStrings)
            .sort(this.sortInviteStyles);

          this.loading.dismiss();
        },
        err => {
          this.loading.dismiss();
        }
      );
  }

  private compareInvitedArrayandAllUsers() {
    let compareArray = this.usinguserarray.filter(
      item => this.invitedUserArray.indexOf(item['phoneNumbers']) < 0
    );
    return compareArray;
  }

  // filter invited member in invitedarray
  private setInvitedUserStatus(number): Array<any> {
    console.log('this is contact number', number, this.invitedUserArray);

    return this.invitedUserArray.filter(elem => elem == number);
  }

  sortInviteStyles(a, b) {
    return a.isHasApp - b.isHasApp;
  }

  /////////////////// sort alphabeta order/////////////////
  sortStrings(a, b) {
    // a = a.toLowerCase();
    // b = b.toLowerCase();
    // return a > b ? 1 : a < b ? -1 : 0;
    if (a.displayName < b.displayName) {
      return -1;
    }

    if (a.displayName > b.displayName) {
      return 1;
    }

    return 0;
  }

  checkUserHasApp(phonenumber) {
    if (this.usinguserphonearray.length != 0) {
      let status = this.usinguserphonearray.filter(
        item => item['phoneNumbers'] === phonenumber
      );
      if (status.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  // send sms invite using SMS messaging when click add button
  onclickAddButton(phoneNumber, index) {
    this.showLoading();
    this.authprovider
      .checkUsingApp(phoneNumber)
      .then(sucess => {
        this.authprovider
          .saveFriends(phoneNumber, sucess)
          .then(res => {
            this.loading.dismiss();
            this.changeOneitemStatus(phoneNumber, index);
          })
          .catch(error => {
            console.log('this is error code', error);
            this.loading.dismiss();
          });
      })
      .catch(err => {
        console.log('this is snapshot');
        this.loading.dismiss();
        this.sendSms(phoneNumber, index);
      });
  }

  ///send SMS message if users not registred yet
  private sendSms(phoneNumber, index) {
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT' // Opens Default sms app
        //intent: '' // Sends sms without opening default sms app
      }
    };

    let message =
      'Let’s use Ditto to find places to hang out. Download it here: http://dittochat.com/download';

    this.sms
      .send(phoneNumber, message, options)
      .then(
        () => {
          // this.notify('success')
          this.changeOneitemStatus(phoneNumber, index);
        },
        () => {
          this.loading.dismiss();
          // alert("failed");
        }
      )
      .catch(err => {
        this.showError(err);
      });
  }

  onclickOkbutton() {
    console.log('====================================');
    console.log();
    console.log('====================================');
    this.navCtrl.setRoot('WelcomeinvitePage', { data: 'noskip' });
  }

  onclickbackbutton() {
    this.navCtrl.pop();
  }

  //////////////////
  private changeOneitemStatus(number, index) {
    this.contactList.find(item => item.phoneNumbers == number).isInvited = true;
    this.contactTempList.find(
      item => item.phoneNumbers == number
    ).isInvited = true;
    this.loading.dismiss();
  }

  ////////// function : show error alert ///////////////////////
  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            alert.dismiss();
            return false; // put this on last line of callback
          }
        }
      ]
    });
    // alert.present(prompt);
    alert.present();
  }

  /////////////////// show toast function////////////////////
  notify(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  onclickskipbutton() {
    this.navCtrl.setRoot('WelcomeinvitePage');
  }
}
