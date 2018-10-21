webpackJsonp([20],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacemapPageModule", function() { return PlacemapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placemap__ = __webpack_require__(868);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlacemapPageModule = /** @class */ (function () {
    function PlacemapPageModule() {
    }
    PlacemapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__placemap__["a" /* PlacemapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__placemap__["a" /* PlacemapPage */]),
            ],
        })
    ], PlacemapPageModule);
    return PlacemapPageModule;
}());

//# sourceMappingURL=placemap.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacemapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocatino_geolocatino__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacemapPage = /** @class */ (function () {
    function PlacemapPage(navCtrl, navParams, geolocationprovider, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocationprovider = geolocationprovider;
        this.geolocation = geolocation;
        this.markers = [];
        var placeid = this.navParams.get('placeid');
        this.getPlaceInfo(placeid);
    }
    PlacemapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacemapPage');
    };
    PlacemapPage.prototype.getPlaceInfo = function (placeid) {
        var _this = this;
        this.geolocationprovider.getplaceDetails(placeid).then(function (result) {
            var lat = result.result.geometry.location['lat'];
            var lng = result.result.geometry.location['lng'];
            _this.placename = result.result.name;
            console.log('====================================');
            console.log(result);
            console.log('====================================');
            _this.initMap(lat, lng);
        });
    };
    PlacemapPage.prototype.initMap = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            indoorPicker: true,
            myLocationButton: true,
        });
        var position = new google.maps.LatLng(lat, lng);
        var image = 'assets/img/location.png';
        var marker = new google.maps.Marker({ position: position, title: this.placename, icon: image });
        marker.setMap(this.map);
        // let watch = this.geolocation.watchPosition();
        // watch.subscribe(data => {
        //   this.deleteMarkers();
        //   let updatelocation = new google.maps.LatLng(
        //     data.coords.latitude,
        //     data.coords.longitude
        //   );
        //   let image = 'assets/img/location.png';
        //   this.addMarker(updatelocation, image);
        //   this.setMapOnAll(this.map);
        // });
    };
    PlacemapPage.prototype.addMarker = function (location, image) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image
        });
        this.markers.push(marker);
    };
    PlacemapPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    PlacemapPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    PlacemapPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PlacemapPage.prototype, "mapElement", void 0);
    PlacemapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-placemap',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/placemap/placemap.html"*/'<!--\n  Generated template for the PlacemapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>{{placename}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n      <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/placemap/placemap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_geolocatino_geolocatino__["a" /* GeolocatinoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], PlacemapPage);
    return PlacemapPage;
}());

//# sourceMappingURL=placemap.js.map

/***/ })

});
//# sourceMappingURL=20.js.map