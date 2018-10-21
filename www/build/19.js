webpackJsonp([19],{

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettimePageModule", function() { return SettimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settime__ = __webpack_require__(871);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettimePageModule = /** @class */ (function () {
    function SettimePageModule() {
    }
    SettimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settime__["a" /* SettimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settime__["a" /* SettimePage */]),
            ],
        })
    ], SettimePageModule);
    return SettimePageModule;
}());

//# sourceMappingURL=settime.module.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_Utils_alert_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_chatprovider_chatprovider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the SettimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettimePage = /** @class */ (function () {
    function SettimePage(navCtrl, navParams, viewCtrl, chatProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.chatProvider = chatProvider;
        this.alertCtrl = alertCtrl;
    }
    SettimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettimePage');
        this.passData = this.navParams.get('data');
        this.date_end = "";
        this.date_start = "";
        console.log('====================================');
        console.log(this.passData);
        console.log('====================================');
    };
    SettimePage.prototype.onclickOkButton = function () {
        var _this = this;
        if (this.date_start == '') {
            this.alertCtrl.presentAlert("", "Please fill start date information");
        }
        else if (this.date_end == '') {
            this.alertCtrl.presentAlert("", "Please fill end date information");
        }
        else {
            if (this.passData['type'] == 'single') {
                this.chatProvider.addMeeting(this.passData['data']['placename'], this.passData['data']['placeimage'], this.passData['friendid'], "meeting", this.date_start, this.date_end).then(function (suc) {
                    _this.viewCtrl.dismiss();
                }).catch(function (err) {
                    alert(err);
                });
            }
            else {
                this.chatProvider.addMeetingWhenGroup(this.passData['data']['placename'], this.passData['data']['placephoto'], "meeting", this.date_start, this.date_end, this.passData['groupid']).then(function (suc) {
                    _this.viewCtrl.dismiss();
                }).catch(function (err) {
                    alert(err);
                });
            }
        }
    };
    SettimePage.prototype.onclickCancelButton = function () {
        this.viewCtrl.dismiss();
    };
    SettimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-settime',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/settime/settime.html"*/'<!--\n  Generated template for the SettimePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content class="content" padding>\n\n  <img src="assets/img/icon.png">\n  <ion-list>\n    <ion-item>\n        <ion-label>Starts</ion-label>\n        <ion-datetime displayFormat="YY/MMM/DD/DDDD hh/mm A" [(ngModel)]="date_start"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Ends</ion-label>\n        <ion-datetime displayFormat="YY/MMM/DD/DDDD hh/mm A" [(ngModel)]="date_end"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <button class="btn" (click)="onclickOkButton()" ion-button>OK</button>\n  <button class="btn" (click)="onclickCancelButton()" ion-button>Cancel</button>\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/settime/settime.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_chatprovider_chatprovider__["a" /* ChatproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_Utils_alert_service__["a" /* AlertService */]])
    ], SettimePage);
    return SettimePage;
}());

//# sourceMappingURL=settime.js.map

/***/ })

});
//# sourceMappingURL=19.js.map