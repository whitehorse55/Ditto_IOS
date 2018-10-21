webpackJsonp([29],{

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomtabbarPageModule", function() { return BottomtabbarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bottomtabbar__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BottomtabbarPageModule = /** @class */ (function () {
    function BottomtabbarPageModule() {
    }
    BottomtabbarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bottomtabbar__["a" /* BottomtabbarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bottomtabbar__["a" /* BottomtabbarPage */]),
            ],
        })
    ], BottomtabbarPageModule);
    return BottomtabbarPageModule;
}());

//# sourceMappingURL=bottomtabbar.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomtabbarPage; });
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


/**
 * Generated class for the BottomtabbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BottomtabbarPage = /** @class */ (function () {
    function BottomtabbarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'MainPage';
        this.tab2Root = 'PlacesearchPage';
        this.tab3Root = 'NewInvitePage';
        this.tab4Root = 'ChattingPage';
        this.tab5Root = 'SettingPage';
        if (this.navParams.get('opentab')) {
            // this.selectIndex = this.navParams.get('opentab')
        }
        else {
            this.selectIndex = 0;
        }
    }
    BottomtabbarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BottomtabbarPage');
    };
    BottomtabbarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bottomtabbar',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/bottomtabbar/bottomtabbar.html"*/'<ion-tabs [selectedIndex]="selectIndex" >\n  <ion-tab [root]="tab1Root" rootParams="Explore" tabTitle="Explore" tabIcon="compass"></ion-tab>\n  <ion-tab [root]="tab2Root" rootParams="Search" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" class="my-add-button" tabTitle="New Invite" tabIcon="md-add"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Chats" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/bottomtabbar/bottomtabbar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], BottomtabbarPage);
    return BottomtabbarPage;
}());

//# sourceMappingURL=bottomtabbar.js.map

/***/ })

});
//# sourceMappingURL=29.js.map