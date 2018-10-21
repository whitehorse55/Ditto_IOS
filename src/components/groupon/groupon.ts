import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GeolocatinoProvider } from '../../providers/geolocatino/geolocatino';

/**
 * Generated class for the GrouponComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'groupon',
  templateUrl: 'groupon.html'
})
export class GrouponComponent {

  @Input()
  set places(place :  any)
  {
    this.place = place
    console.log("group on data", this.place)
    this.getDistance()
    // this.placeCategoryString = this.generateCategoryStrings()
  }

  @Input()
  set index(index : any)
  {
      this.placeindex = index
  }

  // @Input()
  // set type(type : any)
  // {
  //     this.placetype = type
  // }

  @Output() onClickComponent : EventEmitter<any> = new EventEmitter()


  place : any
  placeindex : any
  // placetype : any
  distance : any
  // placeCategoryString : any
  constructor(public geoService : GeolocatinoProvider) {
    this.place = {}
    this.placeindex = 0
    this.distance = 0
    console.log('Hello GrouponComponent Component');
  }

  onclickItems(type)
  {
    this.onClickComponent.emit({type : type, index : this.placeindex})
  }

  getDistance()
  {
    this.geoService
    .getUserPosition()
    .then(success => {
      console.log(
        'this is current location===================================='
      );
      console.log(success);
   
      // this.loading.dismiss()
      // this.addMap(success.coords.latitude, success.coords.longitude);
      let current_lati = success.coords.latitude
      let current_lonti = success.coords.longitude

      let place_lati = this.place['place_lati']
      let place_lonti = this.place['place_longti']
      console.log('====================================', current_lati, current_lonti, place_lati, place_lonti);

      let distance_km = this.getDistanceFromLatLonInKm(current_lati, current_lonti, place_lati, place_lonti)
      
      this.distance =  Math.round(distance_km * 0.621371 * 10) / 10 
    })
    .catch(err => {
      // alert(err)
      // this.loading.dismiss();
      // this.alertService.presentErrorAlert(err);
    }); 
  }

 getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
   }

 deg2rad(deg) {
    return deg * (Math.PI/180)
   }

}
