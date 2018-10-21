import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatchedProvider } from '../matched/matched';
import * as firebase from 'firebase';
import { AuthProvider } from '../auth/auth';
import { SmsProvider } from '../sms/sms';
import { NotificationProvider } from '../notification/notification';
import { ChatproviderProvider } from '../chatprovider/chatprovider';

/*
  Generated class for the GroupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupProvider {
  constructor(
    public http: HttpClient,
    public afs: AngularFirestore,
    public matchprovider: MatchedProvider,
    public authprovider: AuthProvider,
    public smsprovider: SmsProvider,
    public notiprovider: NotificationProvider,
    public chatprovider: ChatproviderProvider

  ) {
    console.log('Hello GroupProvider Provider');
  }

  // getGroupChatMessages(groupid) {
  //   return new Promise((resolve, reject) => {
  //     this.afs.collection('groupchat').doc(groupid).collection('messages').valueChanges().subscribe(res => {
  //       console.log("this is group chat message info", res)
  //     })
  //   })
  // }
  saveGroupAcceptMembers()
  {
    
  }

  saveGroupChatMessages(message, groupid, type) {
    let myid = this.matchprovider.getUserinfo()['id'];
    let myphoto = this.matchprovider.getUserinfo()['photoUrl'];
    let time = this.formatAMPM(new Date());
    let date = this.formatDate(new Date());
    let autokey = this.afs.createId();

    return new Promise((resolve, reject) => {
      let chatdata = {
        sender: myid,
        receiver: '',
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        timeofmsg: time,
        dateofmsg: date,
        type: type,
        key: autokey,
        photo: myphoto,
        placename : ''
      };

      console.log('this is message info', message, groupid, type);

      this.afs
        .collection('groupchat')
        .doc(groupid)
        .collection('messages')
        .doc(autokey)
        .set(chatdata)
        .then(suc => {
          this.sendPushToGroupUsers(groupid, message)
            .then(re => {
              resolve(true);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  sendPushToGroupUsers(groupid, message) {
    return new Promise((resolve, reject) => {
      let myid = this.matchprovider.getUserinfo()['id'];
      this.getGroupMemebersInfos(groupid)
        .then((resu: Array<any>) => {
          var i = 0;
          resu.forEach(element => {
            i++;
            this.authprovider
              .getMyFriend(myid, element['id'])
              .then(res => {
                // send notification to other group members
                if (myid != element['id']) {
                  this.notiprovider.sendFriendRequest(
                    'Received Message!',
                    element['id'],
                    message
                  );
                }

                if (i == resu.length) {
                  resolve(res);
                }
              })
              .catch(err => {
                reject(err);
              });
          });
        })
        .catch(er => { });
    });
  }

  generateGroupChatMessage(groupid, message) {
    return new Promise((resolve, reject) => {
      let myid = this.getMyInfo['id'];
      let groupRef = this.afs
        .collection('GroupChat')
        .doc(groupid)
        .collection(myid);
      groupRef.add({ message: message, userkey: myid });
    });
  }

  saveGroupPlaceInfo(placeinfo, groupid) {
    console.log('this is place info array infos=====>', placeinfo, groupid);
    return new Promise((resolve, reject) => {
      let groupplaceRef = this.afs
        .collection('Group')
        .doc(groupid)
        .collection('groupplaces')
        .doc(placeinfo['place_id']);
      groupplaceRef.ref
        .get()
        .then(data => {
          console.log('this is group invite test info');
          let savedata = {};
          if (placeinfo['place_dealurl']) {
            savedata = {
              placeid: placeinfo['place_id'],
              placename: placeinfo['place_name'],
              placeurl: placeinfo['place_dealurl'],
              placeprice: placeinfo['place_price'],
              placedisprice: placeinfo['place_discount_price'],
              placephoto: placeinfo['place_photo']
            };
          } else {
            savedata = {
              placeid: placeinfo['place_id'],
              placename: placeinfo['place_name'],
              placeurl: placeinfo['place_url'],
              placeprice: '',
              placedisprice: '',
              placephoto: placeinfo['place_photo']
            };
          }

          if (!data.exists) {
            groupplaceRef.set(savedata);
            resolve(data);
          } else {
            resolve(data);
          }
        })
        .catch(err => {
          console.log('this is group invite error', err);
        });
    });
  }

  saveGroupInfodata(placeinfo, userarray, type) {
    return new Promise((resolve, rejecct) => {
      var i = 0;
      userarray.forEach(element => {
        i++;
        this.saveGroupPlaceInfo(placeinfo, element['groupid'])
          .then(suc => {

            if (type == 'newInvite') {
              this.chatprovider.addMeetingWhenGroup(placeinfo['place_name'],
                placeinfo['place_photo'], "meeting", placeinfo['place_time'], placeinfo['place_time'], element['groupid'])
            }

            if (i == userarray.length) {
              resolve(element);
            }
          })
          .catch(e => {
            rejecct(e);
          });
      });
      //
    });
  }

  // compare group members info , in other words we have to avoid create group with same users again
  compareGroupMembersInfo(usersarray) {
    return new Promise((resolve, reject) => {

      var temparray = [];
      var i = 0;

      usersarray.forEach(element => {
        i++;
        temparray.push(element['id']);

        if (i == usersarray.length) {
          this.getMygroups()
            .then((result: Array<any>) => {
              if (result.length == 0) {
                resolve(result);
              } else {
                result.forEach(element => {
                  j++;
                  console.log(
                    'this is caompare array===================>',
                    element,
                    temparray
                  );
                  this.generateUserIdsArray(element, temparray)
                    .then(res => {
                      if (j == result.length) {
                        resolve(true);
                      }
                    })
                    .catch(er => {
                      console.log('this is same arrayfefefefef');
                      reject(false);
                    });
                });
              }
              var j = 0;
            })
            .catch(er => reject(false));
        }
      });
    });
  }

  // generate userID array from mygroupinfo
  generateUserIdsArray(groupinfo, comparearray) {
    return new Promise((resolve, reject) => {
      var temparray = [];
      var i = 0;
      if (groupinfo['member'].length > 0) {
        groupinfo['member'].forEach(element => {
          i++;
          temparray.push(element['id']);

          if (i == groupinfo['member'].length) {
            let result = comparearray.filter(
              item => temparray.indexOf(item) < 0
            );

            if (result.length > 0) {
              resolve(true);
            } else {
              console.log('this is same array');
              reject(false);
            }
          }
        });
      } else {
        reject(false);
      }
    });
  }

  // generate group info
  generateGroup(placeinfo, userArray) {
    return new Promise((resolve, reject) => {
      const autokey = this.afs.createId();

      let data = {};
      if (placeinfo['place_dealurl']) {
        data = {
          placeid: placeinfo['place_id'],
          placename: placeinfo['place_name'],
          placeurl: placeinfo['place_dealurl'],
          placeprice: placeinfo['place_price'],
          placedisprice: placeinfo['place_discount_price'],
          placephoto: placeinfo['place_photo']
        };
      } else {
        data = {
          placeid: placeinfo['place_id'],
          placename: placeinfo['place_name'],
          placeurl: placeinfo['place_url'],
          placeprice: '',
          placedisprice: '',
          placephoto: placeinfo['place_photo']
        };
      }

      let myinfo = this.getMyInfo();

      userArray.push(myinfo);

      let groupRef = this.afs.collection('Group').doc(autokey);

      // this.compareGroupMembersInfo(userArray)
      //   .then(res => {
      groupRef
        .collection('groupplaces')
        .doc(placeinfo['place_id'])
        .set(data)
        .then(result => {
          var i = 0;

          var sms_str = [];

          userArray.forEach(element => {
            i++;

            let data_element = {
              displayName: element['displayName'],
              id: element['id'],
              image: element['image'],
              isAdded: element['isAdded'],
              phoneNumbers: element['phoneNumbers']
            };

            if (element['isHasApp']) {
              if (element['isInvited']) {
                groupRef
                  .collection('groupmembers')
                  .doc(element['phoneNumbers'])
                  .set(data_element)
                  .then(res => {
                    this.generateMyGroup(autokey, element['phoneNumbers']);
                    if (i == userArray.length) {
                      resolve({message : sms_str, groupid : autokey});
                    }
                  })
                  .catch(er => {
                    console.log('this is userarray info', er);
                    reject(er);
                  });
              } else {
                // if user is not friend
                this.authprovider
                  .saveFriends(element['phoneNumbers'], element)
                  .then(result => {
                    groupRef
                      .collection('groupmembers')
                      .doc(element['phoneNumbers'])
                      .set(data_element)
                      .then(res => {
                        this.generateMyGroup(
                          autokey,
                          element['phoneNumbers']
                        );
                        if (i == userArray.length) {
                          {
                            resolve({message : sms_str, groupid : autokey});
                          }
                        }
                      })
                      .catch(er => {
                        console.log('this is userarray info', er);
                        reject(er);
                      });
                  })
                  .catch(err => {
                    reject(err);
                  });
              }
            } else {
              sms_str.push(element['phoneNumbers']);
              groupRef
                .collection('groupmembers')
                .doc(element['phoneNumbers'])
                .set(data_element)
                .then(res => {
                  this.generateMyGroup(autokey, element['phoneNumbers']);
                  if (i == userArray.length) {
                    resolve({message : sms_str, groupid : autokey});
                  }
                })
                .catch(er => {
                  console.log('this is userarray info', er);
                  reject(er);
                });
            }
            // if user is friend
          });
        })
        .catch(err => {
          reject(false);
        });
      // })
      // .catch(err => {
      //   reject('already group exist');
      // });
    });
  }

  // generate mygroup collection infos
  generateMyGroup(groupid, userid) {
    const mygroupRef = this.afs.collection('MyGroup').doc(userid);

    mygroupRef.ref
      .get()
      .then(data => {
        if (!data.exists) {
          let array = [];
          array.push(groupid);
          mygroupRef.set({ mygroups: array });
        } else {
          let arry: Array<any> = data.data()['mygroups'];

          let temp = arry.filter(elem => elem == groupid);

          if (temp.length == 0) {
            arry.push(groupid);
            mygroupRef.set({ mygroups: arry });
          }
        }
      })
      .catch(e => { });
  }

  getMygroups() {
    return new Promise((resolve, reject) => {
      let myphone = this.matchprovider.getUserinfo()['phonenumber'];
      this.afs
        .collection('MyGroup')
        .doc(myphone)
        .valueChanges()
        .subscribe(
          result => {
            console.log('this is return info', result);
            var retunarray = [];
            if (result != null) {
              var i = 0;
              result['mygroups'].forEach(element => {
                i++;
                this.getGroupMemebersInfos(element)
                  .then(res => {
                    this.getGroupPlacesInfos(element)
                      .then(info => {
                        let returninfo = {
                          member: res,
                          places: info,
                          isChecked: false,
                          groupid: element
                        };
                        retunarray.push(returninfo);
                        if (i == result['mygroups'].length) {
                          console.log('this is return array', retunarray);
                          resolve(retunarray);
                        }
                      })
                      .catch(err => {
                        reject(err);
                      });
                  })
                  .catch(e => {
                    reject(e);
                  });
              });
            } else {
              resolve(retunarray);
            }
          },
          err => {
            reject(false);
          }
        );
    });
  }

  getGroupMemebersInfos(groupid) {
    return new Promise((resolve, reject) => {
      this.afs
        .collection('Group')
        .doc(groupid)
        .collection('groupmembers')
        .valueChanges()
        .subscribe(
          res => {
            console.log('this is growefwfewfeup detail data', res);
            var i = 0;
            res.forEach(element => {
              i++;

              if (element['id'] == '') {
                res.splice(res.indexOf(element), 1);
              }

              if (i == res.length) {
                console.log('this is dfdfdfdfdf detail data', res);
                resolve(res);
              }
            });
          },
          err => {
            reject('err');
          }
        );
    });
  }

  getGroupPlacesInfos(groupid) {
    return new Promise((resolve, reject) => {
      this.afs
        .collection('Group')
        .doc(groupid)
        .collection('groupplaces')
        .valueChanges()
        .subscribe(
          res => {
            console.log('this is group detail data', res);
            resolve(res);
          },
          err => {
            reject('err');
          }
        );
    });
  }

  private getMyInfo() {
    let myinfo = this.matchprovider.getUserinfo();
    let mymodal = {
      displayName: myinfo['username'],
      id: myinfo['id'],
      image: myinfo['photoUrl'],
      isAdded: '',
      isInvited: true,
      isHasApp: true,
      phoneNumbers: myinfo['phonenumber']
    };
    return mymodal;
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
