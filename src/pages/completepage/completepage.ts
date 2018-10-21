import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constant } from '../../Constant/constant';
import { FacebookProvider } from '../../providers/facebook/facebook';
import { AlertService } from '../../providers/Utils/alert.service';
import { AuthProvider } from '../../providers/auth/auth';
import { FcmProvider } from '../../providers/fcm/fcm';

/**
 * Generated class for the CompletepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completepage',
  templateUrl: 'completepage.html',
})
export class CompletepagePage {

  userinfo: any
  countryList: any

  registerCredentials: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public facebookprovider: FacebookProvider,
    public alertprovider: AlertService,
    public authprovider: AuthProvider,
    public fcmprovider: FcmProvider) {
    
    this.userinfo = this.navParams.get('data')
    this.countryList = Constant.countryList
    this.registerCredentials = { countrycode: "", phonenumber: "" }
    this.registerCredentials.countrycode = "+1"

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletepagePage');

  }

  signupWithFacebook() {
    if (this.registerCredentials.countrycode == "" || this.registerCredentials.phonenumber == "") {
      this.alertprovider.presentAlert("", "Please fill Countrycode and PhoneNumber info.")
    } else {
      let passdata = {
        email: this.userinfo['email'],
        username: this.userinfo['displayName'],
        phonenumber: this.registerCredentials.countrycode + this.registerCredentials.phonenumber,
        imagearray: this.userinfo['photoUrl'],
        countrycode: this.registerCredentials.countrycode
      }

      this.facebookprovider.signupWithFacebook(passdata).then(succ => {
        this.authprovider.getUserInfoFromEmail(this.userinfo['email']).then(result => {
          this.fcmprovider.getToken()
          this.navCtrl.setRoot("WelcomePage");
        })
      }).catch(err => {
        alert(err)
      })
    }
    console.log("this is signupwith facebook", this.userinfo)
  }


}
