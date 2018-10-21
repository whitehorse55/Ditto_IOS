webpackJsonp([26],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletepagePageModule", function() { return CompletepagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completepage__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompletepagePageModule = /** @class */ (function () {
    function CompletepagePageModule() {
    }
    CompletepagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__completepage__["a" /* CompletepagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__completepage__["a" /* CompletepagePage */]),
            ],
        })
    ], CompletepagePageModule);
    return CompletepagePageModule;
}());

//# sourceMappingURL=completepage.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant_constant__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Utils_alert_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fcm_fcm__ = __webpack_require__(188);
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
 * Generated class for the CompletepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletepagePage = /** @class */ (function () {
    function CompletepagePage(navCtrl, navParams, facebookprovider, alertprovider, authprovider, fcmprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebookprovider = facebookprovider;
        this.alertprovider = alertprovider;
        this.authprovider = authprovider;
        this.fcmprovider = fcmprovider;
        this.userinfo = this.navParams.get('data');
        this.countryList = __WEBPACK_IMPORTED_MODULE_2__Constant_constant__["a" /* Constant */].countryList;
        this.registerCredentials = { countrycode: "", phonenumber: "" };
        this.registerCredentials.countrycode = "+1";
    }
    CompletepagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletepagePage');
    };
    CompletepagePage.prototype.signupWithFacebook = function () {
        var _this = this;
        if (this.registerCredentials.countrycode == "" || this.registerCredentials.phonenumber == "") {
            this.alertprovider.presentAlert("", "Please fill Countrycode and PhoneNumber info.");
        }
        else {
            var passdata = {
                email: this.userinfo['email'],
                username: this.userinfo['displayName'],
                phonenumber: this.registerCredentials.countrycode + this.registerCredentials.phonenumber,
                imagearray: this.userinfo['photoUrl'],
                countrycode: this.registerCredentials.countrycode
            };
            this.facebookprovider.signupWithFacebook(passdata).then(function (succ) {
                _this.authprovider.getUserInfoFromEmail(_this.userinfo['email']).then(function (result) {
                    _this.fcmprovider.getToken();
                    _this.navCtrl.setRoot("WelcomePage");
                });
            }).catch(function (err) {
                alert(err);
            });
        }
        console.log("this is signupwith facebook", this.userinfo);
    };
    CompletepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-completepage',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/completepage/completepage.html"*/'<ion-content class="content">\n    <ion-list class="list">\n      \n    <ion-item>\n        <ion-label  class="countrycode"><ion-icon item-start ios="ios-planet" md="md-planet"></ion-icon></ion-label>\n\n        <ion-select [(ngModel)]="registerCredentials.countrycode" name="countrycode" (ionChange)="onSelectChange($event)">\n            <ion-option *ngFor="let item of countryList" value="{{item.dial_code}}" >\n                ( {{item.dial_code}} ) {{item.name}}\n            </ion-option>\n        </ion-select>\n    </ion-item>\n      \n\n      <ion-item>\n        <ion-label> <ion-icon ios="ios-phone-portrait" md="md-phone-portrait"></ion-icon></ion-label>\n        <ion-input placeholder="phonenumber" class="textarea"   type="tel"  name="phonenumber" required [(ngModel)]="registerCredentials.phonenumber"></ion-input>\n    </ion-item>\n        \n      <button (click)="signupWithFacebook()" class="btn_done" full clear ion-button>Done</button>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/completepage/completepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__["a" /* FacebookProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_Utils_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_fcm_fcm__["a" /* FcmProvider */]])
    ], CompletepagePage);
    return CompletepagePage;
}());

//# sourceMappingURL=completepage.js.map

/***/ })

});
//# sourceMappingURL=26.js.map