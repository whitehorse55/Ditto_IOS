import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Loading, LoadingController, Item, Events, ToastController } from 'ionic-angular';
import {Contacts } from '@ionic-native/contacts';
import { MatchedProvider } from '../../providers/matched/matched';
import { ContactModel } from '../../Model/ContactModel';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { AuthProvider } from '../../providers/auth/auth';
import { FormControl } from '@angular/forms';
import { SMS } from '@ionic-native/sms';
import { NotificationProvider } from '../../providers/notification/notification';
import { async } from 'rxjs/internal/scheduler/async';
import { GroupProvider } from '../../providers/group/group';
import { SmsProvider } from '../../providers/sms/sms';

/**
 * Generated class for the InviteplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inviteplace',
  templateUrl: 'inviteplace.html',
  providers: [Contacts]
})
export class InviteplacePage {


  isGroup = false

  searching: any = false;
  searchControl: FormControl;

  // public contactList: Array<any>;
  // public contactListOnly : Array<any>;
  // public contactTempList: Array<any>;
  public usinguserarray: any
  public friendArray: any

  // -------------------------------------------------------------------------------------------------- //
  // online list array info
  // users : friends, phone contact users who has app
  public onlineArray: Array<any>;
  public onlineTempArray: Array<any>;

  // phonecontact list array info
  // phone contact users : users who has not app
  public phoneContactArray: Array<any>;
  public phoneContactTempArray: Array<any>;

  // others list array : will only show when search users
  // users : firebase users : not friends, will have apps
  public otherListArray: Array<any>;
  public otherListTempArray: Array<any>;

  public groupListArray: any
  // -------------------------------------------------------------------------------------------------- //
  checkedArray: any

  searchTerm: any;
  loading: Loading;

  passdata: any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public contacts: Contacts,
    public matchprovider: MatchedProvider,
    public localstorageprovider: LocalstorageProvider,
    public authprovider: AuthProvider,
    public platform: Platform,
    private loadingCtrl: LoadingController,
    private sms: SmsProvider,
    private smstext: SMS,
    private notifprovider: NotificationProvider,
    private groupprovider: GroupProvider,
    private events: Events,
    private toastCtrl: ToastController) {

    this.isGroup = false

    // search control when search 
    this.searchControl = new FormControl()
    this.searching = false
    this.searchTerm = '';

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      if (this.searching == true) {
        console.log("this is value change event")
        this.searching = false;
        this.setFilterItems();
      }
    });


    // users who has app
    this.usinguserarray = []
    this.friendArray = []

    // online list array 
    this.onlineArray = []
    this.onlineTempArray = []

    // phone contact list array
    this.phoneContactArray = []
    this.phoneContactTempArray = []

    // other list array
    this.otherListArray = []
    this.otherListTempArray = []

    this.groupListArray = []

    // pass data from previous page 
    // data style :
    this.passdata = this.navParams.get('data')
    console.log("this is passdatainfo",this.passdata);

    this.checkedArray = []
    // get friend, hasApp , Phone contact array

    this.showLoading()
    // temp test
    this.getMyGroupInfo()

  }

  private getMyGroupInfo() {
    this.groupprovider.getMygroups().then((res: any[]) => {
      console.log("this is group info data=>", res)
      this.loading.dismiss()
      this.groupListArray = res
    }).catch(err => {
      this.loading.dismiss()
    })

    this.getFriendsListInfo()
  }

  onclickDonebutton() {
    this.events.publish('dismissinvite')
    this.navCtrl.pop()
  }

  onSearchInput() {
    this.searching = true;
  }

  //////////////////function : when enter search key in search bar /////////////////////////
  setFilterItems() {
    if (this.searchTerm == '') {
      this.onlineArray = this.onlineTempArray
      this.phoneContactArray = this.phoneContactTempArray

      console.log("this is online array", this.onlineArray)

    } else {
      this.onlineArray = this.filterItems(this.onlineTempArray, this.searchTerm)
      this.phoneContactArray = this.filterItems(this.phoneContactTempArray, this.searchTerm)
      this.otherListArray = this.filterItems(this.otherListTempArray, this.searchTerm)
    }
  }

  /////////////////function : get search result array fromm search key///////////////////
  filterItems(filterarray, searchTerm) {

    return filterarray.filter(contactmodel => {
      return (
        contactmodel.displayName.toUpperCase()
          .toUpperCase()
          .indexOf(searchTerm.toUpperCase()) > -1
      );
    });
  }


  getPhoneContactInfo(onlinearray, onlinetemparray) {
    this.searching = false;
    this.showLoading()
    var options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };

    this.contacts
      .find(
        [
          'displayName',
          'name',
          'phoneNumbers',
          'emails',
          'country',
          'postalCode',
          'country'
        ],
        options
      )
      .then(
        res => {

          console.log("this is res", res)

          // start : get from phone contact 
          var contactarray = []
          var contactTemparray = []

          var i = 0
          res.forEach(element => {
            i++
            let contactmodel = new ContactModel();
            if (this.platform.is('android')) {
              if (element.displayName) {
                contactmodel.displayName = element.displayName;
              } else {
                contactmodel.displayName = ''
              }

            } else if (this.platform.is('ios')) {
              if (element.name.givenName) {
                contactmodel.displayName = element.name.givenName;
              } else {
                contactmodel.displayName = ''
              }

            }

            contactmodel.isChecked = false

            let phonenumbers = element.phoneNumbers;
            if (phonenumbers != null) {

              let phonenospace = phonenumbers[0]['value'].replace(/\s/g, '');
              let code = this.localstorageprovider.getUserinfo()['countrycode'];

              if (phonenospace.charAt(0) != '+') {
                contactmodel.phoneNumbers = code + phonenospace;
              } else {
                contactmodel.phoneNumbers = phonenospace;
              }

              let photoimage = element.photos;
              if (photoimage != null) {
                photoimage.forEach(photo => {
                  contactmodel.image = photo.value;
                });
              } else {
                contactmodel.image = '';
              }

              let status = this.setInvitedUserStatus(contactmodel.phoneNumbers);

              if (status.length > 0) {
                contactmodel.isInvited = true;
              } else {

                contactmodel.isInvited = false;
              }
              contactmodel.isContact = true

              ///////////////////////////////check user has  app or not////////////
              let status_check = this.checkUserHasApp(contactmodel.phoneNumbers);
              let isodd = onlinearray.filter(elem => elem['phoneNumbers'] == contactmodel.phoneNumbers)

              if (status_check) {
                // if phone contact user will have app
                contactmodel.isHasApp = true;
                if (isodd.length == 0) {
                  onlinearray.push(contactmodel)
                  onlinetemparray.push(contactmodel)
                }

              } else {
                // if phone contact user don't have app
                contactmodel.isHasApp = false;
                if (isodd.length == 0) {
                  contactarray.push(contactmodel)
                  contactTemparray.push(contactmodel)
                }

              }

            } else {
              contactmodel.phoneNumbers = '';
            }

            if (i == res.length) {
              this.onlineArray = []

              // onlinearray = onlinearray
              // contactarray = contactarray

              this.onlineArray.push(...onlinearray.sort(this.sortStrings))
              this.phoneContactArray.push(...contactarray.sort(this.sortStrings))

              this.onlineTempArray.push(...onlinetemparray.sort(this.sortStrings))
              this.phoneContactTempArray.push(...contactTemparray.sort(this.sortStrings))
            }


          });


          this.loading.dismiss()

        }, err => {
          this.loading.dismiss()

        }).catch(er => {
          this.loading.dismiss()
        });
  }

  sortFriends(a, b) {
    return b.isInvited - a.isInvited
  }

  sortInviteStyles(a, b) {
    return b.isHasApp - a.isHasApp
  }

  /////////////////// sort alphabeta order/////////////////
  sortStrings(a, b) {
    if (a.displayName.toUpperCase() < b.displayName.toUpperCase()) {
      return -1;
    }

    if (a.displayName.toUpperCase() > b.displayName.toUpperCase()) {
      return 1;
    }

    return 0;
  }

  // when click group checkbox button
  onclickGroupCheckbox(items, type) {
    console.log("this is groupcheck data", items, type, this.isGroup)
    if (!this.isGroup) {
      this.checkedArray = []
    }

    this.isGroup = true

    let array_exist = this.checkedArray.filter(ele => ele['groupid'] == items['groupid'])
    if (array_exist.length > 0) {
      array_exist.forEach(element => {
        if (element.isChecked) {
          this.checkedArray.splice(this.checkedArray.indexOf(items), 1)
        } else {
          this.checkedArray.push(items)
        }
        element.isChecked = !element.isChecked
      });
    } else {
      this.checkedArray.push(items)
    }

    console.log("this is checked array info", this.checkedArray)

    this.uncheckedAllWhenGroup()

  }

  uncheckedAll() {
    this.groupListArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });

    this.uncheckedAllWhenGroup()
  }
  uncheckedAllWhenGroup() {
    this.onlineArray.filter(elem => elem.isChecked == true).forEach(elem => {
      elem.isChecked = false
    })


    this.onlineTempArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });


    this.phoneContactArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });


    this.phoneContactTempArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });


    this.otherListArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });

    this.otherListTempArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });

  }


  // function : when click checkbox buttons
  onclickCheckbox(items, type) {
    if (this.isGroup) {
      this.isGroup = false
      this.checkedArray = []
    }

    this.groupListArray.filter(elem => elem.isChecked == true).forEach(element => {
      element.isChecked = false
    });


    if (type == 'online') {
      let item = this.onlineArray.find(elem => elem.phoneNumbers == items['phoneNumbers'])
      let item1 = this.onlineTempArray.find(elem => elem.phoneNumbers == items['phoneNumbers'])
      console.log("this is online array", item, item1)
      item.isChecked = !item.isChecked
      item1.isChecked = !item.isChecked

    }
    else if (type == 'phone') {
      let item: ContactModel = this.phoneContactArray.find(elem => elem['phoneNumbers'] === items['phoneNumbers'])
      let item1: ContactModel = this.phoneContactTempArray.find(elem => elem['phoneNumbers'] === items['phoneNumbers'])
      item.isChecked = !item.isChecked
      item1.isChecked = !item.isChecked

    } else if (type == 'other') {
      let item: ContactModel = this.otherListArray.find(elem => elem['phoneNumbers'] === items['phoneNumbers'])
      let item1: ContactModel = this.otherListTempArray.find(elem => elem['phoneNumbers'] === items['phoneNumbers'])
      item.isChecked = !item.isChecked
      item1.isChecked = !item.isChecked
    }

    console.log("this is items list", items)

    if (items['isChecked'] == true) {
      if (this.checkedArray.length == 0) {
        this.checkedArray.push(items)
      } else {
        let status = this.checkedArray.filter(elem => elem['phoneNumbers'] == items['phoneNumbers'])
        console.log("checked list", status)
        if (status.length == 0) {
          this.checkedArray.push(items)
        }
      }

    } else {
      this.checkedArray.splice(this.checkedArray.indexOf(items), 1);
    }

    console.log("this is checked list", this.checkedArray)
  }

  // function : when click send button
  onclickSendbutton() {
    this.showLoading()
    this.uncheckedAll()
    console.log("this is checkedarray info", this.checkedArray)
    if (this.checkedArray.length == 0) {
      this.notify('Please check one or more persons.')
      this.loading.dismiss()
    }

    else if (this.checkedArray.length == 1) {
      if (this.isGroup) {
        this.sendGroupInvite()
      } else {
        this.sendRequestToUser()
      }

    } else {
      if (this.isGroup) {
        this.sendGroupInvite()
      } else {
        this.generateGroup()
      }
    }

    this.checkedArray = []
  }

  // when click group item 
  sendGroupInvite() {
    console.log("this is message ==>", this.passdata, this.checkedArray)
    this.groupprovider.saveGroupInfodata(this.passdata, this.checkedArray,"inviteplace").then(suc => {
      console.log("result info ==>", suc)
      this.notify('Sent')
      this.loading.dismiss()
      this.uncheckedAll()

    }).catch(e => {
      this.loading.dismiss()
    })

  }

  //////////////////////////////////////////// generate group /////////////////////////////////////
  generateGroup() {
    console.log("this is message ==>", this.passdata, this.checkedArray)

    let message =
      'I’d like to invite you to ' + this.passdata['place_name'] + '. Accept the invite on Ditto http://dittochat.com/download';

    this.groupprovider.generateGroup(this.passdata, this.checkedArray).then((res: Array<any>) => {
      this.loading.dismiss()

      if (res.length > 0) {
        this.sms.sendTextMessages(res['message'], message).then(res => {
          this.loading.dismiss()
          this.notify('Sent')
        }).catch(er => {
          this.loading.dismiss()
        })
      } else {
        this.loading.dismiss()
        this.notify('Sent')
      }
      // this.getMyGroupInfo()
    }).catch(er => {
      this.loading.dismiss()
    })

  }

  // 1 : 1 user invite 
  sendRequestToUser() {
    let contactmodel = this.checkedArray[0]
    console.log("this is contactmodelinfo", contactmodel)
    if (contactmodel.isHasApp) {
      ////////////////////////friend //////////////
      if (contactmodel.isInvited) {
        // this.changeOneitemStatus(phonumber,index, "sent")
        this.sendAutoMatchRquest(contactmodel)
      }
      else if (!contactmodel.isInvited) {
        //////////////not friend/////////////////////
        this.sendFriendRequestWithMatch(contactmodel)
        // this.changeOneitemStatus(phonumber,index, "Requested")
      }

    } else {
      this.sendTextMessage(contactmodel['phoneNumbers'])
    }

  }

  sendAutoMatchRquest(contactmodel) {
    // this.showLoading()


    this.authprovider.getUserStatus(contactmodel['id']).then(res => {
      console.log("this is status info", res)

      if (res[0]['status'] == null) {
        this.automatch(contactmodel)
      } else {
        if (res[0]['status'] == true) {
          this.automatch(contactmodel)
        }
      }
    }).catch(err => {

    })
    // send notification for invite

  }


  automatch(contactmodel) {
    let myid = this.matchprovider.getUserinfo()['id'];
    this.notifprovider.sendFriendRequest("Received Match Request!", contactmodel['id'], "invited you to" + this.passdata['place_name'])

    this.matchprovider.autoSavePlaceInfo(this.passdata, myid).then(res => {
      this.matchprovider.autoSavePlaceInfo(this.passdata, contactmodel['id']).then(ress => {
        this.matchprovider.atuosaveMyplaceInfo(this.passdata, myid).then(succ => {
          this.matchprovider.atuosaveMyplaceInfo(this.passdata, contactmodel['id']).then(su => {
            this.matchprovider.autosaveMatchedUsers(contactmodel['id'], this.passdata).then(su => {
              this.matchprovider.saveMatchedUsersList(contactmodel['id']).then(ss => {
                this.matchprovider.saveMatchedOtherUsersList(contactmodel['id']).then(succ => {

                  this.authprovider.getMyFriendsList(contactmodel['id']).then(resu => {
                    this.loading.dismiss()
                    this.notify('Sent')
                  }).catch(e => {
                    
                    this.authprovider.saveFriends("", contactmodel).then(suc => {
                      this.loading.dismiss()
                      this.notify('Sent')
                    }).catch(err => {
                      console.log("erro1", err)
                      this.loading.dismiss()
                    })

                  })
                }).catch(r => {
                  console.log("erro1", r)
                  this.loading.dismiss()
                })
              }).catch(er => {
                console.log("erro2", er)
                this.loading.dismiss()
              })
            }).catch(ee => {
              console.log("erro3", ee)
              this.loading.dismiss()
            })
          }).catch(e => {
            console.log("erro4", e)
            this.loading.dismiss()
          })
        }).catch(e => {
          console.log("erro5", e)
          this.loading.dismiss()
        })
      }).catch(er => {
        console.log("erro6", er)
        this.loading.dismiss()
      })
    }).catch(err => {
      console.log("erro7", err)
      this.loading.dismiss()
    })
  }


  sendFriendRequestWithMatch(model) {
    this.authprovider.saveFriends(model.phoneNumbers, model).then(res => {
      this.notify('Sent')
      this.notifprovider.sendFriendRequest("Received Request! ", model['id'], " requested  to invite you out")
      this.sendAutoMatchRquest(model)
    }).catch(err => {
      this.loading.dismiss()
      console.log("this is errror", err)
    })
  }

  // send sms message when 1 : 1 invite
  sendTextMessage(phoneNumber) {
    let message =
      'I’d like to invite you to ' + this.passdata['place_name'] + '. Accept the invite on Ditto http://dittochat.com/download';

    this.sms.sendTextMessages(phoneNumber, message).then(res => {
      this.notify('Sent')
      this.loading.dismiss()
    }).catch(er => {
      this.loading.dismiss()
    })

  }




  checkUserHasApp(phonenumber) {
    if (this.usinguserarray.length != 0) {
      let status = this.usinguserarray.filter(item => item['phoneNumbers'] === phonenumber);
      if (status.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }



  ////////////////function  : check friends list from firebase/////////
  getFriendsListInfo() {

    let myinfo = this.localstorageprovider.getUserinfo();

    // this.showLoading();
    this.authprovider
      .getMyFriendsList(myinfo.id)
      .then(result => {

        for (let i = 0; i < result.length; i++) {
          this.authprovider.getFrindsInfoFromId(result[i]['userkey']).then(success => {
            this.friendArray.push(success[0]['phonenumber']);
          });

          if (i == result.length - 1) {
            this.getUsingAppUsersInfo()
          }
        }

      })
      .catch(error => {
        this.loading.dismiss()
      });
  }

  getUsingAppUsersInfo() {
    this.matchprovider.getAllUsingUsersArray().then(suceess => {

      this.onlineArray = []
      this.onlineTempArray = []
      this.phoneContactArray = []
      this.phoneContactTempArray = []

      this.otherListArray = []
      this.otherListTempArray = []

      var onlinearray = []
      var onlineTempArray = []

      var otherlistarray = []
      var otherlisttemparray = []

      for (let i = 0; i < suceess.length; i++) {
        let contactmodel = new ContactModel()
        contactmodel.displayName = suceess[i]['username']
        contactmodel.image = suceess[i]['imagearray']
        contactmodel.isHasApp = true
        contactmodel.phoneNumbers = suceess[i]['phonenumber']
        contactmodel.id = suceess[i]['id']
        contactmodel.isContact = false
        contactmodel.isChecked = false

        // get user is friend or not
        let array = this.setInvitedUserStatus(suceess[i]['phonenumber'])

        if (array.length > 0) {
          contactmodel.isInvited = true
          onlinearray.push(contactmodel)
          onlineTempArray.push(contactmodel)

        } else {
          contactmodel.isInvited = false
          otherlistarray.push(contactmodel)
          otherlisttemparray.push(contactmodel)
        }

        // 
        this.usinguserarray.push(contactmodel)

        if (i == suceess.length - 1) {
          this.otherListArray.push(...otherlistarray.sort(this.sortStrings))
          this.otherListTempArray.push(...otherlisttemparray.sort(this.sortStrings))
          this.getPhoneContactInfo(onlinearray, onlineTempArray)
        }
        this.loading.dismiss()
      }

    }).catch(error => {
      this.loading.dismiss()
      // let returnarray = []
      // this.getPhoneContactInfo() 
    })
  }

  private setInvitedUserStatus(number): Array<any> {
    return this.friendArray.filter(elem => elem === number);
  }


  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  notify(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }


}
