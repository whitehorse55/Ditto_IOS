import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomeinvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomeinvite',
  templateUrl: 'welcomeinvite.html'
})
export class WelcomeinvitePage {
  public data_invite = {};
  public data_place = {};

  isInvitepage: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isInvitepage = true;

    let str = this.navParams.get('data');
    console.log('thji', str);
    if (str == 'noskip') {
      this.isInvitepage = false;
    }
  }

  ionViewDidLoad() {
    this.data_invite = {
      img: 'assets/img/group.png',
      title: 'Wait A Minute!',
      description:
        'You’d have way more fun with the app if your friends were using it.',
      firstbutton: 'Invite some friends',
      secondbutton: 'no thanks'
    };
    this.data_place = {
      img: 'assets/img/welcome_place.png',
      title: 'Welome to Ditto',
      description:
        'Thumbs up places that you like.Hang out with friends that like it too! ',
      easybutton: 'OK, Sounds Easy'
    };
  }

  onclickbuttons(data) {
    this.isInvitepage = false;

    if (data == 'easy') {
      console.log('this is component parameter', data);
      this.navCtrl.setRoot('WelcomegeoPage',{data : data});
    }
  }
}
