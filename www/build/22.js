webpackJsonp([22],{

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchdatePageModule", function() { return MatchdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchdate__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchdatePageModule = /** @class */ (function () {
    function MatchdatePageModule() {
    }
    MatchdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__matchdate__["a" /* MatchdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__matchdate__["a" /* MatchdatePage */]),
            ],
        })
    ], MatchdatePageModule);
    return MatchdatePageModule;
}());

//# sourceMappingURL=matchdate.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the MatchdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchdatePage = /** @class */ (function () {
    function MatchdatePage(navCtrl, navParams, localstorageprovider, matchedprovider, authprovider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localstorageprovider = localstorageprovider;
        this.matchedprovider = matchedprovider;
        this.authprovider = authprovider;
        this.viewCtrl = viewCtrl;
        this.userdata = {};
    }
    MatchdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchdatePage');
        var passData = this.navParams.get('data');
        var myData = this.localstorageprovider.getUserinfo();
        this.getSenderInfo(passData, myData);
    };
    MatchdatePage.prototype.getSenderInfo = function (passData, myData) {
        var _this = this;
        this.authprovider
            .getFrindsInfoFromId(passData[0]['receiver'])
            .then(function (result) {
            _this.userdata = {
                myname: myData['username'],
                myimage: myData['photoUrl'],
                friendname: result[0]['username'],
                friendimage: result[0]['imagearray'],
                placename: passData[0]['message'],
                placeimage: passData[0]['placename'],
                meetingtime: passData[0]['timeofmsg']
            };
            console.log('====================================');
            console.log(_this.userdata);
            console.log('====================================');
        })
            .catch(function (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            alert(error);
        });
    };
    MatchdatePage.prototype.onclickCancelButton = function () {
        this.viewCtrl.dismiss();
    };
    MatchdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-matchdate',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/matchdate/matchdate.html"*/'<!--\n  Generated template for the MatchdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content  class="content" overflow-scroll="true">\n\n    <ion-item no-lines>\n      <p>IT’S A DATE!</p>\n    </ion-item>\n\n    <ion-item text-wrap no-lines> \n     <p>You and <b>{{userdata.friendname}}</b>  will meet at \n     <b>{{userdata.meetingtime | date : \'MMM d, y h:mm a\'}}</b> at <b>{{userdata.placename}}</b>\n    </p>\n    </ion-item>\n\n    <ion-item text-center no-lines>\n      <div>\n       <ion-avatar>\n         <img src="{{userdata.myimage}}">\n       </ion-avatar>\n       <ion-avatar>\n          <img src="{{userdata.friendimage}}">\n        </ion-avatar>\n      </div>  \n    </ion-item>\n\n    <div class="place_image">\n      <img  src="{{userdata.placeimage}}"/>\n      <div>\n          <p>{{userdata.placename}}</p>\n      </div>\n     \n    </div>\n\n    <button (click)="onclickCancelButton()" ion-button>Ok</button>\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/matchdate/matchdate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_matched_matched__["a" /* MatchedProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* ViewController */]])
    ], MatchdatePage);
    return MatchdatePage;
}());

//# sourceMappingURL=matchdate.js.map

/***/ })

});
//# sourceMappingURL=22.js.map