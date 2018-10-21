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
import { GooglePlus } from '@ionic-native/google-plus';
/*
  Generated class for the GoogleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleProvider {

  constructor(public http: HttpClient, public googleplus : GooglePlus, public authprovider : AuthProvider) {
    console.log('Hello GoogleProvider Provider');
  }

  async  googleLogin(): Promise<any> {
    return new Promise((resolve, reject) => { 
      console.log("clicked google button")
        this.googleplus.login({
          'webClientId': '352885934650-idnbn6mp51hbpjbjagh4ir6lljgo5n37.apps.googleusercontent.com',
          'offline': true,
          'scopes': 'profile email'
        }).then( res => {
          console.log("this is res info", res)      
          const googleCredential = firebase.auth.GoogleAuthProvider
                    .credential(res.idToken);
                firebase.auth().signInWithCredential(googleCredential)
              .then( response => {
                console.log("this is response info", response)
                let displayName = response['displayName']
                let email = response['email']
                let photoUrl = response['photoURL']
    
                let usermodel = {displayName : displayName, email : email, photoUrl : photoUrl}
    
                this.authprovider.getUserInfoFromEmail(email).then(result=>{
                  // already login with facebook  
                  resolve(usermodel)
                }).catch(err=>{
                  // don't have facebook account in this app
                    reject(usermodel)
                })
              });
        }, err => {
            alert(err)
            console.error("Error: ", err)
            reject("false");
        }).catch(err1=>{
          alert(err1)
          console.error("Error: ", err1)
          reject("false")
        });
      });
      }
}
