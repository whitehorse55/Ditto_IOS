import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocatinoProvider } from '../../providers/geolocatino/geolocatino';
import { Geolocation } from '@ionic-native/geolocation';
import { MapType } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the PlacemapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-placemap',
  templateUrl: 'placemap.html'
})
export class PlacemapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers: any;
  placename : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocationprovider: GeolocatinoProvider,
    public geolocation: Geolocation
  ) {
    this.markers = [];
    let placeid = this.navParams.get('placeid');
    this.getPlaceInfo(placeid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacemapPage');
  }

  getPlaceInfo(placeid) {
    this.geolocationprovider.getplaceDetails(placeid).then(result => {
      let lat = result.result.geometry.location['lat'];
      let lng = result.result.geometry.location['lng'];
      this.placename = result.result.name
      console.log('====================================');
      console.log(result);
      console.log('====================================');
      this.initMap(lat, lng);
    });
  }

  initMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng)

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      indoorPicker : true,
      myLocationButton : true,
    });

    let position = new google.maps.LatLng(
      lat,
      lng
    );

    let image = 'assets/img/location.png';
    var marker = new google.maps.Marker({position : position, title : this.placename, icon : image})
    marker.setMap(this.map)

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe(data => {
    //   this.deleteMarkers();
    //   let updatelocation = new google.maps.LatLng(
    //     data.coords.latitude,
    //     data.coords.longitude
    //   );
    //   let image = 'assets/img/location.png';
    //   this.addMarker(updatelocation, image);
    //   this.setMapOnAll(this.map);
    // });
  }

  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image
    });
    this.markers.push(marker);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
}
