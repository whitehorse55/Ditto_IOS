import { Constant } from './../../Constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError
} from '@ionic-native/geolocation';
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult
} from '@ionic-native/native-geocoder';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the GeolocatinoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare var google;

@Injectable()
export class GeolocatinoProvider {
  options: GeolocationOptions;
  currentPos: Geoposition;
  map: any;

  constructor(
    public http: HttpClient,
    private geolocatin: Geolocation,
    private nativeGeo: NativeGeocoder,
    private httpnative : HTTP
  ) {
    console.log('Hello GeolocatinoProvider Provider');
  }

  ////////////// get current user location info//////////////
  getUserPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.options = {
        enableHighAccuracy: true
      };

      this.geolocatin.getCurrentPosition(this.options).then(
        (pos: Geoposition) => {
          this.currentPos = pos;
          console.log(pos);

          // let postalcode = this.changeLocationToZipCode(pos.coords.latitude, pos.coords.longitude)
          resolve(pos);
        },
        (error: PositionError) => {
          reject(error.message);
          console.log('error : ' + error.message);
        }
      ).catch(err=>{
        reject(err);
        console.log('error : ' + err);
      })
    });
  }


  public changeZipCodeToLocation(zipcode)
  {
    return new Promise((resolve, reject)=>{
      this.nativeGeo.forwardGeocode(zipcode).then(succ=>{
        console.log('vdvdvdvdvdvdvd====================================');
        console.log(succ);
        console.log('====================================');
          resolve(succ)
      }).catch(err=>{
        reject(err)
      })
    })

  }
  // function : get zip code from lat, long using nativegeocoderreverse
  public changeLocationToZipCode(lat, long) {

    this.nativeGeo
      .reverseGeocode(lat, long)
      .then((result: NativeGeocoderReverseResult) => {
        console.log('result', result[0].postalCode);
        return result[0].postalCode;
      })
      .catch(err => {
        console.log('errorcode', err);
      });

    //   this.nativeGeocoder.forwardGeocode('Berlin')
    // .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
    // .catch((error: any) => console.log(error));
  }
  getplacePhotos(placeId: string): Promise<any> {
    let detail_url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=photo&language=nl&key=${
      Constant.googleKey
    }`;
    return new Promise((resolve, reject) => {
      console.log('this is url', detail_url);

      this.httpnative.get(detail_url,'','').then(result=>{
        let data = JSON.parse(result.data)
        resolve(data)
      }).catch(err=>{
        reject(err)
      })
    });
  }
  /////////////////////getplacedetails///////////////////////
 
  getplaceDetails(placeId: string): Promise<any> {
    let detail_url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&language=nl&key=${
      Constant.googleKey
    }`;
    return new Promise((resolve, reject) => {
      

      this.httpnative.get(detail_url,'','').then(result=>{
        let data = JSON.parse(result.data)
        resolve(data)
      }).catch(err=>{
        reject(err)
      })
    });
  }

  // getPlaceDetails(placeId: string) {
  //   return new Promise((resolve) => {
  //     this.http.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&language=nl&key=${this.apiKey}`, {}, {}).then((response) => {
  //       let data = JSON.parse(response.data);
  //       resolve(data.result)
  //     });
  //   });
  // }

  // getPlacePhotoUrl(reference: string) {
  //   return new Promise((resolve) => {
  //     this.http.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${reference}&key=${this.apiKey}`, {}, {}).then((response) => {
  //       resolve(response);
  //     });
  //   });
  // }
}
