import { AuthProvider } from './../../providers/auth/auth';
import { MatchedProvider } from './../../providers/matched/matched';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MatchdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matchdate',
  templateUrl: 'matchdate.html'
})
export class MatchdatePage {
  userdata: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localstorageprovider: LocalstorageProvider,
    public matchedprovider: MatchedProvider,
    public authprovider: AuthProvider,
    public viewCtrl : ViewController
  ) {
    this.userdata = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchdatePage');
    
    let passData = this.navParams.get('data');

    let myData = this.localstorageprovider.getUserinfo();
    this.getSenderInfo(passData, myData);
  }

  getSenderInfo(passData, myData) {

    this.authprovider
      .getFrindsInfoFromId(passData[0]['receiver'])
      .then(result => {

        this.userdata = {
          myname: myData['username'],
          myimage: myData['photoUrl'],
          friendname : result[0]['username'],
          friendimage : result[0]['imagearray'],
          placename : passData[0]['message'],
          placeimage : passData[0]['placename'],
          meetingtime : passData[0]['timeofmsg']
        };

        console.log('====================================');
        console.log(this.userdata);
        console.log('====================================');
      })
      .catch(error => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        alert(error);
      });
  }

  onclickCancelButton()
  {
    this.viewCtrl.dismiss()
  }
}
