webpackJsonp([28],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailPageModule", function() { return ChatdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetail__ = __webpack_require__(849);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatdetailPageModule = /** @class */ (function () {
    function ChatdetailPageModule() {
    }
    ChatdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatdetail__["a" /* ChatdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatdetail__["a" /* ChatdetailPage */]),
            ],
        })
    ], ChatdetailPageModule);
    return ChatdetailPageModule;
}());

//# sourceMappingURL=chatdetail.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(52);
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



/**
 * Generated class for the ChatdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatdetailPage = /** @class */ (function () {
    function ChatdetailPage(navCtrl, navParams, authprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authprovider = authprovider;
        this.passdata = this.navParams.get('data');
        this.type = this.navParams.get('type');
        this.userArray = [];
        if (this.type == 'single') {
            var result = this.getUserPhotoInfo(this.passdata['receiver']);
            var result1 = this.getUserPhotoInfo(this.passdata['sender']);
        }
    }
    ChatdetailPage.prototype.getUserPhotoInfo = function (userid) {
        var _this = this;
        this.authprovider.getFrindsInfoFromId(userid).then(function (res) {
            _this.userArray.push(res[0]);
            console.log("this is user", _this.userArray);
        });
    };
    ChatdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatdetailPage');
    };
    ChatdetailPage.prototype.onclickcancelbutton = function () {
    };
    ChatdetailPage.prototype.onclickDonebutton = function () {
        this.navCtrl.pop();
    };
    ChatdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-chatdetail',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/chatdetail/chatdetail.html"*/'<ion-header>\n\n    <ion-toolbar text-center>\n  \n  \n      <ion-title color="blackcolor" >\n       <p style="color: black; font-size: 20px;">{{passdata.message}}</p> \n      </ion-title>\n  \n      <ion-buttons right>\n        <button color="blackcolor" ion-button icon-only (click)="onclickDonebutton()">\n            Done\n        </button>\n      </ion-buttons>\n  \n    </ion-toolbar>\n  \n  </ion-header>\n\n\n  <ion-content class="content">\n      <div class="top_image">\n        <img src="{{passdata.placename}}"/>\n        <div class="title">\n          <p>{{passdata.timeofmsg |  date : \'MMM d, y h:mm a\'}}</p>\n        </div>\n      </div>\n  \n      <ion-list class="list">\n        <ion-item-divider > <ion-label>Invited</ion-label></ion-item-divider>\n        <ng-container *ngIf="type == \'group\'">\n            <ion-item *ngFor="let item of passdata.acceptUsers" >\n                <ion-avatar item-left>\n                    <img style="width: 50px; height: 50px;"  src="{{item.photourl}}">\n                </ion-avatar>\n                \n                <div>\n                    <p style="color : black;">{{item.username}}</p>\n                </div>\n                \n            </ion-item>\n        </ng-container>\n        \n        <ng-container *ngIf="type != \'group\'">\n            <ion-item  *ngFor="let items of userArray">\n                <ion-avatar   item-left>\n                    <img style="width: 50px; height: 50px;" src="{{items.imagearray}}">\n                </ion-avatar>\n                \n                <div>\n                    <p style="color : black;">{{items.username}}</p>\n                </div>\n                \n            </ion-item>\n        </ng-container>\n          \n      </ion-list>   \n  \n  </ion-content>\n  \n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/chatdetail/chatdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], ChatdetailPage);
    return ChatdetailPage;
}());

//# sourceMappingURL=chatdetail.js.map

/***/ })

});
//# sourceMappingURL=28.js.map