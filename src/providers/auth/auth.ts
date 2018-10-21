import { NotificationProvider } from './../notification/notification';
import { LocalstorageProvider } from './../localstorage/localstorage';
import { Firebase } from '@ionic-native/firebase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { User } from '../../Model/User';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {
  constructor(
    public http: HttpClient,
    public afdatabase: AngularFireDatabase,
    public fireauth: AngularFireAuth,
    public firestore: AngularFirestore,
    public fire: Firebase,
    public localstoraeprovider: LocalstorageProvider,
    public notiprovider : NotificationProvider
  ) {}


  updateUserVisited(visit)
  {
    return new Promise((resolve, reject)=>{
      let myid = this.localstoraeprovider.getUserinfo()['id'];
      this.firestore.collection('users').doc(myid).update({isVisited : visit}).then(res=>{
          resolve(true)
      }).catch(err=>{
          reject(err)
      })
    })
  }

  async getUserVisited()
  {
    return new Promise((resolve, reject)=>{
      let myid = this.localstoraeprovider.getUserinfo()['id'];
      this.firestore.collection('users', res=> res.where('id','==',myid)).valueChanges().subscribe(snapshot=>{
          resolve(snapshot)
      }, err=>{
          reject(err)
      })
    })
  }



  //update userstatus
  async updateUserStatus(status)
  {
    return new Promise((resolve, reject)=>{
      let myid = this.localstoraeprovider.getUserinfo()['id'];
      this.firestore.collection('users').doc(myid).update({status : status}).then(res=>{
          resolve(true)
      }).catch(err=>{
          reject(err)
      })
    })
  }

  async getUserStatus(userid)
  {
    return new Promise((resolve, reject)=>{
      
      this.firestore.collection('users', res=> res.where('id','==',userid)).valueChanges().subscribe(snapshot=>{
          resolve(snapshot)
      }, err=>{
          reject(err)
      })
    })
  }


  ////////////////verify email ///////////////////////
  async checkEmailVerify(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireauth.auth.onAuthStateChanged(user => {
        if (user && user.emailVerified) {
          resolve(user.email);
        } else {
          reject('Please verify your email');
        }
      });
    });
  }


  ///////////////////////// when login with email and password, save login info to local storage///////////////////
  async getUserInfoFromEmail(mymail : string): Promise<any> {
    return new Promise((resolve, reject) => {


      this.firestore
        .collection('users', res=> res.where('email','==', mymail))
        .valueChanges()
        .subscribe(snapshot => {
              console.log('====================================');
              console.log(snapshot);
              console.log('====================================');

              if(snapshot.length == 0)
              {
                reject(false)
              }else{
                let usermodel = new User();
                usermodel.email = snapshot[0]['email'];
                usermodel.id = snapshot[0]['id'];
                usermodel.phonenumber = snapshot[0]['phonenumber'];
                usermodel.username = snapshot[0]['username'];
                usermodel.countrycode = snapshot[0]['countrycode'];
                usermodel.photoUrl = snapshot[0]['imagearray'];


                if(snapshot[0]['firstlogin'])
                {
                  usermodel.firstlogin = snapshot[0]['firstlogin']
                }else{
                  usermodel.firstlogin = false
                }

                if(snapshot[0]['isSwipeRight'])
                {
                  usermodel.firstlogin = snapshot[0]['isSwipeRight']
                }else{
                  usermodel.firstlogin = false
                }
               
                console.log('this is snapshot', usermodel);
                this.localstoraeprovider.saveUserInfo(usermodel);
                resolve(usermodel);
              }
            
        });
    });
  }

  async saveTokenInfos()
  {
    return new Promise((resolve, rejct)=>{
        
    })
  }

  ////////////////////////////login/////////////////////
  async login(credential): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireauth.auth
        .signInWithEmailAndPassword(credential.email, credential.password)
        .then(
          result => {
            // let userinfo = this.getCurrentUserInfo();
            resolve(result);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  /////////////////when click signup button/////////////////
  async signup(credential, photo): Promise<any> {
    return new Promise((resolve, reject) => {
      ////////////////////////////////signup with email and password info///////////////////////////////////
      this.fireauth.auth
        .createUserWithEmailAndPassword(credential.email, credential.password)
        .then(result => {
          const id = this.firestore.createId();
          console.log('this is firestore id', id);

          this.saveImageDataToStorage(photo).then(success => {
            console.log('this is sucees', success);

            const key = this.firestore.createId();
            if(photo.length > 0)
            {
              this.saveSignUpInfoWithPhoto(credential, photo).then(res=>{
                  resolve(res)
              }).catch(er=>{
                reject(er)
              })
            }else{
              this.saveSignUpInfoWithoutPhoto(credential).then(res=>{
                resolve(res)
              }).catch(er=>{
                reject(er)
              })
            }
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  private saveSignUpInfoWithoutPhoto(credential)
  {
    return new Promise((resolve, reject)=>{

  
        const key = this.firestore.createId();
  
        var docData = {
          id: key,
          email: credential.email,
          username: credential.username,
          phonenumber: credential.countrycode + credential.phonenumber,
          imagearray: "",
          countrycode: credential.countrycode,
          active : false,
          firstlogin : false,
          isSwipeRight : false
        };
  
        this.firestore
          .doc(`users/${key}`)
          .set(docData)
          .then(res => {
            let user = firebase.auth().currentUser;
            user.sendEmailVerification();
            // this.storeuserphonenumber(credential.phonenumber)
            resolve(credential.phonenumber);
          })
          .catch(err => {
            reject(err);
          });
    })
  
  }

  private saveSignUpInfoWithPhoto(credential, photo)
  {
    return new Promise((resolve, reject)=>{
      this.saveImageDataToStorage(photo).then(success => {
        console.log('this is sucees', success);
        const key = this.firestore.createId();
        var docData = {
          id: key,
          email: credential.email,
          username: credential.username,
          phonenumber: credential.countrycode + credential.phonenumber,
          imagearray: success,
          countrycode: credential.countrycode,
          active : false,
          firstlogin : false,
          isSwipeRight : false
        };
  
        this.firestore
          .doc(`users/${key}`)
          .set(docData)
          .then(res => {
            let user = firebase.auth().currentUser;
            user.sendEmailVerification();
            // this.storeuserphonenumber(credential.phonenumber)
            resolve(credential.phonenumber);
          })
          .catch(err => {
            reject(err);
          });
      });
    })
  
  }
  /////////////////////////////////////save image data to firebase storage//////////////////////
  async saveImageDataToStorage(photo): Promise<any> {
    return new Promise((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      // var photoarray = []
      // let i = 0
      photo.forEach(element => {
        const filename = new Date().getTime();
        const imageRef = storageRef.child(
          'images/profilephoto/' + filename + '.jpg'
        );
        // firebase.storage.StringFormat.DATA_URL
        // i++
        imageRef
          .putString(element, 'data_url')
          .then(snapshot => {
            console.log('download', snapshot.metadata.fullPath);
            // photoarray.push(snapshot.metadata.fullPath)
            // if(i == photoarray.length)
            // {
            imageRef.getDownloadURL().then(url => {
              resolve(url);
            });
            // }
          })
          .catch(error => {
            console.log('this is error', error);
            reject(error)
          });
      });
    });
  }


  async saveFriends(number, element): Promise<any> {
    console.log('this is number', number, element);
    return new Promise((resolve, reject) => {

      let myid = this.localstoraeprovider.getUserinfo()['id'];
      var friendsRef = this.firestore.collection('friends').doc(`${myid}`);

      this.getUserStatus(element['id']).then(result=>{

        let data_infos = {}

        if(result[0]['status'] != null)
        {
           //user status is public
            if(result[0]['status'] == true)
            { 
              data_infos = {
                userkey: element['id'],
                active: 'false',
                send: 2,
                isblocked : false};
            }else{
              //user status is private
              data_infos = {
                userkey: element['id'],
                active: 'false',
                send: 0,
                isblocked : false};
            }
        }else{
            //user status is not exist
            data_infos = {
              userkey: element['id'],
              active: 'true',
              send: 2,
              isblocked : false};
        }


        friendsRef.collection('member').doc(element['id']).set(data_infos).then(sucess=>{
          console.log("this is suces", sucess)
          this.saveMatchFriends(myid, element).then(res=>{
              resolve(res)
          }).then(err=>{
            reject(err)
          })
        }).catch(err=>{
        reject(err)
        })

      }).catch(err=>{
          reject(err)
      })

  
    
    });
  }
 

  ///////////////////////////////// save matched users in friends collections////////////////
  saveMatchFriends(myid, element): Promise<any> {
    return new Promise((resolve, reject) => {
      var friendsOtherRef = this.firestore
        .collection('friends')
        .doc(element['id']).collection('member').doc(myid);

        this.getUserStatus(element['id']).then(result=>{

          let data_infos = {}
  
          if(result[0]['status'] != null)
          {
             
              if(result[0]['status'] == true)
              { 
                data_infos = {
                  userkey: element['id'],
                  active: 'true',
                  send: 2,
                  isblocked : false};
              }else{
                data_infos = {
                  userkey: element['id'],
                  active: 'false',
                  send: 1,
                  isblocked : false};
              }
          }else{
              data_infos = {
                userkey: element['id'],
                active: 'true',
                send: 2,
                isblocked : false};
          }
  
          
          friendsOtherRef.set(data_infos).then(result=>{ 

            let content = "has sent you a friend a request."
            this.notiprovider.sendFriendRequest("Received request!",element['id'],content)
            
            resolve(result)
          }).catch(er=>{
              reject(er)
          })

  
        }).catch(err=>{
            reject(err)
        })

    });
  }

  // //function  : welcome.ts
  // //check users who has phonenumber same as phonenumber
  // //this functions was used in welcome page
  async checkUsingApp(phonenumber): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('users')
        .valueChanges()
        .subscribe(
          snapshot => {
            var flag: boolean = false;
            var i = 0;
            console.log('this is for the test');
            snapshot.forEach(element => {
              i++;

              if (element['phonenumber'] == phonenumber) {
                flag = true;
                resolve(element);
              }
            
              if (i == snapshot.length) {
                if (flag == false) {
                  console.log('not exist');
                  reject('false');
                }
              }
            });
          },
          error => {
            console.log('this is for the error test');
            reject('false');
          }
        );
    });
  }

  //function : welcome.ts
  //get my friends list/////////////
  async getMyFriendsList(myid): Promise<any> {
    return new Promise((resolve, reject) => {
      var friendsref = this.firestore.collection('friends').doc(`${myid}`).collection('member',res=>res.where('send','==',2));
      friendsref.valueChanges().subscribe(result => {
        console.log('this is result', result);
        if (result == null) {
          reject('Not existed Invited Users');
        } else {
            resolve(result)
        }
      });
    });
  }

  //function : welcome.ts
  //get my friends list/////////////
  async getMyFriend(myid, userid): Promise<any> {
    return new Promise((resolve, reject) => {
      var friendsref = this.firestore.collection('friends').doc(`${myid}`).collection('member',res=>res.where('send','==',2).where('userkey','==',userid));
      friendsref.valueChanges().subscribe(result => {
        console.log('this is result', result);
        if (result == null) {
          reject('Not existed Invited Users');
        } else {
            resolve(result)
        }
      });
    });
  }

  ////////////////get friends list from phonenumber////////////////////
  async getFriendsInfoFromPhonenumber(phonenumber): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('users', ref => ref.where('phonenumber', '==', phonenumber))
        .valueChanges()
        .subscribe(res => {
          console.log('this is match result', res);
        });
    });
  }

  async getFrindsInfoFromId(userId): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('====================================');
      console.log(userId);
      console.log('====================================');
      this.firestore
        .collection('users', ref => ref.where('id', '==', userId))
        .valueChanges()
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  // /function : phone verification/////////////////////
  async phoneVerification(phoneNumber, recaptchaVerifier): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireauth.auth
        .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then(confirmresult => {
          console.log('confirma result', confirmresult);
          resolve(confirmresult);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  private getCurrentUserInfo() {
    return this.fireauth.auth.currentUser;
  }
}
