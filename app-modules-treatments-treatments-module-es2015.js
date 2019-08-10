(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-treatments-treatments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app-modules/treatments/treatments.container.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-modules/treatments/treatments.container.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>treatments works!</p>\n"

/***/ }),

/***/ "./src/app/app-modules/treatments/treatments-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/app-modules/treatments/treatments-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TreatmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsRoutingModule", function() { return TreatmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let TreatmentsRoutingModule = class TreatmentsRoutingModule {
};
TreatmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TreatmentsRoutingModule);



/***/ }),

/***/ "./src/app/app-modules/treatments/treatments.container.scss":
/*!******************************************************************!*\
  !*** ./src/app/app-modules/treatments/treatments.container.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1tb2R1bGVzL3RyZWF0bWVudHMvdHJlYXRtZW50cy5jb250YWluZXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-modules/treatments/treatments.container.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-modules/treatments/treatments.container.ts ***!
  \****************************************************************/
/*! exports provided: TreatmentsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsContainer", function() { return TreatmentsContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreatmentsContainer = class TreatmentsContainer {
    constructor() { }
    ngOnInit() {
    }
};
TreatmentsContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-treatments',
        template: __webpack_require__(/*! raw-loader!./treatments.container.html */ "./node_modules/raw-loader/index.js!./src/app/app-modules/treatments/treatments.container.html"),
        styles: [__webpack_require__(/*! ./treatments.container.scss */ "./src/app/app-modules/treatments/treatments.container.scss")]
    })
], TreatmentsContainer);



/***/ }),

/***/ "./src/app/app-modules/treatments/treatments.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/app-modules/treatments/treatments.module.ts ***!
  \*************************************************************/
/*! exports provided: TreatmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsModule", function() { return TreatmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _treatments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treatments-routing.module */ "./src/app/app-modules/treatments/treatments-routing.module.ts");
/* harmony import */ var _treatments_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treatments.container */ "./src/app/app-modules/treatments/treatments.container.ts");





let TreatmentsModule = class TreatmentsModule {
};
TreatmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_treatments_container__WEBPACK_IMPORTED_MODULE_4__["TreatmentsContainer"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _treatments_routing_module__WEBPACK_IMPORTED_MODULE_3__["TreatmentsRoutingModule"]
        ]
    })
], TreatmentsModule);



/***/ })

}]);
//# sourceMappingURL=app-modules-treatments-treatments-module-es2015.js.map