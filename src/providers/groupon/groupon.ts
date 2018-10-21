import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Constant } from '../../Constant/constant';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';
/*
  Generated class for the GrouponProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrouponProvider {

  constructor(public http: Http, public httpplugin : HTTP) {
    console.log('Hello GrouponProvider Provider');
  }


  
  public getGrouponDatawithoutcategory(lati, longi)
  {
    return new Promise((resolve, reject) => {
  
      let url = Constant.grouponUrl + "&lat=" + lati + "&lng=" + longi 

      console.log("this is result data", url)
      this.httpplugin.setDataSerializer('urlencoded')
      this.httpplugin.get(url, {},{}).then(res=>{
        console.log("this is group data",res.data)  
        
          resolve(JSON.parse(res.data))
      }).catch(err=>{
        console.log("this is group error", err)
      })
    })
  }

  public getGrouponNumbers(lati, longi, searchkey)
  {
    return new Promise((resolve, reject)=>{
      let category_key = this.generateSearchKey(searchkey)
  
      let url = Constant.grouponUrl + "&lat=" + lati + "&lng=" + longi + category_key + "&limit=25" 
      // let url = Constant.grouponUrl + "&lat=" + "22.3964" + "&lng=" + "114.1095" + category_key +"&limit=25"
      this.httpplugin.setDataSerializer('urlencoded')
      this.httpplugin.get(url, {},{}).then(res=>{
        console.log("this is group data",res.data)  
          let result = JSON.parse(res.data)
          resolve(result['pagination']['count'])
      }).catch(err=>{
        console.log("this is group error", err)
      })
    })
  }

  public getGrouponData(lati, longi, searchkey, offset)
  {
    return new Promise((resolve, reject) => {

      let category_key = this.generateSearchKey(searchkey)
  
      let url = Constant.grouponUrl + "&lat=" + lati + "&lng=" + longi + category_key + "&offset=" + offset +"&limit=25" 
      // let url = Constant.grouponUrl + "&lat=" + "22.3964" + "&lng=" + "114.1095" + category_key + "&offset=" + offset +"&limit=25"
      console.log("this is result data", url)
      this.httpplugin.setDataSerializer('urlencoded')
      this.httpplugin.get(url, {},{}).then(res=>{
        console.log("this is group data",res.data)  
        
          resolve(JSON.parse(res.data))
      }).catch(err=>{
        console.log("this is group error", err)
      })
    })
  }



  public generateSearchKey(searcharray)
  {
    var checkstring = ''

    searcharray.forEach(element => {
      
      switch (element) {
          case "restaurants":
              checkstring = checkstring   + '&filters=category:food-and-drink'
            break;

          case "arts":
              checkstring = checkstring   + '&filters=category:things-to-do' 
            break;        

          case "active":
            checkstring = checkstring   + '&filters=category:health-and-fitness' 
            break;
        
          case "beautysvc":
            checkstring = checkstring   + '&filters=category:beauty-and-spas' 
            break;

          case "bars":
            checkstring = checkstring   + '&filters=category:food-and-drink' 
            break;

          default:
            break;
        }
         
    });

    console.log("this is check list", checkstring)
    return checkstring
  }

}
