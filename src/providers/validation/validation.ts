import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidationProvider {
  constructor(public http: HttpClient) {
    console.log('Hello ValidationProvider Provider');
  }

  public signup(credentials, photo): Promise<any> {
    return new Promise((resolve, reject) => {
      if (
        credentials.email === '' ||
        credentials.password === '' ||
        credentials.username === '' ||
        credentials.phonenumber === '' ||
        credentials.confirmpassword === ''
      ) {
        reject('Please insert credentials!');
      } else {
        if (photo.length == 0) {
          reject('Please insert photo');
        } else if (credentials.password != credentials.confirmpassword) {
          reject('Confirm Password is incorrect!');
        } else {
          resolve('auth success');
        }
      }
    });
  }

  public login(credential): Promise<any> {
    return new Promise((resolve, reject) => {
      if (credential.email === '' || credential.password === '') {
        reject('Please insert credentials');
      } else {
        resolve('auth success');
      }
    });
  }

  /////////////////////validation for welcomgeo page////////////////////////
  public getPlaceList(credential, checkarray): Promise<any> {
    return new Promise((resolve, reject) => {
      // if ((credential.code = '' && credential.isMylocation == false)) {
      //   reject('Please insert zip code or click mylocation button');
      // } else 
      
      if (checkarray.length == 0) {
        reject('Please choose one or more places');
      } else {
        resolve('success');
      }
    });
  }
}
