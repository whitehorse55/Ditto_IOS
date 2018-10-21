import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Facebook} from '@ionic-native/facebook'
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { AuthProvider } from '../auth/auth';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacebookProvider {

  constructor(public http: HttpClient, 
              public fb : Facebook,
              private fireauth : AngularFireAuth,
              private authprovider : AuthProvider,
              public firestore: AngularFirestore,
            ) {
      console.log('Hello FacebookProvider Provider');
  }

  async signupWithFacebook(info)
  {
    return new Promise((resolve, reject)=>{
      const key = this.firestore.createId();

      var docData = {
        id: key,
        email: info.email,
        username: info.username,
        phonenumber: info.phonenumber,
        imagearray: info.imagearray,
        countrycode: info.countrycode,
        active : false
      };
  
      this.firestore
        .doc(`users/${key}`)
        .set(docData)
        .then(res => {
            resolve(true)
        })
        .catch(err => {
          reject(err);
        });
    })
   
  }

  async loginwithFacebook()
  {
    return new Promise((resolve, reject)=>{
      
      this.fb.login(['email', 'public_profile']).then(res =>{

        const fc = firebase.auth.FacebookAuthProvider.credential((res.authResponse.accessToken))
        this.fireauth.auth.signInWithCredential(fc).then(fs=>{
  
          this.fireauth.authState.subscribe((user : firebase.User)=>{

            let displayName = user['displayName']
            let email = user['email']
            let photoUrl = user['photoURL']

            let usermodel = {displayName : displayName, email : email, photoUrl : photoUrl}

            this.authprovider.getUserInfoFromEmail(email).then(result=>{
              // already login with facebook  
              resolve(usermodel)
            }).catch(err=>{
              // don't have facebook account in this app
                reject(usermodel)
            })

          })
  
        }).catch(err=>{
          reject("false")
          // alert(JSON.stringify(err))
        })
  
      }).catch(error=>{
        reject("false")
          // alert(JSON.stringify(error))
    })  
    })
    
  }

}
