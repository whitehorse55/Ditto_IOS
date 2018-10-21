webpackJsonp([30],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalstorageProvider = /** @class */ (function () {
    function LocalstorageProvider(http) {
        this.http = http;
        console.log('Hello LocalstorageProvider Provider');
    }
    LocalstorageProvider.prototype.saveUserInfo = function (info) {
        window.localStorage.setItem('userinfo', JSON.stringify(info));
    };
    LocalstorageProvider.prototype.getUserinfo = function () {
        var profile = window.localStorage.getItem('userinfo');
        return JSON.parse(profile);
    };
    LocalstorageProvider.prototype.saveLoginStatus = function (isLogin) {
        return window.localStorage.setItem('isLogin', isLogin);
    };
    LocalstorageProvider.prototype.getLoginStatus = function () {
        return window.localStorage.getItem('isLogin');
    };
    LocalstorageProvider.prototype.saveCategoryList = function (cateInfo) {
        window.localStorage.setItem('cateinfo', JSON.stringify(cateInfo));
    };
    LocalstorageProvider.prototype.getCategoryList = function () {
        return JSON.parse(window.localStorage.getItem('cateinfo'));
    };
    LocalstorageProvider.prototype.clearLocalstorage = function () {
        return window.localStorage.clear();
    };
    LocalstorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LocalstorageProvider);
    return LocalstorageProvider;
}());

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angularfire2_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ChatproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatproviderProvider = /** @class */ (function () {
    function ChatproviderProvider(http, firestore, matchprovider, authprovider, events, notiprovider) {
        this.http = http;
        this.firestore = firestore;
        this.matchprovider = matchprovider;
        this.authprovider = authprovider;
        this.events = events;
        this.notiprovider = notiprovider;
        console.log('Hello ChatproviderProvider Provider');
    }
    ChatproviderProvider.prototype.getChatUsers = function () {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var matchedRef = _this.firestore.collection('matchedusers').doc(myid);
            matchedRef.ref.get().then(function (result) {
                if (result.data() == null) {
                    reject({ success: 'false' });
                }
                else {
                    var data = result.data()['friend'];
                    resolve(data);
                }
            });
        });
    };
    ChatproviderProvider.prototype.getChatUsersInfo = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authprovider
                .getFrindsInfoFromId(info)
                .then(function (succ) {
                resolve(succ);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    ChatproviderProvider.prototype.setBlockUser = function (info) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var matchRef = _this.firestore
                .collection('friends')
                .doc(myid)
                .collection('member', function (res) { return res.where('send', '==', 2).where('isblocked', '==', false); });
            var matchFriendRef = _this.firestore
                .collection('friends')
                .doc(info)
                .collection('member', function (res) { return res.where('send', '==', 2).where('isblocked', '==', false); });
            matchRef.doc(info).update({ isblocked: true }).then(function (succ) {
                matchFriendRef.doc(myid).update({ isblocked: true }).then(function (su) {
                    reject(true);
                }).catch(function (er) {
                    reject(er);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    ChatproviderProvider.prototype.getBlockedUsers = function () {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var matchRef = _this.firestore
                .collection('friends')
                .doc(myid)
                .collection('member', function (res) { return res.where('send', '==', 2).where('isblocked', '==', true); })
                .valueChanges()
                .subscribe(function (snapshot) {
                resolve(snapshot);
            });
        });
    };
    ChatproviderProvider.prototype.getAcceptedChatUsers = function (info) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var matchRef = _this.firestore
                .collection('friends')
                .doc(myid)
                .collection('member', function (res) { return res.where('send', '==', 2).where('isblocked', '==', false).where('userkey', '==', info); })
                .valueChanges()
                .subscribe(function (snapshot) {
                resolve(snapshot);
            });
        });
    };
    ChatproviderProvider.prototype.getChatUserPlace = function (info) {
        var _this = this;
        console.log('infolist====================================');
        console.log(info);
        console.log('====================================');
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var matchRef = _this.firestore
                .collection('matched')
                .doc(myid)
                .collection(info, function (res) { return res.where('friendkey', '==', info); })
                .valueChanges()
                .subscribe(function (snapshot) {
                resolve(snapshot);
            });
        });
    };
    ChatproviderProvider.prototype.getMettingDateWhenDate = function (userid) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('chat')
                .doc(userid)
                .collection(myid, function (res) { return res.where('accept', '==', true); })
                .valueChanges()
                .subscribe(function (result) {
                var isDate = result.filter(function (item) { return _this.formatDate(new Date(item.timeofmsg)) == _this.formatDate(new Date()); });
                if (isDate.length > 0) {
                    console.log("isDate");
                    resolve(isDate);
                }
                else {
                    reject("error");
                }
            });
        });
    };
    ChatproviderProvider.prototype.getLastMessage = function (userid) {
        var _this = this;
        console.log('====================================');
        console.log("this is get lastmsessage test");
        console.log('====================================');
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('chat')
                .doc(myid)
                .collection(userid, function (res) { return res.orderBy('timestamp'); })
                .valueChanges()
                .subscribe(function (result) {
                console.log('=fefefefefef===================================');
                console.log(result);
                console.log('====================================');
                if (result.length > 0) {
                    console.log("isDate");
                    resolve(result.reverse()[0]['message']);
                }
                else {
                    reject("error");
                }
            });
        });
    };
    ChatproviderProvider.prototype.getMettingDate = function (userid) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('chat')
                .doc(myid)
                .collection(userid, function (res) { return res.where('accept', '==', true); })
                .valueChanges()
                .subscribe(function (result) {
                var isDate = result.filter(function (item) { return _this.formatDate(new Date(item.timeofmsg)) == _this.formatDate(new Date()); });
                if (isDate.length > 0) {
                    console.log("isDate");
                    resolve(isDate);
                }
                else {
                    reject("error");
                }
            });
        });
    };
    ChatproviderProvider.prototype.getCollection = function (path, cb) {
        return cb
            ? this.firestore.collection(path, cb)
            : this.firestore.collection(path);
    };
    ChatproviderProvider.prototype.realtimeUpdate = function (userid) {
        var myid = this.matchprovider.getUserinfo()['id'];
        var realdata = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]()
            .ref('chat/' + myid + '/' + userid)
            .on('value', function (resp) {
            console.log('this is realtitm', resp);
        });
    };
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
    ChatproviderProvider.prototype.cancelMeetingRequest = function (item, userid) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var content = 'just cancelled the meet up. Try chatting to set another time.';
            _this.notiprovider.sendFriendRequest('sorry', userid, content);
            var cancelRef = _this.firestore
                .collection('chat')
                .doc(myid)
                .collection(userid, function (res) {
                return res
                    .where('type', '==', 'meeting')
                    .where('key', '==', item['key'])
                    .where('receiver', '==', myid);
            });
            cancelRef.snapshotChanges().subscribe(function (result) {
                result.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    console.log('dfdfdf====================================');
                    console.log(data);
                    console.log('====================================');
                    cancelRef.doc(id).delete();
                    return __assign({ id: id }, data);
                });
            });
        });
    };
    ChatproviderProvider.prototype.acceptMeetingWhenGroup = function (groupid, info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var meetingRef = _this.firestore
                .collection('groupchat')
                .doc(groupid)
                .collection('messages');
            var myid = _this.matchprovider.getUserinfo()['id'];
            var photourl = _this.matchprovider.getUserinfo()['photoUrl'];
            var username = _this.matchprovider.getUserinfo()['username'];
            console.log('thisii', _this.matchprovider.getUserinfo());
            meetingRef.doc(info['key']).ref.get().then(function (doc) {
                if (doc.data()['accptUsers'] == null) {
                    var userarrayinfo = [];
                    userarrayinfo.push({ myid: myid, photourl: photourl, username: username });
                    console.log('thisii', userarrayinfo);
                    meetingRef.doc(info['key']).update({ accptUsers: userarrayinfo });
                    resolve(userarrayinfo);
                }
                else {
                    var data = { myid: myid, photourl: photourl, username: username };
                    var array = doc.data()['accptUsers'];
                    var temp = array.filter(function (res) { return res['myid'] == myid; });
                    if (temp.length > 0) {
                        resolve(array);
                    }
                    else {
                        array.push(data);
                        meetingRef.doc(info['key']).update({ accptUsers: array });
                        resolve(array);
                    }
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    //////////save meeting accept request/////////////
    ChatproviderProvider.prototype.acceptMeetingRequest = function (item, userid) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var content = 'accepted your invite. You’re headed to' +
                item['message'] +
                'Tap for more details.';
            _this.notiprovider.sendFriendRequest('Good News!', userid, content);
            var acceptRef = _this.firestore
                .collection('chat')
                .doc(myid)
                .collection(userid, function (res) {
                return res
                    .where('type', '==', 'meeting')
                    .where('key', '==', item['key'])
                    .where('receiver', '==', myid);
            });
            var acceptFriendRef = _this.firestore
                .collection('chat')
                .doc(userid)
                .collection(myid, function (res) {
                return res
                    .where('type', '==', 'meeting')
                    .where('key', '==', item['key']);
            });
            acceptRef.doc(item['key']).update({ accept: true });
            acceptFriendRef.doc(item['key']).update({ accept: true });
            acceptRef.valueChanges().subscribe(function (result) {
                console.log('this si forer', result);
                if (result.length == 0 && result == null) {
                    reject('error');
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    //////////////////////////////////// chat functions ////////////////////////////////////
    ChatproviderProvider.prototype.addMeetingWhenGroup = function (placename, placeimage, type, date_start, date_end, groupid) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        var myphoto = this.matchprovider.getUserinfo()['photoUrl'];
        var autokey = this.firestore.createId();
        return new Promise(function (resolve, reject) {
            var chatdata = {
                sender: myid,
                message: placename,
                placename: placeimage,
                photo: myphoto,
                timestamp: __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"].FieldValue.serverTimestamp(),
                timeofmsg: date_start,
                dateofmsg: date_end,
                type: type,
                key: autokey,
                accept: false
            };
            var meetingRef = _this.firestore
                .collection('groupchat')
                .doc(groupid)
                .collection('messages');
            meetingRef
                .doc(autokey)
                .set(chatdata)
                .then(function (sucee) {
                resolve(true);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    //////////////////////////////////// chat functions ////////////////////////////////////
    ChatproviderProvider.prototype.addMeeting = function (placename, placeimage, userid, type, date_start, date_end) {
        var _this = this;
        // let myid = firebase.auth().currentUser.uid
        var myid = this.matchprovider.getUserinfo()['id'];
        // let start_date =
        //   this.formatDate(new Date(date_start)) +
        //   ' ' +
        //   this.formatAMPM(new Date(date_start));
        // let start_end =
        //   this.formatDate(new Date(date_end)) +
        //   ' ' +
        //   this.formatAMPM(new Date(date_end));
        var autokey = this.firestore.createId();
        return new Promise(function (resolve, reject) {
            var chatdata = {
                sender: myid,
                receiver: userid,
                message: placename,
                placename: placeimage,
                timestamp: __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"].FieldValue.serverTimestamp(),
                timeofmsg: date_start,
                dateofmsg: date_end,
                type: type,
                key: autokey,
                accept: false
            };
            var meetingRef = _this.firestore
                .collection('chat')
                .doc(myid)
                .collection(userid);
            meetingRef
                .doc(autokey)
                .set(chatdata)
                .then(function (sucee) {
                // let autokey1 = this.firestore.createId();
                _this.firestore
                    .collection('chat')
                    .doc(userid)
                    .collection(myid)
                    .doc(autokey)
                    .set(chatdata)
                    .then(function (res) {
                    resolve('true');
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    //////////////////////////////////// chat functions ////////////////////////////////////
    ChatproviderProvider.prototype.addMessage = function (content, userid, type) {
        var _this = this;
        // let myid = firebase.auth().currentUser.uid
        var myid = this.matchprovider.getUserinfo()['id'];
        var time = this.formatAMPM(new Date());
        var date = this.formatDate(new Date());
        var autokey = this.firestore.createId();
        return new Promise(function (resolve, reject) {
            var chatdata = {
                sender: myid,
                receiver: userid,
                message: content,
                timestamp: __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"].FieldValue.serverTimestamp(),
                timeofmsg: time,
                dateofmsg: date,
                type: type,
                key: autokey
            };
            _this.firestore
                .collection('chat')
                .doc(myid)
                .collection(userid)
                .doc(autokey)
                .set(chatdata)
                .then(function (sucee) {
                // let autokey1 = this.firestore.createId();
                _this.firestore
                    .collection('chat')
                    .doc(userid)
                    .collection(myid)
                    .doc(autokey)
                    .set(chatdata)
                    .then(function (res) {
                    console.log('====================================');
                    console.log(res);
                    console.log('====================================');
                    resolve('res');
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    ChatproviderProvider.prototype.getAllMessage = function (userid) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            var chatRef = _this.firestore.collection('chat');
            chatRef
                .doc(myid)
                .collection(userid)
                .valueChanges()
                .subscribe(function (snapshot) {
                if (snapshot == null) {
                    reject('false');
                }
                else {
                    resolve(snapshot);
                }
                // this.events.publish('newmessage',{data : snapshot})
            });
        });
    };
    ChatproviderProvider.prototype.saveUserStatus = function (status) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('users')
                .doc(myid)
                .update({ active: status })
                .then(function (suc) {
                resolve('suceess');
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    ChatproviderProvider.prototype.getUserStatus = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('users', function (res) { return res.where('id', '==', userid); })
                .valueChanges()
                .subscribe(function (result) {
                if (result.length == 0) {
                    reject('error');
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    ChatproviderProvider.prototype.formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ChatproviderProvider.prototype.formatDate = function (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;
        return dd + '/' + mm + '/' + yyyy;
    };
    ChatproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__node_modules_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__matched_matched__["a" /* MatchedProvider */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__notification_notification__["a" /* NotificationProvider */]])
    ], ChatproviderProvider);
    return ChatproviderProvider;
}());

//# sourceMappingURL=chatprovider.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
var Constant = /** @class */ (function () {
    function Constant() {
    }
    //   public static googleKey = "AIzaSyAP-JpQHh2JpRRh2ymf8PkQjVXcGNh3woI"
    Constant.googleKey = "AIzaSyDjdA4jeFgPBzn0NE6yRYEBESYAc8ALDO0";
    Constant.googleApiPhotoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';
    //   yelp api
    Constant.yelpSerachUrl = "https://api.yelp.com/v3/businesses/search?";
    Constant.yelpDetailUrl = "https://api.yelp.com/v3/businesses/";
    Constant.yelpToken = "TsIWJSC2Pr7uO-8-q27S0wiUrKgB_J-ShXcrYE1hut7JHP3UkxLUijq3Nh7XUAqas1Y02aiKGHbhbdWZjyGsGADXAUKfvMcYAfgl5Z6l2SO0MLeCTJzsjLFXdzgnW3Yx";
    Constant.yelpClientID = "wCMLgQGoJy7AYOm6IlgiaQ";
    // Groupon api
    Constant.grouponUrl = "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_208751_212556_0";
    Constant.grouponToken = "US_AFF_0_208751_212556_0";
    Constant.googleReverseID_Android = "com.googleusercontent.apps.352885934650-12038fdgu2prkcmafke6dm7f7gtljktr";
    Constant.googleReverseID_IOS = "com.googleusercontent.apps.352885934650-gk4ccfs8bdvh4mhnqrn6u2fdp1hna64k";
    Constant.googleReverseID_Web = "com.googleusercontent.apps.352885934650-idnbn6mp51hbpjbjagh4ir6lljgo5n37";
    //   public static myKey = "AIzaSyDkvzv4WPaZfa2EhuECqu1r41ZiQS_NtUA"
    Constant.countryList = [
        {
            name: "United States",
            dial_code: "+1",
            code: "US"
        }, {
            name: "Israel",
            dial_code: "+972",
            code: "IL"
        }, {
            name: "Afghanistan",
            dial_code: "+93",
            code: "AF"
        }, {
            name: "Albania",
            dial_code: "+355",
            code: "AL"
        }, {
            name: "Algeria",
            dial_code: "+213",
            code: "DZ"
        }, {
            name: "AmericanSamoa",
            dial_code: "+1 684",
            code: "AS"
        }, {
            name: "Andorra",
            dial_code: "+376",
            code: "AD"
        }, {
            name: "Angola",
            dial_code: "+244",
            code: "AO"
        }, {
            name: "Anguilla",
            dial_code: "+1 264",
            code: "AI"
        }, {
            name: "Antigua and Barbuda",
            dial_code: "+1268",
            code: "AG"
        }, {
            name: "Argentina",
            dial_code: "+54",
            code: "AR"
        }, {
            name: "Armenia",
            dial_code: "+374",
            code: "AM"
        }, {
            name: "Aruba",
            dial_code: "+297",
            code: "AW"
        }, {
            name: "Australia",
            dial_code: "+61",
            code: "AU"
        }, {
            name: "Austria",
            dial_code: "+43",
            code: "AT"
        }, {
            name: "Azerbaijan",
            dial_code: "+994",
            code: "AZ"
        }, {
            name: "Bahamas",
            dial_code: "+1 242",
            code: "BS"
        }, {
            name: "Bahrain",
            dial_code: "+973",
            code: "BH"
        }, {
            name: "Bangladesh",
            dial_code: "+880",
            code: "BD"
        }, {
            name: "Barbados",
            dial_code: "+1 246",
            code: "BB"
        }, {
            name: "Belarus",
            dial_code: "+375",
            code: "BY"
        }, {
            name: "Belgium",
            dial_code: "+32",
            code: "BE"
        }, {
            name: "Belize",
            dial_code: "+501",
            code: "BZ"
        }, {
            name: "Benin",
            dial_code: "+229",
            code: "BJ"
        }, {
            name: "Bermuda",
            dial_code: "+1 441",
            code: "BM"
        }, {
            name: "Bhutan",
            dial_code: "+975",
            code: "BT"
        }, {
            name: "Bosnia and Herzegovina",
            dial_code: "+387",
            code: "BA"
        }, {
            name: "Botswana",
            dial_code: "+267",
            code: "BW"
        }, {
            name: "Brazil",
            dial_code: "+55",
            code: "BR"
        }, {
            name: "British Indian Ocean Territory",
            dial_code: "+246",
            code: "IO"
        }, {
            name: "Bulgaria",
            dial_code: "+359",
            code: "BG"
        }, {
            name: "Burkina Faso",
            dial_code: "+226",
            code: "BF"
        }, {
            name: "Burundi",
            dial_code: "+257",
            code: "BI"
        }, {
            name: "Cambodia",
            dial_code: "+855",
            code: "KH"
        }, {
            name: "Cameroon",
            dial_code: "+237",
            code: "CM"
        },
        {
            name: "Cape Verde",
            dial_code: "+238",
            code: "CV"
        }, {
            name: "Cayman Islands",
            dial_code: "+ 345",
            code: "KY"
        }, {
            name: "Central African Republic",
            dial_code: "+236",
            code: "CF"
        }, {
            name: "Chad",
            dial_code: "+235",
            code: "TD"
        }, {
            name: "Chile",
            dial_code: "+56",
            code: "CL"
        }, {
            name: "China",
            dial_code: "+86",
            code: "CN"
        }, {
            name: "Christmas Island",
            dial_code: "+61",
            code: "CX"
        }, {
            name: "Colombia",
            dial_code: "+57",
            code: "CO"
        }, {
            name: "Comoros",
            dial_code: "+269",
            code: "KM"
        }, {
            name: "Congo",
            dial_code: "+242",
            code: "CG"
        }, {
            name: "Cook Islands",
            dial_code: "+682",
            code: "CK"
        }, {
            name: "Costa Rica",
            dial_code: "+506",
            code: "CR"
        }, {
            name: "Croatia",
            dial_code: "+385",
            code: "HR"
        }, {
            name: "Cuba",
            dial_code: "+53",
            code: "CU"
        }, {
            name: "Cyprus",
            dial_code: "+537",
            code: "CY"
        }, {
            name: "Czech Republic",
            dial_code: "+420",
            code: "CZ"
        }, {
            name: "Denmark",
            dial_code: "+45",
            code: "DK"
        }, {
            name: "Djibouti",
            dial_code: "+253",
            code: "DJ"
        }, {
            name: "Dominica",
            dial_code: "+1 767",
            code: "DM"
        }, {
            name: "Dominican Republic",
            dial_code: "+1 849",
            code: "DO"
        }, {
            name: "Ecuador",
            dial_code: "+593",
            code: "EC"
        }, {
            name: "Egypt",
            dial_code: "+20",
            code: "EG"
        }, {
            name: "El Salvador",
            dial_code: "+503",
            code: "SV"
        }, {
            name: "Equatorial Guinea",
            dial_code: "+240",
            code: "GQ"
        }, {
            name: "Eritrea",
            dial_code: "+291",
            code: "ER"
        }, {
            name: "Estonia",
            dial_code: "+372",
            code: "EE"
        }, {
            name: "Ethiopia",
            dial_code: "+251",
            code: "ET"
        }, {
            name: "Faroe Islands",
            dial_code: "+298",
            code: "FO"
        }, {
            name: "Fiji",
            dial_code: "+679",
            code: "FJ"
        }, {
            name: "Finland",
            dial_code: "+358",
            code: "FI"
        }, {
            name: "France",
            dial_code: "+33",
            code: "FR"
        }, {
            name: "French Guiana",
            dial_code: "+594",
            code: "GF"
        }, {
            name: "French Polynesia",
            dial_code: "+689",
            code: "PF"
        }, {
            name: "Gabon",
            dial_code: "+241",
            code: "GA"
        }, {
            name: "Gambia",
            dial_code: "+220",
            code: "GM"
        }, {
            name: "Georgia",
            dial_code: "+995",
            code: "GE"
        }, {
            name: "Germany",
            dial_code: "+49",
            code: "DE"
        }, {
            name: "Ghana",
            dial_code: "+233",
            code: "GH"
        }, {
            name: "Gibraltar",
            dial_code: "+350",
            code: "GI"
        }, {
            name: "Greece",
            dial_code: "+30",
            code: "GR"
        }, {
            name: "Greenland",
            dial_code: "+299",
            code: "GL"
        }, {
            name: "Grenada",
            dial_code: "+1 473",
            code: "GD"
        }, {
            name: "Guadeloupe",
            dial_code: "+590",
            code: "GP"
        }, {
            name: "Guam",
            dial_code: "+1 671",
            code: "GU"
        }, {
            name: "Guatemala",
            dial_code: "+502",
            code: "GT"
        }, {
            name: "Guinea",
            dial_code: "+224",
            code: "GN"
        }, {
            name: "Guinea-Bissau",
            dial_code: "+245",
            code: "GW"
        }, {
            name: "Guyana",
            dial_code: "+595",
            code: "GY"
        }, {
            name: "Haiti",
            dial_code: "+509",
            code: "HT"
        }, {
            name: "Honduras",
            dial_code: "+504",
            code: "HN"
        }, {
            name: "Hungary",
            dial_code: "+36",
            code: "HU"
        }, {
            name: "Iceland",
            dial_code: "+354",
            code: "IS"
        }, {
            name: "India",
            dial_code: "+91",
            code: "IN"
        }, {
            name: "Indonesia",
            dial_code: "+62",
            code: "ID"
        }, {
            name: "Iraq",
            dial_code: "+964",
            code: "IQ"
        }, {
            name: "Ireland",
            dial_code: "+353",
            code: "IE"
        }, {
            name: "Israel",
            dial_code: "+972",
            code: "IL"
        }, {
            name: "Italy",
            dial_code: "+39",
            code: "IT"
        }, {
            name: "Jamaica",
            dial_code: "+1 876",
            code: "JM"
        }, {
            name: "Japan",
            dial_code: "+81",
            code: "JP"
        }, {
            name: "Jordan",
            dial_code: "+962",
            code: "JO"
        }, {
            name: "Kazakhstan",
            dial_code: "+7 7",
            code: "KZ"
        }, {
            name: "Kenya",
            dial_code: "+254",
            code: "KE"
        }, {
            name: "Kiribati",
            dial_code: "+686",
            code: "KI"
        }, {
            name: "Kuwait",
            dial_code: "+965",
            code: "KW"
        }, {
            name: "Kyrgyzstan",
            dial_code: "+996",
            code: "KG"
        }, {
            name: "Latvia",
            dial_code: "+371",
            code: "LV"
        }, {
            name: "Lebanon",
            dial_code: "+961",
            code: "LB"
        }, {
            name: "Lesotho",
            dial_code: "+266",
            code: "LS"
        }, {
            name: "Liberia",
            dial_code: "+231",
            code: "LR"
        }, {
            name: "Liechtenstein",
            dial_code: "+423",
            code: "LI"
        }, {
            name: "Lithuania",
            dial_code: "+370",
            code: "LT"
        }, {
            name: "Luxembourg",
            dial_code: "+352",
            code: "LU"
        }, {
            name: "Madagascar",
            dial_code: "+261",
            code: "MG"
        }, {
            name: "Malawi",
            dial_code: "+265",
            code: "MW"
        }, {
            name: "Malaysia",
            dial_code: "+60",
            code: "MY"
        }, {
            name: "Maldives",
            dial_code: "+960",
            code: "MV"
        }, {
            name: "Mali",
            dial_code: "+223",
            code: "ML"
        }, {
            name: "Malta",
            dial_code: "+356",
            code: "MT"
        }, {
            name: "Marshall Islands",
            dial_code: "+692",
            code: "MH"
        }, {
            name: "Martinique",
            dial_code: "+596",
            code: "MQ"
        }, {
            name: "Mauritania",
            dial_code: "+222",
            code: "MR"
        }, {
            name: "Mauritius",
            dial_code: "+230",
            code: "MU"
        }, {
            name: "Mayotte",
            dial_code: "+262",
            code: "YT"
        }, {
            name: "Mexico",
            dial_code: "+52",
            code: "MX"
        }, {
            name: "Monaco",
            dial_code: "+377",
            code: "MC"
        }, {
            name: "Mongolia",
            dial_code: "+976",
            code: "MN"
        }, {
            name: "Montenegro",
            dial_code: "+382",
            code: "ME"
        }, {
            name: "Montserrat",
            dial_code: "+1664",
            code: "MS"
        }, {
            name: "Morocco",
            dial_code: "+212",
            code: "MA"
        }, {
            name: "Myanmar",
            dial_code: "+95",
            code: "MM"
        }, {
            name: "Namibia",
            dial_code: "+264",
            code: "NA"
        }, {
            name: "Nauru",
            dial_code: "+674",
            code: "NR"
        }, {
            name: "Nepal",
            dial_code: "+977",
            code: "NP"
        }, {
            name: "Netherlands",
            dial_code: "+31",
            code: "NL"
        }, {
            name: "Netherlands Antilles",
            dial_code: "+599",
            code: "AN"
        }, {
            name: "New Caledonia",
            dial_code: "+687",
            code: "NC"
        }, {
            name: "New Zealand",
            dial_code: "+64",
            code: "NZ"
        }, {
            name: "Nicaragua",
            dial_code: "+505",
            code: "NI"
        }, {
            name: "Niger",
            dial_code: "+227",
            code: "NE"
        }, {
            name: "Nigeria",
            dial_code: "+234",
            code: "NG"
        }, {
            name: "Niue",
            dial_code: "+683",
            code: "NU"
        }, {
            name: "Norfolk Island",
            dial_code: "+672",
            code: "NF"
        }, {
            name: "Northern Mariana Islands",
            dial_code: "+1 670",
            code: "MP"
        }, {
            name: "Norway",
            dial_code: "+47",
            code: "NO"
        }, {
            name: "Oman",
            dial_code: "+968",
            code: "OM"
        }, {
            name: "Pakistan",
            dial_code: "+92",
            code: "PK"
        }, {
            name: "Palau",
            dial_code: "+680",
            code: "PW"
        }, {
            name: "Panama",
            dial_code: "+507",
            code: "PA"
        }, {
            name: "Papua New Guinea",
            dial_code: "+675",
            code: "PG"
        }, {
            name: "Paraguay",
            dial_code: "+595",
            code: "PY"
        }, {
            name: "Peru",
            dial_code: "+51",
            code: "PE"
        }, {
            name: "Philippines",
            dial_code: "+63",
            code: "PH"
        }, {
            name: "Poland",
            dial_code: "+48",
            code: "PL"
        }, {
            name: "Portugal",
            dial_code: "+351",
            code: "PT"
        }, {
            name: "Puerto Rico",
            dial_code: "+1 939",
            code: "PR"
        }, {
            name: "Qatar",
            dial_code: "+974",
            code: "QA"
        }, {
            name: "Romania",
            dial_code: "+40",
            code: "RO"
        }, {
            name: "Rwanda",
            dial_code: "+250",
            code: "RW"
        }, {
            name: "Samoa",
            dial_code: "+685",
            code: "WS"
        }, {
            name: "San Marino",
            dial_code: "+378",
            code: "SM"
        }, {
            name: "Saudi Arabia",
            dial_code: "+966",
            code: "SA"
        }, {
            name: "Senegal",
            dial_code: "+221",
            code: "SN"
        }, {
            name: "Serbia",
            dial_code: "+381",
            code: "RS"
        }, {
            name: "Seychelles",
            dial_code: "+248",
            code: "SC"
        }, {
            name: "Sierra Leone",
            dial_code: "+232",
            code: "SL"
        }, {
            name: "Singapore",
            dial_code: "+65",
            code: "SG"
        }, {
            name: "Slovakia",
            dial_code: "+421",
            code: "SK"
        }, {
            name: "Slovenia",
            dial_code: "+386",
            code: "SI"
        }, {
            name: "Solomon Islands",
            dial_code: "+677",
            code: "SB"
        }, {
            name: "South Africa",
            dial_code: "+27",
            code: "ZA"
        }, {
            name: "South Georgia and the South Sandwich Islands",
            dial_code: "+500",
            code: "GS"
        }, {
            name: "Spain",
            dial_code: "+34",
            code: "ES"
        }, {
            name: "Sri Lanka",
            dial_code: "+94",
            code: "LK"
        }, {
            name: "Sudan",
            dial_code: "+249",
            code: "SD"
        }, {
            name: "Suriname",
            dial_code: "+597",
            code: "SR"
        }, {
            name: "Swaziland",
            dial_code: "+268",
            code: "SZ"
        }, {
            name: "Sweden",
            dial_code: "+46",
            code: "SE"
        }, {
            name: "Switzerland",
            dial_code: "+41",
            code: "CH"
        }, {
            name: "Tajikistan",
            dial_code: "+992",
            code: "TJ"
        }, {
            name: "Thailand",
            dial_code: "+66",
            code: "TH"
        }, {
            name: "Togo",
            dial_code: "+228",
            code: "TG"
        }, {
            name: "Tokelau",
            dial_code: "+690",
            code: "TK"
        }, {
            name: "Tonga",
            dial_code: "+676",
            code: "TO"
        }, {
            name: "Trinidad and Tobago",
            dial_code: "+1 868",
            code: "TT"
        }, {
            name: "Tunisia",
            dial_code: "+216",
            code: "TN"
        }, {
            name: "Turkey",
            dial_code: "+90",
            code: "TR"
        }, {
            name: "Turkmenistan",
            dial_code: "+993",
            code: "TM"
        }, {
            name: "Turks and Caicos Islands",
            dial_code: "+1 649",
            code: "TC"
        }, {
            name: "Tuvalu",
            dial_code: "+688",
            code: "TV"
        }, {
            name: "Uganda",
            dial_code: "+256",
            code: "UG"
        }, {
            name: "Ukraine",
            dial_code: "+380",
            code: "UA"
        }, {
            name: "United Arab Emirates",
            dial_code: "+971",
            code: "AE"
        }, {
            name: "United Kingdom",
            dial_code: "+44",
            code: "GB"
        }, {
            name: "Uruguay",
            dial_code: "+598",
            code: "UY"
        }, {
            name: "Uzbekistan",
            dial_code: "+998",
            code: "UZ"
        }, {
            name: "Vanuatu",
            dial_code: "+678",
            code: "VU"
        }, {
            name: "Wallis and Futuna",
            dial_code: "+681",
            code: "WF"
        }, {
            name: "Yemen",
            dial_code: "+967",
            code: "YE"
        }, {
            name: "Zambia",
            dial_code: "+260",
            code: "ZM"
        }, {
            name: "Zimbabwe",
            dial_code: "+263",
            code: "ZW"
        }, {
            name: "land Islands",
            dial_code: "",
            code: "AX"
        }, {
            name: "Antarctica",
            dial_code: null,
            code: "AQ"
        }, {
            name: "Bolivia, Plurinational State of",
            dial_code: "+591",
            code: "BO"
        }, {
            name: "Brunei Darussalam",
            dial_code: "+673",
            code: "BN"
        }, {
            name: "Cocos (Keeling) Islands",
            dial_code: "+61",
            code: "CC"
        }, {
            name: "Congo, The Democratic Republic of the",
            dial_code: "+243",
            code: "CD"
        }, {
            name: "Cote d'Ivoire",
            dial_code: "+225",
            code: "CI"
        }, {
            name: "Falkland Islands (Malvinas)",
            dial_code: "+500",
            code: "FK"
        }, {
            name: "Guernsey",
            dial_code: "+44",
            code: "GG"
        }, {
            name: "Holy See (Vatican City State)",
            dial_code: "+379",
            code: "VA"
        }, {
            name: "Hong Kong",
            dial_code: "+852",
            code: "HK"
        }, {
            name: "Iran, Islamic Republic of",
            dial_code: "+98",
            code: "IR"
        }, {
            name: "Isle of Man",
            dial_code: "+44",
            code: "IM"
        }, {
            name: "Jersey",
            dial_code: "+44",
            code: "JE"
        }, {
            name: "Korea, Democratic People's Republic of",
            dial_code: "+850",
            code: "KP"
        }, {
            name: "Korea, Republic of",
            dial_code: "+82",
            code: "KR"
        }, {
            name: "Lao People's Democratic Republic",
            dial_code: "+856",
            code: "LA"
        }, {
            name: "Libyan Arab Jamahiriya",
            dial_code: "+218",
            code: "LY"
        }, {
            name: "Macao",
            dial_code: "+853",
            code: "MO"
        }, {
            name: "Macedonia, The Former Yugoslav Republic of",
            dial_code: "+389",
            code: "MK"
        }, {
            name: "Micronesia, Federated States of",
            dial_code: "+691",
            code: "FM"
        }, {
            name: "Moldova, Republic of",
            dial_code: "+373",
            code: "MD"
        }, {
            name: "Mozambique",
            dial_code: "+258",
            code: "MZ"
        }, {
            name: "Palestinian Territory, Occupied",
            dial_code: "+970",
            code: "PS"
        }, {
            name: "Pitcairn",
            dial_code: "+872",
            code: "PN"
        }, {
            name: "Réunion",
            dial_code: "+262",
            code: "RE"
        }, {
            name: "Russia",
            dial_code: "+7",
            code: "RU"
        }, {
            name: "Saint Barthélemy",
            dial_code: "+590",
            code: "BL"
        }, {
            name: "Saint Helena, Ascension and Tristan Da Cunha",
            dial_code: "+290",
            code: "SH"
        }, {
            name: "Saint Kitts and Nevis",
            dial_code: "+1 869",
            code: "KN"
        }, {
            name: "Saint Lucia",
            dial_code: "+1 758",
            code: "LC"
        }, {
            name: "Saint Martin",
            dial_code: "+590",
            code: "MF"
        }, {
            name: "Saint Pierre and Miquelon",
            dial_code: "+508",
            code: "PM"
        }, {
            name: "Saint Vincent and the Grenadines",
            dial_code: "+1 784",
            code: "VC"
        }, {
            name: "Sao Tome and Principe",
            dial_code: "+239",
            code: "ST"
        }, {
            name: "Somalia",
            dial_code: "+252",
            code: "SO"
        }, {
            name: "Svalbard and Jan Mayen",
            dial_code: "+47",
            code: "SJ"
        }, {
            name: "Syrian Arab Republic",
            dial_code: "+963",
            code: "SY"
        }, {
            name: "Taiwan, Province of China",
            dial_code: "+886",
            code: "TW"
        }, {
            name: "Tanzania, United Republic of",
            dial_code: "+255",
            code: "TZ"
        }, {
            name: "Timor-Leste",
            dial_code: "+670",
            code: "TL"
        }, {
            name: "Venezuela, Bolivarian Republic of",
            dial_code: "+58",
            code: "VE"
        }, {
            name: "Viet Nam",
            dial_code: "+84",
            code: "VN"
        }, {
            name: "Virgin Islands, British",
            dial_code: "+1 284",
            code: "VG"
        }, {
            name: "Virgin Islands, U.S.",
            dial_code: "+1 340",
            code: "VI"
        }
    ];
    return Constant;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcmProvider = /** @class */ (function () {
    function FcmProvider(http, firebaseNative, platfrom, afs, matchedprovider) {
        this.http = http;
        this.firebaseNative = firebaseNative;
        this.platfrom = platfrom;
        this.afs = afs;
        this.matchedprovider = matchedprovider;
        console.log("Hello FcmProvider Provider");
    }
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = "";
                        if (!this.platfrom.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log("this is android device", token);
                        _a.label = 2;
                    case 2:
                        if (!this.platfrom.is('ios')) return [3 /*break*/, 5];
                        console.log("this is ios device");
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        console.log("this is token info", token);
                        return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        var myid = this.matchedprovider.getUserinfo()['id'];
        if (!token)
            return;
        var deviceRef = this.afs.collection('token');
        var docData = {
            tokeninfo: token,
            userid: myid
        };
        console.log("this is docdata info", docData);
        return deviceRef.doc(myid).set(docData);
    };
    ///////////////////// save user category info in welcomgeo page/////////////////
    FcmProvider.prototype.saveUserCategoryInfos = function (infos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myid = _this.matchedprovider.getUserinfo()['id'];
            var updatedata = {
                usercategory: infos,
                firstlogin: true
            };
            _this.afs.collection('users').doc(myid).update(updatedata).then(function (result) {
                resolve(true);
            }).catch(function (er) {
                reject(false);
            });
        });
    };
    ///////////////////////get user category info from firestore////////////////////////
    FcmProvider.prototype.getUserCategoryList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var mymail = _this.matchedprovider.getUserinfo()['email'];
            _this.afs
                .collection('users', function (res) { return res.where('email', '==', mymail); })
                .valueChanges()
                .subscribe(function (snapshot) {
                var categorylist = snapshot[0]['usercategory'];
                console.log("thhis is category list", categorylist);
                resolve(categorylist);
            }, function (err) {
                reject(err);
            });
        });
    };
    //save and get user  swipe right status to firebase
    FcmProvider.prototype.saveUserSwipeStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myid = _this.matchedprovider.getUserinfo()['id'];
            var updatedata = {
                isSwipeRight: true
            };
            _this.afs.collection('users').doc(myid).update(updatedata).then(function (result) {
                resolve(true);
            }).catch(function (er) {
                reject(false);
            });
        });
    };
    FcmProvider.prototype.getUserSwipeStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var mymail = _this.matchedprovider.getUserinfo()['email'];
            _this.afs
                .collection('users', function (res) { return res.where('email', '==', mymail); })
                .valueChanges()
                .subscribe(function (snapshot) {
                console.log("fdfdfdfeeee=======>", snapshot[0]['isSwipeRight']);
                if (snapshot[0]['isSwipeRight'] == null) {
                    resolve(false);
                }
                else {
                    resolve(snapshot[0]['isSwipeRight']);
                }
            }, function (err) {
                reject(err);
            });
        });
    };
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0__matched_matched__["a" /* MatchedProvider */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmsProvider = /** @class */ (function () {
    function SmsProvider(http, sms) {
        this.http = http;
        this.sms = sms;
        console.log('Hello SmsProvider Provider');
    }
    SmsProvider.prototype.sendTextMessages = function (phonenumber, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("this is phonenumbers array", phonenumber);
            var options = {
                replaceLineBreaks: false,
                android: {
                    intent: 'INTENT' // Opens Default sms app
                    //intent: '' // Sends sms without opening default sms app
                },
                intent: 'INTENT'
            };
            console.log("this is persmision");
            _this.sms
                .send(phonenumber, message, options)
                .then(function (succ) {
                resolve(true);
            }, function (err) {
                console.log("this si multi smsss error", err);
                reject(false);
            })
                .catch(function (err) {
                console.log("this si multi sms error", err);
                reject(err);
            });
        });
    };
    SmsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */]])
    ], SmsProvider);
    return SmsProvider;
}());

//# sourceMappingURL=sms.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bottomtabbar/bottomtabbar.module": [
		560,
		29
	],
	"../pages/chatdetail/chatdetail.module": [
		561,
		28
	],
	"../pages/chatroom/chatroom.module": [
		562,
		27
	],
	"../pages/chatting/chatting.module": [
		563,
		4
	],
	"../pages/completepage/completepage.module": [
		564,
		26
	],
	"../pages/friends/friends.module": [
		565,
		12
	],
	"../pages/groupchatroom/groupchatroom.module": [
		566,
		13
	],
	"../pages/home/home.module": [
		567,
		25
	],
	"../pages/inviataion-detail/inviataion-detail.module": [
		568,
		11
	],
	"../pages/inviteplace/inviteplace.module": [
		569,
		3
	],
	"../pages/inviteturtial/inviteturtial.module": [
		589,
		24
	],
	"../pages/login/login.module": [
		570,
		23
	],
	"../pages/main-detail/main-detail.module": [
		571,
		10
	],
	"../pages/main/main.module": [
		572,
		9
	],
	"../pages/match/match.module": [
		573,
		1
	],
	"../pages/matchdate/matchdate.module": [
		574,
		22
	],
	"../pages/meetingdetail/meetingdetail.module": [
		575,
		21
	],
	"../pages/new-invite/new-invite.module": [
		576,
		2
	],
	"../pages/placemap/placemap.module": [
		577,
		20
	],
	"../pages/placesearch/placesearch.module": [
		578,
		8
	],
	"../pages/profile/profile.module": [
		579,
		7
	],
	"../pages/settime/settime.module": [
		580,
		19
	],
	"../pages/setting/setting.module": [
		581,
		6
	],
	"../pages/signin/signin.module": [
		582,
		18
	],
	"../pages/signup/signup.module": [
		583,
		17
	],
	"../pages/verifyphone/verifyphone.module": [
		584,
		16
	],
	"../pages/walkthrough/walkthrough.module": [
		585,
		15
	],
	"../pages/welcome/welcome.module": [
		586,
		0
	],
	"../pages/welcomegeo/welcomegeo.module": [
		587,
		14
	],
	"../pages/welcomeinvite/welcomeinvite.module": [
		588,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 255;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocatinoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constant_constant__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeolocatinoProvider = /** @class */ (function () {
    function GeolocatinoProvider(http, geolocatin, nativeGeo, httpnative) {
        this.http = http;
        this.geolocatin = geolocatin;
        this.nativeGeo = nativeGeo;
        this.httpnative = httpnative;
        console.log('Hello GeolocatinoProvider Provider');
    }
    ////////////// get current user location info//////////////
    GeolocatinoProvider.prototype.getUserPosition = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.options = {
                enableHighAccuracy: true
            };
            _this.geolocatin.getCurrentPosition(_this.options).then(function (pos) {
                _this.currentPos = pos;
                console.log(pos);
                // let postalcode = this.changeLocationToZipCode(pos.coords.latitude, pos.coords.longitude)
                resolve(pos);
            }, function (error) {
                reject(error.message);
                console.log('error : ' + error.message);
            }).catch(function (err) {
                reject(err);
                console.log('error : ' + err);
            });
        });
    };
    GeolocatinoProvider.prototype.changeZipCodeToLocation = function (zipcode) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeGeo.forwardGeocode(zipcode).then(function (succ) {
                console.log('vdvdvdvdvdvdvd====================================');
                console.log(succ);
                console.log('====================================');
                resolve(succ);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // function : get zip code from lat, long using nativegeocoderreverse
    GeolocatinoProvider.prototype.changeLocationToZipCode = function (lat, long) {
        this.nativeGeo
            .reverseGeocode(lat, long)
            .then(function (result) {
            console.log('result', result[0].postalCode);
            return result[0].postalCode;
        })
            .catch(function (err) {
            console.log('errorcode', err);
        });
        //   this.nativeGeocoder.forwardGeocode('Berlin')
        // .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
        // .catch((error: any) => console.log(error));
    };
    GeolocatinoProvider.prototype.getplacePhotos = function (placeId) {
        var _this = this;
        var detail_url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId + "&fields=photo&language=nl&key=" + __WEBPACK_IMPORTED_MODULE_0__Constant_constant__["a" /* Constant */].googleKey;
        return new Promise(function (resolve, reject) {
            console.log('this is url', detail_url);
            _this.httpnative.get(detail_url, '', '').then(function (result) {
                var data = JSON.parse(result.data);
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /////////////////////getplacedetails///////////////////////
    GeolocatinoProvider.prototype.getplaceDetails = function (placeId) {
        var _this = this;
        var detail_url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId + "&language=nl&key=" + __WEBPACK_IMPORTED_MODULE_0__Constant_constant__["a" /* Constant */].googleKey;
        return new Promise(function (resolve, reject) {
            _this.httpnative.get(detail_url, '', '').then(function (result) {
                var data = JSON.parse(result.data);
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    GeolocatinoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], GeolocatinoProvider);
    return GeolocatinoProvider;
}());

//# sourceMappingURL=geolocatino.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    AlertService.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant_constant__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the YelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var YelpProvider = /** @class */ (function () {
    function YelpProvider(http, httpplugin) {
        this.http = http;
        this.httpplugin = httpplugin;
        console.log('Hello YelpProvider Provider');
    }
    YelpProvider.prototype.getNearByYelpInfoWithoutCategory = function (lati, longi, searchkey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpSerachUrl + "latitude=" + lati + "&longitude=" + longi + "&term=" + searchkey + "&radius=40000";
            // let url = Constant.yelpSerachUrl + "latitude=" + "22.3964" + "&longitude=" + "114.1095" + "&term=" + searchkey + "&radius=40000"
            console.log("this is result data", url);
            _this.http.setDataSerializer('urlencoded');
            var headers = {
                'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpToken
            };
            _this.http.get(url, {}, headers).then(function (data) {
                resolve(JSON.parse(data.data));
                console.log("this is result data", data.data);
            }, function (error) {
                reject(error);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    YelpProvider.prototype.getTotalYelpNumber = function (latitu, longti, checkList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var searchkey = _this.generateCategoryString(checkList);
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpSerachUrl + "categories=" + searchkey + "&limit=25&latitude=" + latitu + "&longitude=" + longti;
            // let url = Constant.yelpSerachUrl + "categories=" + searchkey + "&limit=25&latitude=" + "22.3964" + "&longitude=" + "114.1095"
            // Native Method
            _this.http.setDataSerializer('urlencoded');
            var headers = {
                'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpToken
            };
            _this.http.get(url, {}, headers).then(function (data) {
                var temp = JSON.parse(data.data);
                resolve(temp['total']);
            }, function (error) {
                reject(error);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    YelpProvider.prototype.getNearByYelpInfo = function (latitu, longti, checkList, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var searchkey = _this.generateCategoryString(checkList);
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpSerachUrl + "categories=" + searchkey + "&offset=" + offset + "&limit=25&latitude=" + latitu + "&longitude=" + longti;
            // let url = Constant.yelpSerachUrl + "categories=" + searchkey + "&offset=" + offset + "&limit=25&latitude=" + "22.3964" + "&longitude=" + "114.1095"
            // Native Method
            _this.http.setDataSerializer('urlencoded');
            var headers = {
                'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpToken
            };
            _this.http.get(url, {}, headers).then(function (data) {
                resolve(JSON.parse(data.data));
                console.log("this is result data", data.data);
            }, function (error) {
                reject(error);
            }).catch(function (error) {
                reject(error);
            });
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
        });
    };
    YelpProvider.prototype.getYelpDetailInfo = function (placeid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setDataSerializer('urlencoded');
            var headers = {
                'Authorization': 'Bearer ' + __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpToken
            };
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].yelpDetailUrl + placeid;
            // let url = Constant.yelpDetailUrl + 'KkAVX3Wb7E3lP5F_f_8pXg'
            console.log("this is result data", url);
            _this.http.get(url, {}, headers).then(function (data) {
                console.log("this is result data", JSON.parse(data.data));
                resolve(JSON.parse(data.data));
            }, function (error) {
                reject(error);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    YelpProvider.prototype.generateCategoryString = function (checkList) {
        var checkstring = '';
        checkList.forEach(function (element) {
            checkstring = checkstring + element + ",";
        });
        checkstring = checkstring.slice(0, checkstring.length - 1);
        // console.log("this is check list", checkstring)
        return checkstring;
    };
    YelpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], YelpProvider);
    return YelpProvider;
}());

//# sourceMappingURL=yelp.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouponProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant_constant__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GrouponProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GrouponProvider = /** @class */ (function () {
    function GrouponProvider(http, httpplugin) {
        this.http = http;
        this.httpplugin = httpplugin;
        console.log('Hello GrouponProvider Provider');
    }
    GrouponProvider.prototype.getGrouponDatawithoutcategory = function (lati, longi) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].grouponUrl + "&lat=" + lati + "&lng=" + longi;
            console.log("this is result data", url);
            _this.httpplugin.setDataSerializer('urlencoded');
            _this.httpplugin.get(url, {}, {}).then(function (res) {
                console.log("this is group data", res.data);
                resolve(JSON.parse(res.data));
            }).catch(function (err) {
                console.log("this is group error", err);
            });
        });
    };
    GrouponProvider.prototype.getGrouponNumbers = function (lati, longi, searchkey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var category_key = _this.generateSearchKey(searchkey);
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].grouponUrl + "&lat=" + lati + "&lng=" + longi + category_key + "&limit=25";
            // let url = Constant.grouponUrl + "&lat=" + "22.3964" + "&lng=" + "114.1095" + category_key +"&limit=25"
            _this.httpplugin.setDataSerializer('urlencoded');
            _this.httpplugin.get(url, {}, {}).then(function (res) {
                console.log("this is group data", res.data);
                var result = JSON.parse(res.data);
                resolve(result['pagination']['count']);
            }).catch(function (err) {
                console.log("this is group error", err);
            });
        });
    };
    GrouponProvider.prototype.getGrouponData = function (lati, longi, searchkey, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var category_key = _this.generateSearchKey(searchkey);
            var url = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].grouponUrl + "&lat=" + lati + "&lng=" + longi + category_key + "&offset=" + offset + "&limit=25";
            // let url = Constant.grouponUrl + "&lat=" + "22.3964" + "&lng=" + "114.1095" + category_key + "&offset=" + offset +"&limit=25"
            console.log("this is result data", url);
            _this.httpplugin.setDataSerializer('urlencoded');
            _this.httpplugin.get(url, {}, {}).then(function (res) {
                console.log("this is group data", res.data);
                resolve(JSON.parse(res.data));
            }).catch(function (err) {
                console.log("this is group error", err);
            });
        });
    };
    GrouponProvider.prototype.generateSearchKey = function (searcharray) {
        var checkstring = '';
        searcharray.forEach(function (element) {
            switch (element) {
                case "restaurants":
                    checkstring = checkstring + '&filters=category:food-and-drink';
                    break;
                case "arts":
                    checkstring = checkstring + '&filters=category:things-to-do';
                    break;
                case "active":
                    checkstring = checkstring + '&filters=category:health-and-fitness';
                    break;
                case "beautysvc":
                    checkstring = checkstring + '&filters=category:beauty-and-spas';
                    break;
                case "bars":
                    checkstring = checkstring + '&filters=category:food-and-drink';
                    break;
                default:
                    break;
            }
        });
        console.log("this is check list", checkstring);
        return checkstring;
    };
    GrouponProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], GrouponProvider);
    return GrouponProvider;
}());

//# sourceMappingURL=groupon.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_sort__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__removecommand_removecommand__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alphabeta_alphabeta__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_2__removecommand_removecommand__["a" /* RemovecommandPipe */],
                __WEBPACK_IMPORTED_MODULE_3__alphabeta_alphabeta__["a" /* AlphabetaPipe */],
                __WEBPACK_IMPORTED_MODULE_3__alphabeta_alphabeta__["a" /* AlphabetaPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_2__removecommand_removecommand__["a" /* RemovecommandPipe */],
                __WEBPACK_IMPORTED_MODULE_3__alphabeta_alphabeta__["a" /* AlphabetaPipe */],
                __WEBPACK_IMPORTED_MODULE_3__alphabeta_alphabeta__["a" /* AlphabetaPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_admob_pro__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AdmobserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdmobserviceProvider = /** @class */ (function () {
    function AdmobserviceProvider(http, admobpro, platform) {
        this.http = http;
        this.admobpro = admobpro;
        this.platform = platform;
        console.log('Hello AdmobserviceProvider Provider');
    }
    AdmobserviceProvider.prototype.showadmob = function (position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var key;
            if (_this.platform.is('android')) {
                key = 'ca-app-pub-6863402298027651/5113279399';
            }
            if (_this.platform.is('ios')) {
                key = 'ca-app-pub-6863402298027651/8234266751';
            }
            if (_this.platform.height() == 812) {
                position = position + 32;
            }
            else {
                position = position - 4;
            }
            console.log('this is platform height', _this.platform.height());
            _this.admobpro
                .createBanner({
                license: 'and1man07@gmail.com/b098373eeecb74cf9841c62260ca454d',
                adId: key,
                position: _this.admobpro.AD_POSITION.POS_XY,
                overlap: true,
                x: 0,
                y: position
            })
                .then(function (res) {
                resolve(res);
            })
                .catch(function (er) {
                reject(er);
            });
        });
    };
    AdmobserviceProvider.prototype.removeAdmob = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.admobpro.removeBanner();
            resolve(true);
        });
    };
    AdmobserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_admob_pro__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */]])
    ], AdmobserviceProvider);
    return AdmobserviceProvider;
}());

//# sourceMappingURL=admobservice.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sms_sms__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_notification__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chatprovider_chatprovider__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the GroupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GroupProvider = /** @class */ (function () {
    function GroupProvider(http, afs, matchprovider, authprovider, smsprovider, notiprovider, chatprovider) {
        this.http = http;
        this.afs = afs;
        this.matchprovider = matchprovider;
        this.authprovider = authprovider;
        this.smsprovider = smsprovider;
        this.notiprovider = notiprovider;
        this.chatprovider = chatprovider;
        console.log('Hello GroupProvider Provider');
    }
    // getGroupChatMessages(groupid) {
    //   return new Promise((resolve, reject) => {
    //     this.afs.collection('groupchat').doc(groupid).collection('messages').valueChanges().subscribe(res => {
    //       console.log("this is group chat message info", res)
    //     })
    //   })
    // }
    GroupProvider.prototype.saveGroupAcceptMembers = function () {
    };
    GroupProvider.prototype.saveGroupChatMessages = function (message, groupid, type) {
        var _this = this;
        var myid = this.matchprovider.getUserinfo()['id'];
        var myphoto = this.matchprovider.getUserinfo()['photoUrl'];
        var time = this.formatAMPM(new Date());
        var date = this.formatDate(new Date());
        var autokey = this.afs.createId();
        return new Promise(function (resolve, reject) {
            var chatdata = {
                sender: myid,
                receiver: '',
                message: message,
                timestamp: __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"].FieldValue.serverTimestamp(),
                timeofmsg: time,
                dateofmsg: date,
                type: type,
                key: autokey,
                photo: myphoto,
                placename: ''
            };
            console.log('this is message info', message, groupid, type);
            _this.afs
                .collection('groupchat')
                .doc(groupid)
                .collection('messages')
                .doc(autokey)
                .set(chatdata)
                .then(function (suc) {
                _this.sendPushToGroupUsers(groupid, message)
                    .then(function (re) {
                    resolve(true);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    GroupProvider.prototype.sendPushToGroupUsers = function (groupid, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myid = _this.matchprovider.getUserinfo()['id'];
            _this.getGroupMemebersInfos(groupid)
                .then(function (resu) {
                var i = 0;
                resu.forEach(function (element) {
                    i++;
                    _this.authprovider
                        .getMyFriend(myid, element['id'])
                        .then(function (res) {
                        // send notification to other group members
                        if (myid != element['id']) {
                            _this.notiprovider.sendFriendRequest('Received Message!', element['id'], message);
                        }
                        if (i == resu.length) {
                            resolve(res);
                        }
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            })
                .catch(function (er) { });
        });
    };
    GroupProvider.prototype.generateGroupChatMessage = function (groupid, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myid = _this.getMyInfo['id'];
            var groupRef = _this.afs
                .collection('GroupChat')
                .doc(groupid)
                .collection(myid);
            groupRef.add({ message: message, userkey: myid });
        });
    };
    GroupProvider.prototype.saveGroupPlaceInfo = function (placeinfo, groupid) {
        var _this = this;
        console.log('this is place info array infos=====>', placeinfo, groupid);
        return new Promise(function (resolve, reject) {
            var groupplaceRef = _this.afs
                .collection('Group')
                .doc(groupid)
                .collection('groupplaces')
                .doc(placeinfo['place_id']);
            groupplaceRef.ref
                .get()
                .then(function (data) {
                console.log('this is group invite test info');
                var savedata = {};
                if (placeinfo['place_dealurl']) {
                    savedata = {
                        placeid: placeinfo['place_id'],
                        placename: placeinfo['place_name'],
                        placeurl: placeinfo['place_dealurl'],
                        placeprice: placeinfo['place_price'],
                        placedisprice: placeinfo['place_discount_price'],
                        placephoto: placeinfo['place_photo']
                    };
                }
                else {
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
                }
                else {
                    resolve(data);
                }
            })
                .catch(function (err) {
                console.log('this is group invite error', err);
            });
        });
    };
    GroupProvider.prototype.saveGroupInfodata = function (placeinfo, userarray, type) {
        var _this = this;
        return new Promise(function (resolve, rejecct) {
            var i = 0;
            userarray.forEach(function (element) {
                i++;
                _this.saveGroupPlaceInfo(placeinfo, element['groupid'])
                    .then(function (suc) {
                    if (type == 'newInvite') {
                        _this.chatprovider.addMeetingWhenGroup(placeinfo['place_name'], placeinfo['place_photo'], "meeting", placeinfo['place_time'], placeinfo['place_time'], element['groupid']);
                    }
                    if (i == userarray.length) {
                        resolve(element);
                    }
                })
                    .catch(function (e) {
                    rejecct(e);
                });
            });
            //
        });
    };
    // compare group members info , in other words we have to avoid create group with same users again
    GroupProvider.prototype.compareGroupMembersInfo = function (usersarray) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var temparray = [];
            var i = 0;
            usersarray.forEach(function (element) {
                i++;
                temparray.push(element['id']);
                if (i == usersarray.length) {
                    _this.getMygroups()
                        .then(function (result) {
                        if (result.length == 0) {
                            resolve(result);
                        }
                        else {
                            result.forEach(function (element) {
                                j++;
                                console.log('this is caompare array===================>', element, temparray);
                                _this.generateUserIdsArray(element, temparray)
                                    .then(function (res) {
                                    if (j == result.length) {
                                        resolve(true);
                                    }
                                })
                                    .catch(function (er) {
                                    console.log('this is same arrayfefefefef');
                                    reject(false);
                                });
                            });
                        }
                        var j = 0;
                    })
                        .catch(function (er) { return reject(false); });
                }
            });
        });
    };
    // generate userID array from mygroupinfo
    GroupProvider.prototype.generateUserIdsArray = function (groupinfo, comparearray) {
        return new Promise(function (resolve, reject) {
            var temparray = [];
            var i = 0;
            if (groupinfo['member'].length > 0) {
                groupinfo['member'].forEach(function (element) {
                    i++;
                    temparray.push(element['id']);
                    if (i == groupinfo['member'].length) {
                        var result = comparearray.filter(function (item) { return temparray.indexOf(item) < 0; });
                        if (result.length > 0) {
                            resolve(true);
                        }
                        else {
                            console.log('this is same array');
                            reject(false);
                        }
                    }
                });
            }
            else {
                reject(false);
            }
        });
    };
    // generate group info
    GroupProvider.prototype.generateGroup = function (placeinfo, userArray) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var autokey = _this.afs.createId();
            var data = {};
            if (placeinfo['place_dealurl']) {
                data = {
                    placeid: placeinfo['place_id'],
                    placename: placeinfo['place_name'],
                    placeurl: placeinfo['place_dealurl'],
                    placeprice: placeinfo['place_price'],
                    placedisprice: placeinfo['place_discount_price'],
                    placephoto: placeinfo['place_photo']
                };
            }
            else {
                data = {
                    placeid: placeinfo['place_id'],
                    placename: placeinfo['place_name'],
                    placeurl: placeinfo['place_url'],
                    placeprice: '',
                    placedisprice: '',
                    placephoto: placeinfo['place_photo']
                };
            }
            var myinfo = _this.getMyInfo();
            userArray.push(myinfo);
            var groupRef = _this.afs.collection('Group').doc(autokey);
            // this.compareGroupMembersInfo(userArray)
            //   .then(res => {
            groupRef
                .collection('groupplaces')
                .doc(placeinfo['place_id'])
                .set(data)
                .then(function (result) {
                var i = 0;
                var sms_str = [];
                userArray.forEach(function (element) {
                    i++;
                    var data_element = {
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
                                .then(function (res) {
                                _this.generateMyGroup(autokey, element['phoneNumbers']);
                                if (i == userArray.length) {
                                    resolve({ message: sms_str, groupid: autokey });
                                }
                            })
                                .catch(function (er) {
                                console.log('this is userarray info', er);
                                reject(er);
                            });
                        }
                        else {
                            // if user is not friend
                            _this.authprovider
                                .saveFriends(element['phoneNumbers'], element)
                                .then(function (result) {
                                groupRef
                                    .collection('groupmembers')
                                    .doc(element['phoneNumbers'])
                                    .set(data_element)
                                    .then(function (res) {
                                    _this.generateMyGroup(autokey, element['phoneNumbers']);
                                    if (i == userArray.length) {
                                        {
                                            resolve({ message: sms_str, groupid: autokey });
                                        }
                                    }
                                })
                                    .catch(function (er) {
                                    console.log('this is userarray info', er);
                                    reject(er);
                                });
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        }
                    }
                    else {
                        sms_str.push(element['phoneNumbers']);
                        groupRef
                            .collection('groupmembers')
                            .doc(element['phoneNumbers'])
                            .set(data_element)
                            .then(function (res) {
                            _this.generateMyGroup(autokey, element['phoneNumbers']);
                            if (i == userArray.length) {
                                resolve({ message: sms_str, groupid: autokey });
                            }
                        })
                            .catch(function (er) {
                            console.log('this is userarray info', er);
                            reject(er);
                        });
                    }
                    // if user is friend
                });
            })
                .catch(function (err) {
                reject(false);
            });
            // })
            // .catch(err => {
            //   reject('already group exist');
            // });
        });
    };
    // generate mygroup collection infos
    GroupProvider.prototype.generateMyGroup = function (groupid, userid) {
        var mygroupRef = this.afs.collection('MyGroup').doc(userid);
        mygroupRef.ref
            .get()
            .then(function (data) {
            if (!data.exists) {
                var array = [];
                array.push(groupid);
                mygroupRef.set({ mygroups: array });
            }
            else {
                var arry = data.data()['mygroups'];
                var temp = arry.filter(function (elem) { return elem == groupid; });
                if (temp.length == 0) {
                    arry.push(groupid);
                    mygroupRef.set({ mygroups: arry });
                }
            }
        })
            .catch(function (e) { });
    };
    GroupProvider.prototype.getMygroups = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myphone = _this.matchprovider.getUserinfo()['phonenumber'];
            _this.afs
                .collection('MyGroup')
                .doc(myphone)
                .valueChanges()
                .subscribe(function (result) {
                console.log('this is return info', result);
                var retunarray = [];
                if (result != null) {
                    var i = 0;
                    result['mygroups'].forEach(function (element) {
                        i++;
                        _this.getGroupMemebersInfos(element)
                            .then(function (res) {
                            _this.getGroupPlacesInfos(element)
                                .then(function (info) {
                                var returninfo = {
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
                                .catch(function (err) {
                                reject(err);
                            });
                        })
                            .catch(function (e) {
                            reject(e);
                        });
                    });
                }
                else {
                    resolve(retunarray);
                }
            }, function (err) {
                reject(false);
            });
        });
    };
    GroupProvider.prototype.getGroupMemebersInfos = function (groupid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs
                .collection('Group')
                .doc(groupid)
                .collection('groupmembers')
                .valueChanges()
                .subscribe(function (res) {
                console.log('this is growefwfewfeup detail data', res);
                var i = 0;
                res.forEach(function (element) {
                    i++;
                    if (element['id'] == '') {
                        res.splice(res.indexOf(element), 1);
                    }
                    if (i == res.length) {
                        console.log('this is dfdfdfdfdf detail data', res);
                        resolve(res);
                    }
                });
            }, function (err) {
                reject('err');
            });
        });
    };
    GroupProvider.prototype.getGroupPlacesInfos = function (groupid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs
                .collection('Group')
                .doc(groupid)
                .collection('groupplaces')
                .valueChanges()
                .subscribe(function (res) {
                console.log('this is group detail data', res);
                resolve(res);
            }, function (err) {
                reject('err');
            });
        });
    };
    GroupProvider.prototype.getMyInfo = function () {
        var myinfo = this.matchprovider.getUserinfo();
        var mymodal = {
            displayName: myinfo['username'],
            id: myinfo['id'],
            image: myinfo['photoUrl'],
            isAdded: '',
            isInvited: true,
            isHasApp: true,
            phoneNumbers: myinfo['phonenumber']
        };
        return mymodal;
    };
    GroupProvider.prototype.formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    GroupProvider.prototype.formatDate = function (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;
        return dd + '/' + mm + '/' + yyyy;
    };
    GroupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__matched_matched__["a" /* MatchedProvider */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__sms_sms__["a" /* SmsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_8__chatprovider_chatprovider__["a" /* ChatproviderProvider */]])
    ], GroupProvider);
    return GroupProvider;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ValidationProvider = /** @class */ (function () {
    function ValidationProvider(http) {
        this.http = http;
        console.log('Hello ValidationProvider Provider');
    }
    ValidationProvider.prototype.signup = function (credentials, photo) {
        return new Promise(function (resolve, reject) {
            if (credentials.email === '' ||
                credentials.password === '' ||
                credentials.username === '' ||
                credentials.phonenumber === '' ||
                credentials.confirmpassword === '') {
                reject('Please insert credentials!');
            }
            else {
                if (photo.length == 0) {
                    reject('Please insert photo');
                }
                else if (credentials.password != credentials.confirmpassword) {
                    reject('Confirm Password is incorrect!');
                }
                else {
                    resolve('auth success');
                }
            }
        });
    };
    ValidationProvider.prototype.login = function (credential) {
        return new Promise(function (resolve, reject) {
            if (credential.email === '' || credential.password === '') {
                reject('Please insert credentials');
            }
            else {
                resolve('auth success');
            }
        });
    };
    /////////////////////validation for welcomgeo page////////////////////////
    ValidationProvider.prototype.getPlaceList = function (credential, checkarray) {
        return new Promise(function (resolve, reject) {
            // if ((credential.code = '' && credential.isMylocation == false)) {
            //   reject('Please insert zip code or click mylocation button');
            // } else 
            if (checkarray.length == 0) {
                reject('Please choose one or more places');
            }
            else {
                resolve('success');
            }
        });
    };
    ValidationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ValidationProvider);
    return ValidationProvider;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FacebookProvider = /** @class */ (function () {
    function FacebookProvider(http, fb, fireauth, authprovider, firestore) {
        this.http = http;
        this.fb = fb;
        this.fireauth = fireauth;
        this.authprovider = authprovider;
        this.firestore = firestore;
        console.log('Hello FacebookProvider Provider');
    }
    FacebookProvider.prototype.signupWithFacebook = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var key = _this.firestore.createId();
                        var docData = {
                            id: key,
                            email: info.email,
                            username: info.username,
                            phonenumber: info.phonenumber,
                            imagearray: info.imagearray,
                            countrycode: info.countrycode,
                            active: false
                        };
                        _this.firestore
                            .doc("users/" + key)
                            .set(docData)
                            .then(function (res) {
                            resolve(true);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    FacebookProvider.prototype.loginwithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fb.login(['email', 'public_profile']).then(function (res) {
                            var fc = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider.credential((res.authResponse.accessToken));
                            _this.fireauth.auth.signInWithCredential(fc).then(function (fs) {
                                _this.fireauth.authState.subscribe(function (user) {
                                    var displayName = user['displayName'];
                                    var email = user['email'];
                                    var photoUrl = user['photoURL'];
                                    var usermodel = { displayName: displayName, email: email, photoUrl: photoUrl };
                                    _this.authprovider.getUserInfoFromEmail(email).then(function (result) {
                                        // already login with facebook  
                                        resolve(usermodel);
                                    }).catch(function (err) {
                                        // don't have facebook account in this app
                                        reject(usermodel);
                                    });
                                });
                            }).catch(function (err) {
                                reject("false");
                                // alert(JSON.stringify(err))
                            });
                        }).catch(function (error) {
                            reject("false");
                            // alert(JSON.stringify(error))
                        });
                    })];
            });
        });
    };
    FacebookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FacebookProvider);
    return FacebookProvider;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    // isAccept : boolean
    function User() {
        this.email = "";
        this.username = "";
        this.phonenumber = "";
        this.id = "";
        this.countrycode = "";
        this.photoUrl = "";
        this.firstlogin = false;
        this.isSwipeRight = false;
        // this.isAccept = false
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the GoogleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GoogleProvider = /** @class */ (function () {
    function GoogleProvider(http, googleplus, authprovider) {
        this.http = http;
        this.googleplus = googleplus;
        this.authprovider = authprovider;
        console.log('Hello GoogleProvider Provider');
    }
    GoogleProvider.prototype.googleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("clicked google button");
                        _this.googleplus.login({
                            'webClientId': '352885934650-idnbn6mp51hbpjbjagh4ir6lljgo5n37.apps.googleusercontent.com',
                            'offline': true,
                            'scopes': 'profile email'
                        }).then(function (res) {
                            console.log("this is res info", res);
                            var googleCredential = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.GoogleAuthProvider
                                .credential(res.idToken);
                            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithCredential(googleCredential)
                                .then(function (response) {
                                console.log("this is response info", response);
                                var displayName = response['displayName'];
                                var email = response['email'];
                                var photoUrl = response['photoURL'];
                                var usermodel = { displayName: displayName, email: email, photoUrl: photoUrl };
                                _this.authprovider.getUserInfoFromEmail(email).then(function (result) {
                                    // already login with facebook  
                                    resolve(usermodel);
                                }).catch(function (err) {
                                    // don't have facebook account in this app
                                    reject(usermodel);
                                });
                            });
                        }, function (err) {
                            alert(err);
                            console.error("Error: ", err);
                            reject("false");
                        }).catch(function (err1) {
                            alert(err1);
                            console.error("Error: ", err1);
                            reject("false");
                        });
                    })];
            });
        });
    };
    GoogleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */]])
    ], GoogleProvider);
    return GoogleProvider;
}());

//# sourceMappingURL=google.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_firebase_config__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_import__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_fcm_fcm__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_firebase__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_notification_notification__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_yelp_yelp__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_social_social__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_facebook_facebook__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_google_google__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_keyboard__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_groupon_groupon__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_group_group__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_sms_sms__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_loading_loading__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_admobservice_admobservice__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                ///////////////////firebase related imports////////////
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    preloadModules: true,
                    scrollAssist: false,
                    autoFocusAssist: false,
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/bottomtabbar/bottomtabbar.module#BottomtabbarPageModule', name: 'BottomtabbarPage', segment: 'bottomtabbar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatdetail/chatdetail.module#ChatdetailPageModule', name: 'ChatdetailPage', segment: 'chatdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatroom/chatroom.module#ChatroomPageModule', name: 'ChatroomPage', segment: 'chatroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completepage/completepage.module#CompletepagePageModule', name: 'CompletepagePage', segment: 'completepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groupchatroom/groupchatroom.module#GroupchatroomPageModule', name: 'GroupchatroomPage', segment: 'groupchatroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inviataion-detail/inviataion-detail.module#InviataionDetailPageModule', name: 'InviataionDetailPage', segment: 'inviataion-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inviteplace/inviteplace.module#InviteplacePageModule', name: 'InviteplacePage', segment: 'inviteplace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-detail/main-detail.module#MainDetailPageModule', name: 'MainDetailPage', segment: 'main-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/matchdate/matchdate.module#MatchdatePageModule', name: 'MatchdatePage', segment: 'matchdate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meetingdetail/meetingdetail.module#MeetingdetailPageModule', name: 'MeetingdetailPage', segment: 'meetingdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-invite/new-invite.module#NewInvitePageModule', name: 'NewInvitePage', segment: 'new-invite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/placemap/placemap.module#PlacemapPageModule', name: 'PlacemapPage', segment: 'placemap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/placesearch/placesearch.module#PlacesearchPageModule', name: 'PlacesearchPage', segment: 'placesearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settime/settime.module#SettimePageModule', name: 'SettimePage', segment: 'settime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verifyphone/verifyphone.module#VerifyphonePageModule', name: 'VerifyphonePage', segment: 'verifyphone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough/walkthrough.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcomegeo/welcomegeo.module#WelcomegeoPageModule', name: 'WelcomegeoPage', segment: 'welcomegeo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcomeinvite/welcomeinvite.module#WelcomeinvitePageModule', name: 'WelcomeinvitePage', segment: 'welcomeinvite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inviteturtial/inviteturtial.module#InviteturtialPageModule', name: 'InviteturtialPage', segment: 'inviteturtial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__app_import__["a" /* MODULES */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__app_import__["b" /* PROVIDERS */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_14__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_18__providers_yelp_yelp__["a" /* YelpProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_social_social__["a" /* SocialProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__providers_facebook_facebook__["a" /* FacebookProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_google_google__["a" /* GoogleProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_google_google__["a" /* GoogleProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_24__providers_groupon_groupon__["a" /* GrouponProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_group_group__["a" /* GroupProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_sms_sms__["a" /* SmsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_admobservice_admobservice__["a" /* AdmobserviceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Model_User__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, afdatabase, fireauth, firestore, fire, localstoraeprovider, notiprovider) {
        this.http = http;
        this.afdatabase = afdatabase;
        this.fireauth = fireauth;
        this.firestore = firestore;
        this.fire = fire;
        this.localstoraeprovider = localstoraeprovider;
        this.notiprovider = notiprovider;
    }
    AuthProvider.prototype.updateUserVisited = function (visit) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myid = _this.localstoraeprovider.getUserinfo()['id'];
            _this.firestore.collection('users').doc(myid).update({ isVisited: visit }).then(function (res) {
                resolve(true);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.getUserVisited = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.localstoraeprovider.getUserinfo()['id'];
                        _this.firestore.collection('users', function (res) { return res.where('id', '==', myid); }).valueChanges().subscribe(function (snapshot) {
                            resolve(snapshot);
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    //update userstatus
    AuthProvider.prototype.updateUserStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.localstoraeprovider.getUserinfo()['id'];
                        _this.firestore.collection('users').doc(myid).update({ status: status }).then(function (res) {
                            resolve(true);
                        }).catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    AuthProvider.prototype.getUserStatus = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.firestore.collection('users', function (res) { return res.where('id', '==', userid); }).valueChanges().subscribe(function (snapshot) {
                            resolve(snapshot);
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ////////////////verify email ///////////////////////
    AuthProvider.prototype.checkEmailVerify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fireauth.auth.onAuthStateChanged(function (user) {
                            if (user && user.emailVerified) {
                                resolve(user.email);
                            }
                            else {
                                reject('Please verify your email');
                            }
                        });
                    })];
            });
        });
    };
    ///////////////////////// when login with email and password, save login info to local storage///////////////////
    AuthProvider.prototype.getUserInfoFromEmail = function (mymail) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.firestore
                            .collection('users', function (res) { return res.where('email', '==', mymail); })
                            .valueChanges()
                            .subscribe(function (snapshot) {
                            console.log('====================================');
                            console.log(snapshot);
                            console.log('====================================');
                            if (snapshot.length == 0) {
                                reject(false);
                            }
                            else {
                                var usermodel = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]();
                                usermodel.email = snapshot[0]['email'];
                                usermodel.id = snapshot[0]['id'];
                                usermodel.phonenumber = snapshot[0]['phonenumber'];
                                usermodel.username = snapshot[0]['username'];
                                usermodel.countrycode = snapshot[0]['countrycode'];
                                usermodel.photoUrl = snapshot[0]['imagearray'];
                                if (snapshot[0]['firstlogin']) {
                                    usermodel.firstlogin = snapshot[0]['firstlogin'];
                                }
                                else {
                                    usermodel.firstlogin = false;
                                }
                                if (snapshot[0]['isSwipeRight']) {
                                    usermodel.firstlogin = snapshot[0]['isSwipeRight'];
                                }
                                else {
                                    usermodel.firstlogin = false;
                                }
                                console.log('this is snapshot', usermodel);
                                _this.localstoraeprovider.saveUserInfo(usermodel);
                                resolve(usermodel);
                            }
                        });
                    })];
            });
        });
    };
    AuthProvider.prototype.saveTokenInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, rejct) {
                    })];
            });
        });
    };
    ////////////////////////////login/////////////////////
    AuthProvider.prototype.login = function (credential) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fireauth.auth
                            .signInWithEmailAndPassword(credential.email, credential.password)
                            .then(function (result) {
                            // let userinfo = this.getCurrentUserInfo();
                            resolve(result);
                        }, function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /////////////////when click signup button/////////////////
    AuthProvider.prototype.signup = function (credential, photo) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        ////////////////////////////////signup with email and password info///////////////////////////////////
                        _this.fireauth.auth
                            .createUserWithEmailAndPassword(credential.email, credential.password)
                            .then(function (result) {
                            var id = _this.firestore.createId();
                            console.log('this is firestore id', id);
                            _this.saveImageDataToStorage(photo).then(function (success) {
                                console.log('this is sucees', success);
                                var key = _this.firestore.createId();
                                var docData = {
                                    id: key,
                                    email: credential.email,
                                    username: credential.username,
                                    phonenumber: credential.countrycode + credential.phonenumber,
                                    imagearray: success,
                                    countrycode: credential.countrycode,
                                    active: false,
                                    firstlogin: false,
                                    isSwipeRight: false
                                };
                                _this.firestore
                                    .doc("users/" + key)
                                    .set(docData)
                                    .then(function (res) {
                                    var user = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser;
                                    user.sendEmailVerification();
                                    // this.storeuserphonenumber(credential.phonenumber)
                                    resolve(credential.phonenumber);
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            });
                        })
                            .catch(function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /////////////////////////////////////save image data to firebase storage//////////////////////
    AuthProvider.prototype.saveImageDataToStorage = function (photo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var storageRef = __WEBPACK_IMPORTED_MODULE_8_firebase__["storage"]().ref();
                        // var photoarray = []
                        // let i = 0
                        photo.forEach(function (element) {
                            var filename = new Date().getTime();
                            var imageRef = storageRef.child('images/profilephoto/' + filename + '.jpg');
                            // firebase.storage.StringFormat.DATA_URL
                            // i++
                            imageRef
                                .putString(element, 'data_url')
                                .then(function (snapshot) {
                                console.log('download', snapshot.metadata.fullPath);
                                // photoarray.push(snapshot.metadata.fullPath)
                                // if(i == photoarray.length)
                                // {
                                imageRef.getDownloadURL().then(function (url) {
                                    resolve(url);
                                });
                                // }
                            })
                                .catch(function (error) {
                                console.log('this is error', error);
                                reject(error);
                            });
                        });
                    })];
            });
        });
    };
    AuthProvider.prototype.saveFriends = function (number, element) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('this is number', number, element);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.localstoraeprovider.getUserinfo()['id'];
                        var friendsRef = _this.firestore.collection('friends').doc("" + myid);
                        _this.getUserStatus(element['id']).then(function (result) {
                            var data_infos = {};
                            if (result[0]['status'] != null) {
                                //user status is public
                                if (result[0]['status'] == true) {
                                    data_infos = {
                                        userkey: element['id'],
                                        active: 'false',
                                        send: 2,
                                        isblocked: false
                                    };
                                }
                                else {
                                    //user status is private
                                    data_infos = {
                                        userkey: element['id'],
                                        active: 'false',
                                        send: 0,
                                        isblocked: false
                                    };
                                }
                            }
                            else {
                                //user status is not exist
                                data_infos = {
                                    userkey: element['id'],
                                    active: 'true',
                                    send: 2,
                                    isblocked: false
                                };
                            }
                            friendsRef.collection('member').doc(element['id']).set(data_infos).then(function (sucess) {
                                console.log("this is suces", sucess);
                                _this.saveMatchFriends(myid, element).then(function (res) {
                                    resolve(res);
                                }).then(function (err) {
                                    reject(err);
                                });
                            }).catch(function (err) {
                                reject(err);
                            });
                        }).catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ///////////////////////////////// save matched users in friends collections////////////////
    AuthProvider.prototype.saveMatchFriends = function (myid, element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var friendsOtherRef = _this.firestore
                .collection('friends')
                .doc(element['id']).collection('member').doc(myid);
            _this.getUserStatus(element['id']).then(function (result) {
                var data_infos = {};
                if (result[0]['status'] != null) {
                    if (result[0]['status'] == true) {
                        data_infos = {
                            userkey: element['id'],
                            active: 'true',
                            send: 2,
                            isblocked: false
                        };
                    }
                    else {
                        data_infos = {
                            userkey: element['id'],
                            active: 'false',
                            send: 1,
                            isblocked: false
                        };
                    }
                }
                else {
                    data_infos = {
                        userkey: element['id'],
                        active: 'true',
                        send: 2,
                        isblocked: false
                    };
                }
                friendsOtherRef.set(data_infos).then(function (result) {
                    var content = "has sent you a friend a request.";
                    _this.notiprovider.sendFriendRequest("Received request!", element['id'], content);
                    resolve(result);
                }).catch(function (er) {
                    reject(er);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // //function  : welcome.ts
    // //check users who has phonenumber same as phonenumber
    // //this functions was used in welcome page
    AuthProvider.prototype.checkUsingApp = function (phonenumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.firestore
                            .collection('users')
                            .valueChanges()
                            .subscribe(function (snapshot) {
                            var flag = false;
                            var i = 0;
                            console.log('this is for the test');
                            snapshot.forEach(function (element) {
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
                        }, function (error) {
                            console.log('this is for the error test');
                            reject('false');
                        });
                    })];
            });
        });
    };
    //function : welcome.ts
    //get my friends list/////////////
    AuthProvider.prototype.getMyFriendsList = function (myid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var friendsref = _this.firestore.collection('friends').doc("" + myid).collection('member', function (res) { return res.where('send', '==', 2); });
                        friendsref.valueChanges().subscribe(function (result) {
                            console.log('this is result', result);
                            if (result == null) {
                                reject('Not existed Invited Users');
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    //function : welcome.ts
    //get my friends list/////////////
    AuthProvider.prototype.getMyFriend = function (myid, userid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var friendsref = _this.firestore.collection('friends').doc("" + myid).collection('member', function (res) { return res.where('send', '==', 2).where('userkey', '==', userid); });
                        friendsref.valueChanges().subscribe(function (result) {
                            console.log('this is result', result);
                            if (result == null) {
                                reject('Not existed Invited Users');
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    ////////////////get friends list from phonenumber////////////////////
    AuthProvider.prototype.getFriendsInfoFromPhonenumber = function (phonenumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.firestore
                            .collection('users', function (ref) { return ref.where('phonenumber', '==', phonenumber); })
                            .valueChanges()
                            .subscribe(function (res) {
                            console.log('this is match result', res);
                        });
                    })];
            });
        });
    };
    AuthProvider.prototype.getFrindsInfoFromId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log('====================================');
                        console.log(userId);
                        console.log('====================================');
                        _this.firestore
                            .collection('users', function (ref) { return ref.where('id', '==', userId); })
                            .valueChanges()
                            .subscribe(function (res) {
                            resolve(res);
                        });
                    })];
            });
        });
    };
    // /function : phone verification/////////////////////
    AuthProvider.prototype.phoneVerification = function (phoneNumber, recaptchaVerifier) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fireauth.auth
                            .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
                            .then(function (confirmresult) {
                            console.log('confirma result', confirmresult);
                            resolve(confirmresult);
                        })
                            .catch(function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    AuthProvider.prototype.getCurrentUserInfo = function () {
        return this.fireauth.auth.currentUser;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_1__localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__notification_notification__["a" /* NotificationProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        if (array === undefined) {
            return null;
        }
        array.sort(function (a, b) {
            if (a.timestamp < b.timestamp) {
                return -1;
            }
            else if (a.timestamp > b.timestamp) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovecommandPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the RemovecommandPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RemovecommandPipe = /** @class */ (function () {
    function RemovecommandPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RemovecommandPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var checkstring = '';
        value.forEach(function (element) {
            checkstring = checkstring + element['title'] + ",";
        });
        checkstring = checkstring.slice(0, checkstring.length - 1);
        console.log("this is check list", checkstring);
        return checkstring;
    };
    RemovecommandPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'removecommand',
        })
    ], RemovecommandPipe);
    return RemovecommandPipe;
}());

//# sourceMappingURL=removecommand.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphabetaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the AlphabetaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var AlphabetaPipe = /** @class */ (function () {
    function AlphabetaPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    AlphabetaPipe.prototype.transform = function (array, args) {
        if (array === undefined) {
            return null;
        }
        array.sort(function (a, b) {
            if (a.displayName.toUpperCase() < b.displayName.toUpperCase()) {
                return -1;
            }
            else if (a.displayName.toUpperCase() > b.displayName.toUpperCase()) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    AlphabetaPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'alphabeta',
        })
    ], AlphabetaPipe);
    return AlphabetaPipe;
}());

//# sourceMappingURL=alphabeta.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_chatprovider_chatprovider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { HomePage } from '../pages/home/home';


var MyApp = /** @class */ (function () {
    // rootPage:any = 'WelcomePage';
    function MyApp(platform, statusBar, splashScreen, authprovider, localstorageProvider, chatprovider, fcm, toastCtrl, events) {
        var _this = this;
        this.platform = platform;
        this.authprovider = authprovider;
        this.localstorageProvider = localstorageProvider;
        this.chatprovider = chatprovider;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.events = events;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.hide();
            splashScreen.hide();
            // this.rootPage = 'MainDetailPage'
            _this.switchFirstpage();
            _this.platform.pause.subscribe(function () {
                console.log('[INFO] App paused');
                // this.chatprovider.saveUserStatus(false)
            });
            _this.platform.resume.subscribe(function () {
                console.log('[INFO] App resumed');
            });
            fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["tap"])(function (msg) {
                // show a toast
                console.log("message arrived", msg);
                var message = msg.aps.alert['title'] + "\n" + msg.aps.alert['body'];
                _this.showToastView(message);
            }))
                .subscribe(function (res) {
                console.log("this is res", res.aps.alert['body']);
            });
        });
    }
    MyApp.prototype.showToastView = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            position: 'middle',
            showCloseButton: true,
            cssClass: 'toastview'
        });
        toast.present();
    };
    /////////////////when autologin, go to homepage, when first login,
    MyApp.prototype.switchFirstpage = function () {
        var login_status = this.localstorageProvider.getLoginStatus();
        if (login_status == 'true') {
            var categoryList = this.localstorageProvider.getCategoryList();
            console.log("this is categorylist", categoryList);
            /////////////////publish data//////////////////////
            this.events.publish('categorylist', categoryList);
            this.rootPage = 'BottomtabbarPage';
        }
        else {
            this.rootPage = 'LoginPage';
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_chatprovider_chatprovider__["a" /* ChatproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDjdA4jeFgPBzn0NE6yRYEBESYAc8ALDO0",
    authDomain: "ditto-206401.firebaseapp.com",
    databaseURL: "https://ditto-206401.firebaseio.com",
    projectId: "ditto-206401",
    storageBucket: "ditto-206401.appspot.com",
    messagingSenderId: "352885934650"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_chatprovider_chatprovider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Utils_toast_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_swing__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_validation_validation__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sms__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_geolocatino_geolocatino__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_rating__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_keyboard__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_admob_pro__ = __webpack_require__(189);





















var MODULES = [
    __WEBPACK_IMPORTED_MODULE_7_angular2_swing__["SwingModule"],
    __WEBPACK_IMPORTED_MODULE_14_ionic2_rating__["a" /* Ionic2RatingModule */],
    __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__["a" /* PipesModule */]
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_6__providers_Utils_toast_service__["a" /* ToastService */],
    __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
    __WEBPACK_IMPORTED_MODULE_8__providers_validation_validation__["a" /* ValidationProvider */],
    __WEBPACK_IMPORTED_MODULE_11__ionic_native_sms__["a" /* SMS */],
    __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
    __WEBPACK_IMPORTED_MODULE_2__providers_matched_matched__["a" /* MatchedProvider */],
    __WEBPACK_IMPORTED_MODULE_12__ionic_native_firebase__["a" /* Firebase */],
    __WEBPACK_IMPORTED_MODULE_13__providers_geolocatino_geolocatino__["a" /* GeolocatinoProvider */],
    __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
    __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
    __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
    __WEBPACK_IMPORTED_MODULE_0__providers_chatprovider_chatprovider__["a" /* ChatproviderProvider */],
    __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__["a" /* AlertService */],
    __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__["a" /* EmailComposer */],
    __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
    __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
    __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_keyboard__["a" /* NativeKeyboard */],
    __WEBPACK_IMPORTED_MODULE_20__ionic_native_admob_pro__["a" /* AdMobPro */]
];
//# sourceMappingURL=app.import.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SocialProvider = /** @class */ (function () {
    function SocialProvider(http, firestore, fireauth) {
        this.http = http;
        this.firestore = firestore;
        this.fireauth = fireauth;
        console.log('Hello SocialProvider Provider');
    }
    SocialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SocialProvider);
    return SocialProvider;
}());

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello LoadingProvider Provider');
    }
    LoadingProvider.prototype.showLoadingView = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading = _this.loadingCtrl.create({
                content: 'Please wait...',
                dismissOnPageChange: true
            });
            _this.loading.present().then(function (res) {
                resolve(res);
            }).catch(function (r) {
                reject(r);
            });
        });
    };
    LoadingProvider.prototype.removeLoadingView = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loading.dismiss().then(function (res) {
                resolve(true);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
Generated class for the MatchedProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var MatchedProvider = /** @class */ (function () {
    function MatchedProvider(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        console.log('Hello MatchedProvider Provider');
    }
    MatchedProvider.prototype.getAllUsingUsersArray = function () {
        var _this = this;
        var userarray = [];
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('users')
                .valueChanges()
                .subscribe(function (snapshots) {
                if (snapshots == null) {
                    reject('error');
                }
                else {
                    resolve(snapshots);
                }
            });
        });
    };
    // get userinfo from local database
    MatchedProvider.prototype.getUserinfo = function () {
        var profile = window.localStorage.getItem('userinfo');
        return JSON.parse(profile);
    };
    MatchedProvider.prototype.autoSavePlaceInfo = function (info, userid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("this is infolist", info)
                        var place_id = info['place_id'];
                        var placeref = _this.firestore.collection('places').doc("" + place_id);
                        placeref.ref
                            .get()
                            .then(function (doc) {
                            if (!doc.exists) {
                                var data = [];
                                data.push(userid);
                                placeref.set({ members: data });
                                resolve(data);
                            }
                            else {
                                var array = doc.data()['members'];
                                // check current user is already liked this place
                                var temp = array.filter(function (res) { return res == userid; });
                                if (temp.length > 0) {
                                    resolve(array);
                                    // console.log("you have already liked to this place")
                                }
                                else {
                                    array.push(userid);
                                    placeref.set({ members: array });
                                    resolve(array);
                                }
                            }
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    MatchedProvider.prototype.atuosaveMyplaceInfo = function (info, userid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var place_id = info['place_id'];
                        var myplaceref = _this.firestore.collection('myplaces').doc(userid);
                        myplaceref.ref
                            .get()
                            .then(function (doc) {
                            if (!doc.exists) {
                                var data = [];
                                data.push(place_id);
                                myplaceref.set({ places: data });
                                resolve(data);
                            }
                            else {
                                var array = doc.data()['places'];
                                // check current user is already liked this place
                                var temp = array.filter(function (res) { return res == place_id; });
                                if (temp.length > 0) {
                                    resolve(array);
                                    // console.log("you have already liked to this place")
                                }
                                else {
                                    array.push(place_id);
                                    myplaceref.set({ places: array });
                                    resolve(array);
                                }
                            }
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    MatchedProvider.prototype.autosaveMatchedUsers = function (userid, placeinfo) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myid;
            return __generator(this, function (_a) {
                myid = this.getUserinfo()['id'];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var info_me = {};
                        var info_match = {};
                        if (placeinfo['place_title']) {
                            info_me = {
                                friendkey: userid,
                                placeid: placeinfo['place_id'],
                                placename: placeinfo['place_name'],
                                placeimage: placeinfo['place_photo'],
                                placeprice: placeinfo['place_price'],
                                placedisprice: placeinfo['place_discount_price'],
                                placeurl: placeinfo['place_dealurl'],
                                time: ''
                            };
                            info_match = {
                                friendkey: myid,
                                placeid: placeinfo['place_id'],
                                placename: placeinfo['place_name'],
                                placeimage: placeinfo['place_photo'],
                                placeprice: placeinfo['place_price'],
                                placedisprice: placeinfo['place_discount_price'],
                                placeurl: placeinfo['place_dealurl'],
                                time: ''
                            };
                        }
                        else {
                            info_me = {
                                friendkey: userid,
                                placeid: placeinfo['place_id'],
                                placename: placeinfo['place_name'],
                                placeimage: placeinfo['place_photo'],
                                time: ''
                            };
                            info_match = {
                                friendkey: myid,
                                placeid: placeinfo['place_id'],
                                placename: placeinfo['place_name'],
                                placeimage: placeinfo['place_photo'],
                                time: ''
                            };
                        }
                        var matchedRef = _this.firestore.collection('matched').doc("" + myid);
                        matchedRef
                            .collection(userid)
                            .doc(placeinfo['place_id'])
                            .set(info_me)
                            .then(function (sucee) {
                            _this.firestore
                                .collection('matched')
                                .doc(userid)
                                .collection(myid)
                                .doc(placeinfo['place_id'])
                                .set(info_match)
                                .then(function (res) {
                                resolve('sucee');
                            });
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    ///////////////////////// save my array infos/////////////////
    MatchedProvider.prototype.saveMyPlaceInfo = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.getUserinfo()['id'];
                        var place_id = info['place_id'];
                        var myplaceref = _this.firestore.collection('myplaces').doc("" + myid);
                        myplaceref.ref
                            .get()
                            .then(function (doc) {
                            if (!doc.exists) {
                                var data = [];
                                data.push(place_id);
                                myplaceref.set({ places: data });
                                resolve(data);
                            }
                            else {
                                var array = doc.data()['places'];
                                // check current user is already liked this place
                                var temp = array.filter(function (res) { return res == place_id; });
                                if (temp.length > 0) {
                                    resolve(array);
                                    // console.log("you have already liked to this place")
                                }
                                else {
                                    array.push(place_id);
                                    myplaceref.set({ places: array });
                                    resolve(array);
                                }
                            }
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    //save placeinfo when swipe right or like in tinderview
    MatchedProvider.prototype.savePlaceInfo = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("this is infolist", info)
                        var place_id = info['place_id'];
                        var myid = _this.getUserinfo()['id'];
                        var placeref = _this.firestore.collection('places').doc("" + place_id);
                        placeref.ref
                            .get()
                            .then(function (doc) {
                            if (!doc.exists) {
                                var data = [];
                                data.push(myid);
                                placeref.set({ members: data });
                                resolve(data);
                            }
                            else {
                                var array = doc.data()['members'];
                                // check current user is already liked this place
                                var temp = array.filter(function (res) { return res == myid; });
                                if (temp.length > 0) {
                                    resolve(array);
                                    // console.log("you have already liked to this place")
                                }
                                else {
                                    array.push(myid);
                                    placeref.set({ members: array });
                                    resolve(array);
                                }
                            }
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    /////////////////function : matched userinfo array
    //
    MatchedProvider.prototype.getMatchedUserInfo = function (placeuserarray, info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myid, placeid;
            return __generator(this, function (_a) {
                console.log('pleaceinfo arary', placeuserarray, info);
                myid = this.getUserinfo()['id'];
                placeid = info['place_id'];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var friendsRef = _this.firestore.collection('friends').doc("" + myid);
                        friendsRef
                            .collection('member', function (res) { return res.where('send', '==', 2).where('isblocked', '==', false); })
                            .valueChanges()
                            .subscribe(function (snapshot) {
                            var comparearray = placeuserarray.filter(function (item) {
                                return snapshot.some(function (elem) { return item == elem['userkey']; });
                            });
                            if (comparearray.length == 0) {
                                reject({ success: 'false' });
                            }
                            else {
                                resolve(comparearray);
                            }
                        });
                    })];
            });
        });
    };
    // save matched data
    // matched/myid/friendid/placeid/data
    MatchedProvider.prototype.saveMatchedUsers = function (info, placeinfo) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myid;
            return __generator(this, function (_a) {
                myid = this.getUserinfo()['id'];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var i = 0;
                        var noti_friends = '';
                        info.forEach(function (element) {
                            i++;
                            var info_me = {};
                            var info_match = {};
                            if (placeinfo['place_title']) {
                                info_me = {
                                    friendkey: element,
                                    placeid: placeinfo['place_id'],
                                    placename: placeinfo['place_name'],
                                    placeimage: placeinfo['place_photo'],
                                    placeprice: placeinfo['place_price'],
                                    placedisprice: placeinfo['place_discount_price'],
                                    placeurl: placeinfo['place_dealurl'],
                                    time: ''
                                };
                                info_match = {
                                    friendkey: myid,
                                    placeid: placeinfo['place_id'],
                                    placename: placeinfo['place_name'],
                                    placeimage: placeinfo['place_photo'],
                                    placeprice: placeinfo['place_price'],
                                    placedisprice: placeinfo['place_discount_price'],
                                    placeurl: placeinfo['place_dealurl'],
                                    time: ''
                                };
                            }
                            else {
                                info_me = {
                                    friendkey: element,
                                    placeid: placeinfo['place_id'],
                                    placename: placeinfo['place_name'],
                                    placeimage: placeinfo['place_photo'],
                                    time: ''
                                };
                                info_match = {
                                    friendkey: myid,
                                    placeid: placeinfo['place_id'],
                                    placename: placeinfo['place_name'],
                                    placeimage: placeinfo['place_photo'],
                                    time: ''
                                };
                            }
                            var matchedRef = _this.firestore.collection('matched').doc("" + myid);
                            matchedRef
                                .collection(element)
                                .doc(placeinfo['place_id'])
                                .set(info_me)
                                .then(function (sucee) {
                                _this.firestore
                                    .collection('matched')
                                    .doc(element)
                                    .collection(myid)
                                    .doc(placeinfo['place_id'])
                                    .set(info_match)
                                    .then(function (res) {
                                    if (i == info.length) {
                                        resolve('sucee');
                                    }
                                });
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        });
                    })];
            });
        });
    };
    /////////////////////////////// matchusers/myid/friendidlist////////////////
    MatchedProvider.prototype.saveMatchedUsersList = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myid;
            return __generator(this, function (_a) {
                myid = this.getUserinfo()['id'];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var matchRef = _this.firestore.collection('matchedusers').doc(myid);
                        matchRef.ref
                            .get()
                            .then(function (result) {
                            console.log('====================================');
                            console.log(result.data(), info);
                            console.log('====================================');
                            var isOnceMatched = false;
                            if (result.data() == null) {
                                matchRef.set({ friend: info });
                                resolve('sucess');
                            }
                            else {
                                var existdata = result.data()['friend'];
                                var totalarray_1 = existdata.concat(info);
                                var result_array = totalarray_1.filter(function (item, index) { return index === totalarray_1.indexOf(item); });
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
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    MatchedProvider.prototype.saveMatchedOtherUsersList = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myid;
            return __generator(this, function (_a) {
                myid = this.getUserinfo()['id'];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var matchRef = _this.firestore.collection('matchedusers').doc(info);
                        matchRef.ref.get().then(function (result) {
                            console.log('fsfasfsfasfasfaf====================================');
                            console.log(result.data());
                            console.log('====================================');
                            if (result.data() == null) {
                                matchRef.set({ friend: [myid] });
                                resolve(true);
                            }
                            else {
                                var existdata = result.data()['friend'];
                                var totalarray_2 = existdata.concat([myid]);
                                var result_array = totalarray_2.filter(function (item, index) { return index === totalarray_2.indexOf(item); });
                                matchRef.set({ friend: result_array });
                                resolve(true);
                            }
                        }).catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    // -----------------------------------    Setting page functions  -----------------------------------//
    // get my friends list from firestore
    MatchedProvider.prototype.getMyfriendsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.getUserinfo()['id'];
                        var friendRef = _this.firestore.collection('friends').doc("" + myid);
                        var filterRef = friendRef.collection('member', function (ref) {
                            return ref.where('send', '==', 2);
                        });
                        filterRef.valueChanges().subscribe(function (snapshot) {
                            if (snapshot == null) {
                                reject('false');
                            }
                            else {
                                resolve(snapshot);
                            }
                        });
                    })];
            });
        });
    };
    /////get request list from firestore
    MatchedProvider.prototype.getRequestList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.getUserinfo()['id'];
                        var friendRef = _this.firestore.collection('friends').doc("" + myid);
                        var filterRef = friendRef.collection('member', function (ref) {
                            return ref.where('send', '==', 1);
                        });
                        filterRef.valueChanges().subscribe(function (snapshot) {
                            if (snapshot == null) {
                                reject('false');
                            }
                            else {
                                resolve(snapshot);
                            }
                        });
                    })];
            });
        });
    };
    ////////////////////////////Accept request functions ////////////////////////
    MatchedProvider.prototype.sendAcceptRequest = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.getUserinfo()['id'];
                        var friendsRef = _this.firestore
                            .collection('friends')
                            .doc("" + myid)
                            .collection('member')
                            .doc("" + key);
                        friendsRef
                            .update({ active: 'true', send: 2, userkey: key, isblocked: false })
                            .then(function (suceess) {
                            _this.sendMatchedAcceptRequest(key, myid)
                                .then(function (suc) {
                                resolve(suc);
                            })
                                .catch(function (er) {
                                reject('false');
                            });
                        })
                            .catch(function (err) {
                            reject('false');
                        });
                    })];
            });
        });
    };
    MatchedProvider.prototype.sendMatchedAcceptRequest = function (key, myid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var friendsRef = _this.firestore
                            .collection('friends')
                            .doc("" + key)
                            .collection('member')
                            .doc("" + myid);
                        friendsRef
                            .update({ active: 'true', send: 2, userkey: myid, isblocked: false })
                            .then(function (suceess) {
                            resolve('suceess');
                        })
                            .catch(function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    MatchedProvider.prototype.sendUnblockFriendsRequest = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('====================================');
                console.log(key);
                console.log('====================================');
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.getUserinfo()['id'];
                        var updateRef = _this.firestore
                            .collection('friends')
                            .doc("" + myid)
                            .collection('member');
                        var updateFriendRef = _this.firestore
                            .collection('friends')
                            .doc(key)
                            .collection('member');
                        updateRef.doc(key).update({ isblocked: false }).then(function (suc) {
                            updateFriendRef.doc(myid).update({ isblocked: false }).then(function (su) {
                                resolve(true);
                            }).catch(function (err) {
                                reject(err);
                            });
                        }).catch(function (e) {
                            reject(e);
                        });
                    })];
            });
        });
    };
    // remove friends functions
    MatchedProvider.prototype.sendRemoveFriendsRequest = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var myid = _this.getUserinfo()['id'];
                        var removeRef = _this.firestore
                            .collection('friends')
                            .doc("" + myid)
                            .collection('member');
                        removeRef
                            .doc("" + key)
                            .delete()
                            .then(function (sucee) {
                            _this.sendRemovedMatchedFriendsRequest(myid, key)
                                .then(function (result) {
                                resolve(result);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        })
                            .catch(function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    MatchedProvider.prototype.sendRemovedMatchedFriendsRequest = function (myid, userkey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var removeRef = _this.firestore
                            .collection('friends')
                            .doc("" + userkey)
                            .collection('member');
                        removeRef
                            .doc("" + myid)
                            .delete()
                            .then(function (res) {
                            resolve('true');
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    };
    MatchedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], MatchedProvider);
    return MatchedProvider;
}());

//# sourceMappingURL=matched.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(http, afs, matchprovider) {
        this.http = http;
        this.afs = afs;
        this.matchprovider = matchprovider;
        console.log('Hello NotificationProvider Provider');
    }
    NotificationProvider.prototype.sendFriendRequest = function (title, userid, content) {
        var _this = this;
        var myname = this.matchprovider.getUserinfo()['username'];
        return new Promise(function (resolve, reject) {
            var notiData = {
                myid: myname,
                userid: userid,
                content: content,
                title: title
            };
            _this.afs.collection('Notification').add(notiData);
        });
    };
    NotificationProvider.prototype.sendMatchRequest = function (element, namearray, placename) {
        var _this = this;
        var myname = this.matchprovider.getUserinfo()['username'];
        return new Promise(function (resolve, reject) {
            element.forEach(function (userkey) {
                var notiData = {
                    myid: myname,
                    userid: userkey,
                    placename: placename,
                    usernames: namearray + myname
                };
                _this.afs.collection('NotificationMatch').add(notiData);
            });
        });
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_0__matched_matched__["a" /* MatchedProvider */]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map