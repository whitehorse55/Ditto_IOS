import { AdmobserviceProvider } from './../../providers/admobservice/admobservice';
import { AdMobPro } from '@ionic-native/admob-pro';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { MatchedProvider } from './../../providers/matched/matched';
import { Constant } from './../../Constant/constant';
import { AlertService } from './../../providers/Utils/alert.service';
import {YelpModel, GrouponModel } from './../../Model/PlaceModel';
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
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  ///////////////// tinder view realted variables//////////////
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  ///////////////////map related variables////////////////
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  options: GeolocationOptions;
  currentPos: Geoposition;
  googleApiPhotoUrl: string;
  googleKey: string;
  service: any;

// place array realted variables
  places: any[];
  places_temp : any[]
  yelp_array : any[]
  groupon_array : any[]
  ////////////////////tinder view related variables/////////
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  isSwipeStatus  : any
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
    public yelpprovider : YelpProvider,
    public lab : InAppBrowser,
    public fcmprovider : FcmProvider,
    public grouponprovider : GrouponProvider,
    public admobservice : AdmobserviceProvider
  ) {

    platform.ready().then(()=>{

      this.localstorageprovider.saveLoginStatus('true');

      this.isSwipeStatus = true

      this.getUserStatus()
      this.onDismissInvitePage()
      
      this.places = [];
      this.places_temp = []
      this.yelp_array = []
      this.groupon_array = []

      this.checkList = []
    
      let elem = document.createElement('div');
      this.service = new google.maps.places.PlacesService(elem);
      this.getUserCategoryInfoFromFirebase()

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

    
    })
  }


  getUserSwipeSataus()
  {
    return new Promise((resolve, reject)=>{
      this.fcmprovider.getUserSwipeStatus().then(res=>{
        this.isSwipeStatus = res
        this.fcmprovider.saveUserSwipeStatus()
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
    })
    
  }

  // status is user status of  public or private 
  // if user status is not defined, will save user status to public 
  // just setUserStatus and getUserStatus functions
  // isVisited : user have already visited walkthrough flow  : true
  // isVisited : user not visted walkthrough flow  : false
  setUserStatus(){
    this.authprovider.updateUserStatus(true).then(res=>{

    }).catch(e=>{

    })
  }

  getUserStatus()
  {
    let myid = this.localstorageprovider.getUserinfo()['id'];
      this.authprovider.getUserStatus(myid).then(res=>{
        console.log("this is result", res)
        if(res[0]['status'])
        {
        }else{
          this.setUserStatus()
        }
      }).catch(err=>{
          
      })
  }


  ionViewDidLoad() {
    this.data_menubar = { title: '' }; 
  }

  
  ionViewWillEnter(){
    this.showBanner()
  }


  showBanner() {
    setTimeout(() => {
      this.admobservice.showadmob(50);
    }, 2000);
  }

  ionViewWillLeave(){

    setTimeout(() => {
     this.admobservice.removeAdmob()
    }, 100);
    
  }
// get category list from firebase database

  getUserCategoryInfoFromFirebase()
  {
      this.showLoading();
      this.fcmprovider.getUserCategoryList().then(res=>{
        // this.checkList = this.localstorageprovider.getCategoryList()
        this.checkList = res
        this.getCurrentLocation();
      }).catch(err=>{
        this.loading.dismiss()
        alert(err)
      })
  }

  //////////////////////////////////geolocation functions///////////////////
  private getCurrentLocation() {

    this.geoService
      .getUserPosition()
      .then(success => {
        console.log(
          'this is current location===================================='
        );
        console.log(success);
        console.log('====================================');
        // this.loading.dismiss()
        // this.addMap(success.coords.latitude, success.coords.longitude);
      
        this.getYelpData(success.coords.latitude, success.coords.longitude)
        // this.generatePlaceArray(success.coords.latitude, success.coords.longitude)

      })
      .catch(err => {
        // alert(err)
        this.loading.dismiss();
        this.alertService.presentErrorAlert(err);
        
      });
  }

  getRandomOffsetWithYelp()
  {
    return Math.floor(Math.random() * Math.floor(900));   
  }


  getRandomOffsetWithGroupon(number)
  {
    return Math.floor(Math.random() * Math.floor(number - 25));   
  }

  getYelpData(lati, longi)
  {
      // this.yelpprovider.getTotalYelpNumber(lati, longi,this.checkList).then(res=>{
      // console.log("this is yelp number", res)  
      let random_offset = this.getRandomOffsetWithYelp()
      console.log("this is yelp number-----------", random_offset)                
      this.yelpprovider.getNearByYelpInfo(lati, longi, this.checkList, random_offset).then(suc=>{
       
          // this.places = suc['businesses']
          this.yelp_array = suc['businesses']

          this.grouponprovider.getGrouponNumbers(lati,longi, this.checkList).then(result=>{

              let random_ofset = this.getRandomOffsetWithGroupon(result)
              this.grouponprovider.getGrouponData(lati, longi,this.checkList, random_ofset).then(ress=>{
                this.loading.dismiss()  
                this.groupon_array = ress['deals']
                this.generateAllPlaceArray()
              }).catch(er=>{
                this.loading.dismiss()
              })
          }).catch(er=>{
            this.loading.dismiss()
          })
     
        }).catch(er=>{
          this.loading.dismiss()
          // alert(er)
        })
      // })

  }

  //////get total array from yelp and groupon array
  generateAllPlaceArray()
  {
      this.places = []
      this.places_temp = []

      for(let i=0; i< this.yelp_array.length ; i++)
      {
        let yelp_item = this.yelp_array[i]
        let group_item = this.groupon_array[i]

        let yelp_model = new YelpModel()
        yelp_model.place_id = yelp_item['id']
        yelp_model.place_photo = yelp_item['image_url']
        yelp_model.place_name = yelp_item['name']
        yelp_model.place_price = yelp_item['price']
        yelp_model.place_category = yelp_item['categories']
        yelp_model.place_city = yelp_item.location['city']
        yelp_model.place_rating = yelp_item['rating']
        yelp_model.place_reviews = yelp_item['review_count']
        yelp_model.place_url = yelp_item['url']

    
        let grouponmodel = new GrouponModel()

        grouponmodel.place_name = group_item.merchant['name']
        grouponmodel.place_title = group_item['announcementTitle']
        grouponmodel.place_id = group_item['id']

        grouponmodel.place_dealurl = group_item['dealUrl']

        if(group_item.options[0].redemptionLocations.length > 0)
        {
          grouponmodel.place_lati = group_item.options[0].redemptionLocations[0]['lat']
          grouponmodel.place_longti = group_item.options[0].redemptionLocations[0]['lng']  
        }
        
        if(group_item.options[0].redemptionLocations.length > 0)
        {
          grouponmodel.place_redelocation = group_item.options[0].redemptionLocations[0]['name']
        }
       
        grouponmodel.place_discount_price = group_item.options[0].value['formattedAmount']
        grouponmodel.place_price = group_item.options[0].price['formattedAmount']
        grouponmodel.place_photo = group_item['largeImageUrl']

        this.places.push(yelp_model)
        this.places.push(grouponmodel)

        this.places_temp.push(yelp_model)
        this.places_temp.push(grouponmodel)
      }
      console.log("this is places info", this.places)
  }

  onclickHeaderImage(placeid)
  {
      this.navCtrl.push('MainDetailPage',{placeid : placeid})
  }

 

  // addMap(lat, long) {
  //   let latLng = new google.maps.LatLng(lat, long);

  //   let mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //   this.getPlaceList(latLng)
  //     .then((result: Array<any>) => {

  //       this.places = [];
  //       result.reverse().forEach(element => {
          
  //         let model = new PlaceModdel();
  //         model.id = element['id'];
  //         model.place_icon = element['icon'];
  //         model.place_name = element['name'];
  //         model.place_id = element['place_id'];

  //         this.geoService.getplacePhotos(element['place_id']).then(result=>{

  //           console.log('====================================');
  //           console.log(result);
  //           console.log('====================================');
            
  //           if(result.result.photos)
  //           {
  //              let photourl = Constant.googleApiPhotoUrl + result.result.photos[0]['photo_reference'] + "&key=" + Constant.googleKey
  //              model.place_photo = photourl
  //           }else{
  //             model.place_photo = ""
  //           }
  //         });

  //         model.place_reference = element['reference'];
  //         model.place_type = element['types'];
  //         model.place_vicinity = element['vicinity'];
  //         model.place_rating = element['rating'];
  //         model.place_address = element['vicinity'];

  //         this.places.push(model);
  //       });
  //       console.log('place list', this.places);
  //       this.loading.dismiss();
  //     })
  //     .catch(error => {
  //       this.loading.dismiss();
  //     });
  // }

  ////////////// function : show progress view///////////////////
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }


  /////////////////////////get nearby places list info//////////////////
  getPlaceList(latLng) {

    let request = {
      location: latLng,
      radius: 8000,
      // type : ['store']
      type: this.checkList
    }

    var service = new google.maps.places.PlacesService(this.map)

    console.log("this is check list", this.checkList)
    console.log("this is request list", request)
    console.log("this is check list=====>", this.service)
    

    return new Promise((resolve, reject) => {
      service.nearbySearch(request, (results, status) => {
        console.log('this is test', results, status);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
  }

  public getPhotoUrlsFromPlaceId(placeid): Promise<any> {
    return new Promise((resolve, reject) => {
      var placeservice = new google.maps.places.PlacesService(this.map);

      placeservice.getDetails(
        {
          placeId: placeid
        },
        (placeResult, status) => {
          if (status == 'OK') {
            resolve(placeResult);
          }
        }
      );
    });
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
   this.getUserSwipeSataus().then(res=>{
      console.log("this is temp info", res)
      if(res == false)
      {
        this.stackConfig.allowedDirections = [Direction.INVALID]
      }else{
        let stacklength = this.swingStack.cards.length;
        let cardlength = this.swingCards.length;
  
        let index = stacklength - cardlength;
        console.log('swiperight', cardlength);
        this.onclickLikeButton(this.places[cardlength - 1]);
      }
    
    })
  }


  onclickmaskView(index)
  {
    let place = this.places[index]
    this.onclickinvite(place)
  }

  onclickitems(type)
  {
      console.log("this is type info=======>", type)
      let index = type['index']
      let place = this.places[index]

      switch (type['type']) {
        case 'placeimage':     
            this.onclickHeaderImage(place['place_id'])
          break;
    
        case 'yelp':
            this.onclickMorebutton(place['place_url'])
        break;

        case 'invite':
          this.onclickinvite(place)
        break;

        case 'group_placeimage':
            this.onclickMorebutton(place['place_dealurl'])
        break;

        case 'group_invite':
          this.onclickinvite(place)
        break;

        default:
          break;
      }
  }

  onDismissInvitePage()
  {
      this.events.subscribe('dismissinvite', ()=>{
        this.isSwipeStatus = true
      })
  }

  onclickMorebutton(url)
  {
    var inappbrowser = this.lab.create(url,'_blank')
    inappbrowser.show()
      // this.navCtrl.push('PlacemapPage',{placeid : p_id})
  }
  
  onclickinvite(item)
  {
    this.navCtrl.push('InviteplacePage',{data : item})
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

            this.navCtrl.push('MatchPage', {
              userinfos: success,
              placeinfo: info
            }).then(scu=>{
              
            })           
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
