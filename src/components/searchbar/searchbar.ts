import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Loading } from 'ionic-angular/umd';
import { GeolocatinoProvider } from '../../providers/geolocatino/geolocatino';
import { AlertService } from '../../providers/Utils/alert.service';
import { GrouponProvider } from '../../providers/groupon/groupon';
import { YelpProvider } from '../../providers/yelp/yelp';
import { YelpModel } from '../../Model/PlaceModel';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent {

  @ViewChild('input') myInput ;

  @Input()
  set passarray(array : any)
  {
    this.searchArray = array;
  }

  @Input()
  set temparray(array : any)
  {
    this.searchTempArray = array
    this.searchArrayOnly = array
  }

  @Output() onChangeSearchValue : EventEmitter<any> = new EventEmitter()
  @Output() onFocuseSearchBar : EventEmitter<any> = new EventEmitter()

  /////////////////progressbar ////////
  searching: any = false;
  ////////////////input search or not


  searchControl: FormControl;
  searchTerm: any;
  loading: Loading;

  searchArray : any[]
  searchTempArray : any[]
  searchArrayOnly : any[]

  yelp_array : any[]
  place_array : any[]

  constructor(public geoService : GeolocatinoProvider, 
              public alertservice : AlertService,
              public grouponprovider : GrouponProvider,
              public yelpprovider : YelpProvider,
              public alertService : AlertService , 
              public keyboard : Keyboard) {
    console.log('Hello SearchbarComponent Component');
    this.searchArray = []
    this.searchTempArray = []
    this.searchArrayOnly = []

    this.yelp_array = []
    this.place_array = []

    this.searchControl = new FormControl()
    this.searchTerm = '';
  }



  onSearchInput()
  {
      this.searching = true;
      this.setFilterItems();
      console.log("keydown")
  }

  checkFocus(){
    console.log("thjis is focus")
    // this.onFocuseSearchBar.emit(true)
    this.myInput.setFocus();
 
  } 


  //////////////////function : when enter search key in search bar /////////////////////////
  setFilterItems() {
    console.log("this is close button")
        if (this.searchTerm == '') {
          console.log("thjis is seasrch",this.searchTempArray)
          this.searching = false
          this.onChangeSearchValue.emit([])
        } else {
          this.getCurrentLocation(this.searchTerm)   
        }
      }
  


    //////////////////////////////////geolocation functions///////////////////
  private getCurrentLocation(searchkey) {

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
      
        this.getYelpData(success.coords.latitude, success.coords.longitude, searchkey)

      })
      .catch(err => {
        // alert(err)
        this.loading.dismiss();
        this.alertService.presentErrorAlert(err);
        
      });
  }

  getYelpData(lati, longi, searchkey)
  {
      
      this.yelpprovider.getNearByYelpInfoWithoutCategory(lati, longi, searchkey).then(suc=>{
       
        // this.places = suc['businesses']
        this.yelp_array = suc['businesses']
        this.generateAllPlaceArray()
      }).catch(er=>{
        this.loading.dismiss()
        alert(er)
      })
  }

  generateAllPlaceArray()
  {
      this.place_array = []
     
    
      for(let i=0; i< this.yelp_array.length ; i++)
      {
        let yelp_item = this.yelp_array[i]

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


        this.place_array.push(yelp_model)
      }
      this.searching = false;
      let seracharray = this.filterItems(this.searchTerm);
      this.onChangeSearchValue.emit(seracharray)
    
      console.log("this is places info", this.place_array)
  }

    /////////////////function : get search result array fromm search key///////////////////
    filterItems(searchTerm) {
      
      return this.place_array.filter(contactmodel => {
        return (
          contactmodel.place_name
            .toUpperCase()
            .indexOf(searchTerm.toUpperCase()) > -1
        );
      });
    }

}
