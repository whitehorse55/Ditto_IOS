webpackJsonp([9],Array(572).concat([
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_swing__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_config__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_InnerSubscriber__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_InnerSubscriber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_OuterSubscriber__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_OuterSubscriber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_Scheduler__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return __WEBPACK_IMPORTED_MODULE_3__internal_Scheduler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_Subject__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return __WEBPACK_IMPORTED_MODULE_4__internal_Subject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_SubjectSubscription__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return __WEBPACK_IMPORTED_MODULE_5__internal_SubjectSubscription__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_Subscriber__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return __WEBPACK_IMPORTED_MODULE_6__internal_Subscriber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__internal_observable_fromPromise__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return __WEBPACK_IMPORTED_MODULE_7__internal_observable_fromPromise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__internal_observable_fromIterable__ = __webpack_require__(336);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return __WEBPACK_IMPORTED_MODULE_8__internal_observable_fromIterable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__internal_observable_dom_ajax__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return __WEBPACK_IMPORTED_MODULE_9__internal_observable_dom_ajax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__internal_observable_dom_webSocket__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "webSocket", function() { return __WEBPACK_IMPORTED_MODULE_10__internal_observable_dom_webSocket__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxGet", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPost", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxDelete", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPut", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPatch", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxGetJSON", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxObservable", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxResponse", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxError", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function() { return __WEBPACK_IMPORTED_MODULE_11__internal_observable_dom_AjaxObservable__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__internal_observable_dom_WebSocketSubject__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function() { return __WEBPACK_IMPORTED_MODULE_12__internal_observable_dom_WebSocketSubject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__internal_observable_combineLatest__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return __WEBPACK_IMPORTED_MODULE_13__internal_observable_combineLatest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__internal_observable_range__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return __WEBPACK_IMPORTED_MODULE_14__internal_observable_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__internal_observable_SubscribeOnObservable__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeOnObservable", function() { return __WEBPACK_IMPORTED_MODULE_15__internal_observable_SubscribeOnObservable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__internal_operators_timestamp__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return __WEBPACK_IMPORTED_MODULE_16__internal_operators_timestamp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__internal_operators_timeInterval__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimeInterval", function() { return __WEBPACK_IMPORTED_MODULE_17__internal_operators_timeInterval__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__internal_operators_groupBy__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return __WEBPACK_IMPORTED_MODULE_18__internal_operators_groupBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__internal_operators_throttle__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultThrottleConfig", function() { return __WEBPACK_IMPORTED_MODULE_19__internal_operators_throttle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__internal_symbol_rxSubscriber__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_20__internal_symbol_rxSubscriber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__internal_symbol_iterator__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return __WEBPACK_IMPORTED_MODULE_21__internal_symbol_iterator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__internal_symbol_observable__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return __WEBPACK_IMPORTED_MODULE_22__internal_symbol_observable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__internal_util_ArgumentOutOfRangeError__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return __WEBPACK_IMPORTED_MODULE_23__internal_util_ArgumentOutOfRangeError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__internal_util_EmptyError__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return __WEBPACK_IMPORTED_MODULE_24__internal_util_EmptyError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__internal_util_Immediate__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return __WEBPACK_IMPORTED_MODULE_25__internal_util_Immediate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__internal_util_ObjectUnsubscribedError__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return __WEBPACK_IMPORTED_MODULE_26__internal_util_ObjectUnsubscribedError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__internal_util_TimeoutError__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return __WEBPACK_IMPORTED_MODULE_27__internal_util_TimeoutError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__internal_util_UnsubscriptionError__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return __WEBPACK_IMPORTED_MODULE_28__internal_util_UnsubscriptionError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__internal_util_applyMixins__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return __WEBPACK_IMPORTED_MODULE_29__internal_util_applyMixins__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__internal_util_errorObject__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "errorObject", function() { return __WEBPACK_IMPORTED_MODULE_30__internal_util_errorObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__internal_util_hostReportError__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return __WEBPACK_IMPORTED_MODULE_31__internal_util_hostReportError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__internal_util_identity__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_32__internal_util_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__internal_util_isArray__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_33__internal_util_isArray__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__internal_util_isArrayLike__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return __WEBPACK_IMPORTED_MODULE_34__internal_util_isArrayLike__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__internal_util_isDate__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_35__internal_util_isDate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__internal_util_isFunction__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_36__internal_util_isFunction__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__internal_util_isIterable__ = __webpack_require__(334);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return __WEBPACK_IMPORTED_MODULE_37__internal_util_isIterable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__internal_util_isNumeric__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return __WEBPACK_IMPORTED_MODULE_38__internal_util_isNumeric__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__internal_util_isObject__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_39__internal_util_isObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__internal_util_isInteropObservable__ = __webpack_require__(333);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return __WEBPACK_IMPORTED_MODULE_40__internal_util_isInteropObservable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__internal_util_isPromise__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return __WEBPACK_IMPORTED_MODULE_41__internal_util_isPromise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__internal_util_isScheduler__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return __WEBPACK_IMPORTED_MODULE_42__internal_util_isScheduler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__internal_util_noop__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_43__internal_util_noop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__internal_util_not__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return __WEBPACK_IMPORTED_MODULE_44__internal_util_not__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__internal_util_pipe__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return __WEBPACK_IMPORTED_MODULE_45__internal_util_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__internal_util_root__ = __webpack_require__(595);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return __WEBPACK_IMPORTED_MODULE_46__internal_util_root__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__internal_util_subscribeTo__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return __WEBPACK_IMPORTED_MODULE_47__internal_util_subscribeTo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__internal_util_subscribeToArray__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return __WEBPACK_IMPORTED_MODULE_48__internal_util_subscribeToArray__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__internal_util_subscribeToIterable__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return __WEBPACK_IMPORTED_MODULE_49__internal_util_subscribeToIterable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__internal_util_subscribeToObservable__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return __WEBPACK_IMPORTED_MODULE_50__internal_util_subscribeToObservable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__internal_util_subscribeToPromise__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return __WEBPACK_IMPORTED_MODULE_51__internal_util_subscribeToPromise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__internal_util_subscribeToResult__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return __WEBPACK_IMPORTED_MODULE_52__internal_util_subscribeToResult__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__internal_util_toSubscriber__ = __webpack_require__(329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_53__internal_util_toSubscriber__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__internal_util_tryCatch__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return __WEBPACK_IMPORTED_MODULE_54__internal_util_tryCatch__["a"]; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */























































//# sourceMappingURL=index.js.map


/***/ }),
/* 591 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = ajaxGet;
/* harmony export (immutable) */ __webpack_exports__["j"] = ajaxPost;
/* harmony export (immutable) */ __webpack_exports__["f"] = ajaxDelete;
/* harmony export (immutable) */ __webpack_exports__["k"] = ajaxPut;
/* harmony export (immutable) */ __webpack_exports__["i"] = ajaxPatch;
/* harmony export (immutable) */ __webpack_exports__["h"] = ajaxGetJSON;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AjaxObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AjaxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AjaxResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AjaxTimeoutError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_root__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_tryCatch__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorObject__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Subscriber__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operators_map__ = __webpack_require__(27);
/** PURE_IMPORTS_START tslib,_.._util_root,_.._util_tryCatch,_.._util_errorObject,_.._Observable,_.._Subscriber,_.._operators_map PURE_IMPORTS_END */







function getCORSRequest() {
    if (__WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XMLHttpRequest();
    }
    else if (!!__WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XDomainRequest) {
        return new __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (__WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                    //suppress exceptions
                }
            }
            return new __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) {
        headers = null;
    }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
var mapResponse = /*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_6__operators_map__["a" /* map */])(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        var _this = _super.call(this) || this;
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
            },
            crossDomain: true,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        _this.request = request;
        return _this;
    }
    /** @deprecated This is an internal implementation detail, do not use. */
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
     * @nocollapse
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(__WEBPACK_IMPORTED_MODULE_4__Observable__["a" /* Observable */]));

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        var _this = _super.call(this, destination) || this;
        _this.request = request;
        _this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(__WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].FormData && request.body instanceof __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = _this.serializeBody(request.body, request.headers['Content-Type']);
        _this.send();
        return _this;
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(createXHR).call(request);
        if (xhr === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async);
            }
            if (result === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr, body) : Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr);
            if (result === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].FormData && body instanceof __WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(body[key]); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (__WEBPACK_IMPORTED_MODULE_1__util_root__["a" /* root */].XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            return;
        }
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
        function xhrLoad(e) {
            var _a = xhrLoad, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                // 4xx and 5xx should error (https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
                if (status_1 < 400) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        xhr.onload = xhrLoad;
        xhrLoad.subscriber = this;
        xhrLoad.progressSubscriber = progressSubscriber;
        xhrLoad.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(__WEBPACK_IMPORTED_MODULE_5__Subscriber__["a" /* Subscriber */]));

/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = /*@__PURE__*/ (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());

/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](AjaxError, _super);
    function AjaxError(message, xhr, request) {
        var _this = _super.call(this, message) || this;
        _this.name = 'AjaxError';
        _this.message = message;
        _this.xhr = xhr;
        _this.request = request;
        _this.status = xhr.status;
        _this.responseType = xhr.responseType || request.responseType;
        _this.response = parseXhrResponse(_this.responseType, xhr);
        Object.setPrototypeOf(_this, AjaxError.prototype);
        return _this;
    }
    return AjaxError;
}(Error));

function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            // HACK(benlesh): TypeScript shennanigans
            // tslint:disable-next-line:no-any XMLHttpRequest is defined to always have 'response' inferring xhr as never for the else clause.
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            // HACK(benlesh): TypeScript shennanigans
            // tslint:disable-next-line:no-any XMLHttpRequest is defined to always have 'response' inferring xhr as never for the else sub-expression.
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        var _this = _super.call(this, 'ajax timeout', xhr, request) || this;
        _this.name = 'AjaxTimeoutError';
        Object.setPrototypeOf(_this, AjaxTimeoutError.prototype);
        return _this;
    }
    return AjaxTimeoutError;
}(AjaxError));

//# sourceMappingURL=AjaxObservable.js.map


/***/ }),
/* 592 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscription__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_tryCatch__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_errorObject__ = __webpack_require__(25);
/** PURE_IMPORTS_START tslib,_.._Subject,_.._Subscriber,_.._Observable,_.._Subscription,_.._ReplaySubject,_.._util_tryCatch,_.._util_errorObject PURE_IMPORTS_END */








var DEFAULT_WEBSOCKET_CONFIG = {
    url: '',
    deserializer: function (e) { return JSON.parse(e.data); },
    serializer: function (value) { return JSON.stringify(value); },
};
var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        var _this = _super.call(this) || this;
        if (urlConfigOrSource instanceof __WEBPACK_IMPORTED_MODULE_3__Observable__["a" /* Observable */]) {
            _this.destination = destination;
            _this.source = urlConfigOrSource;
        }
        else {
            var config = _this._config = __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, DEFAULT_WEBSOCKET_CONFIG);
            _this._output = new __WEBPACK_IMPORTED_MODULE_1__Subject__["b" /* Subject */]();
            if (typeof urlConfigOrSource === 'string') {
                config.url = urlConfigOrSource;
            }
            else {
                for (var key in urlConfigOrSource) {
                    if (urlConfigOrSource.hasOwnProperty(key)) {
                        config[key] = urlConfigOrSource[key];
                    }
                }
            }
            if (!config.WebSocketCtor && WebSocket) {
                config.WebSocketCtor = WebSocket;
            }
            else if (!config.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            _this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
        return _this;
    }
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this._config, this.destination);
        sock.operator = operator;
        sock.source = this;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this._socket = null;
        if (!this.source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
        this._output = new __WEBPACK_IMPORTED_MODULE_1__Subject__["b" /* Subject */]();
    };
    /**
     * Creates an {@link Observable}, that when subscribed to, sends a message,
     * defined by the `subMsg` function, to the server over the socket to begin a
     * subscription to data over that socket. Once data arrives, the
     * `messageFilter` argument will be used to select the appropriate data for
     * the resulting Observable. When teardown occurs, either due to
     * unsubscription, completion or error, a message defined by the `unsubMsg`
     * argument will be send to the server over the WebSocketSubject.
     *
     * @param subMsg A function to generate the subscription message to be sent to
     * the server. This will still be processed by the serializer in the
     * WebSocketSubject's config. (Which defaults to JSON serialization)
     * @param unsubMsg A function to generate the unsubscription message to be
     * sent to the server at teardown. This will still be processed by the
     * serializer in the WebSocketSubject's config.
     * @param messageFilter A predicate for selecting the appropriate messages
     * from the server for the output stream.
     */
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new __WEBPACK_IMPORTED_MODULE_3__Observable__["a" /* Observable */](function (observer) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(subMsg)();
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(messageFilter)(x);
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(unsubMsg)();
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var _a = this._config, WebSocketCtor = _a.WebSocketCtor, protocol = _a.protocol, url = _a.url, binaryType = _a.binaryType;
        var observer = this._output;
        var socket = null;
        try {
            socket = protocol ?
                new WebSocketCtor(url, protocol) :
                new WebSocketCtor(url);
            this._socket = socket;
            if (binaryType) {
                this._socket.binaryType = binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_4__Subscription__["a" /* Subscription */](function () {
            _this._socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this._config.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = __WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */].create(function (x) {
                if (socket.readyState === 1) {
                    var serializer = _this._config.serializer;
                    var msg = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(serializer)(x);
                    if (msg === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                        _this.destination.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                        return;
                    }
                    socket.send(msg);
                }
            }, function (e) {
                var closingObserver = _this._config.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this._config.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this._config.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var deserializer = _this._config.deserializer;
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(deserializer)(e);
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                observer.next(result);
            }
        };
    };
    /** @deprecated This is an internal implementation detail, do not use. */
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this._socket) {
            this._connectSocket();
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_4__Subscription__["a" /* Subscription */]();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var _socket = _this._socket;
            if (_this._output.observers.length === 0) {
                if (_socket && _socket.readyState === 1) {
                    _socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, _socket = _a._socket;
        if (_socket && _socket.readyState === 1) {
            _socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    };
    return WebSocketSubject;
}(__WEBPACK_IMPORTED_MODULE_1__Subject__["a" /* AnonymousSubject */]));

//# sourceMappingURL=WebSocketSubject.js.map


/***/ }),
/* 593 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMixins;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map


/***/ }),
/* 594 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__ = __webpack_require__(591);
/** PURE_IMPORTS_START _AjaxObservable PURE_IMPORTS_END */

var ajax = __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__["b" /* AjaxObservable */].create;
//# sourceMappingURL=ajax.js.map


/***/ }),
/* 595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _root; });
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
/*@__PURE__*/ (function () {
    if (!_root) {
        throw /*@__PURE__*/ new Error('RxJS could not find any global context (window, self, global)');
    }
})();

//# sourceMappingURL=root.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(38)))

/***/ }),
/* 596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = webSocket;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__ = __webpack_require__(592);
/** PURE_IMPORTS_START _WebSocketSubject PURE_IMPORTS_END */

/**
 * Wrapper around the w3c-compatible WebSocket object provided by the browser.
 *
 * @example <caption>Wraps browser WebSocket</caption>
 *
 * import { webSocket } from 'rxjs/webSocket';
 *
 * let socket$ = webSocket('ws://localhost:8081');
 *
 * socket$.subscribe(
 *   (msg) => console.log('message received: ' + msg),
 *   (err) => console.log(err),
 *   () => console.log('complete')
 * );
 *
 * socket$.next(JSON.stringify({ op: 'hello' }));
 *
 * @example <caption>Wraps WebSocket from nodejs-webSocket (using node.js)</caption>
 *
 * import { webSocket } from 'rxjs/webSocket';
 * import { w3cwebSocket } from 'webSocket';
 *
 * let socket$ = webSocket({
 *   url: 'ws://localhost:8081',
 *   WebSocketCtor: w3cwebSocket
 * });
 *
 * socket$.subscribe(
 *   (msg) => console.log('message received: ' + msg),
 *   (err) => console.log(err),
 *   () => console.log('complete')
 * );
 *
 * socket$.next(JSON.stringify({ op: 'hello' }));
 *
 * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the webSocket as an url or a structure defining the webSocket object
 * @return {WebSocketSubject}
 */
function webSocket(urlConfigOrSource) {
    return new __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__["a" /* WebSocketSubject */](urlConfigOrSource);
}
//# sourceMappingURL=webSocket.js.map


/***/ }),
/* 597 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_observable_dom_ajax__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_observable_dom_ajax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_observable_dom_AjaxObservable__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxResponse", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_observable_dom_AjaxObservable__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxError", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_observable_dom_AjaxObservable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_observable_dom_AjaxObservable__["e"]; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


//# sourceMappingURL=index.js.map


/***/ }),
/* 598 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLoggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__ = __webpack_require__(599);
/** PURE_IMPORTS_START _SubscriptionLog PURE_IMPORTS_END */

var SubscriptionLoggable = /*@__PURE__*/ (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());

//# sourceMappingURL=SubscriptionLoggable.js.map


/***/ }),
/* 599 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLog; });
var SubscriptionLog = /*@__PURE__*/ (function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) {
            unsubscribedFrame = Number.POSITIVE_INFINITY;
        }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());

//# sourceMappingURL=SubscriptionLog.js.map


/***/ }),
/* 600 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YelpModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouponModel; });
var YelpModel = /** @class */ (function () {
    function YelpModel() {
        this.place_icon = "";
        this.id = "";
        this.place_name = "";
        this.place_photo = "";
        this.place_id = "";
        this.place_reviews = "";
        this.place_type = [];
        this.place_vicinity = "";
        this.place_address = "";
        this.place_rating = "";
        this.place_price = "";
        this.place_category = [];
        this.place_city = "";
        this.place_url = "";
        this.place_time = "";
    }
    return YelpModel;
}());

var GrouponModel = /** @class */ (function () {
    function GrouponModel() {
        this.place_id = "";
        this.place_name = "";
        this.place_title = "";
        this.place_redelocation = "";
        this.place_discount_price = "";
        this.place_price = "";
        this.place_photo = "";
        this.place_dealurl = "";
    }
    return GrouponModel;
}());

//# sourceMappingURL=PlaceModel.js.map

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var debounceTime_1 = __webpack_require__(663);
rxjs_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 602 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customcard_customcard__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customtinder_customtinder__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custommenubar_custommenubar__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emptychat_emptychat__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mymap_mymap__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matched_matched__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chatitem_chatitem__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__friendsitem_friendsitem__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__groupon_groupon__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__yelp_yelp__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__searchbar_searchbar__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__inviteitem_inviteitem__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__groupitem_groupitem__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__imagegallery_imagegallery__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__customcard_customcard__["a" /* CustomcardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__customtinder_customtinder__["a" /* CustomtinderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__custommenubar_custommenubar__["a" /* CustommenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__emptychat_emptychat__["a" /* EmptychatComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mymap_mymap__["a" /* MymapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__matched_matched__["a" /* MatchedComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chatitem_chatitem__["a" /* ChatitemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__friendsitem_friendsitem__["a" /* FriendsitemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__groupon_groupon__["a" /* GrouponComponent */],
                __WEBPACK_IMPORTED_MODULE_11__yelp_yelp__["a" /* YelpComponent */],
                __WEBPACK_IMPORTED_MODULE_12__searchbar_searchbar__["a" /* SearchbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__inviteitem_inviteitem__["a" /* InviteitemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__groupitem_groupitem__["a" /* GroupitemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__imagegallery_imagegallery__["a" /* ImagegalleryComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__customcard_customcard__["a" /* CustomcardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__customtinder_customtinder__["a" /* CustomtinderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__custommenubar_custommenubar__["a" /* CustommenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__emptychat_emptychat__["a" /* EmptychatComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mymap_mymap__["a" /* MymapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__matched_matched__["a" /* MatchedComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chatitem_chatitem__["a" /* ChatitemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__friendsitem_friendsitem__["a" /* FriendsitemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__groupon_groupon__["a" /* GrouponComponent */],
                __WEBPACK_IMPORTED_MODULE_11__yelp_yelp__["a" /* YelpComponent */],
                __WEBPACK_IMPORTED_MODULE_12__searchbar_searchbar__["a" /* SearchbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__inviteitem_inviteitem__["a" /* InviteitemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__groupitem_groupitem__["a" /* GroupitemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__imagegallery_imagegallery__["a" /* ImagegalleryComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),
/* 603 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomcardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CustomcardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomcardComponent = /** @class */ (function () {
    function CustomcardComponent() {
        this.itemBtnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello CustomcardComponent Component');
    }
    CustomcardComponent.prototype.btnClick = function (key) {
        this.itemBtnClick.emit(key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], CustomcardComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CustomcardComponent.prototype, "itemBtnClick", void 0);
    CustomcardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customcard',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/customcard/customcard.html"*/'<ion-card  class="card_content">\n\n    <img *ngIf="!data.easybutton" src="{{data.img}}">\n    <img *ngIf="data.easybutton" class="easy_img" src="assets/img/welcome_place.png">\n\n    <ion-card-content>\n          <ion-card-title>\n           {{data.title}}\n          </ion-card-title>\n        <p>\n            {{data.description}}\n        </p>\n\n        <button *ngIf="data.welcomebutton" ion-button (click)="btnClick(\'welcome\')">{{data.welcomebutton}}</button>\n        <button *ngIf="data.easybutton" ion-button (click)="btnClick(\'easy\')">{{data.easybutton}}</button>\n        <button *ngIf="data.firstbutton" ion-button (click)="btnClick(\'invite\')">{{data.firstbutton}}</button>\n        <button *ngIf="data.secondbutton" class="btn_second" ion-button (click)="btnClick(\'skip\')">{{data.secondbutton}}</button>\n\n    </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/customcard/customcard.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomcardComponent);
    return CustomcardComponent;
}());

//# sourceMappingURL=customcard.js.map

/***/ }),
/* 604 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomtinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
 * Generated class for the CustomtinderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomtinderComponent = /** @class */ (function () {
    function CustomtinderComponent(http) {
        this.http = http;
        this.recentCard = '';
        console.log('Hello CustomtinderComponent Component');
        this.initStackConfig();
    }
    CustomtinderComponent.prototype.initStackConfig = function () {
        var _this = this;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
    };
    CustomtinderComponent.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        this.cards = [{ email: '' }];
        this.addNewCards(1);
    };
    CustomtinderComponent.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x < 0) {
            color = '#FF' + hexCode + hexCode;
        }
        else {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    CustomtinderComponent.prototype.voteUp = function (like) {
        var removedCard = this.cards.pop();
        this.addNewCards(1);
        if (like) {
            this.recentCard = 'You liked: ' + removedCard.email;
        }
        else {
            this.recentCard = 'You disliked: ' + removedCard.email;
        }
    };
    // Add new cards to our array
    CustomtinderComponent.prototype.addNewCards = function (count) {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=' + count)
            .map(function (data) { return data.json().results; })
            .subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var val = result_1[_i];
                _this.cards.push(val);
            }
        });
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    CustomtinderComponent.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_swing__["SwingStackComponent"])
    ], CustomtinderComponent.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
    ], CustomtinderComponent.prototype, "swingCards", void 0);
    CustomtinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'customtinder',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/customtinder/customtinder.html"*/'<div swing-stack #myswing1 (throwoutleft)="voteUp(true)" (throwoutright)="voteUp(false)" id="card-stack">\n  <ion-card #mycards1 swing-card *ngFor="let c of cards">\n    <ion-item *ngIf="c.picture">\n      <ion-avatar item-left>\n        <img *ngIf="c.picture"[src]="c.picture.medium">\n      </ion-avatar>\n      <h2>{{ c.name.first }} {{ c.name.last}}</h2>\n      <p>{{ c.email }}</p>\n    </ion-item>\n\n    <ion-card-content *ngIf="c.location">\n      From: {{ c.location.city }}, {{ c.location.postcode }}<br>\n      Phone: {{ c.phone }}\n    </ion-card-content>\n\n    <ion-row *ngIf="c.name">\n      <ion-col>\n        <button ion-button clear small icon-left color="primary" (click)="voteUp(true)">\n          <ion-icon name="thumbs-up"></ion-icon>\n          Yes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small icon-left color="primary" (click)="voteUp(false)">\n          <ion-icon name="thumbs-down"></ion-icon>\n          No\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div>\n<p style="text-align: center; width: 100%;">{{ recentCard }}</p>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/customtinder/customtinder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], CustomtinderComponent);
    return CustomtinderComponent;
}());

//# sourceMappingURL=customtinder.js.map

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(606));
//# sourceMappingURL=Rx.js.map

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var rxjs_1 = __webpack_require__(14);
exports.Observable = rxjs_1.Observable;
exports.Subject = rxjs_1.Subject;
var internal_compatibility_1 = __webpack_require__(590);
exports.AnonymousSubject = internal_compatibility_1.AnonymousSubject;
/* tslint:enable:no-unused-variable */
var internal_compatibility_2 = __webpack_require__(590);
exports.config = internal_compatibility_2.config;
// statics
/* tslint:disable:no-use-before-declare */
__webpack_require__(607);
__webpack_require__(608);
__webpack_require__(609);
__webpack_require__(610);
__webpack_require__(611);
__webpack_require__(612);
__webpack_require__(613);
__webpack_require__(614);
__webpack_require__(346);
__webpack_require__(615);
__webpack_require__(616);
__webpack_require__(617);
__webpack_require__(618);
__webpack_require__(619);
__webpack_require__(620);
__webpack_require__(621);
__webpack_require__(622);
__webpack_require__(623);
__webpack_require__(624);
__webpack_require__(625);
__webpack_require__(626);
__webpack_require__(627);
__webpack_require__(628);
__webpack_require__(629);
__webpack_require__(630);
//dom
__webpack_require__(631);
__webpack_require__(632);
//internal/operators
__webpack_require__(634);
__webpack_require__(636);
__webpack_require__(638);
__webpack_require__(640);
__webpack_require__(642);
__webpack_require__(644);
__webpack_require__(646);
__webpack_require__(648);
__webpack_require__(650);
__webpack_require__(652);
__webpack_require__(654);
__webpack_require__(655);
__webpack_require__(657);
__webpack_require__(659);
__webpack_require__(661);
__webpack_require__(601);
__webpack_require__(664);
__webpack_require__(666);
__webpack_require__(668);
__webpack_require__(670);
__webpack_require__(672);
__webpack_require__(674);
__webpack_require__(676);
__webpack_require__(678);
__webpack_require__(680);
__webpack_require__(682);
__webpack_require__(684);
__webpack_require__(686);
__webpack_require__(687);
__webpack_require__(689);
__webpack_require__(691);
__webpack_require__(693);
__webpack_require__(695);
__webpack_require__(697);
__webpack_require__(699);
__webpack_require__(701);
__webpack_require__(703);
__webpack_require__(705);
__webpack_require__(707);
__webpack_require__(709);
__webpack_require__(347);
__webpack_require__(711);
__webpack_require__(713);
__webpack_require__(715);
__webpack_require__(717);
__webpack_require__(719);
__webpack_require__(721);
__webpack_require__(723);
__webpack_require__(725);
__webpack_require__(727);
__webpack_require__(729);
__webpack_require__(731);
__webpack_require__(733);
__webpack_require__(735);
__webpack_require__(737);
__webpack_require__(739);
__webpack_require__(741);
__webpack_require__(743);
__webpack_require__(745);
__webpack_require__(747);
__webpack_require__(749);
__webpack_require__(751);
__webpack_require__(753);
__webpack_require__(755);
__webpack_require__(757);
__webpack_require__(759);
__webpack_require__(761);
__webpack_require__(763);
__webpack_require__(765);
__webpack_require__(767);
__webpack_require__(769);
__webpack_require__(770);
__webpack_require__(772);
__webpack_require__(774);
__webpack_require__(776);
__webpack_require__(778);
__webpack_require__(780);
__webpack_require__(782);
__webpack_require__(784);
__webpack_require__(786);
__webpack_require__(788);
__webpack_require__(790);
__webpack_require__(792);
__webpack_require__(794);
__webpack_require__(343);
__webpack_require__(796);
__webpack_require__(798);
__webpack_require__(800);
__webpack_require__(802);
__webpack_require__(804);
__webpack_require__(806);
__webpack_require__(808);
__webpack_require__(810);
__webpack_require__(812);
__webpack_require__(813);
__webpack_require__(815);
__webpack_require__(817);
__webpack_require__(819);
__webpack_require__(821);
__webpack_require__(823);
__webpack_require__(825);
__webpack_require__(827);
/* tslint:disable:no-unused-variable */
var rxjs_2 = __webpack_require__(14);
exports.Subscription = rxjs_2.Subscription;
exports.ReplaySubject = rxjs_2.ReplaySubject;
exports.BehaviorSubject = rxjs_2.BehaviorSubject;
exports.Notification = rxjs_2.Notification;
exports.EmptyError = rxjs_2.EmptyError;
exports.ArgumentOutOfRangeError = rxjs_2.ArgumentOutOfRangeError;
exports.ObjectUnsubscribedError = rxjs_2.ObjectUnsubscribedError;
exports.UnsubscriptionError = rxjs_2.UnsubscriptionError;
exports.pipe = rxjs_2.pipe;
var testing_1 = __webpack_require__(829);
exports.TestScheduler = testing_1.TestScheduler;
var rxjs_3 = __webpack_require__(14);
exports.Subscriber = rxjs_3.Subscriber;
exports.AsyncSubject = rxjs_3.AsyncSubject;
exports.ConnectableObservable = rxjs_3.ConnectableObservable;
exports.TimeoutError = rxjs_3.TimeoutError;
exports.VirtualTimeScheduler = rxjs_3.VirtualTimeScheduler;
var ajax_1 = __webpack_require__(597);
exports.AjaxResponse = ajax_1.AjaxResponse;
exports.AjaxError = ajax_1.AjaxError;
exports.AjaxTimeoutError = ajax_1.AjaxTimeoutError;
var rxjs_4 = __webpack_require__(14);
var internal_compatibility_3 = __webpack_require__(590);
var internal_compatibility_4 = __webpack_require__(590);
exports.TimeInterval = internal_compatibility_4.TimeInterval;
exports.Timestamp = internal_compatibility_4.Timestamp;
var _operators = __webpack_require__(15);
exports.operators = _operators;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: rxjs_4.asapScheduler,
    queue: rxjs_4.queueScheduler,
    animationFrame: rxjs_4.animationFrameScheduler,
    async: rxjs_4.asyncScheduler
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: internal_compatibility_3.rxSubscriber,
    observable: internal_compatibility_3.observable,
    iterator: internal_compatibility_3.iterator
};
exports.Symbol = Symbol;
//# sourceMappingURL=Rx.js.map

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.bindCallback = rxjs_1.bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.bindNodeCallback = rxjs_1.bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.combineLatest = rxjs_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.concat = rxjs_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.defer = rxjs_1.defer;
//# sourceMappingURL=defer.js.map

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.empty = rxjs_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.forkJoin = rxjs_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.from = rxjs_1.from;
//# sourceMappingURL=from.js.map

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.fromEventPattern = rxjs_1.fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.fromPromise = rxjs_1.from;
//# sourceMappingURL=fromPromise.js.map

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.generate = rxjs_1.generate;
//# sourceMappingURL=generate.js.map

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.if = rxjs_1.iif;
//# sourceMappingURL=if.js.map

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.interval = rxjs_1.interval;
//# sourceMappingURL=interval.js.map

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.merge = rxjs_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.race = rxjs_1.race;
//# sourceMappingURL=race.js.map

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
function staticNever() {
    return rxjs_1.NEVER;
}
exports.staticNever = staticNever;
rxjs_1.Observable.never = staticNever;
//# sourceMappingURL=never.js.map

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.of = rxjs_1.of;
//# sourceMappingURL=of.js.map

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.onErrorResumeNext = rxjs_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.pairs = rxjs_1.pairs;
//# sourceMappingURL=pairs.js.map

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.range = rxjs_1.range;
//# sourceMappingURL=range.js.map

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.using = rxjs_1.using;
//# sourceMappingURL=using.js.map

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.throw = rxjs_1.throwError;
rxjs_1.Observable.throwError = rxjs_1.throwError;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.timer = rxjs_1.timer;
//# sourceMappingURL=timer.js.map

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
rxjs_1.Observable.zip = rxjs_1.zip;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var ajax_1 = __webpack_require__(597);
rxjs_1.Observable.ajax = ajax_1.ajax;
//# sourceMappingURL=ajax.js.map

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var webSocket_1 = __webpack_require__(633);
rxjs_1.Observable.webSocket = webSocket_1.webSocket;
//# sourceMappingURL=webSocket.js.map

/***/ }),
/* 633 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_observable_dom_webSocket__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "webSocket", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_observable_dom_webSocket__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_observable_dom_WebSocketSubject__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_observable_dom_WebSocketSubject__["a"]; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


//# sourceMappingURL=index.js.map


/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var buffer_1 = __webpack_require__(635);
rxjs_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return operators_1.buffer(closingNotifier)(this);
}
exports.buffer = buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var bufferCount_1 = __webpack_require__(637);
rxjs_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return operators_1.bufferCount(bufferSize, startBufferEvery)(this);
}
exports.bufferCount = bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var bufferTime_1 = __webpack_require__(639);
rxjs_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var internal_compatibility_1 = __webpack_require__(590);
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=asyncScheduler] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = rxjs_1.asyncScheduler;
    if (internal_compatibility_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return operators_1.bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
exports.bufferTime = bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var bufferToggle_1 = __webpack_require__(641);
rxjs_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return operators_1.bufferToggle(openings, closingSelector)(this);
}
exports.bufferToggle = bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var bufferWhen_1 = __webpack_require__(643);
rxjs_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return operators_1.bufferWhen(closingSelector)(this);
}
exports.bufferWhen = bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var catch_1 = __webpack_require__(645);
rxjs_1.Observable.prototype.catch = catch_1._catch;
rxjs_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return operators_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var combineAll_1 = __webpack_require__(647);
rxjs_1.Observable.prototype.combineAll = combineAll_1.combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return operators_1.combineAll(project)(this);
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var combineLatest_1 = __webpack_require__(649);
rxjs_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var internal_compatibility_1 = __webpack_require__(590);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && internal_compatibility_1.isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return this.lift.call(rxjs_1.of.apply(void 0, [this].concat(observables)), new internal_compatibility_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var concat_1 = __webpack_require__(651);
rxjs_1.Observable.prototype.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs_1.concat.apply(void 0, [this].concat(observables)));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var concatAll_1 = __webpack_require__(653);
rxjs_1.Observable.prototype.concatAll = concatAll_1.concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Converts a higher-order Observable into a first-order Observable by
 * concatenating the inner Observables in order.
 *
 * <span class="informal">Flattens an Observable-of-Observables by putting one
 * inner Observable after the other.</span>
 *
 * <img src="./img/concatAll.png" width="100%">
 *
 * Joins every Observable emitted by the source (a higher-order Observable), in
 * a serial fashion. It subscribes to each inner Observable only after the
 * previous inner Observable has completed, and merges all of their values into
 * the returned observable.
 *
 * __Warning:__ If the source Observable emits Observables quickly and
 * endlessly, and the inner Observables it emits generally complete slower than
 * the source emits, you can run into memory issues as the incoming Observables
 * collect in an unbounded buffer.
 *
 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
 * var firstOrder = higherOrder.concatAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link combineAll}
 * @see {@link concat}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable emitting values from all the inner
 * Observables concatenated.
 * @method concatAll
 * @owner Observable
 */
function concatAll() {
    return operators_1.concatAll()(this);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var concatMap_1 = __webpack_require__(344);
rxjs_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var concatMapTo_1 = __webpack_require__(656);
rxjs_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable) {
    return operators_1.concatMapTo(innerObservable)(this);
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var count_1 = __webpack_require__(658);
rxjs_1.Observable.prototype.count = count_1.count;
//# sourceMappingURL=count.js.map

/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return operators_1.count(predicate)(this);
}
exports.count = count;
//# sourceMappingURL=count.js.map

/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var dematerialize_1 = __webpack_require__(660);
rxjs_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),
/* 660 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return operators_1.dematerialize()(this);
}
exports.dematerialize = dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var debounce_1 = __webpack_require__(662);
rxjs_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return operators_1.debounce(durationSelector)(this);
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var defaultIfEmpty_1 = __webpack_require__(665);
rxjs_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return operators_1.defaultIfEmpty(defaultValue)(this);
}
exports.defaultIfEmpty = defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var delay_1 = __webpack_require__(667);
rxjs_1.Observable.prototype.delay = delay_1.delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=asyncScheduler] The SchedulerLike to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.delay(delay, scheduler)(this);
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var delayWhen_1 = __webpack_require__(669);
rxjs_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return operators_1.delayWhen(delayDurationSelector, subscriptionDelay)(this);
}
exports.delayWhen = delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var distinct_1 = __webpack_require__(671);
rxjs_1.Observable.prototype.distinct = distinct_1.distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return operators_1.distinct(keySelector, flushes)(this);
}
exports.distinct = distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var distinctUntilChanged_1 = __webpack_require__(673);
rxjs_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return operators_1.distinctUntilChanged(compare, keySelector)(this);
}
exports.distinctUntilChanged = distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var distinctUntilKeyChanged_1 = __webpack_require__(675);
rxjs_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return operators_1.distinctUntilKeyChanged(key, compare)(this);
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var do_1 = __webpack_require__(677);
rxjs_1.Observable.prototype.do = do_1._do;
rxjs_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return operators_1.tap(nextOrObserver, error, complete)(this);
}
exports._do = _do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var exhaust_1 = __webpack_require__(679);
rxjs_1.Observable.prototype.exhaust = exhaust_1.exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 */
function exhaust() {
    return operators_1.exhaust()(this);
}
exports.exhaust = exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var exhaustMap_1 = __webpack_require__(681);
rxjs_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = fromEvent(document, 'click');
 * var result = clicks.pipe(exhaustMap((ev) => Rx.Observable.interval(1000).take(5)));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 */
function exhaustMap(project) {
    return operators_1.exhaustMap(project)(this);
}
exports.exhaustMap = exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var expand_1 = __webpack_require__(683);
rxjs_1.Observable.prototype.expand = expand_1.expand;
//# sourceMappingURL=expand.js.map

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return operators_1.expand(project, concurrent, scheduler)(this);
}
exports.expand = expand;
//# sourceMappingURL=expand.js.map

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var elementAt_1 = __webpack_require__(685);
rxjs_1.Observable.prototype.elementAt = elementAt_1.elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return operators_1.elementAt.apply(undefined, arguments)(this);
}
exports.elementAt = elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var filter_1 = __webpack_require__(345);
rxjs_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var finally_1 = __webpack_require__(688);
rxjs_1.Observable.prototype.finally = finally_1._finally;
rxjs_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete, error or unsubscribe.
 *
 * <span class="informal">Ensure a given function will be called when a stream ends, no matter why it ended.</span>
 *
 * `finally` method accepts as a single parameter a function. This function does not accept any parameters and
 * should not return anything. It will be called whenever source Observable completes, errors or is unsubscribed,
 * which makes it good candidate to perform any necessary clean up or side effects when Observable terminates,
 * no matter how or why it terminated.
 *
 * Observable returned by `finally` will simply mirror source Observable - each time it is subscribed, source
 * Observable will be subscribed underneath.
 *
 * Note that behavior of `finally` will be repeated per every subscription, so if resulting Observable has
 * many subscribers, function passed to `finally` might be potentially called multiple times.
 *
 * Remember also that `finally` differs quite a lot from passing complete or error handler to {@link subscribe}. It will
 * return an Observable which can be further chained, while `subscribe` returns Subscription, basically ending Observable
 * chain. Function passed to `finally` will be called also when consumer of resulting Observable unsubscribes from it,
 * while handlers passed to `subscribe` will not (even complete handler). But most importantly, `finally` does not start
 * an execution of source Observable, like `subscribe` does, allowing you to set up all necessary hooks before
 * passing Observable further, even without specific knowledge how or when it will be used.
 *
 *
 * @example <caption>Call finally after complete notification</caption>
 * Rx.Observable.of(1, 2, 3)
 * .finally(() => console.log('I was finalized!'))
 * .map(x => x * 2) // `finally` returns an Observable, so we still can chain operators.
 * .subscribe(
 *   val => console.log(val),
 *   err => {},
 *   () => console.log('I completed!')
 * );
 *
 * // Logs:
 * // 1
 * // 2
 * // 3
 * // "I completed!"
 * // "I was finalized!"
 *
 *
 *
 * @example <caption>Call finally after consumer unsubscribes</caption>
 * const o = Rx.Observable.interval(1000)
 * .finally(() => console.log('Timer stopped'));
 *
 * const subscription = o.subscribe(
 *   val => console.log(val),
 *   err => {},
 *   () => console.log('Complete!') // Will not be called, since complete handler
 * );                               // does not react to unsubscription, just to
 *                                  // complete notification sent by the Observable itself.
 *
 * setTimeout(() => subscription.unsubscribe(), 2500);
 *
 * // Logs:
 * // 0 after 1s
 * // 1 after 2s
 * // "Timer stopped" after 2.5s
 *
 * @see {@link using}
 *
 * @param {function} callback Function to be called when source terminates (completes, errors or is unsubscribed).
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @name finally
 * @owner Observable
 */
function _finally(callback) {
    return operators_1.finalize(callback)(this);
}
exports._finally = _finally;
//# sourceMappingURL=finally.js.map

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var find_1 = __webpack_require__(690);
rxjs_1.Observable.prototype.find = find_1.find;
//# sourceMappingURL=find.js.map

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return operators_1.find(predicate, thisArg)(this);
}
exports.find = find;
//# sourceMappingURL=find.js.map

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var findIndex_1 = __webpack_require__(692);
rxjs_1.Observable.prototype.findIndex = findIndex_1.findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return operators_1.findIndex(predicate, thisArg)(this);
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var first_1 = __webpack_require__(694);
rxjs_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {T} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return operators_1.first.apply(void 0, args)(this);
}
exports.first = first;
//# sourceMappingURL=first.js.map

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var groupBy_1 = __webpack_require__(696);
rxjs_1.Observable.prototype.groupBy = groupBy_1.groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return operators_1.groupBy(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var ignoreElements_1 = __webpack_require__(698);
rxjs_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return operators_1.ignoreElements()(this);
}
exports.ignoreElements = ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var isEmpty_1 = __webpack_require__(700);
rxjs_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return operators_1.isEmpty()(this);
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var audit_1 = __webpack_require__(702);
rxjs_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return operators_1.audit(durationSelector)(this);
}
exports.audit = audit;
//# sourceMappingURL=audit.js.map

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var auditTime_1 = __webpack_require__(704);
rxjs_1.Observable.prototype.auditTime = auditTime_1.auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.auditTime(duration, scheduler)(this);
}
exports.auditTime = auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var last_1 = __webpack_require__(706);
rxjs_1.Observable.prototype.last = last_1.last;
//# sourceMappingURL=last.js.map

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that emits only the last item emitted by the source Observable.
 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
 * the last item from the source Observable, the resulting Observable will emit the last item
 * from the source Observable that satisfies the predicate.
 *
 * <img src="./img/last.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {function} [predicate] - The condition any source emitted item has to satisfy.
 * @param {any} [defaultValue] - The default value to use if the predicate isn't
 * satisfied, or no values were emitted (if no predicate).
 * @return {Observable} An Observable that emits only the last item satisfying the given condition
 * from the source, or an NoSuchElementException if no such items are emitted.
 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
 * @method last
 * @owner Observable
 */
function last() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return operators_1.last.apply(void 0, args)(this);
}
exports.last = last;
//# sourceMappingURL=last.js.map

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var let_1 = __webpack_require__(708);
rxjs_1.Observable.prototype.let = let_1.letProto;
rxjs_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ }),
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var every_1 = __webpack_require__(710);
rxjs_1.Observable.prototype.every = every_1.every;
//# sourceMappingURL=every.js.map

/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
 *
 * @example <caption>A simple example emitting true if all elements are less than 5, false otherwise</caption>
 *  Observable.of(1, 2, 3, 4, 5, 6)
 *     .every(x => x < 5)
 *     .subscribe(x => console.log(x)); // -> false
 *
 * @param {function} predicate A function for determining if an item meets a specified condition.
 * @param {any} [thisArg] Optional object to use for `this` in the callback.
 * @return {Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.
 * @method every
 * @owner Observable
 */
function every(predicate, thisArg) {
    return operators_1.every(predicate, thisArg)(this);
}
exports.every = every;
//# sourceMappingURL=every.js.map

/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var mapTo_1 = __webpack_require__(712);
rxjs_1.Observable.prototype.mapTo = mapTo_1.mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return operators_1.mapTo(value)(this);
}
exports.mapTo = mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var materialize_1 = __webpack_require__(714);
rxjs_1.Observable.prototype.materialize = materialize_1.materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return operators_1.materialize()(this);
}
exports.materialize = materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var max_1 = __webpack_require__(716);
rxjs_1.Observable.prototype.max = max_1.max;
//# sourceMappingURL=max.js.map

/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return operators_1.max(comparer)(this);
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ }),
/* 717 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var merge_1 = __webpack_require__(718);
rxjs_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 718 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs_1.merge.apply(void 0, [this].concat(observables)));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var mergeAll_1 = __webpack_require__(720);
rxjs_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeAll(concurrent)(this);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 721 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var mergeMap_1 = __webpack_require__(722);
rxjs_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
rxjs_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 722 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeMap(project, concurrent)(this);
}
exports.mergeMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var mergeMapTo_1 = __webpack_require__(724);
rxjs_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
rxjs_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable`.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeMapTo(innerObservable, concurrent)(this);
}
exports.mergeMapTo = mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var mergeScan_1 = __webpack_require__(726);
rxjs_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeScan(accumulator, seed, concurrent)(this);
}
exports.mergeScan = mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var min_1 = __webpack_require__(728);
rxjs_1.Observable.prototype.min = min_1.min;
//# sourceMappingURL=min.js.map

/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return operators_1.min(comparer)(this);
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var multicast_1 = __webpack_require__(730);
rxjs_1.Observable.prototype.multicast = multicast_1.multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return operators_1.multicast(subjectOrSubjectFactory, selector)(this);
}
exports.multicast = multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var observeOn_1 = __webpack_require__(732);
rxjs_1.Observable.prototype.observeOn = observeOn_1.observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {SchedulerLike} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operators_1.observeOn(scheduler, delay)(this);
}
exports.observeOn = observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var onErrorResumeNext_1 = __webpack_require__(734);
rxjs_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i] = arguments[_i];
    }
    return operators_1.onErrorResumeNext.apply(void 0, nextSources)(this);
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var pairwise_1 = __webpack_require__(736);
rxjs_1.Observable.prototype.pairwise = pairwise_1.pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return operators_1.pairwise()(this);
}
exports.pairwise = pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var partition_1 = __webpack_require__(738);
rxjs_1.Observable.prototype.partition = partition_1.partition;
//# sourceMappingURL=partition.js.map

/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return operators_1.partition(predicate, thisArg)(this);
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var pluck_1 = __webpack_require__(740);
rxjs_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    return operators_1.pluck.apply(void 0, properties)(this);
}
exports.pluck = pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),
/* 741 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var publish_1 = __webpack_require__(742);
rxjs_1.Observable.prototype.publish = publish_1.publish;
//# sourceMappingURL=publish.js.map

/***/ }),
/* 742 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return operators_1.publish(selector)(this);
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var publishBehavior_1 = __webpack_require__(744);
rxjs_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),
/* 744 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return operators_1.publishBehavior(value)(this);
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),
/* 745 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var publishReplay_1 = __webpack_require__(746);
rxjs_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),
/* 746 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return operators_1.publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),
/* 747 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var publishLast_1 = __webpack_require__(748);
rxjs_1.Observable.prototype.publishLast = publishLast_1.publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),
/* 748 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return operators_1.publishLast()(this);
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),
/* 749 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var race_1 = __webpack_require__(750);
rxjs_1.Observable.prototype.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ }),
/* 750 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return operators_1.race.apply(void 0, observables)(this);
}
exports.race = race;
//# sourceMappingURL=race.js.map

/***/ }),
/* 751 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var reduce_1 = __webpack_require__(752);
rxjs_1.Observable.prototype.reduce = reduce_1.reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),
/* 752 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns the
 * accumulated result when the source completes, given an optional seed value.
 *
 * <span class="informal">Combines together all values emitted on the source,
 * using an accumulator function that knows how to join a new source value into
 * the accumulation from the past.</span>
 *
 * <img src="./img/reduce.png" width="100%">
 *
 * Like
 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
 * `reduce` applies an `accumulator` function against an accumulation and each
 * value of the source Observable (from the past) to reduce it to a single
 * value, emitted on the output Observable. Note that `reduce` will only emit
 * one value, only when the source Observable completes. It is equivalent to
 * applying operator {@link scan} followed by operator {@link last}.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
 *   .takeUntil(Rx.Observable.interval(5000));
 * var ones = clicksInFiveSeconds.mapTo(1);
 * var seed = 0;
 * var count = ones.reduce((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link count}
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link scan}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
 * called on each source value.
 * @param {R} [seed] The initial accumulation value.
 * @return {Observable<R>} An Observable that emits a single value that is the
 * result of accumulating the values emitted by the source Observable.
 * @method reduce
 * @owner Observable
 */
function reduce(accumulator, seed) {
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if (arguments.length >= 2) {
        return operators_1.reduce(accumulator, seed)(this);
    }
    return operators_1.reduce(accumulator)(this);
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),
/* 753 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var repeat_1 = __webpack_require__(754);
rxjs_1.Observable.prototype.repeat = repeat_1.repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),
/* 754 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    return operators_1.repeat(count)(this);
}
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),
/* 755 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var repeatWhen_1 = __webpack_require__(756);
rxjs_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),
/* 756 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return operators_1.repeatWhen(notifier)(this);
}
exports.repeatWhen = repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),
/* 757 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var retry_1 = __webpack_require__(758);
rxjs_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ }),
/* 758 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return operators_1.retry(count)(this);
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map

/***/ }),
/* 759 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var retryWhen_1 = __webpack_require__(760);
rxjs_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return operators_1.retryWhen(notifier)(this);
}
exports.retryWhen = retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),
/* 761 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var sample_1 = __webpack_require__(762);
rxjs_1.Observable.prototype.sample = sample_1.sample;
//# sourceMappingURL=sample.js.map

/***/ }),
/* 762 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return operators_1.sample(notifier)(this);
}
exports.sample = sample;
//# sourceMappingURL=sample.js.map

/***/ }),
/* 763 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var sampleTime_1 = __webpack_require__(764);
rxjs_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),
/* 764 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.sampleTime(period, scheduler)(this);
}
exports.sampleTime = sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),
/* 765 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var scan_1 = __webpack_require__(766);
rxjs_1.Observable.prototype.scan = scan_1.scan;
//# sourceMappingURL=scan.js.map

/***/ }),
/* 766 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return operators_1.scan(accumulator, seed)(this);
    }
    return operators_1.scan(accumulator)(this);
}
exports.scan = scan;
//# sourceMappingURL=scan.js.map

/***/ }),
/* 767 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var sequenceEqual_1 = __webpack_require__(768);
rxjs_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),
/* 768 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return operators_1.sequenceEqual(compareTo, comparor)(this);
}
exports.sequenceEqual = sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var share_1 = __webpack_require__(338);
rxjs_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ }),
/* 770 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var shareReplay_1 = __webpack_require__(771);
rxjs_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;
//# sourceMappingURL=shareReplay.js.map

/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return operators_1.shareReplay(bufferSize, windowTime, scheduler)(this);
}
exports.shareReplay = shareReplay;
//# sourceMappingURL=shareReplay.js.map

/***/ }),
/* 772 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var single_1 = __webpack_require__(773);
rxjs_1.Observable.prototype.single = single_1.single;
//# sourceMappingURL=single.js.map

/***/ }),
/* 773 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return operators_1.single(predicate)(this);
}
exports.single = single;
//# sourceMappingURL=single.js.map

/***/ }),
/* 774 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var skip_1 = __webpack_require__(775);
rxjs_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ }),
/* 775 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return operators_1.skip(count)(this);
}
exports.skip = skip;
//# sourceMappingURL=skip.js.map

/***/ }),
/* 776 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var skipLast_1 = __webpack_require__(777);
rxjs_1.Observable.prototype.skipLast = skipLast_1.skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),
/* 777 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return operators_1.skipLast(count)(this);
}
exports.skipLast = skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var skipUntil_1 = __webpack_require__(779);
rxjs_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return operators_1.skipUntil(notifier)(this);
}
exports.skipUntil = skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),
/* 780 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var skipWhile_1 = __webpack_require__(781);
rxjs_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ }),
/* 781 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return operators_1.skipWhile(predicate)(this);
}
exports.skipWhile = skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ }),
/* 782 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var startWith_1 = __webpack_require__(783);
rxjs_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),
/* 783 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return operators_1.startWith.apply(void 0, array)(this);
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),
/* 784 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var subscribeOn_1 = __webpack_require__(785);
rxjs_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),
/* 785 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operators_1.subscribeOn(scheduler, delay)(this);
}
exports.subscribeOn = subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),
/* 786 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var switch_1 = __webpack_require__(787);
rxjs_1.Observable.prototype.switch = switch_1._switch;
rxjs_1.Observable.prototype._switch = switch_1._switch;
//# sourceMappingURL=switch.js.map

/***/ }),
/* 787 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return operators_1.switchAll()(this);
}
exports._switch = _switch;
//# sourceMappingURL=switch.js.map

/***/ }),
/* 788 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var switchMap_1 = __webpack_require__(789);
rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project) {
    return operators_1.switchMap(project)(this);
}
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var switchMapTo_1 = __webpack_require__(791);
rxjs_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),
/* 791 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable) {
    return operators_1.switchMapTo(innerObservable)(this);
}
exports.switchMapTo = switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),
/* 792 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var take_1 = __webpack_require__(793);
rxjs_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return operators_1.take(count)(this);
}
exports.take = take;
//# sourceMappingURL=take.js.map

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var takeLast_1 = __webpack_require__(795);
rxjs_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return operators_1.takeLast(count)(this);
}
exports.takeLast = takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),
/* 796 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var takeWhile_1 = __webpack_require__(797);
rxjs_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),
/* 797 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return operators_1.takeWhile(predicate)(this);
}
exports.takeWhile = takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),
/* 798 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var throttle_1 = __webpack_require__(799);
rxjs_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
var internal_compatibility_1 = __webpack_require__(590);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = internal_compatibility_1.defaultThrottleConfig; }
    return operators_1.throttle(durationSelector, config)(this);
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 800 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var throttleTime_1 = __webpack_require__(801);
rxjs_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),
/* 801 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var internal_compatibility_1 = __webpack_require__(590);
var operators_1 = __webpack_require__(15);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    if (config === void 0) { config = internal_compatibility_1.defaultThrottleConfig; }
    return operators_1.throttleTime(duration, scheduler, config)(this);
}
exports.throttleTime = throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),
/* 802 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var timeInterval_1 = __webpack_require__(803);
rxjs_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),
/* 803 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timeInterval(scheduler)(this);
}
exports.timeInterval = timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),
/* 804 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var timeout_1 = __webpack_require__(805);
rxjs_1.Observable.prototype.timeout = timeout_1.timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),
/* 805 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timeout(due, scheduler)(this);
}
exports.timeout = timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),
/* 806 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var timeoutWith_1 = __webpack_require__(807);
rxjs_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),
/* 807 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timeoutWith(due, withObservable, scheduler)(this);
}
exports.timeoutWith = timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),
/* 808 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var timestamp_1 = __webpack_require__(809);
rxjs_1.Observable.prototype.timestamp = timestamp_1.timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),
/* 809 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var operators_1 = __webpack_require__(15);
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timestamp(scheduler)(this);
}
exports.timestamp = timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),
/* 810 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var toArray_1 = __webpack_require__(811);
rxjs_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),
/* 811 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return operators_1.toArray()(this);
}
exports.toArray = toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),
/* 812 */
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 813 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var window_1 = __webpack_require__(814);
rxjs_1.Observable.prototype.window = window_1.window;
//# sourceMappingURL=window.js.map

/***/ }),
/* 814 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return operators_1.window(windowBoundaries)(this);
}
exports.window = window;
//# sourceMappingURL=window.js.map

/***/ }),
/* 815 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var windowCount_1 = __webpack_require__(816);
rxjs_1.Observable.prototype.windowCount = windowCount_1.windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),
/* 816 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return operators_1.windowCount(windowSize, startWindowEvery)(this);
}
exports.windowCount = windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),
/* 817 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var windowTime_1 = __webpack_require__(818);
rxjs_1.Observable.prototype.windowTime = windowTime_1.windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),
/* 818 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var internal_compatibility_1 = __webpack_require__(590);
var operators_1 = __webpack_require__(15);
function windowTime(windowTimeSpan) {
    var scheduler = rxjs_1.asyncScheduler;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (internal_compatibility_1.isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (internal_compatibility_1.isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (internal_compatibility_1.isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (internal_compatibility_1.isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (internal_compatibility_1.isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return operators_1.windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
exports.windowTime = windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),
/* 819 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var windowToggle_1 = __webpack_require__(820);
rxjs_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),
/* 820 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return operators_1.windowToggle(openings, closingSelector)(this);
}
exports.windowToggle = windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),
/* 821 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var windowWhen_1 = __webpack_require__(822);
rxjs_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),
/* 822 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return operators_1.windowWhen(closingSelector)(this);
}
exports.windowWhen = windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),
/* 823 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var withLatestFrom_1 = __webpack_require__(824);
rxjs_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),
/* 824 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return operators_1.withLatestFrom.apply(void 0, args)(this);
}
exports.withLatestFrom = withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var zip_1 = __webpack_require__(826);
rxjs_1.Observable.prototype.zip = zip_1.zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 826 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs_1.zip.apply(void 0, [this].concat(observables)));
}
exports.zipProto = zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 827 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var zipAll_1 = __webpack_require__(828);
rxjs_1.Observable.prototype.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),
/* 828 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(15);
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return operators_1.zipAll(project)(this);
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),
/* 829 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_testing_TestScheduler__ = __webpack_require__(830);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TestScheduler", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_testing_TestScheduler__["a"]; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */

//# sourceMappingURL=index.js.map


/***/ }),
/* 830 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notification__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ColdObservable__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HotObservable__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SubscriptionLog__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scheduler_VirtualTimeScheduler__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scheduler_AsyncScheduler__ = __webpack_require__(58);
/** PURE_IMPORTS_START tslib,_Observable,_Notification,_ColdObservable,_HotObservable,_SubscriptionLog,_scheduler_VirtualTimeScheduler,_scheduler_AsyncScheduler PURE_IMPORTS_END */








var defaultMaxFrame = 750;
var TestScheduler = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_6__scheduler_VirtualTimeScheduler__["a" /* VirtualAction */], defaultMaxFrame) || this;
        _this.assertDeepEqual = assertDeepEqual;
        _this.hotObservables = [];
        _this.coldObservables = [];
        _this.flushTests = [];
        _this.runMode = false;
        return _this;
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
        var cold = new __WEBPACK_IMPORTED_MODULE_3__ColdObservable__["a" /* ColdObservable */](messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
        var subject = new __WEBPACK_IMPORTED_MODULE_4__HotObservable__["a" /* HotObservable */](messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) {
            unsubscriptionMarbles = null;
        }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles, this.runMode).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof __WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        var runMode = this.runMode;
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true, runMode);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        var runMode = this.runMode;
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles, runMode);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var flushTests = this.flushTests;
        var flushTestsCopy = flushTests.slice();
        for (var i = 0, l = flushTests.length; i < l; i++) {
            var test_1 = flushTestsCopy[i];
            if (test_1.ready) {
                // remove it from the original array, not our copy
                flushTests.splice(i, 1);
                this.assertDeepEqual(test_1.actual, test_1.expected);
            }
        }
    };
    /** @nocollapse */
    TestScheduler.parseMarblesAsSubscriptions = function (marbles, runMode) {
        var _this = this;
        if (runMode === void 0) {
            runMode = false;
        }
        if (typeof marbles !== 'string') {
            return new __WEBPACK_IMPORTED_MODULE_5__SubscriptionLog__["a" /* SubscriptionLog */](Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        var frame = 0;
        var _loop_1 = function (i) {
            var nextFrame = frame;
            var advanceFrameBy = function (count) {
                nextFrame += count * _this.frameTimeFactor;
            };
            var c = marbles[i];
            switch (c) {
                case ' ':
                    // Whitespace no longer advances time
                    if (!runMode) {
                        advanceFrameBy(1);
                    }
                    break;
                case '-':
                    advanceFrameBy(1);
                    break;
                case '(':
                    groupStart = frame;
                    advanceFrameBy(1);
                    break;
                case ')':
                    groupStart = -1;
                    advanceFrameBy(1);
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    advanceFrameBy(1);
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    // time progression syntax
                    if (runMode && c.match(/^[0-9]$/)) {
                        // Time progression must be preceeded by at least one space
                        // if it's not at the beginning of the diagram
                        if (i === 0 || marbles[i - 1] === ' ') {
                            var buffer = marbles.slice(i);
                            var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                            if (match) {
                                i += match[0].length - 1;
                                var duration = parseFloat(match[1]);
                                var unit = match[2];
                                var durationInMs = void 0;
                                switch (unit) {
                                    case 'ms':
                                        durationInMs = duration;
                                        break;
                                    case 's':
                                        durationInMs = duration * 1000;
                                        break;
                                    case 'm':
                                        durationInMs = duration * 1000 * 60;
                                        break;
                                    default:
                                        break;
                                }
                                advanceFrameBy(durationInMs / this_1.frameTimeFactor);
                                break;
                            }
                        }
                    }
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
            frame = nextFrame;
            out_i_1 = i;
        };
        var this_1 = this, out_i_1;
        for (var i = 0; i < len; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        if (unsubscriptionFrame < 0) {
            return new __WEBPACK_IMPORTED_MODULE_5__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_5__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame, unsubscriptionFrame);
        }
    };
    /** @nocollapse */
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables, runMode) {
        var _this = this;
        if (materializeInnerObservables === void 0) {
            materializeInnerObservables = false;
        }
        if (runMode === void 0) {
            runMode = false;
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = runMode ? marbles.replace(/^[ ]+/, '').indexOf('^') : marbles.indexOf('^');
        var frame = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof __WEBPACK_IMPORTED_MODULE_3__ColdObservable__["a" /* ColdObservable */]) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        var _loop_2 = function (i) {
            var nextFrame = frame;
            var advanceFrameBy = function (count) {
                nextFrame += count * _this.frameTimeFactor;
            };
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case ' ':
                    // Whitespace no longer advances time
                    if (!runMode) {
                        advanceFrameBy(1);
                    }
                    break;
                case '-':
                    advanceFrameBy(1);
                    break;
                case '(':
                    groupStart = frame;
                    advanceFrameBy(1);
                    break;
                case ')':
                    groupStart = -1;
                    advanceFrameBy(1);
                    break;
                case '|':
                    notification = __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createComplete();
                    advanceFrameBy(1);
                    break;
                case '^':
                    advanceFrameBy(1);
                    break;
                case '#':
                    notification = __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createError(errorValue || 'error');
                    advanceFrameBy(1);
                    break;
                default:
                    // Might be time progression syntax, or a value literal
                    if (runMode && c.match(/^[0-9]$/)) {
                        // Time progression must be preceeded by at least one space
                        // if it's not at the beginning of the diagram
                        if (i === 0 || marbles[i - 1] === ' ') {
                            var buffer = marbles.slice(i);
                            var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                            if (match) {
                                i += match[0].length - 1;
                                var duration = parseFloat(match[1]);
                                var unit = match[2];
                                var durationInMs = void 0;
                                switch (unit) {
                                    case 'ms':
                                        durationInMs = duration;
                                        break;
                                    case 's':
                                        durationInMs = duration * 1000;
                                        break;
                                    case 'm':
                                        durationInMs = duration * 1000 * 60;
                                        break;
                                    default:
                                        break;
                                }
                                advanceFrameBy(durationInMs / this_2.frameTimeFactor);
                                break;
                            }
                        }
                    }
                    notification = __WEBPACK_IMPORTED_MODULE_2__Notification__["a" /* Notification */].createNext(getValue(c));
                    advanceFrameBy(1);
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
            frame = nextFrame;
            out_i_2 = i;
        };
        var this_2 = this, out_i_2;
        for (var i = 0; i < len; i++) {
            _loop_2(i);
            i = out_i_2;
        }
        return testMessages;
    };
    TestScheduler.prototype.run = function (callback) {
        var prevFrameTimeFactor = TestScheduler.frameTimeFactor;
        var prevMaxFrames = this.maxFrames;
        TestScheduler.frameTimeFactor = 1;
        this.maxFrames = Number.POSITIVE_INFINITY;
        this.runMode = true;
        __WEBPACK_IMPORTED_MODULE_7__scheduler_AsyncScheduler__["a" /* AsyncScheduler */].delegate = this;
        var helpers = {
            cold: this.createColdObservable.bind(this),
            hot: this.createHotObservable.bind(this),
            flush: this.flush.bind(this),
            expectObservable: this.expectObservable.bind(this),
            expectSubscriptions: this.expectSubscriptions.bind(this),
        };
        try {
            var ret = callback(helpers);
            this.flush();
            return ret;
        }
        finally {
            TestScheduler.frameTimeFactor = prevFrameTimeFactor;
            this.maxFrames = prevMaxFrames;
            this.runMode = false;
            __WEBPACK_IMPORTED_MODULE_7__scheduler_AsyncScheduler__["a" /* AsyncScheduler */].delegate = undefined;
        }
    };
    return TestScheduler;
}(__WEBPACK_IMPORTED_MODULE_6__scheduler_VirtualTimeScheduler__["b" /* VirtualTimeScheduler */]));

//# sourceMappingURL=TestScheduler.js.map


/***/ }),
/* 831 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColdObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SubscriptionLoggable__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_applyMixins__ = __webpack_require__(593);
/** PURE_IMPORTS_START tslib,_Observable,_Subscription,_SubscriptionLoggable,_util_applyMixins PURE_IMPORTS_END */





/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        var _this = _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */](function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        }) || this;
        _this.messages = messages;
        _this.subscriptions = [];
        _this.scheduler = scheduler;
        return _this;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));

/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_4__util_applyMixins__["a" /* applyMixins */])(ColdObservable, [__WEBPACK_IMPORTED_MODULE_3__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=ColdObservable.js.map


/***/ }),
/* 832 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SubscriptionLoggable__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_applyMixins__ = __webpack_require__(593);
/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_SubscriptionLoggable,_util_applyMixins PURE_IMPORTS_END */





/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = /*@__PURE__*/ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](HotObservable, _super);
    function HotObservable(messages, scheduler) {
        var _this = _super.call(this) || this;
        _this.messages = messages;
        _this.subscriptions = [];
        _this.scheduler = scheduler;
        return _this;
    }
    /** @deprecated This is an internal implementation detail, do not use. */
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */](function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Subject__["b" /* Subject */]));

/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_4__util_applyMixins__["a" /* applyMixins */])(HotObservable, [__WEBPACK_IMPORTED_MODULE_3__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=HotObservable.js.map


/***/ }),
/* 833 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustommenubarComponent; });
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
 * Generated class for the CustommenubarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustommenubarComponent = /** @class */ (function () {
    function CustommenubarComponent(platform) {
        this.platform = platform;
        this.onclickMenubar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello CustommenubarComponent Component');
        this.height_margin = 0;
        this.setStatusBarMargin();
    }
    CustommenubarComponent.prototype.onclickButtons = function (key) {
        this.onclickMenubar.emit(key);
    };
    CustommenubarComponent.prototype.setStatusBarMargin = function () {
        if (this.platform.is('android')) {
            this.height_margin = 10 + 'px';
        }
        else
            (this.platform.is('ios'));
        {
            this.height_margin = 30 + 'px';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], CustommenubarComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CustommenubarComponent.prototype, "onclickMenubar", void 0);
    CustommenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custommenubar',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/custommenubar/custommenubar.html"*/'<ion-toolbar text-center color="extralight" >\n  <!-- <ion-buttons left menuToggle>\n      <button color="textcolor" ion-button icon-only (click)="onclickButtons(\'setting\')">\n          <img src="assets/img/setting.png">\n      </button>\n  </ion-buttons> -->\n\n  <ion-title>\n    <img *ngIf="data.title == \'\' "  src="assets/img/group5.png" style="width: 100px;">\n    <ion-label *ngIf="data.title != \'\' ">{{data.title}}</ion-label>\n  </ion-title>\n\n  <!-- <ion-buttons right>\n      <button color="textcolor" ion-button icon-only (click)="onclickButtons(\'chat\')">\n       <img src="assets/img/chat.png">\n      </button>\n  </ion-buttons> -->\n\n</ion-toolbar>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/custommenubar/custommenubar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], CustommenubarComponent);
    return CustommenubarComponent;
}());

//# sourceMappingURL=custommenubar.js.map

/***/ }),
/* 834 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptychatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the EmptychatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EmptychatComponent = /** @class */ (function () {
    function EmptychatComponent() {
        this.onclickMenubar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello EmptychatComponent Component');
    }
    EmptychatComponent.prototype.onclickbutton = function () {
        this.onclickMenubar.emit('click');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EmptychatComponent.prototype, "onclickMenubar", void 0);
    EmptychatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'emptychat',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/emptychat/emptychat.html"*/'<!-- Empty chat component -->\n<div class="empty_photo">\n    <img src="assets/img/empty.png">\n</div>\n\n<div class="empty_text">\n    <p>\n      When your friends like the same places as you, you can set up a date with them here.\n    </p>\n</div>\n\n<div class="btn_find">\n  <button ion-button (click)="onclickbutton()" >Find & Invite Friends</button>\n</div>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/emptychat/emptychat.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptychatComponent);
    return EmptychatComponent;
}());

//# sourceMappingURL=emptychat.js.map

/***/ }),
/* 835 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MymapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MymapComponent = /** @class */ (function () {
    function MymapComponent() {
        console.log('Hello MymapComponent Component');
        this.text = 'Hello World';
    }
    MymapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mymap',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/mymap/mymap.html"*/'<!-- Generated template for the MymapComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/mymap/mymap.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MymapComponent);
    return MymapComponent;
}());

//# sourceMappingURL=mymap.js.map

/***/ }),
/* 836 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MatchedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MatchedComponent = /** @class */ (function () {
    function MatchedComponent() {
        this.onClickSomethingUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isValid = false;
        this.mydata = {};
    }
    Object.defineProperty(MatchedComponent.prototype, "data", {
        // @Input('data') data;
        set: function (data) {
            console.log("this is data information", data);
            if (data != null) {
                this.mydata = data;
                this.isValid = true;
                // console.log("thsifsifsd",this.data)
            }
        },
        enumerable: true,
        configurable: true
    });
    MatchedComponent.prototype.onclickButton = function (key) {
        this.onClickSomethingUp.emit(key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MatchedComponent.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MatchedComponent.prototype, "onClickSomethingUp", void 0);
    MatchedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'matched',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/matched/matched.html"*/'<div class="matched" *ngIf="isValid == true">\n\n  <div class="title">\n    <p>{{mydata.title}}</p>\n    <p>{{mydata.names}} like "{{mydata.placeinfo.place_name}}"</p>\n  </div>\n\n  <div class="photos">\n    <content scroll="true">\n      <ion-scroll scrollX="true" direction="x">\n        <div class="image_blocks" *ngFor="let item of mydata.photos">\n            <img src="{{item}}">\n        </div>\n      </ion-scroll>\n    </content>\n  </div>\n\n  <div class="resturnt_image">\n      <img src="{{mydata.placeinfo.place_photo}}">\n  </div>\n\n  <div class="button_group">\n      <button ion-button (click)="onclickButton(\'chat\')" >{{mydata.buttontitle1}}</button>\n      <button ion-button (click)="onclickButton(\'back\')">{{mydata.buttontitle2}}</button>\n  </div>\n</div>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/matched/matched.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MatchedComponent);
    return MatchedComponent;
}());

//# sourceMappingURL=matched.js.map

/***/ }),
/* 837 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ChatitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatitemComponent = /** @class */ (function () {
    function ChatitemComponent() {
        this.onclickItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mydata = {};
        this.myindex = 0;
        console.log('Hello ChatitemComponent Component');
        this.text = 'Hello World';
        this.mydata = {};
    }
    Object.defineProperty(ChatitemComponent.prototype, "data", {
        set: function (info) {
            this.mydata = info;
            console.log('asssss====================================');
            console.log(this.mydata);
            console.log('====================================');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatitemComponent.prototype, "index", {
        set: function (ind) {
            this.myindex = ind;
        },
        enumerable: true,
        configurable: true
    });
    ChatitemComponent.prototype.onclickitem = function (info) {
        this.onclickItem.emit({ index: this.myindex, type: info });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChatitemComponent.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChatitemComponent.prototype, "index", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChatitemComponent.prototype, "onclickItem", void 0);
    ChatitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chatitem',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/chatitem/chatitem.html"*/'<ion-item  class="item" (click)="onclickitem(\'isnottime\')" [style.opacity]="mydata.ismeetingdatay? 0.7 : 1.0 ">\n  <ion-avatar item-left>\n    <img class="profile" src="{{mydata.userimage}}">\n    <img  *ngIf="mydata.ismeetingdatay" class="status_online" src="assets/img/checked.png">\n\n    <img  *ngIf="!mydata.ismeetingdatay && mydata.userstatus" class="status_offline" src="assets/img/circle_online.png">\n    <img  *ngIf="!mydata.ismeetingdatay && !mydata.userstatus" class="status_offline" src="assets/img/circle.png">\n  </ion-avatar>\n\n  <h2>{{mydata.username}}</h2>\n\n  <h6 *ngIf="!mydata.ismeetingdatay && mydata.lastmessage == \'\' " >{{mydata.userplace_name}} and {{mydata.userplace_number}} other </h6>\n  <h6 *ngIf="!mydata.ismeetingdatay && mydata.lastmessage != \'\' " >{{mydata.lastmessage }}</h6>\n  <h6 *ngIf="mydata.ismeetingdatay" >{{mydata.ismeetingdate | date : \'MMM d, y h:mm a\'}} at {{mydata.userplace_name}}</h6>\n\n  <p *ngIf="!mydata.ismeetingdatay">Tap to say some thing</p>\n  <p *ngIf="mydata.ismeetingdatay">Tap for details</p>\n\n  <!-- <img class="place"  src="assets/img/cafes.png" (click)="onclickitem(\'istime\'); $event.stopPropagation();" item-right> -->\n  <img class="place" *ngIf="mydata.userplace_image" src="{{mydata.userplace_image}}" (click)="onclickitem(\'istime\'); $event.stopPropagation();" item-end>\n\n</ion-item>\n<div class="divider"></div>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/chatitem/chatitem.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatitemComponent);
    return ChatitemComponent;
}());

//# sourceMappingURL=chatitem.js.map

/***/ }),
/* 838 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the FriendsitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FriendsitemComponent = /** @class */ (function () {
    function FriendsitemComponent() {
        this.friendInfo = {};
        this.item_index = 0;
        this.cateogry_type = "";
        this.onClickButtons = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(FriendsitemComponent.prototype, "data", {
        // @Input('data') data;
        set: function (info) {
            this.friendInfo = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FriendsitemComponent.prototype, "index", {
        set: function (ind) {
            this.item_index = ind;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FriendsitemComponent.prototype, "kind", {
        set: function (kin) {
            this.cateogry_type = kin;
            console.log("this is category info", this.cateogry_type);
        },
        enumerable: true,
        configurable: true
    });
    FriendsitemComponent.prototype.clickacceptbutton = function () {
        this.onClickButtons.emit({ index: this.item_index, type: this.cateogry_type });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FriendsitemComponent.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FriendsitemComponent.prototype, "index", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FriendsitemComponent.prototype, "kind", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FriendsitemComponent.prototype, "onClickButtons", void 0);
    FriendsitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'friendsitem',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/friendsitem/friendsitem.html"*/'<ion-item  no-lines class="item">\n    <ion-avatar item-start>\n      <img class="profile" src="{{friendInfo.photoUrl}}">\n    </ion-avatar>\n\n    <h2>{{friendInfo.username}}</h2>\n\n    <button *ngIf="cateogry_type == \'request\'"  ion-button class="place_request" item-right (click)="clickacceptbutton()">Accept</button>\n    <button *ngIf="cateogry_type == \'block\'"  ion-button class="place_myfriends" item-right (click)="clickacceptbutton()">UnBlock</button>\n    <button *ngIf="cateogry_type == \'myfriends\'"  ion-button class="place_myfriends" item-right (click)="clickacceptbutton()">Remove</button>\n</ion-item>\n<div class="border"></div>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/friendsitem/friendsitem.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FriendsitemComponent);
    return FriendsitemComponent;
}());

//# sourceMappingURL=friendsitem.js.map

/***/ }),
/* 839 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouponComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_geolocatino_geolocatino__ = __webpack_require__(322);
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
 * Generated class for the GrouponComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GrouponComponent = /** @class */ (function () {
    // placeCategoryString : any
    function GrouponComponent(geoService) {
        this.geoService = geoService;
        // @Input()
        // set type(type : any)
        // {
        //     this.placetype = type
        // }
        this.onClickComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.place = {};
        this.placeindex = 0;
        this.distance = 0;
        console.log('Hello GrouponComponent Component');
    }
    Object.defineProperty(GrouponComponent.prototype, "places", {
        set: function (place) {
            this.place = place;
            console.log("group on data", this.place);
            this.getDistance();
            // this.placeCategoryString = this.generateCategoryStrings()
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrouponComponent.prototype, "index", {
        set: function (index) {
            this.placeindex = index;
        },
        enumerable: true,
        configurable: true
    });
    GrouponComponent.prototype.onclickItems = function (type) {
        this.onClickComponent.emit({ type: type, index: this.placeindex });
    };
    GrouponComponent.prototype.getDistance = function () {
        var _this = this;
        this.geoService
            .getUserPosition()
            .then(function (success) {
            console.log('this is current location====================================');
            console.log(success);
            // this.loading.dismiss()
            // this.addMap(success.coords.latitude, success.coords.longitude);
            var current_lati = success.coords.latitude;
            var current_lonti = success.coords.longitude;
            var place_lati = _this.place['place_lati'];
            var place_lonti = _this.place['place_longti'];
            console.log('====================================', current_lati, current_lonti, place_lati, place_lonti);
            var distance_km = _this.getDistanceFromLatLonInKm(current_lati, current_lonti, place_lati, place_lonti);
            _this.distance = Math.round(distance_km * 0.621371 * 10) / 10;
        })
            .catch(function (err) {
            // alert(err)
            // this.loading.dismiss();
            // this.alertService.presentErrorAlert(err);
        });
    };
    GrouponComponent.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    GrouponComponent.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GrouponComponent.prototype, "places", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GrouponComponent.prototype, "index", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GrouponComponent.prototype, "onClickComponent", void 0);
    GrouponComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'groupon',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/groupon/groupon.html"*/'  <ion-card-header (click)="onclickItems(\'group_placeimage\')">\n\n    <div *ngIf="place.place_photo == \'\'" class="place_image">\n\n      <img class="empty" src="assets/img/empty_place.png">\n\n      <div  (click)="onclickItems(\'group_invite\')" class="invite_friend">\n\n          <p> Invite Friend </p>\n\n          <ion-icon  name="arrow-forward"></ion-icon>\n\n      </div>\n\n    </div>\n\n  \n\n    <div *ngIf="place.place_photo != \'\'" class="place_image">\n\n      <img class="nonempty" src="{{place.place_photo}}">\n\n      <div  (click)="onclickItems(\'group_invite\'); $event.stopPropagation();" class="invite_friend">\n\n          <p> Invite Friend </p>\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n      </div>\n\n    </div>\n\n  \n\n  \n\n  </ion-card-header>\n\n  \n\n  <ion-card-content>\n\n  \n\n  \n\n    <div style="height: 15vh;" class="div_top">\n\n      <div class="part_top">\n\n          <div class="part_name">\n\n              <p>{{place.place_name}}</p>\n\n            </div>\n\n        \n\n            <div class="part_more">\n\n              <button (click)="onclickItems(\'group_placeimage\')" ion-button clear>\n\n                <img src="assets/img/groupon.png">\n\n              </button>\n\n            </div>      \n\n      </div>\n\n\n\n      <div style="height: 8vh;" class="part_top_1">\n\n          <p class="part_title">{{place.place_title}}</p>\n\n      </div>\n\n     \n\n    </div> \n\n\n\n  \n\n    <ion-item style="height: 10vh;" style="padding-top: 0 !important;" no-padding>\n\n  \n\n      <div class="part_location">\n\n            <div class="part_distance">\n\n                <p *ngIf="distance" >{{distance}}mi away &nbsp; {{place.place_redelocation}}</p>     \n\n            </div>\n\n\n\n            <div class="part_price">\n\n                <p>{{place.place_price}}</p>\n\n               <span>\n\n                  <span>{{place.place_discount_price}}</span>\n\n               </span>\n\n                \n\n            </div>\n\n      </div>\n\n\n\n      <div class="btn_buy">\n\n        <button (click)="onclickItems(\'group_placeimage\')" class="buy_button" ion-button color="groupon_buy">Buy</button>\n\n      </div>\n\n  \n\n    </ion-item>\n\n  \n\n  \n\n  </ion-card-content>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/groupon/groupon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_geolocatino_geolocatino__["a" /* GeolocatinoProvider */]])
    ], GrouponComponent);
    return GrouponComponent;
}());

//# sourceMappingURL=groupon.js.map

/***/ }),
/* 840 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the YelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var YelpComponent = /** @class */ (function () {
    function YelpComponent() {
        // @Input()
        // set type(type : any)
        // {
        //     this.placetype = type
        // }
        this.onClickComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.place = {};
        this.placeindex = 0;
        this.placeCategoryString = "";
        console.log('Hello YelpCom`ponent Component');
    }
    Object.defineProperty(YelpComponent.prototype, "places", {
        set: function (place) {
            this.place = place;
            console.log("yelp on data", this.place);
            this.placeCategoryString = this.generateCategoryStrings();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YelpComponent.prototype, "index", {
        set: function (index) {
            this.placeindex = index;
        },
        enumerable: true,
        configurable: true
    });
    YelpComponent.prototype.generateCategoryStrings = function () {
        var checkstring = '';
        this.place.place_category.forEach(function (element) {
            checkstring = checkstring + element['title'] + ",";
        });
        checkstring = checkstring.slice(0, checkstring.length - 1);
        return checkstring;
    };
    YelpComponent.prototype.onclickItems = function (type) {
        this.onClickComponent.emit({ type: type, index: this.placeindex });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], YelpComponent.prototype, "places", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], YelpComponent.prototype, "index", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], YelpComponent.prototype, "onClickComponent", void 0);
    YelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'yelp',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/yelp/yelp.html"*/'<ion-card-header (click)="onclickItems(\'placeimage\')">\n  <div *ngIf="place.place_photo == \'\'" class="place_image">\n    <img class="empty" src="assets/img/empty_place.png">\n    <div  (click)="onclickItems(\'invite\')" class="invite_friend">\n        <p> Invite Friend </p>\n        <ion-icon  name="arrow-forward"></ion-icon>\n    </div>\n  </div>\n\n  <div *ngIf="place.place_photo != \'\'" class="place_image">\n    <img class="nonempty" src="{{place.place_photo}}">\n    <div  (click)="onclickItems(\'invite\'); $event.stopPropagation();" class="invite_friend">\n        <p> Invite Friend </p>\n        <ion-icon name="arrow-forward"></ion-icon>\n    </div>\n  </div>\n\n\n</ion-card-header>\n\n<ion-card-content>\n\n  <ion-item no-padding>\n    <div class="part_name">\n      <p>{{ place.place_name}}</p>\n    </div>\n\n    <div class="part_more">\n      <button (click)="onclickItems(\'yelp\')" ion-button clear>\n        <img src="assets/img/logo_yelp.png">\n      </button>\n    </div>\n  </ion-item>\n\n  <ion-item style="height: 3vh;" no-padding>\n\n    <div class="part_rating">\n\n      <img *ngIf="place.place_rating == 0" src="assets/img/regular_0.png">\n      <img *ngIf="place.place_rating < 1" src="assets/img/regular_1.png">\n      <img *ngIf="place.place_rating > 1.5 && place.place_rating < 2" src="assets/img/regular_1_half.png">\n      <img *ngIf="place.place_rating == 2" src="assets/img/regular_2.png">\n      <img *ngIf="place.place_rating > 2 && place.place_rating < 3" src="assets/img/regular_2_half.png">\n      <img *ngIf="place.place_rating == 3" src="assets/img/regular_3.png">\n      <img *ngIf="place.place_rating > 3 && place.place_rating < 4" src="assets/img/regular_3_half.png">\n      <img *ngIf="place.place_rating == 4" src="assets/img/regular_4.png">\n      <img *ngIf="place.place_rating > 4 && place.place_rating < 5" src="assets/img/regular_4_half.png">\n      <img *ngIf="place.place_rating == 5" src="assets/img/regular_5.png">\n    </div>\n\n    <div class="part_reviews">\n      <p>{{place.place_reviews}} reviews</p>\n    </div>\n\n  </ion-item>\n\n  <ion-item no-padding>\n\n    <div class="part_price">\n      <p>{{place.place_price}}</p>\n    </div>\n\n    <div class="part_address">\n      <p style="display: inline-block;">{{placeCategoryString}}</p>\n    </div>\n\n    <p class="city">{{place.place_city}}</p>\n\n  </ion-item>\n\n</ion-card-content>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/yelp/yelp.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], YelpComponent);
    return YelpComponent;
}());

//# sourceMappingURL=yelp.js.map

/***/ }),
/* 841 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geolocatino_geolocatino__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_groupon_groupon__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_yelp_yelp__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_PlaceModel__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(326);
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
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(geoService, alertservice, grouponprovider, yelpprovider, alertService, keyboard) {
        this.geoService = geoService;
        this.alertservice = alertservice;
        this.grouponprovider = grouponprovider;
        this.yelpprovider = yelpprovider;
        this.alertService = alertService;
        this.keyboard = keyboard;
        this.onChangeSearchValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFocuseSearchBar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /////////////////progressbar ////////
        this.searching = false;
        console.log('Hello SearchbarComponent Component');
        this.searchArray = [];
        this.searchTempArray = [];
        this.searchArrayOnly = [];
        this.yelp_array = [];
        this.place_array = [];
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.searchTerm = '';
    }
    Object.defineProperty(SearchbarComponent.prototype, "passarray", {
        set: function (array) {
            this.searchArray = array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchbarComponent.prototype, "temparray", {
        set: function (array) {
            this.searchTempArray = array;
            this.searchArrayOnly = array;
        },
        enumerable: true,
        configurable: true
    });
    SearchbarComponent.prototype.onSearchInput = function () {
        this.searching = true;
        this.setFilterItems();
        console.log("keydown");
    };
    SearchbarComponent.prototype.checkFocus = function () {
        console.log("thjis is focus");
        // this.onFocuseSearchBar.emit(true)
        this.myInput.setFocus();
    };
    //////////////////function : when enter search key in search bar /////////////////////////
    SearchbarComponent.prototype.setFilterItems = function () {
        console.log("this is close button");
        if (this.searchTerm == '') {
            console.log("thjis is seasrch", this.searchTempArray);
            this.searching = false;
            this.onChangeSearchValue.emit([]);
        }
        else {
            this.getCurrentLocation(this.searchTerm);
        }
    };
    //////////////////////////////////geolocation functions///////////////////
    SearchbarComponent.prototype.getCurrentLocation = function (searchkey) {
        var _this = this;
        this.geoService
            .getUserPosition()
            .then(function (success) {
            console.log('this is current location====================================');
            console.log(success);
            console.log('====================================');
            // this.loading.dismiss()
            // this.addMap(success.coords.latitude, success.coords.longitude);
            _this.getYelpData(success.coords.latitude, success.coords.longitude, searchkey);
        })
            .catch(function (err) {
            // alert(err)
            _this.loading.dismiss();
            _this.alertService.presentErrorAlert(err);
        });
    };
    SearchbarComponent.prototype.getYelpData = function (lati, longi, searchkey) {
        var _this = this;
        this.yelpprovider.getNearByYelpInfoWithoutCategory(lati, longi, searchkey).then(function (suc) {
            // this.places = suc['businesses']
            _this.yelp_array = suc['businesses'];
            _this.generateAllPlaceArray();
        }).catch(function (er) {
            _this.loading.dismiss();
            alert(er);
        });
    };
    SearchbarComponent.prototype.generateAllPlaceArray = function () {
        this.place_array = [];
        for (var i = 0; i < this.yelp_array.length; i++) {
            var yelp_item = this.yelp_array[i];
            var yelp_model = new __WEBPACK_IMPORTED_MODULE_6__Model_PlaceModel__["b" /* YelpModel */]();
            yelp_model.place_id = yelp_item['id'];
            yelp_model.place_photo = yelp_item['image_url'];
            yelp_model.place_name = yelp_item['name'];
            yelp_model.place_price = yelp_item['price'];
            yelp_model.place_category = yelp_item['categories'];
            yelp_model.place_city = yelp_item.location['city'];
            yelp_model.place_rating = yelp_item['rating'];
            yelp_model.place_reviews = yelp_item['review_count'];
            yelp_model.place_url = yelp_item['url'];
            this.place_array.push(yelp_model);
        }
        this.searching = false;
        var seracharray = this.filterItems(this.searchTerm);
        this.onChangeSearchValue.emit(seracharray);
        console.log("this is places info", this.place_array);
    };
    /////////////////function : get search result array fromm search key///////////////////
    SearchbarComponent.prototype.filterItems = function (searchTerm) {
        return this.place_array.filter(function (contactmodel) {
            return (contactmodel.place_name
                .toUpperCase()
                .indexOf(searchTerm.toUpperCase()) > -1);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], SearchbarComponent.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SearchbarComponent.prototype, "passarray", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SearchbarComponent.prototype, "temparray", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SearchbarComponent.prototype, "onChangeSearchValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SearchbarComponent.prototype, "onFocuseSearchBar", void 0);
    SearchbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'searchbar',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/searchbar/searchbar.html"*/'  <div *ngIf="searching" class="spinner-container">\n    <ion-spinner name="bubbles">Loading</ion-spinner>\n  </div>\n    \n  <ion-searchbar #input  [style.width.%]="100" [(ngModel)]="searchTerm" [formControl]="searchControl"   (ionFocus)="checkFocus()"  (keyup)="onSearchInput()" class="searchbar" placeholder="Search"></ion-searchbar>\n\n'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/searchbar/searchbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_geolocatino_geolocatino__["a" /* GeolocatinoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_groupon_groupon__["a" /* GrouponProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_yelp_yelp__["a" /* YelpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]])
    ], SearchbarComponent);
    return SearchbarComponent;
}());

//# sourceMappingURL=searchbar.js.map

/***/ }),
/* 842 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the InviteitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InviteitemComponent = /** @class */ (function () {
    function InviteitemComponent() {
        this.onClickCheckBox = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemArray = [];
        this.itemtitle = "";
        console.log('Hello InviteitemComponent Component');
    }
    Object.defineProperty(InviteitemComponent.prototype, "data", {
        set: function (data) {
            if (data.length > 0) {
                this.itemArray = data;
                console.log("this is item info list=========>", this.itemArray);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviteitemComponent.prototype, "title", {
        set: function (title) {
            this.itemtitle = title;
        },
        enumerable: true,
        configurable: true
    });
    InviteitemComponent.prototype.onclickcheckbox = function (item) {
        this.onClickCheckBox.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], InviteitemComponent.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviteitemComponent.prototype, "title", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InviteitemComponent.prototype, "onClickCheckBox", void 0);
    InviteitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'inviteitem',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/inviteitem/inviteitem.html"*/'<ion-item-divider *ngIf="itemArray.length > 0"> <ion-label>{{itemtitle}}</ion-label></ion-item-divider>\n<ion-item  *ngFor="let item of itemArray; let i = index;">\n  <img item-left item-start  *ngIf="item.image != \'\' " src="{{item.image}}">\n  <img item-left item-start *ngIf="item.image == \'\'" src="assets/img/user.png">\n  <ion-label>{{item.displayName}}</ion-label>\n  <ion-checkbox [(ngModel)]="item.isChecked" (click)="onclickcheckbox(item)" mode = "ios" item-right></ion-checkbox>\n</ion-item>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/inviteitem/inviteitem.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InviteitemComponent);
    return InviteitemComponent;
}());

//# sourceMappingURL=inviteitem.js.map

/***/ }),
/* 843 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the GroupitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GroupitemComponent = /** @class */ (function () {
    function GroupitemComponent() {
        this.onClickCheckBox = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClickItems = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemArray = [];
        this.itemtitle = "";
        this.nameString = "";
        this.nameStringArray = [];
        console.log('Hello InviteitemComponent Component');
    }
    Object.defineProperty(GroupitemComponent.prototype, "data", {
        set: function (data) {
            console.log("this si chcsceececece", data.length);
            if (data.length > 0) {
                this.itemArray = data;
                console.log("this is group item info list=========>", this.itemArray);
                console.log("this is group item info list=========>", this.itemArray.length);
                // this.saveNameStrings(data)
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupitemComponent.prototype, "title", {
        set: function (title) {
            this.itemtitle = title;
        },
        enumerable: true,
        configurable: true
    });
    GroupitemComponent.prototype.saveNameStrings = function (data) {
        console.log("this is itemarray length", data.length);
        for (var i = 0; i < data.length; i++) {
            var str = this.generateNameString(data[i]);
            console.log("this is str info", str);
            this.nameStringArray.push(str);
        }
    };
    GroupitemComponent.prototype.onclickItem = function (item) {
        this.onClickItems.emit(item);
    };
    GroupitemComponent.prototype.onclickcheckbox = function (item) {
        this.onClickCheckBox.emit(item);
    };
    GroupitemComponent.prototype.generatePlaceString = function (iteminfo) {
        console.log("this is stringsdf info", iteminfo);
        var string = "";
        var array_places = iteminfo['places'];
        if (array_places.length <= 2) {
            for (var i = 0; i < array_places.length; i++) {
                if (i == array_places.length - 1) {
                    string = string + array_places[i]['placename'];
                    console.log("this is stringdddd info", string);
                    return string;
                }
                else {
                    string = string + array_places[i]['placename'] + ",";
                }
            }
        }
        else {
            var left_member = array_places.length - 2;
            string = array_places[0]['placename'] + ", " + array_places[1]['placename'] + " + " + String(left_member);
            console.log("this is stringeeeee info", string);
            return string;
        }
    };
    GroupitemComponent.prototype.generateNameString = function (iteminfo) {
        var string = "";
        var array_member = iteminfo['member'];
        if (array_member.length <= 3) {
            for (var i = 0; i < array_member.length; i++) {
                if (i == array_member.length - 1) {
                    string = string + array_member[i]['displayName'];
                    return string;
                }
                else {
                    string = string + array_member[i]['displayName'] + ",";
                }
            }
        }
        else {
            var left_member = array_member.length - 2;
            string = array_member[0]['displayName'] + ", " + array_member[1]['displayName'] + " + " + String(left_member);
            return string;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GroupitemComponent.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GroupitemComponent.prototype, "title", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GroupitemComponent.prototype, "onClickCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GroupitemComponent.prototype, "onClickItems", void 0);
    GroupitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'groupitem',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/groupitem/groupitem.html"*/'<ion-item-divider *ngIf="itemtitle == \'Group\' && itemArray.length > 0">\n  <ion-label>{{itemtitle}}</ion-label>\n</ion-item-divider>\n<ion-item class="groupitem" (click)="onclickItem(item); $event.stopPropagation();" *ngFor="let item of itemArray; let i = index;">\n\n  <div item-left>\n    <ng-container *ngFor="let info of item.member ; let j = index;">\n      <img *ngIf="j < 4 && info.image != \'\' " src="{{info.image}}">\n      <img *ngIf="j < 4 && info.image == \'\' " src="assets/img/user.png">\n    </ng-container>\n  </div>\n\n  <ion-label *ngIf="itemtitle == \'Group\'">{{generateNameString(item)}}</ion-label>\n  <ion-checkbox *ngIf="itemtitle == \'Group\'" [(ngModel)]="item.isChecked" item-right (click)="onclickcheckbox(item)" mode="ios"></ion-checkbox>\n\n  <h2 *ngIf="itemtitle != \'Group\'">{{generateNameString(item)}}</h2>\n  <h6 *ngIf="itemtitle != \'Group\'">{{generatePlaceString(item)}}</h6>\n  <p *ngIf="itemtitle != \'Group\'">Tap to say some thing</p>\n  <img *ngIf="itemtitle != \'Group\'" class="place" src="{{item.places[item.places.length - 1].placephoto}}" item-end>\n\n</ion-item>\n\n<div class="divider"></div>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/groupitem/groupitem.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GroupitemComponent);
    return GroupitemComponent;
}());

//# sourceMappingURL=groupitem.js.map

/***/ }),
/* 844 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagegalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ImagegalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ImagegalleryComponent = /** @class */ (function () {
    function ImagegalleryComponent(actionSheetCtrl, camera) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.sendImageData = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.base64Image = "";
        console.log('Hello ImagegalleryComponent Component');
    }
    ////////////////////function : when click add photo button////////////////////
    ImagegalleryComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    //////////////////////////function : get image data from gallery and camera////////////
    ImagegalleryComponent.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = imageData;
            var firebaseImage = 'data:image/jpeg;base64,' + imageData;
            _this.getImageDataFromGallery(firebaseImage);
        }, function (err) {
            console.log(err);
        });
    };
    ImagegalleryComponent.prototype.getImageDataFromGallery = function (myimage) {
        this.sendImageData.emit(myimage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], ImagegalleryComponent.prototype, "sendImageData", void 0);
    ImagegalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'imagegallery',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/imagegallery/imagegallery.html"*/'<img style="border-radius : 5px;" *ngIf="base64Image == \'\'" (click)="presentActionSheet()" item-end src="assets/img/photogallery.png">\n<img style="border-radius : 5px;" *ngIf="base64Image != \'\'" (click)="presentActionSheet()" item-end src="data:image/jpg;base64,{{base64Image}}">'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/components/imagegallery/imagegallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]])
    ], ImagegalleryComponent);
    return ImagegalleryComponent;
}());

//# sourceMappingURL=imagegallery.js.map

/***/ }),
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_admobservice_admobservice__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matched_matched__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_PlaceModel__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Utils_toast_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_geolocatino_geolocatino__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_swing__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_yelp_yelp__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_fcm_fcm__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_groupon_groupon__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, geoService, toastCtrl, http, loadingCtrl, alertService, authprovider, matchedProvider, localstorageprovider, platform, events, yelpprovider, lab, fcmprovider, grouponprovider, admobservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geoService = geoService;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.authprovider = authprovider;
        this.matchedProvider = matchedProvider;
        this.localstorageprovider = localstorageprovider;
        this.platform = platform;
        this.events = events;
        this.yelpprovider = yelpprovider;
        this.lab = lab;
        this.fcmprovider = fcmprovider;
        this.grouponprovider = grouponprovider;
        this.admobservice = admobservice;
        this.recentCard = '';
        /////////////////////////// component passing variable//////////////////////
        this.data_menubar = {};
        platform.ready().then(function () {
            _this.localstorageprovider.saveLoginStatus('true');
            _this.isSwipeStatus = true;
            _this.getUserStatus();
            _this.onDismissInvitePage();
            _this.places = [];
            _this.places_temp = [];
            _this.yelp_array = [];
            _this.groupon_array = [];
            _this.checkList = [];
            var elem = document.createElement('div');
            _this.service = new google.maps.places.PlacesService(elem);
            _this.getUserCategoryInfoFromFirebase();
            _this.stackConfig = {
                allowedDirections: [
                    __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["Direction"].LEFT,
                    __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["Direction"].DOWN,
                    __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["Direction"].UP,
                    __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["Direction"].RIGHT
                ],
                throwOutConfidence: function (offsetX, offsetY, element) {
                    return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.8), Math.abs(offsetY) / (element.offsetHeight / 3)), 1);
                },
                throwOutDistance: function (d) {
                    return 900;
                }
            };
        });
    }
    MainPage.prototype.getUserSwipeSataus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fcmprovider.getUserSwipeStatus().then(function (res) {
                _this.isSwipeStatus = res;
                _this.fcmprovider.saveUserSwipeStatus();
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // status is user status of  public or private 
    // if user status is not defined, will save user status to public 
    // just setUserStatus and getUserStatus functions
    // isVisited : user have already visited walkthrough flow  : true
    // isVisited : user not visted walkthrough flow  : false
    MainPage.prototype.setUserStatus = function () {
        this.authprovider.updateUserStatus(true).then(function (res) {
        }).catch(function (e) {
        });
    };
    MainPage.prototype.getUserStatus = function () {
        var _this = this;
        var myid = this.localstorageprovider.getUserinfo()['id'];
        this.authprovider.getUserStatus(myid).then(function (res) {
            console.log("this is result", res);
            if (res[0]['status']) {
            }
            else {
                _this.setUserStatus();
            }
        }).catch(function (err) {
        });
    };
    MainPage.prototype.ionViewDidLoad = function () {
        this.data_menubar = { title: '' };
    };
    MainPage.prototype.ionViewWillEnter = function () {
        this.showBanner();
    };
    MainPage.prototype.showBanner = function () {
        var _this = this;
        setTimeout(function () {
            _this.admobservice.showadmob(50);
        }, 2000);
    };
    MainPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        setTimeout(function () {
            _this.admobservice.removeAdmob();
        }, 100);
    };
    // get category list from firebase database
    MainPage.prototype.getUserCategoryInfoFromFirebase = function () {
        var _this = this;
        this.showLoading();
        this.fcmprovider.getUserCategoryList().then(function (res) {
            // this.checkList = this.localstorageprovider.getCategoryList()
            _this.checkList = res;
            _this.getCurrentLocation();
        }).catch(function (err) {
            _this.loading.dismiss();
            alert(err);
        });
    };
    //////////////////////////////////geolocation functions///////////////////
    MainPage.prototype.getCurrentLocation = function () {
        var _this = this;
        this.geoService
            .getUserPosition()
            .then(function (success) {
            console.log('this is current location====================================');
            console.log(success);
            console.log('====================================');
            // this.loading.dismiss()
            // this.addMap(success.coords.latitude, success.coords.longitude);
            _this.getYelpData(success.coords.latitude, success.coords.longitude);
            // this.generatePlaceArray(success.coords.latitude, success.coords.longitude)
        })
            .catch(function (err) {
            // alert(err)
            _this.loading.dismiss();
            _this.alertService.presentErrorAlert(err);
        });
    };
    MainPage.prototype.getRandomOffsetWithYelp = function () {
        return Math.floor(Math.random() * Math.floor(900));
    };
    MainPage.prototype.getRandomOffsetWithGroupon = function (number) {
        return Math.floor(Math.random() * Math.floor(number - 25));
    };
    MainPage.prototype.getYelpData = function (lati, longi) {
        var _this = this;
        // this.yelpprovider.getTotalYelpNumber(lati, longi,this.checkList).then(res=>{
        // console.log("this is yelp number", res)  
        var random_offset = this.getRandomOffsetWithYelp();
        console.log("this is yelp number-----------", random_offset);
        this.yelpprovider.getNearByYelpInfo(lati, longi, this.checkList, random_offset).then(function (suc) {
            // this.places = suc['businesses']
            _this.yelp_array = suc['businesses'];
            _this.grouponprovider.getGrouponNumbers(lati, longi, _this.checkList).then(function (result) {
                var random_ofset = _this.getRandomOffsetWithGroupon(result);
                _this.grouponprovider.getGrouponData(lati, longi, _this.checkList, random_ofset).then(function (ress) {
                    _this.loading.dismiss();
                    _this.groupon_array = ress['deals'];
                    _this.generateAllPlaceArray();
                }).catch(function (er) {
                    _this.loading.dismiss();
                });
            }).catch(function (er) {
                _this.loading.dismiss();
            });
        }).catch(function (er) {
            _this.loading.dismiss();
            // alert(er)
        });
        // })
    };
    //////get total array from yelp and groupon array
    MainPage.prototype.generateAllPlaceArray = function () {
        this.places = [];
        this.places_temp = [];
        for (var i = 0; i < this.yelp_array.length; i++) {
            var yelp_item = this.yelp_array[i];
            var group_item = this.groupon_array[i];
            var yelp_model = new __WEBPACK_IMPORTED_MODULE_4__Model_PlaceModel__["b" /* YelpModel */]();
            yelp_model.place_id = yelp_item['id'];
            yelp_model.place_photo = yelp_item['image_url'];
            yelp_model.place_name = yelp_item['name'];
            yelp_model.place_price = yelp_item['price'];
            yelp_model.place_category = yelp_item['categories'];
            yelp_model.place_city = yelp_item.location['city'];
            yelp_model.place_rating = yelp_item['rating'];
            yelp_model.place_reviews = yelp_item['review_count'];
            yelp_model.place_url = yelp_item['url'];
            var grouponmodel = new __WEBPACK_IMPORTED_MODULE_4__Model_PlaceModel__["a" /* GrouponModel */]();
            grouponmodel.place_name = group_item.merchant['name'];
            grouponmodel.place_title = group_item['announcementTitle'];
            grouponmodel.place_id = group_item['id'];
            grouponmodel.place_dealurl = group_item['dealUrl'];
            if (group_item.options[0].redemptionLocations.length > 0) {
                grouponmodel.place_lati = group_item.options[0].redemptionLocations[0]['lat'];
                grouponmodel.place_longti = group_item.options[0].redemptionLocations[0]['lng'];
            }
            if (group_item.options[0].redemptionLocations.length > 0) {
                grouponmodel.place_redelocation = group_item.options[0].redemptionLocations[0]['name'];
            }
            grouponmodel.place_discount_price = group_item.options[0].value['formattedAmount'];
            grouponmodel.place_price = group_item.options[0].price['formattedAmount'];
            grouponmodel.place_photo = group_item['largeImageUrl'];
            this.places.push(yelp_model);
            this.places.push(grouponmodel);
            this.places_temp.push(yelp_model);
            this.places_temp.push(grouponmodel);
        }
        console.log("this is places info", this.places);
    };
    MainPage.prototype.onclickHeaderImage = function (placeid) {
        this.navCtrl.push('MainDetailPage', { placeid: placeid });
    };
    // addMap(lat, long) {
    //   let latLng = new google.maps.LatLng(lat, long);
    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //   this.getPlaceList(latLng)
    //     .then((result: Array<any>) => {
    //       this.places = [];
    //       result.reverse().forEach(element => {
    //         let model = new PlaceModdel();
    //         model.id = element['id'];
    //         model.place_icon = element['icon'];
    //         model.place_name = element['name'];
    //         model.place_id = element['place_id'];
    //         this.geoService.getplacePhotos(element['place_id']).then(result=>{
    //           console.log('====================================');
    //           console.log(result);
    //           console.log('====================================');
    //           if(result.result.photos)
    //           {
    //              let photourl = Constant.googleApiPhotoUrl + result.result.photos[0]['photo_reference'] + "&key=" + Constant.googleKey
    //              model.place_photo = photourl
    //           }else{
    //             model.place_photo = ""
    //           }
    //         });
    //         model.place_reference = element['reference'];
    //         model.place_type = element['types'];
    //         model.place_vicinity = element['vicinity'];
    //         model.place_rating = element['rating'];
    //         model.place_address = element['vicinity'];
    //         this.places.push(model);
    //       });
    //       console.log('place list', this.places);
    //       this.loading.dismiss();
    //     })
    //     .catch(error => {
    //       this.loading.dismiss();
    //     });
    // }
    ////////////// function : show progress view///////////////////
    MainPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    /////////////////////////get nearby places list info//////////////////
    MainPage.prototype.getPlaceList = function (latLng) {
        var request = {
            location: latLng,
            radius: 8000,
            // type : ['store']
            type: this.checkList
        };
        var service = new google.maps.places.PlacesService(this.map);
        console.log("this is check list", this.checkList);
        console.log("this is request list", request);
        console.log("this is check list=====>", this.service);
        return new Promise(function (resolve, reject) {
            service.nearbySearch(request, function (results, status) {
                console.log('this is test', results, status);
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    MainPage.prototype.getPhotoUrlsFromPlaceId = function (placeid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var placeservice = new google.maps.places.PlacesService(_this.map);
            placeservice.getDetails({
                placeId: placeid
            }, function (placeResult, status) {
                if (status == 'OK') {
                    resolve(placeResult);
                }
            });
        });
    };
    MainPage.prototype.ngAfterViewInit = function () {
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        this.swingStack.throwoutleft.subscribe(function (event) {
            console.log('Manual hook', event);
        });
        this.swingStack.throwoutright.subscribe(function (event) {
            console.log('manual hook right', event);
        });
        this.cards = [{ email: '' }];
    };
    MainPage.prototype.onThrowOut = function (event) {
        console.log('hook from the template', event.throwDirection);
    };
    // Called whenever we drag an element
    MainPage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x > 0) {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        else {
            color = '#FF' + hexCode + hexCode;
        }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    MainPage.prototype.voteUp = function (like, info) {
        console.log('this is placeinfo', info);
        if (like) {
            // distinguish "swipe right" and click like button
            if (info == 'swipe') {
                this.swipeRight();
            }
            else {
                this.onclickLikeButton(info);
            }
        }
        else {
            this.onclickUnlikeButton(info);
        }
        this.places.pop();
    };
    // function :  when swipe right : just same when click unlike button
    MainPage.prototype.swipeLeft = function () { };
    // function :  when swipe right : just same when click like button
    MainPage.prototype.swipeRight = function () {
        // this.showLoading()
        var _this = this;
        // get user swipe status
        this.getUserSwipeSataus().then(function (res) {
            console.log("this is temp info", res);
            if (res == false) {
                _this.stackConfig.allowedDirections = [__WEBPACK_IMPORTED_MODULE_10_angular2_swing__["Direction"].INVALID];
            }
            else {
                var stacklength = _this.swingStack.cards.length;
                var cardlength = _this.swingCards.length;
                var index = stacklength - cardlength;
                console.log('swiperight', cardlength);
                _this.onclickLikeButton(_this.places[cardlength - 1]);
            }
        });
    };
    MainPage.prototype.onclickmaskView = function (index) {
        var place = this.places[index];
        this.onclickinvite(place);
    };
    MainPage.prototype.onclickitems = function (type) {
        console.log("this is type info=======>", type);
        var index = type['index'];
        var place = this.places[index];
        switch (type['type']) {
            case 'placeimage':
                this.onclickHeaderImage(place['place_id']);
                break;
            case 'yelp':
                this.onclickMorebutton(place['place_url']);
                break;
            case 'invite':
                this.onclickinvite(place);
                break;
            case 'group_placeimage':
                this.onclickMorebutton(place['place_dealurl']);
                break;
            case 'group_invite':
                this.onclickinvite(place);
                break;
            default:
                break;
        }
    };
    MainPage.prototype.onDismissInvitePage = function () {
        var _this = this;
        this.events.subscribe('dismissinvite', function () {
            _this.isSwipeStatus = true;
        });
    };
    MainPage.prototype.onclickMorebutton = function (url) {
        var inappbrowser = this.lab.create(url, '_blank');
        inappbrowser.show();
        // this.navCtrl.push('PlacemapPage',{placeid : p_id})
    };
    MainPage.prototype.onclickinvite = function (item) {
        this.navCtrl.push('InviteplacePage', { data: item });
    };
    // function : when click left button
    MainPage.prototype.onclickUnlikeButton = function (info) { };
    //function : when click like button
    MainPage.prototype.onclickLikeButton = function (info) {
        // this.showLoading();
        var _this = this;
        this.matchedProvider
            .savePlaceInfo(info)
            .then(function (res) {
            _this.matchedProvider
                .saveMyPlaceInfo(info)
                .then(function (result) { })
                .catch(function (error) { });
            _this.matchedProvider
                .getMatchedUserInfo(res, info)
                .then(function (success) {
                console.log('====================================');
                console.log(JSON.stringify(success), res);
                console.log('====================================');
                _this.navCtrl.push('MatchPage', {
                    userinfos: success,
                    placeinfo: info
                }).then(function (scu) {
                });
                // this.loading.dismiss();
            })
                .catch(function (error) {
                console.log('errrrrr====================================');
                console.log(JSON.stringify(error));
                console.log('====================================');
                // this.loading.dismiss();
            });
        })
            .catch(function (error) {
            // this.loading.dismiss();
            // this.alertService.presentAlert('Alert', error);
        });
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    MainPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        var numPadding = typeof padding === 'undefined' || padding === null ? 2 : padding;
        while (hex.length < numPadding) {
            hex = '0' + hex;
        }
        return hex;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["SwingStackComponent"])
    ], MainPage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_core__["QueryList"])
    ], MainPage.prototype, "swingCards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_core__["ElementRef"])
    ], MainPage.prototype, "mapElement", void 0);
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/main/main.html"*/'<ion-header>\n  <custommenubar [data]="data_menubar"></custommenubar>\n</ion-header>\n\n\n<ion-content class="content">\n\n    <!-- turtoial part -->\n    <div *ngIf="isSwipeStatus == false" class="top_title">\n        <img src="assets/img/main_title.png">\n    </div>\n\n  <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwout)="onThrowOut($event)" (throwoutleft)="voteUp(false, \'swipe\')"\n    (throwoutright)="voteUp(true, \'swipe\')" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let place of places; let i = index" class="td-card">\n      <yelp *ngIf="place.place_rating" [places]="place" [index] = "i" (onClickComponent)="onclickitems($event)"></yelp>\n      <groupon *ngIf="place.place_title" [places]="place" [index] = "i" (onClickComponent)="onclickitems($event)"></groupon>\n\n      <ion-item  no-padding class="tinder-footer">\n        \n        <div item-left id="swipe_dislike" class="rate" (click)="voteUp(false, place)"></div>\n        <div item-right id="swipe_like" class="rate" (click)="voteUp(true, place)"></div>\n      </ion-item>\n\n      <div *ngIf="isSwipeStatus == false" class="mask">\n        <img src="assets/img/mask.png" (click)="onclickmaskView(i)" >\n      </div>\n\n    </ion-card>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/top_johnapple703/Documents/work/ionic/ditto/9_25/src/pages/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_geolocatino_geolocatino__["a" /* GeolocatinoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_Utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Utils_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_matched_matched__["a" /* MatchedProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__providers_yelp_yelp__["a" /* YelpProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_14__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_groupon_groupon__["a" /* GrouponProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_admobservice_admobservice__["a" /* AdmobserviceProvider */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })
]));
//# sourceMappingURL=9.js.map