import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { MatchedProvider } from './../../providers/matched/matched';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { NotificationProvider } from '../../providers/notification/notification';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html'
})
export class MatchPage {
  data: any;

  userInfoArray: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public matchProvider: MatchedProvider,
    public localstorageprovider: LocalstorageProvider,
    public notifprovider : NotificationProvider,
    public admob : AdMobFree,
    public platform : Platform
  ) {}

  ionViewDidLoad() {
    this.userInfoArray = [];
    this.data = {
      title: "IT'S A MATCH!",
      names: '',
      photos: '',
      key: 'match',
      placeinfo: ''
    };
    let userinfos = this.navParams.get('userinfos');
    let placeinfos = this.navParams.get('placeinfo');
    console.log('userinfos', userinfos, placeinfos);

    if (userinfos.length > 0) {
      this.getUserInfosFromKeys(userinfos, placeinfos);
    }

    this.saveMatcheduser(userinfos, placeinfos)

    
  }


  ionViewWillEnter(){
    this.showBanner();
  }

  showBanner() {
    let key: string;
    if (this.platform.is('android')) {
      key = 'ca-app-pub-6863402298027651/5113279399';
    }

    if (this.platform.is('ios')) {
      key = 'ca-app-pub-6863402298027651/8234266751';
    }

    console.log('this i ssfdafadmob', key);
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: true,
      id: key
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner
      .prepare()
      .then(() => {
        this.admob.banner.show();
      })
      .catch(e => console.log(e));
  }

  ionViewWillLeave(){
    this.admob.banner.hide();
  }

  saveMatcheduser(info, placeinfo)
  {
    
    this.matchProvider.saveMatchedUsers(info,placeinfo).then(sucee=>{
      this.matchProvider.saveMatchedUsersList(info).then(succ=>{
        info.forEach(element => {
          console.log('elemetnsts====================================');
          console.log(element);
          console.log('====================================');
          this.matchProvider.saveMatchedOtherUsersList(element).then(res=>{

          })
        });
        
      }).catch(err=> alert(err))
    }).catch(err=> alert(err))
  }

  ///////////////////// functions : getuserkeys from infos/////////////////
  getUserInfosFromKeys(userinfo: Array<any>, placeinfo) {
    var nameArray = 'You , ';
    var photoArray = [];
    var tempNameArray = ""

    var i = 0;

    let myinfo = this.localstorageprovider.getUserinfo();
    let myUrl = myinfo['photoUrl'];

    photoArray.push(myUrl);


    userinfo.forEach(element => {
      this.authProvider
        .getFrindsInfoFromId(element)
        .then(success => {
          i++;

          this.userInfoArray.push(success[0]);    
          photoArray.push(success[0]['imagearray']);

          if (i == userinfo.length) {
            
            tempNameArray = tempNameArray + success[0]['username'] ;
            nameArray = nameArray + success[0]['username']
            this.notifprovider.sendMatchRequest(userinfo, tempNameArray,placeinfo['place_name'])

            this.generateDataForComponent(nameArray, photoArray, placeinfo);
          }else{
            nameArray = nameArray + success[0]['username'] + ","
            tempNameArray = tempNameArray + success[0]['username'] + "," ;
          }
        })
        .catch(error => {});
    });
  }



  generateDataForComponent(names, photos, place) {
    console.log('this is data fro componenet', names, photos, place);
    this.notifprovider

    this.data = {
      title: "IT'S A MATCH!",
      names: names,
      photos: photos,
      key: 'match',
      placeinfo: place,
      buttontitle1 : "Set Something Up",
      buttontitle2 : "keep looking"
    };
  }

  onclickbuttons(key)
  {
      if(key == 'back')
      {
        this.navCtrl.pop()
      }else if(key == 'chat')
      {
        this.navCtrl.push('ChattingPage',{from : "match"});
      }
  }
}
