webpackJsonp([23],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_google__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_pro__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { AdMobFree } from '@ionic-native/admob-free';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, alertCtrl, authprovider, toastCtrl, loadingCtrl, facebookprovider, fcmprovider, googleprovider, admobpro
        // public admob : AdMobFree
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authprovider = authprovider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.facebookprovider = facebookprovider;
        this.fcmprovider = fcmprovider;
        this.googleprovider = googleprovider;
        this.admobpro = admobpro;
        this.slideIndex = 0;
        this.url_terms = "http://www.dittochat.com/terms";
        this.url_privacy = "http://www.dittochat.com/privacy";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.admobpro.removeBanner();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var type = this.navParams.get('type');
        if (type == 'logout') {
            this.slider.slideTo(0, 2);
        }
    };
    LoginPage.prototype.onSlideChanged = function () {
        this.slideIndex = this.slider.getActiveIndex();
        console.log("changed", this.slideIndex);
    };
    LoginPage.prototype.onclickCreateAccount = function () {
        console.log('click create account button');
        var signupModal = this.modalCtrl.create('SignupPage');
        signupModal.onDidDismiss(function (phonenumber) {
            console.log('closed modal vieww');
        });
        signupModal.present();
    };
    LoginPage.prototype.onclickFacebook = function () {
        var _this = this;
        this.showLoading();
        this.facebookprovider.loginwithFacebook().then(function (result) {
            _this.loading.dismiss();
            _this.gotoMainPage(result);
        }).catch(function (err) {
            _this.loading.dismiss();
            if (err != "false") {
                _this.gotoFacebookSignup(err);
            }
        });
    };
    // if facebook user is exist
    LoginPage.prototype.gotoMainPage = function (info) {
        var _this = this;
        console.log("this is main page info", info);
        this.authprovider.getUserInfoFromEmail(info['email']).then(function (succ) {
            _this.authprovider.getUserVisited().then(function (visitresult) {
                _this.loading.dismiss();
                console.log("visitresult", visitresult);
                if (succ['firstlogin'] == false) {
                    if (visitresult[0]['isVisited'] == null) {
                        _this.authprovider.updateUserVisited(true);
                        _this.fcmprovider.getToken();
                        _this.navCtrl.setRoot('WalkthroughPage');
                    }
                    else {
                        _this.fcmprovider.getToken();
                        _this.navCtrl.setRoot('WelcomePage');
                    }
                }
                else {
                    if (visitresult[0]['isVisited'] == null) {
                        _this.authprovider.updateUserVisited(true);
                        _this.fcmprovider.getToken();
                        _this.navCtrl.setRoot('WalkthroughPage');
                    }
                    else {
                        _this.fcmprovider.getToken();
                        _this.navCtrl.setRoot('BottomtabbarPage');
                    }
                }
            }).catch(function (er) {
                _this.showError(er);
                _this.loading.dismiss();
            });
        });
    };
    // when facebook user is not exist
    LoginPage.prototype.gotoFacebookSignup = function (info) {
        console.log("this is facebook info", info);
        this.navCtrl.push('CompletepagePage', { data: info });
    };
    LoginPage.prototype.onclickGoogle = function () {
        var _this = this;
        this.showLoading();
        this.googleprovider.googleLogin().then(function (succ) {
            _this.loading.dismiss();
            _this.gotoMainPage(succ);
        }).catch(function (err) {
            _this.loading.dismiss();
            if (err != "false") {
                _this.gotoFacebookSignup(err);
            }
        });
    };
    LoginPage.prototype.onclickterms = function (item) {
        console.log('====================================');
        console.log(item);
        console.log('====================================');
        if (item == 'terms') {
            window.open(this.url_terms, '_system', 'location=yes');
        }
        else {
            window.open(this.url_privacy, '_system', 'location=yes');
            ;
        }
    };
    LoginPage.prototype.presentConfirm = function (credential) {
        var alert = this.alertCtrl.create({
            title: 'Verify Phone',
            message: 'Please enter the  6 digit code sent to you via SMS',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Resend',
                    handler: function () {
                        console.log('resend clicked');
                    }
                },
                {
                    text: 'Cotinue',
                    handler: function (data) {
                        credential.confirm(data.phone).then(function (result) {
                            console.log('this is test' + result);
                        });
                    }
                }
            ],
            inputs: [
                {
                    name: 'phone',
                    placeholder: 'Enter Code',
                    type: 'text'
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.verify = function (phonenumber) {
        // this.showLoading()
        console.log('this is verify function');
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: 'CN',
            facebookNotificationsEnabled: true
        }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) { return console.log(info); }, function (err) { return console.log(err); });
        });
        // this.authprovider.phoneVerification(phonenumber, this.recaptchaVerifier).then(credential =>{
        //     this.presentConfirm(credential)
        //     this.loading.dismiss()
        // }).catch(error=>{
        //   console.log("enter phon", error)
        //     this.showError(error)
        // })
    };
    LoginPage.prototype.onclickLogin = function () {
        this.navCtrl.push('SigninPage');
    };
    /////////////////// show toast function////////////////////
    LoginPage.prototype.notify = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ////////////// function : show progress view///////////////////
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ////////// function : show error alert ///////////////////////
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: [
                {
                    text: 'Ok',
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Slides */])
    ], LoginPage.prototype, "slider", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/login/login.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content fullscreen class="content">\n\n  <ion-slides #slider pager="true"  (ionSlideWillChange)="onSlideChanged()">\n \n    <ion-slide class="myslide1">\n      </ion-slide>\n      \n      <ion-slide class="myslide2">\n      </ion-slide>\n  \n    <ion-slide class="main">\n  \n        <!-- ////////////////////DITTO title -->\n   <div class="top_title">\n   </div>\n \n   <!-- Get Connected title -->\n   <div class="center_title">\n   </div>\n \n   <!-- Create account button -->\n   <div class="create_account" (click)="onclickCreateAccount()">\n     <button  full class="btn_login" ion-button clear>CREATE AN ACCOUNT</button>\n   </div>\n \n   <!-- Login button -->\n   <div class="login" (click)="onclickLogin()">\n     <button full class="btn_login" ion-button clear>LOG IN</button>\n   </div>\n \n   <div class="social_login">\n       <button class="btn" ion-button style="background-image: url(assets/img/facebook.png);" (click)="onclickFacebook()"></button>\n       <button class="btn" ion-button style="background-image: url(assets/img/google.png);" (click)="onclickGoogle()"></button>\n   </div>\n \n   <div class="terms">\n     <p>By creating an account or signing in,you agree to  \n       <!-- <a href="http://www.dittochat.com/terms">terms of use</a> & <a href="http://www.dittochat.com/privacy"> privacy policy</a> -->\n       <a class="button" (click)="onclickterms(\'terms\')"> our terms of use & </a>  <a class="button" (click)="onclickterms(\'privacy\')"> privacy policy</a>\n     </p>\n   </div>\n   <!--\n   <div class="login" (click)="verify(\'123\')">\n       <button ion-button clear>LOG IN</button>\n   </div> -->\n  \n    </ion-slide>\n\n \n      \n  </ion-slides>\n\n  \n\n</ion-content>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__["a" /* FacebookProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_google_google__["a" /* GoogleProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_pro__["a" /* AdMobPro */]
            // public admob : AdMobFree
        ])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=23.js.map