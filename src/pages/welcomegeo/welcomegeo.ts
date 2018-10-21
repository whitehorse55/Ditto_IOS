import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { ValidationProvider } from './../../providers/validation/validation';
import { GeolocatinoProvider } from './../../providers/geolocatino/geolocatino';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { FcmProvider } from '../../providers/fcm/fcm';

/**
 * Generated class for the WelcomegeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomegeo',
  templateUrl: 'welcomegeo.html'
})
export class WelcomegeoPage {
  public place_array: any[];
  public check_array: any[];

  everycheck: boolean;

  // isMylocation : boolean
  // code : any
  loading: Loading;

  geoCredential = { code: '', isMylocation: false };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public validationService: ValidationProvider,
    public localstorageprovider: LocalstorageProvider,
    public geolocationprovider: GeolocatinoProvider,
    public fcmprovider: FcmProvider
  ) {
    // this.geolocationprovider
    //   .changeZipCodeToLocation('beijing')
    //   .then(su => { })
    //   .catch(er => {
    //     alert(er);
    //   });
  }

  ionViewDidLoad() {
    this.check_array = [];
    this.everycheck = false;
    this.generatePlaceArray();
    // this.isMylocation = false
    // this.code = ""
    this.geoCredential = { code: '', isMylocation: false };
  }

  private generatePlaceArray() {
    this.place_array = [
      {
        placeurl: 'resturant.png',
        placename: 'Restaurants',
        placekey: 'restaurants',
        ischecked: false
      },
      {
        placeurl: 'cafes.png',
        placename: 'Arts & Entertainment',
        placekey: 'arts',
        ischecked: false
      },
      {
        placeurl: 'bars.png',
        placename: 'Active Life',
        placekey: 'active',
        ischecked: false
      },
      {
        placeurl: 'scale.png',
        placename: 'Beauty & Spas',
        placekey: 'beautysvc',
        ischecked: false
      },
      {
        placeurl: 'scale.png',
        placename: 'beautysvc',
        placekey: 'tours',
        ischecked: false
      },
      {
        placeurl: 'scale.png',
        placename: 'Bars',
        placekey: 'bars',
        ischecked: false
      },
    ];
  }

  // function : get current position
  ////////////// when click use my location button
  getcurrentpos() {
    this.geoCredential.isMylocation = true;
    this.geoCredential.code = '';
    // this.isMylocation = true
    // this.code = ""
  }

  ////////////////when input zip code////////////
  inputZipcode() {
    if (this.geoCredential.code != '') {
      // this.isMylocation = false
      this.geoCredential.isMylocation = false;
    }
  }

  ///////////////function : when change checkbox status//////////////////////
  onchangeEverythingStatus(checkval) {
    console.log('checkstua', checkval);
    if (checkval) {
      this.checkAll();
    } else {
      this.uncheckAll();
    }
  }

  onchangeStatus(item, index) {
    this.checkOneItem(item, index);
  }

  checkOneItem(item, index) {
    if (this.everycheck) {
      this.check_array = [];
      this.everycheck = false;
    }

    if (item.ischecked) {
      this.check_array.push(item.placekey);
      console.log('check', this.check_array);
    } else {
      this.check_array.splice(this.check_array.indexOf(item.placekey), 1);
      console.log('uncheck', this.check_array);
    }
  }

  checkAll() {
    this.check_array = [];
    for (let i = 0; i < this.place_array.length; i++) {
      // this.place_array[i].ischecked = true
      this.check_array.push(this.place_array[i].placekey);
    }
    console.log('clicked checkall', this.check_array);
  }

  uncheckAll() {
    this.check_array = [];
    // for(let i = 0 ; i < this.place_array.length ; i++)
    // {
    //     this.place_array[i].ischecked = false
    // }
    console.log('clicked uncheckall', this.check_array);
  }

  /////////////////function : when click let me in button////////////
  onclickOkbutton() {
    this.showLoading();
    console.log('this is credent', this.geoCredential);

    this.validationService
      .getPlaceList(this.geoCredential, this.check_array)
      .then(success => {
        this.saveCategoryListTouserinfo()
      })
      .catch(err => {
        this.loading.dismiss()
        this.showError(err);
      });
  }


  saveCategoryListTouserinfo() {
    ///////////////////// change array to string ///////////////
    // let usercategoryinfo = this.generateCategoryString()

    //////////////////////// save category string to firestore/////////////////
    this.fcmprovider.saveUserCategoryInfos(this.check_array).then(res => {

   
      this.localstorageprovider.saveCategoryList(this.check_array);

      if (this.geoCredential.code != '') {
        /////////////////// zip code /////////// later
        this.navCtrl.setRoot('BottomtabbarPage');
      } else {
        this.navCtrl.setRoot('BottomtabbarPage');
      }
      this.loading.dismiss();

    }).catch(er => {
      this.loading.dismiss();
    })
  }

  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
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
    alert.present();
  }
}
