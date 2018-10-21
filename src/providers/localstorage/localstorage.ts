import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocalstorageProvider Provider');
  }


  public saveUserInfo(info) {
    window.localStorage.setItem('userinfo', JSON.stringify(info));
  }

  public getUserinfo(): any {
    let profile = window.localStorage.getItem('userinfo');
    return JSON.parse(profile);
  }

  public saveLoginStatus(isLogin) {
    return window.localStorage.setItem('isLogin', isLogin);
  }

  public getLoginStatus() {
    return window.localStorage.getItem('isLogin');
  }

  public saveCategoryList(cateInfo)
  {
    window.localStorage.setItem('cateinfo', JSON.stringify(cateInfo));
  }

  public getCategoryList()
  {
    return JSON.parse(window.localStorage.getItem('cateinfo'))
  }

  public clearLocalstorage() 
  {
    return window.localStorage.clear()
  }


}
