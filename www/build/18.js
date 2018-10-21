webpackJsonp([18],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(873);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
            ],
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fcm_fcm__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_validation__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(52);
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
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, validationprovider, alertCtrl, loadingCtrl, toastCtrl, authprovider, modalCtrl, fcmprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validationprovider = validationprovider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authprovider = authprovider;
        this.modalCtrl = modalCtrl;
        this.fcmprovider = fcmprovider;
        this.registerCredentials = { email: "", password: "" };
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SigninPage");
    };
    SigninPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.validationprovider
            .login(this.registerCredentials)
            .then(function (success) {
            _this.authprovider
                .login(_this.registerCredentials)
                .then(function (result) {
                _this.authprovider
                    .checkEmailVerify()
                    .then(function (res) {
                    _this.authprovider
                        .getUserInfoFromEmail(_this.registerCredentials.email)
                        .then(function (succes) {
                        console.log("visitresult", succes);
                        _this.authprovider.getUserVisited().then(function (visitresult) {
                            _this.loading.dismiss();
                            console.log("visitresult", visitresult);
                            if (succes['firstlogin'] == false) {
                                if (visitresult[0]['isVisited'] == null) {
                                    _this.authprovider.updateUserVisited(true);
                                    _this.fcmprovider.getToken();
                                    _this.navCtrl.setRoot("WalkthroughPage");
                                }
                                else {
                                    _this.fcmprovider.getToken();
                                    _this.navCtrl.setRoot("WelcomePage");
                                }
                            }
                            else {
                                if (visitresult[0]['isVisited'] == null) {
                                    _this.authprovider.updateUserVisited(true);
                                    _this.fcmprovider.getToken();
                                    _this.navCtrl.setRoot("WalkthroughPage");
                                }
                                else {
                                    _this.fcmprovider.getToken();
                                    _this.navCtrl.setRoot("BottomtabbarPage");
                                }
                            }
                        }).catch(function (er) {
                            _this.showError(er);
                            _this.loading.dismiss();
                        });
                    });
                })
                    .catch(function (er) {
                    _this.showError(er);
                    _this.loading.dismiss();
                });
            })
                .catch(function (err) {
                _this.showError(err);
                _this.loading.dismiss();
            });
        })
            .catch(function (error) {
            _this.showError(error);
            _this.loading.dismiss();
        });
    };
    SigninPage.prototype.onclickCancel = function () {
        this.navCtrl.pop();
    };
    SigninPage.prototype.onclickSignup = function () {
        console.log("click create account button");
        var signupModal = this.modalCtrl.create("SignupPage");
        signupModal.onDidDismiss(function (phonenumber) {
            console.log("closed modal vieww");
        });
        signupModal.present();
    };
    /////////////////// show toast function////////////////////
    SigninPage.prototype.notify = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    ////////////// function : show progress view///////////////////
    SigninPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ////////// function : show error alert ///////////////////////
    SigninPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: "Fail",
            subTitle: text,
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        alert.dismiss();
                        return false; // put this on last line of callback
                    }
                }
            ]
        });
        // alert.present(prompt);
        alert.present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-signin",template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="content">\n\n    <div class= "top_title"></div>\n    <div class="center_title"></div>\n\n    <div class="login-box">\n        <form (ngSubmit)="login()" #registerForm="ngForm">\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                    <ion-icon color="dark" ios="ios-mail" item-start md="md-mail"></ion-icon>\n                    <ion-input class="textarea" type="text" placeholder="Email" floating name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon color="dark" ios="ios-key" item-start  md="md-key"></ion-icon>\n                    <ion-input class="textarea" type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class="signup-col">\n              <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n          </ion-row>\n        </form>\n\n        <ion-row class="signup-col">\n            <button ion-button class="submit-btn" full (click)="onclickCancel()">Cancel</button>\n        </ion-row>\n\n        <ion-row class="signup-col">\n          <ion-col col-7><p>Already have an account</p></ion-col>\n          <ion-col col-5><button ion-button (click)="onclickSignup()">Sign Up</button></ion-col>\n        </ion-row>\n\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validation_validation__["a" /* ValidationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_fcm_fcm__["a" /* FcmProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

});
//# sourceMappingURL=18.js.map