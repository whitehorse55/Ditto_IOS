import { MatchedProvider } from './../matched/matched';
import { Firebase } from "@ionic-native/firebase";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { AngularFirestore } from "angularfire2/firestore";

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {
  constructor(
    public http: HttpClient,
    public firebaseNative: Firebase,
    public platfrom: Platform,
    public afs: AngularFirestore,
    public matchedprovider : MatchedProvider
  ) {
    console.log("Hello FcmProvider Provider");
  }

  async getToken()
  {
     let token = "" ;
      if(this.platfrom.is('android'))
      {
        
        token = await this.firebaseNative.getToken()
        console.log("this is android device", token);
      }

      if(this.platfrom.is('ios'))
      {
        console.log("this is ios device");
        token = await this.firebaseNative.getToken()
        await this.firebaseNative.grantPermission()
      }
      
      console.log("this is token info", token);
      
      return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token)
  {
      let myid = this.matchedprovider.getUserinfo()['id']
      if(!token) return

      const deviceRef = this.afs.collection('token')

      const docData = {
        tokeninfo : token,
        userid : myid
      }
      console.log("this is docdata info", docData);
      return deviceRef.doc(myid).set(docData)
  }

  ///////////////////// save user category info in welcomgeo page/////////////////
  public saveUserCategoryInfos(infos)
  {

    return new Promise((resolve, reject)=>{
      let myid = this.matchedprovider.getUserinfo()['id']
     
      const updatedata = { 
         usercategory : infos,
         firstlogin : true
      }
 
      this.afs.collection('users').doc(myid).update(updatedata).then(result=>{
          resolve(true)
      }).catch(er=>{
         reject(false)
      }) 
    })
  }

  ///////////////////////get user category info from firestore////////////////////////
  public getUserCategoryList()
  {
    return new Promise((resolve, reject)=>{
        
        let mymail = this.matchedprovider.getUserinfo()['email']
      
        this.afs
        .collection('users', res=> res.where('email','==', mymail))
        .valueChanges()
        .subscribe(snapshot => {
          let categorylist  = snapshot[0]['usercategory'];
          console.log("thhis is category list", categorylist)
          resolve(categorylist)
        }, err=>{
          reject(err)
        })
    })
  }


  //save and get user  swipe right status to firebase
  saveUserSwipeStatus()
  {
    return new Promise((resolve, reject)=>{
      let myid = this.matchedprovider.getUserinfo()['id']
      const updatedata = { 
        isSwipeRight : true
      }

      this.afs.collection('users').doc(myid).update(updatedata).then(result=>{
          resolve(true)
      }).catch(er=>{
          reject(false)
      }) 
    })
  }

  getUserSwipeStatus()
  {
    return new Promise((resolve, reject)=>{
      let mymail = this.matchedprovider.getUserinfo()['email']
      
      this.afs
      .collection('users', res=> res.where('email','==', mymail))
      .valueChanges()
      .subscribe(snapshot => {
        
        console.log("fdfdfdfeeee=======>", snapshot[0]['isSwipeRight'])
        if(snapshot[0]['isSwipeRight'] == null)
        {
          resolve(false)
        }else{
          resolve(snapshot[0]['isSwipeRight'])  
        }
        
      }, err=>{
        reject(err)
      })
    })  
  }

  listenToNotifications()
  {
    return this.firebaseNative.onNotificationOpen()
  }
}
