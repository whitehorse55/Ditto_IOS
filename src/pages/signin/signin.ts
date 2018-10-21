import { FcmProvider } from './../../providers/fcm/fcm';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  AlertController,
  LoadingController,
  ToastController,
  ModalController
} from "ionic-angular";
import { ValidationProvider } from "../../providers/validation/validation";
import { AuthProvider } from "./../../providers/auth/auth";
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage {
  registerCredentials = { email: "", password: "" };

  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public validationprovider: ValidationProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authprovider: AuthProvider,
    public modalCtrl: ModalController,
    public fcmprovider : FcmProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SigninPage");
  }

  public login() {
    this.showLoading();

    this.validationprovider
      .login(this.registerCredentials)
      .then(success => {
        this.authprovider
          .login(this.registerCredentials)
          .then(result => {
            // this.authprovider
            //   .checkEmailVerify()
            //   .then(res => {
                this.authprovider
                  .getUserInfoFromEmail(this.registerCredentials.email)
                  .then(succes => {
                    console.log("visitresult", succes);
                    this.authprovider.getUserVisited().then(visitresult=>{
                      this.loading.dismiss();
                      console.log("visitresult", visitresult);

                      if(succes['firstlogin'] == false)
                      {
                        if(visitresult[0]['isVisited']==null){
                          this.authprovider.updateUserVisited(true)
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot("WalkthroughPage");
                        }else{
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot("WelcomePage");
                        }
                        
                      }else{
                        if(visitresult[0]['isVisited']==null){
                          this.authprovider.updateUserVisited(true)
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot("WalkthroughPage");
                        }else{
                          this.fcmprovider.getToken()
                          this.navCtrl.setRoot("BottomtabbarPage");
                        } 
                      }


                    }).catch(er=>{
                      this.showError(er);
                      this.loading.dismiss();
                    })
                
                   
                  });
              // })
              // .catch(er => {
              //   this.showError(er);
              //   this.loading.dismiss();
              // });
          })
          .catch(err => {
            this.showError(err);
            this.loading.dismiss();
          });
      })
      .catch(error => {
        this.showError(error);
        this.loading.dismiss();
      });
  }

  onclickCancel() {
    this.navCtrl.pop();
  }

  onclickSignup() {
    console.log("click create account button");
    let signupModal = this.modalCtrl.create("SignupPage");
    signupModal.onDidDismiss(phonenumber => {
      console.log("closed modal vieww");
    });
    signupModal.present();
  }
  /////////////////// show toast function////////////////////
  notify(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ////////// function : show error alert ///////////////////////
  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: "Fail",
      subTitle: text,
      buttons: [
        {
          text: "Ok",
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
