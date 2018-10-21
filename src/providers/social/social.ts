import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
/*
  Generated class for the SocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialProvider {

  constructor(public http: HttpClient, private firestore: AngularFirestore, private fireauth: AngularFireAuth) {
    console.log('Hello SocialProvider Provider');
  }


  //////////////////////////////////////Facebook login function/////////////////////////////////////////
  // async facebookLogin(): Promise<any> {
  //   return new Promise((resolve, reject) => {

  //     this.fb.login(['email', 'public_profile']).then(res => {

  //       const fc = firebase.auth.FacebookAuthProvider.credential((res.authResponse.accessToken))
  //       this.fireauth.auth.signInWithCredential(fc).then(fs => {

  //         this.fireauth.authState.subscribe((user: firebase.User) => {

  //           this.getCurrentUserNameInffromFB(user.email).then(success => {
  //             console.log("suce", )
  //             // this.authservice.storeUserNameInfo(user.displayName)
  //             this.authservice.saveLoginStatus("fb")
  //             resolve(user.displayName)
  //           }).catch(error => {
  //             console.log("user is not verified")
  //             this.getSignupCollection().add({
  //               id: user.uid,
  //               email: user.email,
  //               lastname: user.displayName,
  //               firstname: user.displayName
  //             }).then(res => {
  //               // this.authservice.storeUserNameInfo(user.displayName)
  //               this.authservice.saveLoginStatus("fb")
  //               resolve(user.displayName)
  //             }, error => {
  //               reject(error)
  //             })
  //           })

  //         })

  //       }).catch(err => {
  //         alert(JSON.stringify(err))
  //       })

  //     }).catch(error => {
  //       alert(JSON.stringify(error))
  //     })
  //   })
  // }
}
