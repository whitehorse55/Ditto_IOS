import { NotificationProvider } from './../notification/notification';

import { Events } from 'ionic-angular';
import { AuthProvider } from './../auth/auth';
import { MatchedProvider } from './../matched/matched';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '../../../node_modules/angularfire2/firestore';
import * as firebase from 'firebase';
/*
  Generated class for the ChatproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatproviderProvider {
  constructor(
    public http: HttpClient,
    public firestore: AngularFirestore,
    public matchprovider: MatchedProvider,
    public authprovider: AuthProvider,
    public events: Events,
    public notiprovider: NotificationProvider
  ) {
    console.log('Hello ChatproviderProvider Provider');
  }

  getChatUsers(): Promise<any> {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let matchedRef = this.firestore.collection('matchedusers').doc(myid);
      matchedRef.ref.get().then(result => {
        if (result.data() == null) {
          reject({ success: 'false' });
        } else {
          let data = result.data()['friend'];
          resolve(data);
        }
      });
    });
  }

  getChatUsersInfo(info) {
    return new Promise((resolve, reject) => {
      this.authprovider
        .getFrindsInfoFromId(info)
        .then(succ => {
          resolve(succ);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  setBlockUser(info)
  {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let matchRef = this.firestore
        .collection('friends')
        .doc(myid)
        .collection('member', res => res.where('send', '==', 2).where('isblocked', '==', false))

      let matchFriendRef = this.firestore
      .collection('friends')
      .doc(info)
      .collection('member', res => res.where('send', '==', 2).where('isblocked', '==', false))

        matchRef.doc(info).update({isblocked : true}).then(succ=>{
          matchFriendRef.doc(myid).update({isblocked : true}).then(su=>{
             reject(true)
          }).catch(er=>{
            reject(er)
          })
        }).catch(err=>{
          reject(err)
        })
        
    });
  }


  getBlockedUsers()
  {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let matchRef = this.firestore
        .collection('friends')
        .doc(myid)
        .collection('member', res => res.where('send', '==', 2).where('isblocked', '==', true))
        .valueChanges()
        .subscribe(snapshot => {
          resolve(snapshot);
        });
    });
  }

  getAcceptedChatUsers(info)
  {

    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let matchRef = this.firestore
        .collection('friends')
        .doc(myid)
        .collection('member', res => res.where('send', '==', 2).where('isblocked', '==', false).where('userkey','==',info))
        .valueChanges()
        .subscribe(snapshot => {
          resolve(snapshot);
        });
    });
  }

  getChatUserPlace(info) {
    console.log('infolist====================================');
    console.log(info);
    console.log('====================================');
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let matchRef = this.firestore
        .collection('matched')
        .doc(myid)
        .collection(info, res => res.where('friendkey', '==', info))
        .valueChanges()
        .subscribe(snapshot => {
          resolve(snapshot);
        });
    });
  }

  getMettingDateWhenDate(userid) {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('chat')
        .doc(userid)
        .collection(myid, res => res.where('accept', '==', true))
        .valueChanges()
        .subscribe(result => {
            let isDate = result.filter(item=> this.formatDate(new Date(item.timeofmsg)) == this.formatDate(new Date()))
            if(isDate.length > 0)
            {
              console.log("isDate")
              resolve(isDate)
            }else{
              reject("error")
            }
        })
    });
  }


  getLastMessage(userid) {
    console.log('====================================');
    console.log("this is get lastmsessage test");
    console.log('====================================');
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('chat')
        .doc(myid)
        .collection(userid, res => res.orderBy('timestamp'))
        .valueChanges()
        .subscribe(result => {
            console.log('=fefefefefef===================================');
            console.log(result);
            console.log('====================================');
            if(result.length > 0)
            {
              console.log("isDate")
              resolve(result.reverse()[0]['message'])
            }else{
              reject("error")
            }
        });
    });
  }

  getMettingDate(userid) {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('chat')
        .doc(myid)
        .collection(userid, res => res.where('accept', '==', true))
        .valueChanges()
        .subscribe(result => {
            let isDate = result.filter(item=> this.formatDate(new Date(item.timeofmsg)) == this.formatDate(new Date()))
            if(isDate.length > 0)
            {
              console.log("isDate")
              resolve(isDate)
            }else{
              reject("error")
            }
        });
    });
  }

  getCollection(path: string, cb?: any) {
    return cb
      ? this.firestore.collection(path, cb)
      : this.firestore.collection(path);
  }

  realtimeUpdate(userid) {
    let myid = this.matchprovider.getUserinfo()['id'];
    let realdata = firebase
      .database()
      .ref('chat/' + myid + '/' + userid)
      .on('value', resp => {
        console.log('this is realtitm', resp);
      });
  }

  // addMessageUsingFirebase(content, userid) {
  //   let myid = this.matchprovider.getUserinfo()['id'];
  //   let time = this.formatAMPM(new Date());
  //   let date = this.formatDate(new Date());

  //   let autokey = this.firestore.createId();

  //   return new Promise((resolve, reject) => {
  //     let chatdata = {
  //       sender: myid,
  //       receiver: userid,
  //       message: content,
  //       timestamp: firebase.database.ServerValue.TIMESTAMP,
  //       timeofmsg: time,
  //       dateofmsg: date,
  //       key : autokey,
  //       accept : false
  //     };

  //     let newData = firebase
  //       .database()
  //       .ref('chat/' + myid + '/' + userid)
  //       .push();
  //     newData
  //       .set(chatdata)
  //       .then(succes => {
  //         let tempData = firebase
  //           .database()
  //           .ref('chat/' + userid + '/' + myid)
  //           .push();
  //         tempData
  //           .set(chatdata)
  //           .then(scuss => {})
  //           .catch(error => {
  //             reject(error);
  //           });
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   });
  // }

  cancelMeetingRequest(item, userid) {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let content =
        'just cancelled the meet up. Try chatting to set another time.';
      this.notiprovider.sendFriendRequest('sorry', userid, content);

      let cancelRef = this.firestore
        .collection('chat')
        .doc(myid)
        .collection(userid, res =>
          res
            .where('type', '==', 'meeting')
            .where('key', '==', item['key'])
            .where('receiver', '==', myid)
        );

      cancelRef.snapshotChanges().subscribe(result => {
        result.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          console.log('dfdfdf====================================');
          console.log(data);
          console.log('====================================');
          cancelRef.doc(id).delete();
          return { id, ...data };
        });
      });
    });
  }

  acceptMeetingWhenGroup(groupid, info)
  {
    return new Promise((resolve, reject)=>{

      
      let meetingRef = this.firestore
      .collection('groupchat')
      .doc(groupid)
      .collection('messages');

      let myid = this.matchprovider.getUserinfo()['id'];
      let photourl = this.matchprovider.getUserinfo()['photoUrl']  
      let username = this.matchprovider.getUserinfo()['username']   
      
      console.log('thisii',this.matchprovider.getUserinfo())

      meetingRef.doc(info['key']).ref.get().then(doc=>{

       
         if(doc.data()['accptUsers'] == null)
         {
          
          let userarrayinfo = []
          userarrayinfo.push({myid : myid, photourl : photourl, username : username})
          console.log('thisii',userarrayinfo)
          meetingRef.doc(info['key']).update({accptUsers : userarrayinfo})
          resolve(userarrayinfo)
         }else{
            let data = {myid : myid, photourl : photourl,username : username}
            let array: Array<any> = doc.data()['accptUsers'];

            let temp = array.filter(res => res['myid'] == myid);
            if(temp.length > 0)
            {
                resolve(array)
            }else{
              array.push(data)
              meetingRef.doc(info['key']).update({accptUsers : array})
              resolve(array)
            }
            
         }
      }).catch(err=>{
        reject(err)
      })

    })
  }

  //////////save meeting accept request/////////////
  acceptMeetingRequest(item, userid) {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let content =
        'accepted your invite. You’re headed to' +
        item['message'] +
        'Tap for more details.';
      this.notiprovider.sendFriendRequest('Good News!', userid, content);

      let acceptRef = this.firestore
        .collection('chat')
        .doc(myid)
        .collection(userid, res =>
          res
            .where('type', '==', 'meeting')
            .where('key', '==', item['key'])
            .where('receiver', '==', myid)
        );

        let acceptFriendRef = this.firestore
        .collection('chat')
        .doc(userid)
        .collection(myid, res =>
          res
            .where('type', '==', 'meeting')
            .where('key', '==', item['key'])
        );

      acceptRef.doc(item['key']).update({accept : true})
      acceptFriendRef.doc(item['key']).update({accept : true})


      acceptRef.valueChanges().subscribe(result => {

        console.log('this si forer', result);
        if (result.length == 0 && result == null) {
          reject('error');
        } else {
          resolve(result);
        }
      });
    });
  }


    //////////////////////////////////// chat functions ////////////////////////////////////
    addMeetingWhenGroup(placename,placeimage, type, date_start, date_end, groupid) {
      
      let myid = this.matchprovider.getUserinfo()['id'];
      let myphoto = this.matchprovider.getUserinfo()['photoUrl']
  
      let autokey = this.firestore.createId();
  
      return new Promise((resolve, reject) => {
        let chatdata = {
          sender: myid,
          message: placename,
          placename : placeimage,
          photo : myphoto,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          timeofmsg: date_start,
          dateofmsg: date_end,
          type: type,
          key: autokey,
          accept: false
        };
  
        let meetingRef = this.firestore
          .collection('groupchat')
          .doc(groupid)
          .collection('messages');
  
        meetingRef
          .doc(autokey)
          .set(chatdata)
          .then(sucee => {
              resolve(true)
          })
          .catch(error => {
            reject(error);
          });
      });
    }

  //////////////////////////////////// chat functions ////////////////////////////////////
  addMeeting(placename,placeimage, userid, type, date_start, date_end) {
    // let myid = firebase.auth().currentUser.uid
    let myid = this.matchprovider.getUserinfo()['id'];

    // let start_date =
    //   this.formatDate(new Date(date_start)) +
    //   ' ' +
    //   this.formatAMPM(new Date(date_start));
    // let start_end =
    //   this.formatDate(new Date(date_end)) +
    //   ' ' +
    //   this.formatAMPM(new Date(date_end));

    let autokey = this.firestore.createId();

    return new Promise((resolve, reject) => {
      let chatdata = {
        sender: myid,
        receiver: userid,
        message: placename,
        placename : placeimage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        timeofmsg: date_start,
        dateofmsg: date_end,
        type: type,
        key: autokey,
        accept: false
      };

      let meetingRef = this.firestore
        .collection('chat')
        .doc(myid)
        .collection(userid);

      meetingRef
        .doc(autokey)
        .set(chatdata)
        .then(sucee => {
          // let autokey1 = this.firestore.createId();

          this.firestore
            .collection('chat')
            .doc(userid)
            .collection(myid)
            .doc(autokey)
            .set(chatdata)
            .then(res => {
              resolve('true');
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

  //////////////////////////////////// chat functions ////////////////////////////////////
  addMessage(content, userid, type) {
    // let myid = firebase.auth().currentUser.uid
    let myid = this.matchprovider.getUserinfo()['id'];
    let time = this.formatAMPM(new Date());
    let date = this.formatDate(new Date());
    let autokey = this.firestore.createId();
    return new Promise((resolve, reject) => {
      let chatdata = {
        sender: myid,
        receiver: userid,
        message: content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        timeofmsg: time,
        dateofmsg: date,
        type: type,
        key: autokey
      };

      this.firestore
        .collection('chat')
        .doc(myid)
        .collection(userid)
        .doc(autokey)
        .set(chatdata)
        .then(sucee => {
          // let autokey1 = this.firestore.createId();
          this.firestore
            .collection('chat')
            .doc(userid)
            .collection(myid)
            .doc(autokey)
            .set(chatdata)
            .then(res => {
              console.log('====================================');
              console.log(res);
              console.log('====================================');
              resolve('res');
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

  getAllMessage(userid) {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      let chatRef = this.firestore.collection('chat');

      chatRef
        .doc(myid)
        .collection(userid)
        .valueChanges()
        .subscribe(snapshot => {
          if (snapshot == null) {
            reject('false');
          } else {
            resolve(snapshot);
          }

          // this.events.publish('newmessage',{data : snapshot})
        });
    });
  }

  saveUserStatus(status) {
    let myid = this.matchprovider.getUserinfo()['id'];
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('users')
        .doc(myid)
        .update({ active: status })
        .then(suc => {
          resolve('suceess');
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getUserStatus(userid) {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('users', res => res.where('id', '==', userid))
        .valueChanges()
        .subscribe(result => {
          if (result.length == 0) {
            reject('error');
          } else {
            resolve(result);
          }
        });
    });
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '/' + mm + '/' + yyyy;
  }
}
