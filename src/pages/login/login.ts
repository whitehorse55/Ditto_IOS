import { AuthProvider } from './../../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  AlertController,
  Loading,
  ToastController,
  LoadingController,
  Slides
} from 'ionic-angular';
import firebase from 'firebase';
import { FacebookProvider } from '../../providers/facebook/facebook';
import { FcmProvider } from '../../providers/fcm/fcm';
import { GoogleProvider } from '../../providers/google/google';
import { AdMobPro } from '@ionic-native/admob-pro';

// import { AdMobFree } from '@ionic-native/admob-free';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  @ViewChild('slider') slider :  Slides
  slideIndex = 0

  loading: Loading;
  url_terms  = "http://www.dittochat.com/terms"
  url_privacy = "http://www.dittochat.com/privacy"


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public authprovider: AuthProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public facebookprovider : FacebookProvider,
    public fcmprovider : FcmProvider,
    public googleprovider : GoogleProvider,
    public admobpro : AdMobPro
    // public admob : AdMobFree
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.admobpro.removeBanner()
  }

  ionViewWillEnter(){
    let type = this.navParams.get('type')
    if(type == 'logout')
    {
      this.slider.slideTo(0,2)
    }
  }

  onSlideChanged()
  {
    
    this.slideIndex = this.slider.getActiveIndex()
    console.log("changed", this.slideIndex)
  }

  onclickCreateAccount() {
    console.log('click create account button');
    let signupModal = this.modalCtrl.create('SignupPage');

    signupModal.onDidDismiss(phonenumber => {
      console.log('closed modal vieww');
    });

    signupModal.present();
  }


  onclickFacebook()
  {
      this.showLoading()
      this.facebookprovider.loginwithFacebook().then(result=>{
        this.loading.dismiss()
        this.gotoMainPage(result)
        
      }).catch(err=>{
          this.loading.dismiss()
          if(err != "false")
          {
            this.gotoFacebookSignup(err)
          }
          
      })
  }

  // if facebook user is exist
  gotoMainPage(info)
  {
      console.log("this is main page info", info)


      this.authprovider.getUserInfoFromEmail(info['email']).then(succ=>{
        
           this.authprovider.getUserVisited().then(visitresult=>{
                      this.loading.dismiss();
                      console.log("visitresult", visitresult);

                      if(succ['firstlogin'] == false)
                      {
                        if(visitresult[0]['isVisited']==null){
                          this.authprovider.updateUserVisited(true)
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot('WalkthroughPage');
                        }else{
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot('WelcomePage');
                        }
                        
                      }else{
                        if(visitresult[0]['isVisited']==null){
                          this.authprovider.updateUserVisited(true)
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot('WalkthroughPage');
                        }else{
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot('BottomtabbarPage');
                        } 
                      }


                    }).catch(er=>{
                      this.showError(er);
                      this.loading.dismiss();
                    })
      })
  }

  // when facebook user is not exist
  gotoFacebookSignup(info)
  {
     console.log("this is facebook info", info)
     this.navCtrl.push('CompletepagePage', {data : info})
  }

  onclickGoogle()
  {
    this.showLoading()
    this.googleprovider.googleLogin().then(succ=>{
      this.loading.dismiss()
      this.gotoMainPage(succ)
    }).catch(err=>{
          this.loading.dismiss()
          if(err != "false")
          {
            this.gotoFacebookSignup(err)
          }
          
    })
  }

  onclickterms(item)
  {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    if(item == 'terms')
    {
      window.open(this.url_terms,'_system','location=yes');
    }else{
      window.open(this.url_privacy, '_system','location=yes');;
    }
    
  }

  presentConfirm(credential) {
    let alert = this.alertCtrl.create({
      title: 'Verify Phone',
      message: 'Please enter the  6 digit code sent to you via SMS',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Resend',
          handler: () => {
            console.log('resend clicked');
          }
        },

        {
          text: 'Cotinue',
          handler: data => {
            credential.confirm(data.phone).then(result => {
              console.log('this is test' + result);
            });
          }
        }
      ],
      inputs: [
        {
          name: 'phone',
          placeholder: 'Enter Code',
          type: 'text'
        }
      ]
    });
    alert.present();
  }

  verify(phonenumber) {
    // this.showLoading()
    console.log('this is verify function');

    (<any>window).AccountKitPlugin.loginWithPhoneNumber(
      {
        useAccessToken: true,
        defaultCountryCode: 'CN',
        facebookNotificationsEnabled: true
      },
      data => {
        (<any>window).AccountKitPlugin.getAccount(
          info => console.log(info),
          err => console.log(err)
        );
      }
    );
    // this.authprovider.phoneVerification(phonenumber, this.recaptchaVerifier).then(credential =>{
    //     this.presentConfirm(credential)
    //     this.loading.dismiss()
    // }).catch(error=>{
    //   console.log("enter phon", error)
    //     this.showError(error)
    // })
  }

  onclickLogin() {
    this.navCtrl.push('SigninPage');
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

  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
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
    // alert.present(prompt);
    alert.present();
  }
}
