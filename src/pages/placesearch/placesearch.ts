import { AdmobserviceProvider } from './../../providers/admobservice/admobservice';
import { AdMobPro } from '@ionic-native/admob-pro';

// PlacesearchPage

import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { MatchedProvider } from './../../providers/matched/matched';
import { Constant } from './../../Constant/constant';
import { AlertService } from './../../providers/Utils/alert.service';
import { YelpModel, GrouponModel } from './../../Model/PlaceModel';
import { ToastService } from './../../providers/Utils/toast.service';
import { GeolocatinoProvider } from './../../providers/geolocatino/geolocatino';
import {
  Component,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Loading,
  Events,
  Platform
} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import {
  StackConfig,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent,
  ThrowEvent,
  Direction,
  Stack
} from 'angular2-swing';
import { Geoposition, GeolocationOptions } from '@ionic-native/geolocation';
import { AuthProvider } from '../../providers/auth/auth';
// import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeBanner } from '@ionic-native/admob-free';
import { YelpProvider } from '../../providers/yelp/yelp';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FcmProvider } from '../../providers/fcm/fcm';
import { GrouponProvider } from '../../providers/groupon/groupon';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-placesearch',
  templateUrl: 'placesearch.html'
})
export class PlacesearchPage {
  ///////////////// tinder view realted variables//////////////
  @ViewChild('myswing1')
  swingStack: SwingStackComponent;
  @ViewChildren('mycards1')
  swingCards: QueryList<SwingCardComponent>;

  ///////////////////map related variables////////////////
  @ViewChild('map')
  mapElement: ElementRef;
  map: any;
  options: GeolocationOptions;
  currentPos: Geoposition;
  googleApiPhotoUrl: string;
  googleKey: string;
  service: any;

  // place array realted variables
  places: any[];
  places_temp: any[];
  yelp_array: any[];
  groupon_array: any[];
  ////////////////////tinder view related variables/////////
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  isSwipeStatus: any;

  //////////////////////////// checked places list which previous page///////////
  checkList: any;

  /////////////////////////// component passing variable//////////////////////
  public data_menubar = {};

  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geoService: GeolocatinoProvider,
    public toastCtrl: ToastService,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public alertService: AlertService,
    public authprovider: AuthProvider,
    public matchedProvider: MatchedProvider,
    public localstorageprovider: LocalstorageProvider,
    public platform: Platform,
    public events: Events,
    public yelpprovider: YelpProvider,
    public lab: InAppBrowser,
    public fcmprovider: FcmProvider,
    public grouponprovider: GrouponProvider,
    public admobprovider: AdmobserviceProvider
  ) {
    platform.ready().then(() => {
      this.localstorageprovider.saveLoginStatus('true');

      this.isSwipeStatus = true;

      this.getUserStatus();
      this.onDismissInvitePage();

      this.places = [];
      this.places_temp = [];
      this.yelp_array = [];
      this.groupon_array = [];

      this.checkList = [];

      // this.isSearching = false

      let elem = document.createElement('div');
      this.service = new google.maps.places.PlacesService(elem);

      this.stackConfig = {
        allowedDirections: [
          Direction.LEFT,
          Direction.DOWN,
          Direction.UP,
          Direction.RIGHT
        ],
        throwOutConfidence: (offsetX, offsetY, element) => {
          return Math.min(
            Math.max(
              Math.abs(offsetX) / (element.offsetWidth / 1.8),
              Math.abs(offsetY) / (element.offsetHeight / 3)
            ),
            1
          );
        },
        throwOutDistance: d => {
          return 900;
        }
      };
    });
  }

  getUserSwipeSataus() {
    return new Promise((resolve, reject) => {
      this.fcmprovider
        .getUserSwipeStatus()
        .then(res => {
          this.isSwipeStatus = res;
          this.fcmprovider.saveUserSwipeStatus();
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // status is user status of  public or private
  // if user status is not defined, will save user status to public
  // just setUserStatus and getUserStatus functions
  // isVisited : user have already visited walkthrough flow  : true
  // isVisited : user not visted walkthrough flow  : false
  setUserStatus() {
    this.authprovider
      .updateUserStatus(true)
      .then(res => {})
      .catch(e => {});
  }

  getUserStatus() {
    let myid = this.localstorageprovider.getUserinfo()['id'];
    this.authprovider
      .getUserStatus(myid)
      .then(res => {
        console.log('this is result', res);
        if (res[0]['status']) {
        } else {
          this.setUserStatus();
        }
      })
      .catch(err => {});
  }

  // onFocusSearch(status)
  // {
  //   this.isSearching = status
  // }

  onchangeSearch(searcharray) {
    console.log('serach array info', searcharray);
    this.places = [];
    this.places = searcharray;
  }

  ionViewDidLoad() {
    this.data_menubar = { title: '' };
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.admobprovider.showadmob(100);
    }, 2000);
  }

  ionViewWillLeave() {
    setTimeout(() => {
      this.admobprovider.removeAdmob();
    }, 100);
  }

  // showBanner() {
  //   let key: string;
  //   if (this.platform.is('android')) {
  //     key = 'ca-app-pub-6863402298027651/5113279399';
  //   }

  //   if (this.platform.is('ios')) {
  //     key = 'ca-app-pub-6863402298027651/8234266751';
  //   }

  //   console.log('this i ssfdafadmob', key);
  //   let bannerConfig: AdMobFreeBannerConfig = {
  //     isTesting: false,
  //     autoShow: true,
  //     id: key
  //   };

  //   this.admob.banner.config(bannerConfig);

  //   this.admob.banner
  //     .prepare()
  //     .then(() => {
  //       this.admob.banner.show();
  //     })
  //     .catch(e => console.log(e));

  //   // this.admobpro.
  // }



  onclickHeaderImage(placeid) {
    this.navCtrl.push('MainDetailPage', { placeid: placeid });
  }

  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ngAfterViewInit() {
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.swingStack.throwoutleft.subscribe((event: ThrowEvent) => {
      console.log('Manual hook', event);
    });

    this.swingStack.throwoutright.subscribe((event: ThrowEvent) => {
      console.log('manual hook right', event);
    });

    this.cards = [{ email: '' }];
  }

  onThrowOut(event: ThrowEvent) {
    console.log('hook from the template', event.throwDirection);
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else {
      color = '#FF' + hexCode + hexCode;
    }

    element.style.background = color;
    element.style[
      'transform'
    ] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  // Connected through HTML
  voteUp(like: boolean, info) {
    console.log('this is placeinfo', info);

    if (like) {
      // distinguish "swipe right" and click like button
      if (info == 'swipe') {
        this.swipeRight();
      } else {
        this.onclickLikeButton(info);
      }
    } else {
      this.onclickUnlikeButton(info);
    }
    this.places.pop();
  }

  // function :  when swipe right : just same when click unlike button
  swipeLeft() {}

  // function :  when swipe right : just same when click like button
  swipeRight() {
    // this.showLoading()

    // get user swipe status
    this.getUserSwipeSataus().then(res => {
      console.log('this is temp info', res);
      if (res == false) {
        this.stackConfig.allowedDirections = [Direction.INVALID];
      } else {
        let stacklength = this.swingStack.cards.length;
        let cardlength = this.swingCards.length;

        let index = stacklength - cardlength;
        console.log('swiperight', cardlength);
        this.onclickLikeButton(this.places[cardlength - 1]);
      }
    });
  }

  onclickmaskView(index) {
    let place = this.places[index];
    this.onclickinvite(place);
  }

  onclickitems(type) {
    console.log('this is type info=======>', type);
    let index = type['index'];
    let place = this.places[index];

    switch (type['type']) {
      case 'placeimage':
        this.onclickHeaderImage(place['place_id']);
        break;

      case 'yelp':
        this.onclickMorebutton(place['place_url']);
        break;

      case 'invite':
        this.onclickinvite(place);
        break;

      case 'group_placeimage':
        this.onclickMorebutton(place['place_dealurl']);
        break;

      case 'group_invite':
        this.onclickinvite(place);
        break;

      default:
        break;
    }
  }

  onDismissInvitePage() {
    this.events.subscribe('dismissinvite', () => {
      this.isSwipeStatus = true;
    });
  }

  onclickMorebutton(url) {
    var inappbrowser = this.lab.create(url, '_blank');
    inappbrowser.show();
    // this.navCtrl.push('PlacemapPage',{placeid : p_id})
  }

  onclickinvite(item) {
    this.navCtrl.push('InviteplacePage', { data: item });
  }

  // function : when click left button
  onclickUnlikeButton(info) {}

  //function : when click like button

  onclickLikeButton(info) {
    // this.showLoading();

    this.matchedProvider
      .savePlaceInfo(info)
      .then(res => {
        this.matchedProvider
          .saveMyPlaceInfo(info)
          .then(result => {})
          .catch(error => {});

        this.matchedProvider
          .getMatchedUserInfo(res, info)
          .then(success => {
            console.log('====================================');
            console.log(JSON.stringify(success), res);
            console.log('====================================');

            this.navCtrl
              .push('MatchPage', {
                userinfos: success,
                placeinfo: info
              })
              .then(scu => {});
            // this.loading.dismiss();
          })
          .catch(error => {
            console.log('errrrrr====================================');
            console.log(JSON.stringify(error));
            console.log('====================================');
            // this.loading.dismiss();
          });
      })
      .catch(error => {
        // this.loading.dismiss();
        // this.alertService.presentAlert('Alert', error);
      });
  }

  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    const numPadding =
      typeof padding === 'undefined' || padding === null ? 2 : padding;

    while (hex.length < numPadding) {
      hex = '0' + hex;
    }

    return hex;
  }
}
