import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatdetail',
  templateUrl: 'chatdetail.html',
})
export class ChatdetailPage {

  passdata :  any
  type : any

  userArray : any
  constructor(public navCtrl: NavController, public navParams: NavParams, public authprovider : AuthProvider) {
    this.passdata = this.navParams.get('data')
    this.type = this.navParams.get('type')
    this.userArray = []

    if(this.type == 'single')
    {
        let result = this.getUserPhotoInfo(this.passdata['receiver'])
        let result1 = this.getUserPhotoInfo(this.passdata['sender'])
    }
    
  }


  public getUserPhotoInfo(userid)
  {
    this.authprovider.getFrindsInfoFromId(userid).then(res=>{
      this.userArray.push(res[0])
      console.log("this is user", this.userArray)
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatdetailPage');
  }

  onclickcancelbutton()
  {

  }

  onclickDonebutton()
  {
    this.navCtrl.pop()
  }
}
