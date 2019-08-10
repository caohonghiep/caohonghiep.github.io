(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app-modules/setting/setting.container.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-modules/setting/setting.container.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>setting works!</p><p>setting works!</p><p>setting works!</p><p>setting works!</p><p>setting works!</p><p>setting works!</p>\n"

/***/ }),

/***/ "./src/app/app-modules/setting/setting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/app-modules/setting/setting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setting_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.container */ "./src/app/app-modules/setting/setting.container.ts");




var routes = [
    {
        path: '',
        component: _setting_container__WEBPACK_IMPORTED_MODULE_3__["SettingContainer"]
    }
];
var SettingRoutingModule = /** @class */ (function () {
    function SettingRoutingModule() {
    }
    SettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingRoutingModule);
    return SettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-modules/setting/setting.container.scss":
/*!************************************************************!*\
  !*** ./src/app/app-modules/setting/setting.container.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1tb2R1bGVzL3NldHRpbmcvc2V0dGluZy5jb250YWluZXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-modules/setting/setting.container.ts":
/*!**********************************************************!*\
  !*** ./src/app/app-modules/setting/setting.container.ts ***!
  \**********************************************************/
/*! exports provided: SettingContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingContainer", function() { return SettingContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingContainer = /** @class */ (function () {
    function SettingContainer() {
    }
    SettingContainer.prototype.ngOnInit = function () {
    };
    SettingContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-setting',
            template: __webpack_require__(/*! raw-loader!./setting.container.html */ "./node_modules/raw-loader/index.js!./src/app/app-modules/setting/setting.container.html"),
            styles: [__webpack_require__(/*! ./setting.container.scss */ "./src/app/app-modules/setting/setting.container.scss")]
        })
    ], SettingContainer);
    return SettingContainer;
}());



/***/ }),

/***/ "./src/app/app-modules/setting/setting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-modules/setting/setting.module.ts ***!
  \*******************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/app-modules/setting/setting-routing.module.ts");
/* harmony import */ var _setting_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting.container */ "./src/app/app-modules/setting/setting.container.ts");





var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_setting_container__WEBPACK_IMPORTED_MODULE_4__["SettingContainer"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingRoutingModule"]
            ]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-setting-setting-module-es5.js.map