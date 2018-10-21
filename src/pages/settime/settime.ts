import { AlertService } from './../../providers/Utils/alert.service';
import { ChatproviderProvider } from './../../providers/chatprovider/chatprovider';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';

/**
 * Generated class for the SettimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settime',
  templateUrl: 'settime.html'
})
export class SettimePage {
 
  date_start: string;
  date_end: string;
  passData : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public chatProvider : ChatproviderProvider,
    public alertCtrl : AlertService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettimePage');
    this.passData = this.navParams.get('data');
    this.date_end = ""
    this.date_start = ""
    console.log('====================================');
    console.log(this.passData);
    console.log('====================================');
  }

  onclickOkButton() {

    if(this.date_start == '')
    {
        this.alertCtrl.presentAlert("","Please fill start date information")
    }
    else if( this.date_end == '')
    {
      this.alertCtrl.presentAlert("","Please fill end date information")
    }
    else{
      if(this.passData['type']== 'single')
      {
          this.chatProvider.addMeeting(this.passData['data']['placename'],this.passData['data']['placeimage'], this.passData['friendid'],"meeting",this.date_start,this.date_end).then(suc=>{
            this.viewCtrl.dismiss()
          }).catch(err=>{
            alert(err)
        })
      }else{
     
          this.chatProvider.addMeetingWhenGroup(this.passData['data']['placename'],this.passData['data']['placephoto'],"meeting",this.date_start,this.date_end,this.passData['groupid']).then(suc=>{
            this.viewCtrl.dismiss()
          }).catch(err=>{
            alert(err)
        });
       
     
      }
    }
      
  }

  onclickCancelButton() {
    this.viewCtrl.dismiss();
  }
}
