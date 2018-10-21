import { Platform } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AdmobserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdmobserviceProvider {
  constructor(
    public http: HttpClient,
    public admobpro: AdMobPro,
    public platform: Platform
  ) {
    console.log('Hello AdmobserviceProvider Provider');
    
  }

  showadmob(position) {
    return new Promise((resolve, reject) => {
      let key: string;
      if (this.platform.is('android')) {
        key = 'ca-app-pub-6863402298027651/5113279399';
      }

      if (this.platform.is('ios')) {
        key = 'ca-app-pub-6863402298027651/8234266751';
      }

      if(this.platform.height() == 812)
      {
          position = position + 32
      }else{
        position = position - 4
      } 

      console.log('this is platform height', this.platform.height());
      this.admobpro
        .createBanner({
          license: 'and1man07@gmail.com/b098373eeecb74cf9841c62260ca454d',
          adId: key,
          position: this.admobpro.AD_POSITION.POS_XY,
          overlap: true,
          x: 0,
          y: position
        })
        .then(res => {
          resolve(res);
        })
        .catch(er => {
          reject(er);
        });
    });
  }

  removeAdmob()
  {
    return new Promise((resolve, reject)=>{
      this.admobpro.removeBanner()
      resolve(true)
    })
  }
}
