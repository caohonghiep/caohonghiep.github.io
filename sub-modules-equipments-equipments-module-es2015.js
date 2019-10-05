(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-modules-equipments-equipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/equipments/equipments.container.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/equipments/equipments.container.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\">\r\n  <div class=\"block-header\">\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <h2>Equipments</h2>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 text-right\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"index.html\"><i class=\"icon-home\"></i></a></li>\r\n          <li class=\"breadcrumb-item active\">Equipments</li>\r\n        </ul>\r\n\r\n        <!--        <a href=\"app-contact.html\" class=\"btn btn-sm btn-success\" title=\"\"><i class=\"fa fa-list\"></i></a>-->\r\n        <!--        <a href=\"app-contact-grid.html\" class=\"btn btn-sm btn-outline-success\" title=\"\"><i class=\"fa fa-th-large\"></i></a>-->\r\n        <!--        <a href=\"javascript:void(0);\" class=\"btn btn-sm btn-primary\" title=\"\" data-toggle=\"modal\" data-target=\"#addcontact\">Create New</a>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <!--          <div class=\"body\">-->\r\n          <!--            <div class=\"row clearfix\">-->\r\n\r\n          <div class=\"control\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"margin: 16px\">\r\n            <form>\r\n              <mat-form-field appearance=\"legacy\">\r\n                <mat-label>Input Name or ID or Phone</mat-label>\r\n                <input matInput>\r\n                <mat-icon matSuffix>search</mat-icon>\r\n              </mat-form-field>\r\n\r\n              &nbsp;\r\n\r\n              <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Store\">\r\n                <mat-button-toggle value=\"bold\"><i class=\"fa fa-home\"></i> AA</mat-button-toggle>\r\n                <mat-button-toggle value=\"italic\"><i class=\"fa fa-home\"></i> BB</mat-button-toggle>\r\n                <mat-button-toggle value=\"underline\"> &nbsp; <i class=\"fa icon-logout\"></i> &nbsp; </mat-button-toggle>\r\n                <mat-button-toggle value=\"underline\"> &nbsp; <i class=\"icon-shuffle\"></i> &nbsp; </mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n\r\n              &nbsp;\r\n\r\n              <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Store\">\r\n                <mat-button-toggle value=\"bold\"> &nbsp; <i style=\"color: limegreen\" class=\"fa fa-check\"></i>  &nbsp; </mat-button-toggle>\r\n                <mat-button-toggle value=\"underline\"> &nbsp; <i  style=\"color: darkorange\" class=\"fa fa-warning \"></i> &nbsp; </mat-button-toggle>\r\n                <mat-button-toggle value=\"underline\"> &nbsp; <i  style=\"color: red\" class=\"fa fa fa-times\"></i> &nbsp; </mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n\r\n\r\n\r\n            </form>\r\n            <div>\r\n              <button mat-fab>\r\n                <mat-icon style=\"margin-top: -8px\">  <i class=\"icon-shuffle\"></i> </mat-icon>\r\n              </button>\r\n\r\n              <button mat-fab>\r\n                <mat-icon> add </mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <!--            </div>-->\r\n          <!--          </div>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\"></div>\r\n    </div>\r\n\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"table-responsive check-all-parent\">\r\n              <table class=\"table table-custom table-hover m-b-0 c_list\">\r\n                <thead>\r\n                <tr>\r\n                  <th>\r\n                    <p class=\"c_name\">Avatar</p>\r\n                  </th>\r\n                  <th><p class=\"c_name\">ID</p></th>\r\n                  <th><p class=\"c_name\">Name</p></th>\r\n                  <th>Amount</th>\r\n                  <th>Storage</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa fa-home m-r-10\"></i> AA</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i style=\"color: red\"  class=\"fa fa fa-times \"></i> &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa fa-home m-r-10\"></i> AA</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i style=\"color: darkorange\" class=\"fa fa-warning \"></i> &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">BB&nbsp; <i class=\"icon-shuffle m-r-10\"></i> &nbsp;AA</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-warning\"></i>  &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">BB&nbsp; <i class=\"icon-shuffle m-r-10\"></i> &nbsp;AA</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-check\"></i>  &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa fa-home m-r-10\"></i> AA</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-check\"></i> &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa fa-home m-r-10\"></i> AA</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-check\"></i>  &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa icon-logout m-r-10\"></i> CC </span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-check\"></i>  &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa fa-home m-r-10\"></i> BB </span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-check\"></i>  &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/xs/avatar.jpg\" class=\"rounded-circle avatar\" alt=\"\">\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">55123455</p>\r\n                  </td>\r\n                  <td>\r\n                    <p class=\"c_name\">xxx xxx</p>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">24</span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\"><i class=\"fa fa-home m-r-10\"></i> BB </span>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"phone\">&nbsp; <i class=\"fa fa-check\"></i>  &nbsp;</span>\r\n                  </td>\r\n                  <td>\r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" style=\"color: #dc3545\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sub-modules/equipments/equipments-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/equipments/equipments-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EquipmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsRoutingModule", function() { return EquipmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _equipments_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.container */ "./src/app/sub-modules/equipments/equipments.container.ts");




const routes = [
    {
        path: '',
        component: _equipments_container__WEBPACK_IMPORTED_MODULE_3__["EquipmentsContainer"],
    }
];
let EquipmentsRoutingModule = class EquipmentsRoutingModule {
};
EquipmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EquipmentsRoutingModule);



/***/ }),

/***/ "./src/app/sub-modules/equipments/equipments.container.scss":
/*!******************************************************************!*\
  !*** ./src/app/sub-modules/equipments/equipments.container.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control form mat-form-field {\n  margin: 0 20px;\n}\n.control form .icon-shuffle:before {\n  font-size: 16px;\n}\n.control > div button {\n  margin: 0 4px;\n}\ni.fa.fa-check {\n  color: limegreen;\n}\ni.fa-warning {\n  color: darkorange;\n}\ni.fa-times {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvZXF1aXBtZW50cy9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxTb3VyY2VcXFVJL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcZXF1aXBtZW50c1xcZXF1aXBtZW50cy5jb250YWluZXIuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvZXF1aXBtZW50cy9lcXVpcG1lbnRzLmNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsY0FBQTtBQ0ZOO0FES007RUFDRSxlQUFBO0FDSFI7QURTSTtFQUNFLGFBQUE7QUNQTjtBRGNBO0VBQ0UsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsVUFBQTtBQ1hGIiwiZmlsZSI6InNyYy9hcHAvc3ViLW1vZHVsZXMvZXF1aXBtZW50cy9lcXVpcG1lbnRzLmNvbnRhaW5lci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2x7XHJcbiAgLy9wYWRkaW5nOiAxNnB4O1xyXG4gIGZvcm17XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1zaHVmZmxle1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+ZGl2e1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5pLmZhLmZhLWNoZWNre1xyXG4gIGNvbG9yOiBsaW1lZ3JlZW47XHJcbn1cclxuXHJcbmkuZmEtd2FybmluZ3tcclxuICBjb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuaS5mYS10aW1lc3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIi5jb250cm9sIGZvcm0gbWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5jb250cm9sIGZvcm0gLmljb24tc2h1ZmZsZTpiZWZvcmUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udHJvbCA+IGRpdiBidXR0b24ge1xuICBtYXJnaW46IDAgNHB4O1xufVxuXG5pLmZhLmZhLWNoZWNrIHtcbiAgY29sb3I6IGxpbWVncmVlbjtcbn1cblxuaS5mYS13YXJuaW5nIHtcbiAgY29sb3I6IGRhcmtvcmFuZ2U7XG59XG5cbmkuZmEtdGltZXMge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/equipments/equipments.container.ts":
/*!****************************************************************!*\
  !*** ./src/app/sub-modules/equipments/equipments.container.ts ***!
  \****************************************************************/
/*! exports provided: EquipmentsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsContainer", function() { return EquipmentsContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EquipmentsContainer = 
// tslint:disable-next-line:component-class-suffix
class EquipmentsContainer {
    constructor() { }
    ngOnInit() {
    }
};
EquipmentsContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-equipments',
        template: __webpack_require__(/*! raw-loader!./equipments.container.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/equipments/equipments.container.html"),
        styles: [__webpack_require__(/*! ./equipments.container.scss */ "./src/app/sub-modules/equipments/equipments.container.scss")]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EquipmentsContainer);



/***/ }),

/***/ "./src/app/sub-modules/equipments/equipments.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/sub-modules/equipments/equipments.module.ts ***!
  \*************************************************************/
/*! exports provided: EquipmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsModule", function() { return EquipmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/sub-modules/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.container */ "./src/app/sub-modules/equipments/equipments.container.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ic-core */ "./src/app/sub-modules/ic-core/index.ts");






let EquipmentsModule = class EquipmentsModule {
};
EquipmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_equipments_container__WEBPACK_IMPORTED_MODULE_3__["EquipmentsContainer"]],
        imports: [
            _equipments_routing_module__WEBPACK_IMPORTED_MODULE_2__["EquipmentsRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _ic_core__WEBPACK_IMPORTED_MODULE_5__["IcCoreModule"]
        ]
    })
], EquipmentsModule);



/***/ })

}]);
//# sourceMappingURL=sub-modules-equipments-equipments-module-es2015.js.map