import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BottomtabbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bottomtabbar',
  templateUrl: 'bottomtabbar.html',
})
export class BottomtabbarPage {

  tab1Root = 'MainPage';
  tab2Root = 'PlacesearchPage'
  tab3Root = 'NewInvitePage'
  tab4Root = 'ChattingPage'
  tab5Root = 'SettingPage'

  selectIndex : number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
      if(this.navParams.get('opentab'))
      {
        // this.selectIndex = this.navParams.get('opentab')
      }else{
        this.selectIndex = 0
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BottomtabbarPage');
  }

}
