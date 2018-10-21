import { AdmobserviceProvider } from './../../providers/admobservice/admobservice';
import { Constant } from './../../Constant/constant';
import { GeolocatinoProvider } from './../../providers/geolocatino/geolocatino';
// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { ChatModel } from './../../Model/ChatModel';
import { ChatproviderProvider } from './../../providers/chatprovider/chatprovider';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController,
  Platform,
  ModalController
} from 'ionic-angular';
import { YelpProvider } from '../../providers/yelp/yelp';
import { GroupProvider } from '../../providers/group/group';

/**
 * Generated class for the ChattingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html'
})
export class ChattingPage {
  
  loading: Loading;
  invitedUserArray: Array<any> = [];
  isloadedView: boolean;
  kind : any

  groupArray  = []
  data_menubar  = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authprovider: AuthProvider,
    public loadingCtrl: LoadingController,
    public localstorageprovider: LocalstorageProvider,
    public chatprovider: ChatproviderProvider,
    public platform: Platform,
    public modalCtrl : ModalController,
    public geolocationprovider : GeolocatinoProvider,
    public yelpprovider : YelpProvider,
    public groupprovider : GroupProvider,
    public admobprovider : AdmobserviceProvider
  ) {
    this.kind = this.navParams.get('data')
  }

  ionViewDidLoad() {
    this.data_menubar = { title: 'Matches' };
    console.log('ionViewDidLoad ChattingPage');
  }
  
  getGroupData()
  {
    this.groupprovider.getMygroups().then((res : any[])=>{
      console.log("this is group info data=>",res)
      this.loading.dismiss()
      this.groupArray = res
    }).catch(err=>{
      this.loading.dismiss()
    })

    this.invitedUserArray = [];
    // this.getInvitedFriends();
    this.getChatUsers();
  }

 
  ionViewWillEnter() {
    this.getGroupData()
    this.isloadedView = false;
    setTimeout(() => {
      this.admobprovider.showadmob(50);
    }, 2000);
  }



  ionViewWillLeave() {
    setTimeout(() => {
      this.admobprovider.removeAdmob();
    }, 100);
  }

  getChatUsers() {
    this.showLoading();
    this.chatprovider
      .getChatUsers()
      .then(suce => {
        this.invitedUserArray = [];

        suce.forEach(element => {

          let chatmodel = new ChatModel();
          this.chatprovider.getAcceptedChatUsers(element).then((sucess: Array<any>)=>{
  
             if(sucess.length > 0)
             {
              this.chatprovider
              .getChatUsersInfo(element)
              .then(succ => {
  
                chatmodel.userid = succ[0]['id'];
                chatmodel.useremail = succ[0]['email'];
                chatmodel.userimage = succ[0]['imagearray'];
                chatmodel.username = succ[0]['username'];
                chatmodel.userstatus = succ[0]['active']
  
              
                this.chatprovider
                  .getChatUserPlace(element)
                  .then((suce: Array<any>) => {
                    chatmodel.userplace_id = suce[0]['placeid'];
                    console.log("this is==================== ", suce)
                    this.yelpprovider.getYelpDetailInfo(suce[0]['placeid']).then(res=>{
                      console.log("this is====================> ", succ,res )
                      if(res['image_url'])
                      {
                         chatmodel.userplace_image = res['image_url']
                      }else{
                        chatmodel.userplace_image = ""             
                      }
                    }).catch(e=>{
                      if(suce[0]['placeprice'])
                      {
                        chatmodel.userplace_image = suce[0]['placeimage']
                      }else{
                        chatmodel.userplace_image = ""
                      } 
                    })

                    chatmodel.userplace_name = suce[0]['placename'];

                    // if(succ[0]['placeprice'])
                    // {
                    //   chatmodel.userplace_price = succ[0]['placeprice']
                    //   chatmodel.userplace_discountprice = succ[0]['placedisprice']
                    //   chatmodel.userplace_dealurl = succ[0]['placeurl']
                    // }


                    chatmodel.userplace_number = suce.length;
                    chatmodel.userplaces = suce;
                    })

  
                this.chatprovider.getLastMessage(succ[0]['id']).then((succe : string)=>{
                    chatmodel.lastmessage = succe
                }).catch(err=>{
                     chatmodel.lastmessage = "" 
                })
  
                this.chatprovider.getMettingDate(succ[0]['id']).then(succ=>{ 
                   chatmodel.ismeetingdatay = true
                   chatmodel.ismeetingdate = succ[0]['timeofmsg']
                   chatmodel.ismeetingKey = succ[0]['key']
                }).catch(err=>{
                   chatmodel.ismeetingdatay = false
                })
                
                
                this.invitedUserArray.push(chatmodel);
                this.isloadedView = true;
                console.log("this is inveti", this.invitedUserArray)
              })
              .catch(er => {
                this.loading.dismiss();
                this.isloadedView = true;
                alert(er);
              });
             }
          })
        });
      })
      .catch(error => {
        this.loading.dismiss();
        this.isloadedView = true;
      });
  }

  onclickGroupItem(item)
  {
      console.log("this is group info data", item)
      let chatamodel = new ChatModel()
      chatamodel.userplaces = item['places']
      chatamodel.groupid = item['groupid']

      this.navCtrl.push('GroupchatroomPage', { data: chatamodel});
  }

  onclickItems(info) {
    console.log('this is item click', info);

    if(info['type']=='istime')
    {
      let data = this.invitedUserArray[info['index']];
      this.chatprovider.getMettingDateWhenDate(data['userid']).then(succ=>{
        console.log("sfusfefefe", succ)
        this.modalCtrl
        .create(
          'MatchdatePage',
          { data: succ },
          { cssClass: 'inset-modal-match' }
        )
        .present();
      })
      
    }else{
      let data = this.invitedUserArray[info['index']];
      console.log("this is chatting data==>", data)
      this.navCtrl.push('ChatroomPage', { data: data });
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

  onclickbutton(info)
  {
    this.navCtrl.push('WelcomePage', { kind: 'find' });
  }

  onclickHomeButton() {

    console.log('====================================');
    console.log(this.kind);
    console.log('====================================');

    if(this.kind == 'main')
    {
      this.navCtrl.pop();
    }else{
      this.navCtrl.setRoot('MainPage')  
    }
    
  }
}
