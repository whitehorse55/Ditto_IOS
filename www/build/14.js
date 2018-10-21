webpackJsonp([14],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomegeoPageModule", function() { return WelcomegeoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcomegeo__ = __webpack_require__(879);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomegeoPageModule = /** @class */ (function () {
    function WelcomegeoPageModule() {
    }
    WelcomegeoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcomegeo__["a" /* WelcomegeoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcomegeo__["a" /* WelcomegeoPage */]),
            ],
        })
    ], WelcomegeoPageModule);
    return WelcomegeoPageModule;
}());

//# sourceMappingURL=welcomegeo.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomegeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_validation_validation__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocatino_geolocatino__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fcm_fcm__ = __webpack_require__(188);
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
 * Generated class for the WelcomegeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomegeoPage = /** @class */ (function () {
    function WelcomegeoPage(navCtrl, navParams, loadCtrl, alertCtrl, validationService, localstorageprovider, geolocationprovider, fcmprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.validationService = validationService;
        this.localstorageprovider = localstorageprovider;
        this.geolocationprovider = geolocationprovider;
        this.fcmprovider = fcmprovider;
        this.geoCredential = { code: '', isMylocation: false };
        // this.geolocationprovider
        //   .changeZipCodeToLocation('beijing')
        //   .then(su => { })
        //   .catch(er => {
        //     alert(er);
        //   });
    }
    WelcomegeoPage.prototype.ionViewDidLoad = function () {
        this.check_array = [];
        this.everycheck = false;
        this.generatePlaceArray();
        // this.isMylocation = false
        // this.code = ""
        this.geoCredential = { code: '', isMylocation: false };
    };
    WelcomegeoPage.prototype.generatePlaceArray = function () {
        this.place_array = [
            {
                placeurl: 'resturant.png',
                placename: 'Restaurants',
                placekey: 'restaurants',
                ischecked: false
            },
            {
                placeurl: 'cafes.png',
                placename: 'Arts & Entertainment',
                placekey: 'arts',
                ischecked: false
            },
            {
                placeurl: 'bars.png',
                placename: 'Active Life',
                placekey: 'active',
                ischecked: false
            },
            {
                placeurl: 'scale.png',
                placename: 'Beauty & Spas',
                placekey: 'beautysvc',
                ischecked: false
            },
            {
                placeurl: 'scale.png',
                placename: 'beautysvc',
                placekey: 'tours',
                ischecked: false
            },
            {
                placeurl: 'scale.png',
                placename: 'Bars',
                placekey: 'bars',
                ischecked: false
            },
        ];
    };
    // function : get current position
    ////////////// when click use my location button
    WelcomegeoPage.prototype.getcurrentpos = function () {
        this.geoCredential.isMylocation = true;
        this.geoCredential.code = '';
        // this.isMylocation = true
        // this.code = ""
    };
    ////////////////when input zip code////////////
    WelcomegeoPage.prototype.inputZipcode = function () {
        if (this.geoCredential.code != '') {
            // this.isMylocation = false
            this.geoCredential.isMylocation = false;
        }
    };
    ///////////////function : when change checkbox status//////////////////////
    WelcomegeoPage.prototype.onchangeEverythingStatus = function (checkval) {
        console.log('checkstua', checkval);
        if (checkval) {
            this.checkAll();
        }
        else {
            this.uncheckAll();
        }
    };
    WelcomegeoPage.prototype.onchangeStatus = function (item, index) {
        this.checkOneItem(item, index);
    };
    WelcomegeoPage.prototype.checkOneItem = function (item, index) {
        if (this.everycheck) {
            this.check_array = [];
            this.everycheck = false;
        }
        if (item.ischecked) {
            this.check_array.push(item.placekey);
            console.log('check', this.check_array);
        }
        else {
            this.check_array.splice(this.check_array.indexOf(item.placekey), 1);
            console.log('uncheck', this.check_array);
        }
    };
    WelcomegeoPage.prototype.checkAll = function () {
        this.check_array = [];
        for (var i = 0; i < this.place_array.length; i++) {
            // this.place_array[i].ischecked = true
            this.check_array.push(this.place_array[i].placekey);
        }
        console.log('clicked checkall', this.check_array);
    };
    WelcomegeoPage.prototype.uncheckAll = function () {
        this.check_array = [];
        // for(let i = 0 ; i < this.place_array.length ; i++)
        // {
        //     this.place_array[i].ischecked = false
        // }
        console.log('clicked uncheckall', this.check_array);
    };
    /////////////////function : when click let me in button////////////
    WelcomegeoPage.prototype.onclickOkbutton = function () {
        var _this = this;
        this.showLoading();
        console.log('this is credent', this.geoCredential);
        this.validationService
            .getPlaceList(this.geoCredential, this.check_array)
            .then(function (success) {
            _this.saveCategoryListTouserinfo();
        })
            .catch(function (err) {
            _this.loading.dismiss();
            _this.showError(err);
        });
    };
    WelcomegeoPage.prototype.saveCategoryListTouserinfo = function () {
        ///////////////////// change array to string ///////////////
        // let usercategoryinfo = this.generateCategoryString()
        var _this = this;
        //////////////////////// save category string to firestore/////////////////
        this.fcmprovider.saveUserCategoryInfos(this.check_array).then(function (res) {
            _this.localstorageprovider.saveCategoryList(_this.check_array);
            if (_this.geoCredential.code != '') {
                /////////////////// zip code /////////// later
                _this.navCtrl.setRoot('BottomtabbarPage');
            }
            else {
                _this.navCtrl.setRoot('BottomtabbarPage');
            }
            _this.loading.dismiss();
        }).catch(function (er) {
            _this.loading.dismiss();
        });
    };
    ////////////// function : show progress view///////////////////
    WelcomegeoPage.prototype.showLoading = function () {
        this.loading = this.loadCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ////////// function : show error alert ///////////////////////
    WelcomegeoPage.prototype.showError = function (text) {
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
        alert.present();
    };
    WelcomegeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-welcomegeo',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/welcomegeo/welcomegeo.html"*/'<!--\n  Generated template for the WelcomegeoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="content">\n    <ion-card class="card" overflow-scroll="true">\n      <ion-card-title>\n          <p>First , Tell Us What your interests Are.</p>\n      </ion-card-title>\n\n      <ion-card-content text-center overflow-scroll="true" style="overflow: inherit;" [style.height.vh]="70">\n          <ion-list>\n              <ion-list-header>\n                <ion-input item-left placeholder="Zip code..." (ionChange)="inputZipcode()" [(ngModel)]="geoCredential.code"></ion-input>\n                <button item-right [disabled]="geoCredential.isMylocation" ion-button (click)="getcurrentpos()">\n                  <ion-icon  color="primary" icon-only icon-start ios="ios-navigate" md="md-navigate" large></ion-icon>\n                   <p>My location</p>\n                </button>\n              </ion-list-header>\n\n              <!-- <ion-item>\n                  <img item-left src="assets/img/everything.png">\n                  <ion-label>everything</ion-label>\n                  <ion-checkbox color="dark" item-right (ionChange)="onchangeEverythingStatus(everycheck)" [(ngModel)]="everycheck"></ion-checkbox>\n              </ion-item> -->\n\n              <ion-item *ngFor="let item of place_array; let i = index" >\n                <img item-left src="assets/img/{{item.placeurl}}">\n                <ion-label>{{item.placename}}</ion-label>\n                <ion-checkbox [disabled]="everycheck" color="dark" item-right (ionChange)="onchangeStatus(item,i)" [(ngModel)]="item.ischecked"></ion-checkbox>\n              </ion-item>\n\n          </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <button class="btn_ok"  (click)="onclickOkbutton()" ion-button>  OK, Let me in  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/welcomegeo/welcomegeo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_validation_validation__["a" /* ValidationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_geolocatino_geolocatino__["a" /* GeolocatinoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fcm_fcm__["a" /* FcmProvider */]])
    ], WelcomegeoPage);
    return WelcomegeoPage;
}());

//# sourceMappingURL=welcomegeo.js.map

/***/ })

});
//# sourceMappingURL=14.js.map