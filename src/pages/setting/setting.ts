import { AdmobserviceProvider } from './../../providers/admobservice/admobservice';
import { AdMobPro } from '@ionic-native/admob-pro';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  myinfos: any;
  isToggle : boolean
  data_menubar  = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localstorage: LocalstorageProvider,
    public platform : Platform,
    public fb: Facebook,
    public googleplus : GooglePlus,
    public authprovider : AuthProvider,
    public admobprovider : AdmobserviceProvider,
    public myapp : App
  
  ) {
    this.myinfos = {};
    this.isToggle = false
    this.getMyInfo();
    this.getUserStatus()
  }

  ionViewDidLoad() {
    this.data_menubar = { title: 'My Profile' };
    console.log('ionViewDidLoad SettingPage');
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.admobprovider.showadmob(50);
    }, 2000);
  }

  ionViewWillLeave() {
    setTimeout(() => {
      this.admobprovider.removeAdmob();
    }, 100);
  }

  
  // ionViewWillEnter() {
  //   setTimeout(() => {
  //     this.showBanner();
  //   }, 2000);
  // }

  // showBanner() {
  //   let key: string;
  //   if (this.platform.is('android')) {
  //     key = 'ca-app-pub-6863402298027651/5113279399';
  //   }

  //   if (this.platform.is('ios')) {
  //     key = 'ca-app-pub-6863402298027651/8234266751';
  //   }

  //   console.log('this i ssfdafadmob', key);
  //   let bannerConfig: AdMobFreeBannerConfig = {
  //     isTesting: false,
  //     autoShow: true,
  //     id: key
  //   };

  //   this.admob.banner.config(bannerConfig);

  //   this.admob.banner
  //     .prepare()
  //     .then(() => {
  //       this.admob.banner.show();
  //     })
  //     .catch(e => console.log(e));
  // }

  // ionViewWillLeave() {
  //   this.admob.banner.remove();
  // }

  getMyInfo() {
    let myinfo = this.localstorage.getUserinfo();
    this.myinfos = myinfo;
    console.log('ionViewDidLoad SettingPage', this.myinfos);
  }

  onclickCancel() {
    this.navCtrl.pop();
  }

  getUserStatus()
  {
    let myid = this.localstorage.getUserinfo()['id'];
      this.authprovider.getUserStatus(myid).then(res=>{
        console.log("this is result", res)
        if(res[0]['status'])
        {
          this.isToggle = res[0]['status']
        }else{
          this.isToggle = false
        }
      }).catch(err=>{

      })
  }

  updateItem(item){
    this.authprovider.updateUserStatus(item.checked).then(res=>{

    }).catch(e=>{

    })
  }

  onclickLogout() {
     
      this.fb.logout()
      this.googleplus.logout()
      this.localstorage.clearLocalstorage();
      this.admobprovider.removeAdmob().then(res=>{
        this.myapp.getRootNav().setRoot('LoginPage',{type : "logout"})
      })
      
      
  }

  onclickitem(kind) {
    if (kind == 'fr') {
      this.navCtrl.push('FriendsPage', { kind: 'myfriends' });
    }

    if (kind == 're') {
      this.navCtrl.push('FriendsPage', { kind: 'request' });
    }

    if (kind == 'fi') {
      this.navCtrl.push('WelcomePage', { kind: 'find' });
    }

    if(kind == 'in')
    {
      this.navCtrl.push('WelcomegeoPage',{data : kind});
    }

    if(kind == 'block')
    {
      this.navCtrl.push('FriendsPage',{kind : 'block'});
    }
  }
}
