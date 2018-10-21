webpackJsonp([13],{

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupchatroomPageModule", function() { return GroupchatroomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupchatroom__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GroupchatroomPageModule = /** @class */ (function () {
    function GroupchatroomPageModule() {
    }
    GroupchatroomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groupchatroom__["a" /* GroupchatroomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupchatroom__["a" /* GroupchatroomPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], GroupchatroomPageModule);
    return GroupchatroomPageModule;
}());

//# sourceMappingURL=groupchatroom.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModel; });
/* unused harmony export ChattingModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GroupChatModel; });
var ChatModel = /** @class */ (function () {
    function ChatModel() {
        this.username = "";
        this.username = "";
        this.userplace_name = "";
        this.useremail = "";
        this.userid = "";
        this.userplace_id = "";
        this.userplace_number = 0;
        this.userplaces = [];
        this.ismeetingdatay = false;
        this.ismeetingdate = "";
        this.ismeetingKey = "";
        this.userplace_image = "";
        this.userstatus = false;
        this.lastmessage = "";
        this.userplace_price = "";
        this.userplace_discountprice = "";
        this.userplace_dealurl = "";
        this.groupid = "";
    }
    return ChatModel;
}());

var ChattingModel = /** @class */ (function () {
    function ChattingModel() {
        this.sender = "";
        this.receiver = "";
        this.message = "";
        this.timeofmsg = "";
        this.dateofmsg = "";
        this.timestamp = "";
        this.isme = true;
    }
    return ChattingModel;
}());

var GroupChatModel = /** @class */ (function () {
    function GroupChatModel() {
        this.key = "";
        this.dateofmsg = "";
        this.message = "";
        this.photo = "";
        this.receiver = "";
        this.sender = "";
        this.timeofmsg = "";
        this.timestamp = "";
        this.type = "";
        this.placename = "";
        this.acceptUsers = [];
        this.isAccept = false;
    }
    return GroupChatModel;
}());

//# sourceMappingURL=ChatModel.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupchatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_admobservice_admobservice__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_ChatModel__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_notification__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chatprovider_chatprovider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_Utils_alert_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_group_group__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupchatroomPage = /** @class */ (function () {
    function GroupchatroomPage(navCtrl, navParams, chatprovider, matchprovider, localstorage, firestore, modalCtrl, notiprovider, actionsheetCtrl, alertService, emailcomposer, keyboard, admob, platform, lab, groupprovider, admobservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatprovider = chatprovider;
        this.matchprovider = matchprovider;
        this.localstorage = localstorage;
        this.firestore = firestore;
        this.modalCtrl = modalCtrl;
        this.notiprovider = notiprovider;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertService = alertService;
        this.emailcomposer = emailcomposer;
        this.keyboard = keyboard;
        this.admob = admob;
        this.platform = platform;
        this.lab = lab;
        this.groupprovider = groupprovider;
        this.admobservice = admobservice;
        this.passdata = this.navParams.get('data');
        console.log('====================================');
        console.log(this.passdata);
        console.log('====================================');
        this.userPlaces = this.passdata['userplaces'].reverse();
        this.myinfo = this.localstorage.getUserinfo();
        this.keyboardHeight = 55;
        this.keyboard.disableScroll(false);
        // this.platform.ready().then(() => {
        //   // this.message_input.setFocus();
        //   this.keyboard.onKeyboardShow().subscribe(e => {
        //     console.log('this is keybaordsafasf eleefeef', e);
        //     this.keyboardHeight = e['keyboardHeight'] + 55;
        //     console.log('this is keybaordsafasf eleefeef', e);
        //     this.content.resize();
        //     this.scrollToBottom();
        //   });
        //   this.keyboard.onKeyboardHide().subscribe(e => {
        //     this.keyboardHeight = 55;
        //     this.content.resize();
        //     this.scrollToBottom();
        //   });
        // });
    }
    GroupchatroomPage.prototype.ionViewDidLoad = function () {
        this.admob.removeBanner();
        console.log('passdatainfo', this.passdata);
        this.message = '';
        this.messagesArray = [];
        this.getGroupRealTimeMessage();
        this.scrollToBottom();
    };
    GroupchatroomPage.prototype.onclickContent = function () {
        // this.keyboard.close();
        // this.keyboardHeight = 55;
        // this.content.resize();
        this.scrollToBottom();
    };
    GroupchatroomPage.prototype.onFocus = function () {
        console.log('this is focus event');
        // this.keyboard.show();
    };
    GroupchatroomPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 100);
    };
    GroupchatroomPage.prototype.ionViewWillEnter = function () {
        this.admobservice.removeAdmob();
        this.chatprovider
            .saveUserStatus(true)
            .then(function (succ) { })
            .catch(function (err) {
            alert(err);
        });
    };
    GroupchatroomPage.prototype.ionViewDidLeave = function () {
        this.chatprovider.saveUserStatus(false);
    };
    // group
    GroupchatroomPage.prototype.getGroupRealTimeMessage = function () {
        var _this = this;
        var groupchatRef = this.firestore.collection('groupchat');
        groupchatRef
            .doc(this.passdata['groupid'])
            .collection('messages')
            .valueChanges()
            .subscribe(function (snapshot) {
            console.log('this is messagearray info', snapshot);
            _this.generateRealtimeMessageArray(snapshot.reverse());
        });
    };
    GroupchatroomPage.prototype.generateRealtimeMessageArray = function (info) {
        var _this = this;
        this.messagesArray = [];
        var myid = this.matchprovider.getUserinfo()['id'];
        var temparray = [];
        var i = 0;
        info.forEach(function (element) {
            i++;
            var tempmodel = new __WEBPACK_IMPORTED_MODULE_1__Model_ChatModel__["b" /* GroupChatModel */]();
            tempmodel.key = element['key'];
            tempmodel.dateofmsg = element['dateofmsg'];
            tempmodel.message = element['message'];
            tempmodel.receiver = element['receiver'];
            tempmodel.sender = element['sender'];
            tempmodel.timeofmsg = element['timeofmsg'];
            tempmodel.timestamp = element['timestamp'];
            tempmodel.type = element['type'];
            console.log("this is element info", element);
            if (element['type'] == 'meeting') {
                tempmodel.photo = element['photo'];
                tempmodel.placename = element['placename'];
                if (element['accptUsers'] == null) {
                    tempmodel.isAccept = false;
                }
                else {
                    console.log("this is remnopafafdsaf", myid, element['accptUsers']);
                    var userinfo = element['accptUsers'].filter(function (elem) { return elem['myid'] == myid; });
                    if (userinfo.length > 0) {
                        tempmodel.isAccept = true;
                        tempmodel.acceptUsers = element['accptUsers'];
                    }
                    else {
                        tempmodel.isAccept = false;
                    }
                }
            }
            else {
                tempmodel.photo = element['placename'];
                tempmodel.isAccept = element['accept'];
            }
            temparray.push(tempmodel);
            if (i == info.length) {
                // this.loadingprovider.removeLoadingView();
                (_a = _this.messagesArray).push.apply(_a, temparray);
                _this.scrollToBottom();
            }
            var _a;
        });
    };
    GroupchatroomPage.prototype.onclickSendButtonWhenGroupChat = function () {
        var _this = this;
        console.log('this is for the test');
        if (this.message != '') {
            this.groupprovider
                .saveGroupChatMessages(this.message, this.passdata['groupid'], 'group')
                .then(function (re) {
                _this.message = '';
            })
                .catch(function (er) { });
        }
        this.onclickContent();
    };
    GroupchatroomPage.prototype.changetextarea = function () {
        // get elements
        var element = document.getElementById('messageInputBox');
        var textarea = element.getElementsByTagName('input')[0];
        // set default style for textarea
        textarea.style.minHeight = '50px';
        textarea.style.height = '0';
        // limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 160)
            scroll_height = 160;
        // apply new style
        element.style.height = scroll_height + 'px';
        textarea.style.minHeight = scroll_height + 'px';
        textarea.style.height = scroll_height + 'px';
    };
    GroupchatroomPage.prototype.onclickbackbutton = function () {
        this.navCtrl.pop();
    };
    GroupchatroomPage.prototype.onclicksettimebutton = function (info) {
        console.log('this is settime info', info);
        var parameter = {
            myid: this.myinfo['id'],
            friendid: this.passdata['userid'],
            data: info,
            groupid: this.passdata['groupid'],
            type: 'group'
        };
        this.modalCtrl
            .create('SettimePage', { data: parameter }, { cssClass: 'inset-modal' })
            .present();
    };
    GroupchatroomPage.prototype.getGroupUsers = function (groupid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.groupprovider
                .getGroupMemebersInfos(groupid)
                .then(function (res) {
                resolve(res);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    GroupchatroomPage.prototype.gotodetailpage = function (info) {
        console.log("this is info", info);
        this.navCtrl.push('ChatdetailPage', { data: info, type: 'group' });
    };
    GroupchatroomPage.prototype.onclickgroupbutton = function (url) {
        var inappbrowser = this.lab.create(url, '_blank');
        inappbrowser.show();
    };
    // report message
    GroupchatroomPage.prototype.onclickmessage = function (item) {
        var _this = this;
        console.log('this is item info', this.matchprovider.getUserinfo(), item);
        var myid = this.matchprovider.getUserinfo()['id'];
        if (item['sender'] != myid) {
            var actionSheet = this.actionsheetCtrl.create({
                title: '',
                buttons: [
                    {
                        text: 'Report',
                        role: 'destructive',
                        handler: function () {
                            console.log('Destructive clicked');
                            _this.sendReportMessage(item);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            this.alertService.presentAlert('', "Can't report about own message!");
        }
    };
    GroupchatroomPage.prototype.onclickuserimage = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'Block User',
                    role: 'destructive',
                    handler: function () {
                        _this.sendBlockUserRequest();
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Report Profile',
                    role: 'destructive',
                    handler: function () {
                        _this.sendReportUserRequest();
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    GroupchatroomPage.prototype.sendBlockUserRequest = function () {
        var _this = this;
        this.chatprovider
            .setBlockUser(this.passdata['userid'])
            .then(function (succss) {
            _this.navCtrl.pop();
        })
            .catch(function (er) { });
    };
    GroupchatroomPage.prototype.sendReportUserRequest = function () {
        var _this = this;
        var myname = this.matchprovider.getUserinfo()['username'];
        var myemail = this.matchprovider.getUserinfo()['email'];
        var email = {
            to: 'admin@dittochat.com',
            cc: [myemail],
            bcc: [],
            attachment: [],
            subject: 'Report Content',
            body: 'Hi, My username is' +
                myname +
                '. I would like to report' +
                this.passdata['username'] +
                'More Info :'
        };
        this.emailcomposer.addAlias('gmail', 'com.google.android.gm');
        this.emailcomposer.addAlias('outlook', 'com.microsoft.android.outlook');
        this.emailcomposer.open(email);
        this.emailcomposer
            .isAvailable()
            .then(function (available) {
            console.log('this is available', available);
            if (available) {
                //Now we know we can send
                // Send a text message using default options
                _this.emailcomposer.open(email);
            }
        })
            .catch(function (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        });
    };
    // send report message to admin
    GroupchatroomPage.prototype.sendReportMessage = function (item) {
        var _this = this;
        var myname = this.matchprovider.getUserinfo()['username'];
        var myemail = this.matchprovider.getUserinfo()['email'];
        var email = {
            to: 'admin@dittochat.com',
            cc: [myemail],
            bcc: [],
            attachment: [],
            subject: 'Report Content',
            body: 'Hi, My username is' +
                myname +
                '. I would like to report' +
                this.passdata['username'] +
                'chatID : ' +
                item['key']
        };
        this.emailcomposer.addAlias('gmail', 'com.google.android.gm');
        this.emailcomposer.addAlias('outlook', 'com.microsoft.android.outlook');
        this.emailcomposer.open(email);
        this.emailcomposer
            .isAvailable()
            .then(function (available) {
            console.log('this is available', available);
            if (available) {
                //Now we know we can send
                // Send a text message using default options
                _this.emailcomposer.open(email);
            }
        })
            .catch(function (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        });
    };
    // when group accept
    GroupchatroomPage.prototype.onclickAcceptGroupButton = function (info) {
        console.log("this is accept", info);
        this.chatprovider.acceptMeetingWhenGroup(this.passdata['groupid'], info);
    };
    GroupchatroomPage.prototype.onclickCancelGroupButton = function (info) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* Content */])
    ], GroupchatroomPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", Object)
    ], GroupchatroomPage.prototype, "message_input", void 0);
    GroupchatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'page-groupchatroom',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/groupchatroom/groupchatroom.html"*/'<ion-header>\n  <ion-toolbar text-center>\n\n    <ion-buttons left menuToggle>\n      <button color="textcolor" ion-button icon-only (click)="onclickbackbutton()">\n        <ion-icon color="divider" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title color="blackcolor">\n      <p style="color: black; font-size: 20px;">Group Chat</p>\n    </ion-title>\n\n    <ion-buttons right>\n      <!-- <button color="textcolor" ion-button icon-only (click)="onclickuserimage()">\n        <ion-avatar *ngIf="passdata.userimage != \'\'">\n          <img style="width: 30px; height: 30px; border-radius: 15px;" src="{{passdata.userimage}}">\n        </ion-avatar>\n      </button> -->\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  <div class="places">\n    <content scroll="true">\n      <ion-scroll scrollX="true" direction="x">\n        <div class="image_blocks" *ngFor="let item of (userPlaces | sort)">\n          <img *ngIf="item.placeimage" src="{{item.placeimage}}">\n          <img *ngIf="item.placephoto" src="{{item.placephoto}}">\n\n          <div>\n            <p *ngIf="item.placedisprice" [style.margin.px]="0">{{item.placename}}</p>\n            <p *ngIf="!item.placedisprice">{{item.placename}}</p>\n\n            <div *ngIf="item.placedisprice" class="price">\n              <p style="margin-top: 5px;">{{item.placeprice}}</p>\n\n              <span style="margin-top: 5px;">\n                <span>{{item.placedisprice}}</span>\n              </span>\n            </div>\n\n          </div>\n\n          <button *ngIf="item.placeprice" style="color:white;" (click)="onclickgroupbutton(item.placeurl)" color="groupon_buy"\n            ion-button round> GET DEAL</button>\n          <button ion-button round outline (click)="onclicksettimebutton(item)"> set a time</button>\n        </div>\n      </ion-scroll>\n    </content>\n  </div>\n\n</ion-header>\n\n<ion-content #content (click)="onclickContent()">\n\n  <div class="chatwindow">\n    <ion-list no-lines>\n      <ion-item text-wrap *ngFor="let item of (messagesArray | sort); let i = index">\n\n        <ion-avatar item-left *ngIf="item.sender != myinfo.id">\n          <img src="{{item.photo}}">\n        </ion-avatar>\n\n        <div no-lines class="bubble me" *ngIf="item.type != \'meeting\'   && item.sender != myinfo.id">\n          <span class="triangle"></span>\n          <p (tap)="onclickmessage(item)">{{item.message}}</p>\n          <!-- <div class="msg-time">{{item.timeofmsg}} {{item.dateofmsg}}</div> -->\n        </div>\n\n        <div no-lines class="bubble meeting_me" *ngIf="item.type == \'meeting\' && item.sender != myinfo.id">\n            <span class="triangle"></span>\n\n            <div class="meeting_back">\n              <img *ngIf="item.message" src="{{item.placename}}" />\n              <img *ngIf="!item.message" src="assets/img/group.png" />\n              <div class="msg-time">\n                <p>{{item.message}}</p>\n                <p>{{item.timeofmsg | date : \'MMM d, y h:mm a\'}}</p>\n              </div>\n            </div>\n\n            <!--  1 : 1 chat -->\n            <!-- not accept meeting-->\n            <div *ngIf="!item.isAccept" col-12 class="button_group">\n              <div>\n                <img src="assets/img/meeting_cancel.png" (tap)="onclickCancelGroupButton(item)">\n              </div>\n\n              <div>\n                <img src="assets/img/meeting_accept.png" (tap)="onclickAcceptGroupButton(item)">\n              </div>\n\n            </div>\n\n            <!--  -->\n            <div col-12 item-left style="float: left;display: inline-flex;" *ngIf="item.isAccept" (click)="gotodetailpage(item)">   \n                <ion-avatar *ngFor="let photos of item.acceptUsers">                  \n                  <img style="width: 30px; height: 30px;" src="{{photos.photourl}}">\n                </ion-avatar>             \n            </div>\n\n        </div>\n\n        <div no-lines class="bubble you" *ngIf="item.type != \'meeting\' && item.sender == myinfo.id">\n          <span class="triangle"></span>\n          <p (tap)="onclickmessage(item)">{{item.message}}</p>\n        </div>\n\n        <div no-lines class="bubble meeting_you" *ngIf="item.type == \'meeting\' && item.sender == myinfo.id">\n          <span class="triangle"></span>\n          <div class="meeting_back">\n            <img *ngIf="item.message" src="{{item.placename}}" />\n            <img *ngIf="!item.message" src="assets/img/group.png" />\n            <div class="msg-time">\n              <p>{{item.message}}</p>\n              <p>{{item.timeofmsg | date : \'MMM d, y h:mm a\'}}</p>\n            </div>\n          </div>\n\n          <!-- not accept meeting -->\n          <div col-12 class="button_group" (click)="gotodetailpage(item)">\n            <div><img src="assets/img/checked.png"> </div>\n            <div>More Detail</div>\n          </div>\n\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height.px]="keyboardHeight">\n  <div class="input-wrap">\n    <ion-input autocorrect="on" autocomplete="on" #chat_input placeholder="Type a message" [(ngModel)]="message"\n      (keyup.enter)="onclickSendButtonWhenGroupChat()" (focus)="onFocus()">\n    </ion-input>\n    <button ion-button clear icon-only item-right (click)="onclickSendButtonWhenGroupChat()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n</ion-footer>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/groupchatroom/groupchatroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_chatprovider_chatprovider__["a" /* ChatproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_matched_matched__["a" /* MatchedProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_Utils_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_14__providers_group_group__["a" /* GroupProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_admobservice_admobservice__["a" /* AdmobserviceProvider */]])
    ], GroupchatroomPage);
    return GroupchatroomPage;
}());

//# sourceMappingURL=groupchatroom.js.map

/***/ })

});
//# sourceMappingURL=13.js.map