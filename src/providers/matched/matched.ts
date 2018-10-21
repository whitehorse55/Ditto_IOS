import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
Generated class for the MatchedProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class MatchedProvider {
  constructor(public http: HttpClient, public firestore: AngularFirestore) {
    console.log('Hello MatchedProvider Provider');
  }

  public getAllUsingUsersArray(): Promise<any> {
    var userarray = [];
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('users')
        .valueChanges()
        .subscribe(snapshots => {
          if (snapshots == null) {
            reject('error');
          } else {
            resolve(snapshots);
          }
        });
    });
  }

  // get userinfo from local database
  public getUserinfo(): any {
    let profile = window.localStorage.getItem('userinfo');
    return JSON.parse(profile);
  }

  async autoSavePlaceInfo(info, userid)
  {
    return new Promise((resolve, reject) => {
      // console.log("this is infolist", info)
      let place_id = info['place_id'];
     
      var placeref = this.firestore.collection('places').doc(`${place_id}`);
      placeref.ref
        .get()
        .then(doc => {
          if (!doc.exists) {
            let data = [];
            data.push(userid);
            placeref.set({ members: data });
            resolve(data);
          }
          ////////////if collection is already exisetd
          else {
            let array: Array<any> = doc.data()['members'];

            // check current user is already liked this place
            let temp = array.filter(res => res == userid);

            if (temp.length > 0) {
              resolve(array);
              // console.log("you have already liked to this place")
            } else {
              array.push(userid);
              placeref.set({ members: array });
              resolve(array);
            }
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async atuosaveMyplaceInfo(info, userid)
  {
    return new Promise((resolve, reject) => {
      
      let place_id = info['place_id'];
      var myplaceref = this.firestore.collection('myplaces').doc(userid);

      myplaceref.ref
        .get()
        .then(doc => {
          if (!doc.exists) {
            let data = [];
            data.push(place_id);
            myplaceref.set({ places : data });
            resolve(data);
          }
          ////////////if collection is already exisetd
          else {
            let array: Array<any> = doc.data()['places'];

            // check current user is already liked this place
            let temp = array.filter(res => res == place_id);

            if (temp.length > 0) {
              resolve(array);
              // console.log("you have already liked to this place")
            } else {
              array.push(place_id);
              myplaceref.set({ places: array });
              resolve(array);
            }
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async autosaveMatchedUsers(userid, placeinfo) {
    let myid = this.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
              
      let info_me : any = {}
      let info_match : any = {}
      if(placeinfo['place_title'])
      {

        info_me = {
          friendkey: userid,
          placeid: placeinfo['place_id'],
          placename: placeinfo['place_name'],
          placeimage : placeinfo['place_photo'],
          placeprice : placeinfo['place_price'],
          placedisprice : placeinfo['place_discount_price'],
          placeurl : placeinfo['place_dealurl'],
          time: ''
        }

        info_match = {
          friendkey: myid,
          placeid: placeinfo['place_id'],
          placename: placeinfo['place_name'],
          placeimage : placeinfo['place_photo'],
          placeprice : placeinfo['place_price'],
          placedisprice : placeinfo['place_discount_price'],
          placeurl : placeinfo['place_dealurl'],
          time: ''
        }

      }else{
        info_me = {
          friendkey: userid,
          placeid: placeinfo['place_id'],
          placename: placeinfo['place_name'],
          placeimage : placeinfo['place_photo'],
          time: ''
        }

        info_match = {
          friendkey: myid,
          placeid: placeinfo['place_id'],
          placename: placeinfo['place_name'],
          placeimage : placeinfo['place_photo'],
          time: ''
        }

      }

        var matchedRef = this.firestore.collection('matched').doc(`${myid}`);
        matchedRef
          .collection(userid)
          .doc(placeinfo['place_id'])
          .set(info_me)
          .then(sucee => {
            this.firestore
              .collection('matched')
              .doc(userid)
              .collection(myid)
              .doc(placeinfo['place_id'])
              .set(info_match)
              .then(res => {
                  resolve('sucee');  
              });
          })
          .catch(err => {
            reject(err);
          });
      });
  }

  ///////////////////////// save my array infos/////////////////
  async saveMyPlaceInfo(info): Promise<any> {
    return new Promise((resolve, reject) => {
      let myid = this.getUserinfo()['id'];
      let place_id = info['place_id'];
      var myplaceref = this.firestore.collection('myplaces').doc(`${myid}`);

      myplaceref.ref
        .get()
        .then(doc => {
          if (!doc.exists) {
            let data = [];
            data.push(place_id);
            myplaceref.set({ places : data });
            resolve(data);
          }
          ////////////if collection is already exisetd
          else {
            let array: Array<any> = doc.data()['places'];

            // check current user is already liked this place
            let temp = array.filter(res => res == place_id);

            if (temp.length > 0) {
              resolve(array);
              // console.log("you have already liked to this place")
            } else {
              array.push(place_id);
              myplaceref.set({ places: array });
              resolve(array);
            }
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  //save placeinfo when swipe right or like in tinderview
  async savePlaceInfo(info): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log("this is infolist", info)
      let place_id = info['place_id'];

      let myid = this.getUserinfo()['id'];
      var placeref = this.firestore.collection('places').doc(`${place_id}`);
      placeref.ref
        .get()
        .then(doc => {
          if (!doc.exists) {
            let data = [];
            data.push(myid);
            placeref.set({ members: data });
            resolve(data);
          }
          ////////////if collection is already exisetd
          else {
            let array: Array<any> = doc.data()['members'];

            // check current user is already liked this place
            let temp = array.filter(res => res == myid);

            if (temp.length > 0) {
              resolve(array);
              // console.log("you have already liked to this place")
            } else {
              array.push(myid);
              placeref.set({ members: array });
              resolve(array);
            }
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /////////////////function : matched userinfo array
  //
  async getMatchedUserInfo(placeuserarray: Array<any>, info): Promise<any> {
    console.log('pleaceinfo arary', placeuserarray, info);
    let myid = this.getUserinfo()['id'];
    let placeid = info['place_id'];

    return new Promise((resolve, reject) => {
      const friendsRef = this.firestore.collection('friends').doc(`${myid}`);

      friendsRef
        .collection('member', res=>res.where('send','==', 2 ).where('isblocked','==', false))
        .valueChanges()
        .subscribe(snapshot => {
          let comparearray = placeuserarray.filter(item =>
            snapshot.some(elem => item == elem['userkey'])
          );

          if (comparearray.length == 0) {
            reject({ success: 'false' });
          } else {
            resolve(comparearray);
          }
        });
    });
  }

  // save matched data
  // matched/myid/friendid/placeid/data

  async saveMatchedUsers(info: Array<any>, placeinfo) {
    let myid = this.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      var i = 0;

      let noti_friends = '';
      info.forEach(element => {
        i++;

        let info_me : any = {}
        let info_match : any = {}

        if(placeinfo['place_title'])
        {

          info_me = {
            friendkey: element,
            placeid: placeinfo['place_id'],
            placename: placeinfo['place_name'],
            placeimage : placeinfo['place_photo'],
            placeprice : placeinfo['place_price'],
            placedisprice : placeinfo['place_discount_price'],
            placeurl : placeinfo['place_dealurl'],
            time: ''
          }
  
          info_match = {
            friendkey: myid,
            placeid: placeinfo['place_id'],
            placename: placeinfo['place_name'],
            placeimage : placeinfo['place_photo'],
            placeprice : placeinfo['place_price'],
            placedisprice : placeinfo['place_discount_price'],
            placeurl : placeinfo['place_dealurl'],
            time: ''
          }

        }else{
          info_me = {
            friendkey: element,
            placeid: placeinfo['place_id'],
            placename: placeinfo['place_name'],
            placeimage : placeinfo['place_photo'],
            time: ''
          }
  
          info_match = {
            friendkey: myid,
            placeid: placeinfo['place_id'],
            placename: placeinfo['place_name'],
            placeimage : placeinfo['place_photo'],
            time: ''
          }
  
        }
        
        var matchedRef = this.firestore.collection('matched').doc(`${myid}`);
        matchedRef
          .collection(element)
          .doc(placeinfo['place_id'])
          .set(info_me)

          .then(sucee => {
            this.firestore
              .collection('matched')
              .doc(element)
              .collection(myid)
              .doc(placeinfo['place_id'])
              .set(info_match)
              .then(res => {

                if (i == info.length) {
                  resolve('sucee');
                }

              });
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  /////////////////////////////// matchusers/myid/friendidlist////////////////
  async saveMatchedUsersList(info) {
    let myid = this.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      var matchRef = this.firestore.collection('matchedusers').doc(myid);

      matchRef.ref
        .get()
        .then(result => {
          console.log('====================================');
          console.log(result.data(), info);
          console.log('====================================');

          let isOnceMatched  = false

          if (result.data() == null) {
            matchRef.set({ friend: info });
            resolve('sucess');
          } else {
            let existdata = result.data()['friend'];
            let totalarray = existdata.concat(info);

            let result_array = totalarray.filter(
              (item, index) => index === totalarray.indexOf(item)
            );

            matchRef.set({ friend: result_array });

            // let compareArray = existdata.filter(item=> info.indexOf(item) < 0)
            // console.log('==========fdfdfdf==========================');
            // console.log(compareArray);
            // console.log('====================================');
            // if(compareArray.length > 0)
            // {
              resolve('sucess');
           
          }

       

        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async saveMatchedOtherUsersList(info) {
    let myid = this.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      var matchRef = this.firestore.collection('matchedusers').doc(info);
      matchRef.ref.get().then(result => {
        console.log('fsfasfsfasfasfaf====================================');
        console.log(result.data());
        console.log('====================================');

        if (result.data() == null) {
          matchRef.set({ friend: [myid] });
          resolve(true)
        } else {
          let existdata = result.data()['friend'];
          let totalarray = existdata.concat([myid]);
          let result_array = totalarray.filter(
            (item, index) => index === totalarray.indexOf(item)
          );
          matchRef.set({ friend: result_array });
          resolve(true)
        }
      }).catch(err=>{
        reject(err)
      });
    });
  }

  // -----------------------------------    Setting page functions  -----------------------------------//
  // get my friends list from firestore
  async getMyfriendsList(): Promise<any> {
    return new Promise((resolve, reject) => {
      let myid = this.getUserinfo()['id'];
      var friendRef = this.firestore.collection('friends').doc(`${myid}`);
      var filterRef = friendRef.collection('member', ref =>
        ref.where('send', '==', 2)
      );
      filterRef.valueChanges().subscribe(snapshot => {
        if (snapshot == null) {
          reject('false');
        } else {
          resolve(snapshot);
        }
      });
    });
  }

  /////get request list from firestore
  async getRequestList(): Promise<any> {
    return new Promise((resolve, reject) => {
      let myid = this.getUserinfo()['id'];
      var friendRef = this.firestore.collection('friends').doc(`${myid}`);
      var filterRef = friendRef.collection('member', ref =>
        ref.where('send', '==', 1)
      );
      filterRef.valueChanges().subscribe(snapshot => {
        if (snapshot == null) {
          reject('false');
        } else {
          resolve(snapshot);
        }
      });
    });
  }

  ////////////////////////////Accept request functions ////////////////////////
  async sendAcceptRequest(key): Promise<any> {
    return new Promise((resolve, reject) => {
      let myid = this.getUserinfo()['id'];

      let friendsRef = this.firestore
        .collection('friends')
        .doc(`${myid}`)
        .collection('member')
        .doc(`${key}`);

      friendsRef
        .update({ active: 'true', send: 2, userkey: key, isblocked : false })
        .then(suceess => {
          this.sendMatchedAcceptRequest(key, myid)
            .then(suc => {
              resolve(suc);
            })
            .catch(er => {
              reject('false');
            });
        })
        .catch(err => {
          reject('false');
        });
    });
  }

  async sendMatchedAcceptRequest(key, myid): Promise<any> {
    return new Promise((resolve, reject) => {
      let friendsRef = this.firestore
        .collection('friends')
        .doc(`${key}`)
        .collection('member')
        .doc(`${myid}`);
      friendsRef
        .update({ active: 'true', send: 2, userkey: myid , isblocked : false})
        .then(suceess => {
          resolve('suceess');
        })
        .catch(error => {
          reject(error);
        });
    });
  }


  async sendUnblockFriendsRequest(key)
  {
    console.log('====================================');
    console.log(key);
    console.log('====================================');
    return new Promise((resolve, reject) => {
      let myid = this.getUserinfo()['id'];
      
      let updateRef = this.firestore
        .collection('friends')
        .doc(`${myid}`)
        .collection('member');

      let updateFriendRef = this.firestore
        .collection('friends')
        .doc(key)
        .collection('member');

        updateRef.doc(key).update({isblocked : false}).then(suc=>{
          updateFriendRef.doc(myid).update({isblocked : false}).then(su=>{
            resolve(true)
          }).catch(err=>{
            reject(err)
          })
        }).catch(e=>{
          reject(e)
        })
        

        
    });
  }

  // remove friends functions
  async sendRemoveFriendsRequest(key): Promise<any> {
    return new Promise((resolve, reject) => {
      let myid = this.getUserinfo()['id'];
      let removeRef = this.firestore
        .collection('friends')
        .doc(`${myid}`)
        .collection('member');

      removeRef
        .doc(`${key}`)
        .delete()
        .then(sucee => {
          this.sendRemovedMatchedFriendsRequest(myid, key)
            .then(result => {
              resolve(result);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  async sendRemovedMatchedFriendsRequest(myid, userkey): Promise<any> {
    return new Promise((resolve, reject) => {
      let removeRef = this.firestore
        .collection('friends')
        .doc(`${userkey}`)
        .collection('member');
      removeRef
        .doc(`${myid}`)
        .delete()
        .then(res => {
          resolve('true');
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
