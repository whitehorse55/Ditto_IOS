webpackJsonp([16],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyphonePageModule", function() { return VerifyphonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifyphone__ = __webpack_require__(875);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyphonePageModule = /** @class */ (function () {
    function VerifyphonePageModule() {
    }
    VerifyphonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verifyphone__["a" /* VerifyphonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verifyphone__["a" /* VerifyphonePage */]),
            ],
        })
    ], VerifyphonePageModule);
    return VerifyphonePageModule;
}());

//# sourceMappingURL=verifyphone.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyphonePage; });
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
 * Generated class for the VerifyphonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyphonePage = /** @class */ (function () {
    function VerifyphonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VerifyphonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyphonePage');
    };
    VerifyphonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verifyphone',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/verifyphone/verifyphone.html"*/'<!--\n  Generated template for the VerifyphonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>verifyphone</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content" padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/verifyphone/verifyphone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VerifyphonePage);
    return VerifyphonePage;
}());

//# sourceMappingURL=verifyphone.js.map

/***/ })

});
//# sourceMappingURL=16.js.map