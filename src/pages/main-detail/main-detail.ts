import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { YelpProvider } from '../../providers/yelp/yelp';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the MainDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-detail',
  templateUrl: 'main-detail.html',
})
export class MainDetailPage {

  @ViewChild('slider') slider : Slides
  detail_info : any
  detail_address : any
  detail_city : any
  detail_category : any
  slideIndex = 0;

  // slides=['assets/img/stadium.jpg','assets/img/stadium-2.jpg','assets/img/stadium-3.png']

  constructor(public navCtrl: NavController,public platform : Platform,
     public navParams: NavParams, public yelpservice : YelpProvider, public lab : InAppBrowser) {
     this.detail_info = {}
     this.detail_address = []
     this.detail_category = []

     this.detail_city = ""

     var placeid = this.navParams.get('placeid')

     console.log("this is placeid info", placeid)
     this.getDetailYelpData(placeid)
  }


  ionViewWillEnter(){
    // this.showBanner();
    this.slider.centeredSlides = true
  }

s

  onclickBackbutton()
  {
    this.navCtrl.pop()
  }

  getDetailYelpData(place_id)
  {
    this.yelpservice.getYelpDetailInfo(place_id).then(result=>{
        this.detail_info = result
        this.detail_address = this.detail_info.location.display_address
        this.detail_city = this.detail_info.location.city
        this.detail_category = this.detail_info['categories']
        console.log("detail info", this.detail_info.location.display_address)
    }).catch(err=>{

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainDetailPage');
  }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  onclickyelpbutton(url)
  {
      this.lab.create(url)
  }

}
