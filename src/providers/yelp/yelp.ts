import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Constant } from '../../Constant/constant';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the YelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YelpProvider {

  constructor(public http: HTTP, public httpplugin: Http) {
    console.log('Hello YelpProvider Provider');
  }


  getNearByYelpInfoWithoutCategory(lati, longi, searchkey) {
    return new Promise((resolve, reject) => {


      let url = Constant.yelpSerachUrl +"latitude="+ lati + "&longitude=" + longi + "&term=" + searchkey + "&radius=40000"
      // let url = Constant.yelpSerachUrl + "latitude=" + "22.3964" + "&longitude=" + "114.1095" + "&term=" + searchkey + "&radius=40000"
      console.log("this is result data", url)

      this.http.setDataSerializer('urlencoded')
      let headers = {
        'Authorization': 'Bearer ' + Constant.yelpToken
      }
      this.http.get(url, {}, headers).then(data => {

        resolve(JSON.parse(data.data))
        console.log("this is result data", data.data)
      }, error => {
        reject(error)

      }).catch(error => {
        reject(error)

      })

    })
  }

  getTotalYelpNumber(latitu, longti, checkList) {
    return new Promise((resolve, reject) => {

      var searchkey = this.generateCategoryString(checkList)

      let url = Constant.yelpSerachUrl + "categories=" + searchkey + "&limit=25&latitude=" + latitu + "&longitude=" + longti
      // let url = Constant.yelpSerachUrl + "categories=" + searchkey + "&limit=25&latitude=" + "22.3964" + "&longitude=" + "114.1095"

      // Native Method

      this.http.setDataSerializer('urlencoded')
      let headers = {
        'Authorization': 'Bearer ' + Constant.yelpToken
      }
      this.http.get(url, {}, headers).then(data => {
        let temp = JSON.parse(data.data)
        resolve(temp['total'])

      }, error => {
        reject(error)
      }).catch(error => {
        reject(error)
      })
    })
  }

  getNearByYelpInfo(latitu, longti, checkList, offset) {
    return new Promise((resolve, reject) => {

      var searchkey = this.generateCategoryString(checkList)

      let url = Constant.yelpSerachUrl + "categories=" + searchkey + "&offset=" + offset +  "&limit=25&latitude=" + latitu + "&longitude=" + longti
      // let url = Constant.yelpSerachUrl + "categories=" + searchkey + "&offset=" + offset + "&limit=25&latitude=" + "22.3964" + "&longitude=" + "114.1095"

      // Native Method

      this.http.setDataSerializer('urlencoded')
      let headers = {
        'Authorization': 'Bearer ' + Constant.yelpToken
      }
      this.http.get(url, {}, headers).then(data => {
        resolve(JSON.parse(data.data))
        console.log("this is result data", data.data)
      }, error => {
        reject(error)
      }).catch(error => {
        reject(error)
      })

      // Http Method

      // let headers = new Headers()
      // headers.append('Authorization','Bearer ' + Constant.yelpToken)
      // headers.append('Content-Type', 'application/json');
      // headers.append('Access-Control-Allow-Origin', '*');
      // let options = new RequestOptions({ headers: headers });
      // console.log("options", options)

      // this.httpplugin.get(url,options).map(res=>res.json()).subscribe(result=>{
      //     resolve(JSON.parse(result))
      //     console.log("this is result data",result)
      // })


    })
  }

  getYelpDetailInfo(placeid) {
    return new Promise((resolve, reject) => {

      this.http.setDataSerializer('urlencoded')
      let headers = {
        'Authorization': 'Bearer ' + Constant.yelpToken
      }

      let url = Constant.yelpDetailUrl + placeid
      // let url = Constant.yelpDetailUrl + 'KkAVX3Wb7E3lP5F_f_8pXg'

      console.log("this is result data", url)

      this.http.get(url, {}, headers).then(data => {

        console.log("this is result data", JSON.parse(data.data))
        resolve(JSON.parse(data.data))
      }, error => {
        reject(error)

      }).catch(error => {
        reject(error)

      })

    })
  }

  generateCategoryString(checkList) {
    var checkstring = ''

    checkList.forEach(element => {
      checkstring = checkstring + element + ","
    });

    checkstring = checkstring.slice(0, checkstring.length - 1)
    // console.log("this is check list", checkstring)
    return checkstring
  }


}
