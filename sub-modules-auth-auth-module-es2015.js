(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/auth.container.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/active-account/active-account.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/active-account/active-account.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"header h3 mb-3\">Active Your Account</h1>\r\n    <div *ngIf=\"email\" class=\"message text-warning\"> Code will be sent to email: {{email}}</div>\r\n\r\n    <label for=\"password\" class=\"sr-only\">User Name </label>\r\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"username\"  type=\"text\"  class=\"form-control\" placeholder=\"User Name\" required=\"\">\r\n\r\n    <label for=\"code\" class=\"sr-only\">Verification Code</label>\r\n    <input id=\"code\" name=\"code\" [(ngModel)]=\"verificationCode\" type=\"text\" class=\"form-control\" placeholder=\"Code\" required=\"\" autofocus=\"\">\r\n\r\n    <div class=\"message text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n<!--      <button id=\"resendCodeButton\" type=\"button\" (click)=\"resendActiveCode()\" class=\"btn btn-outline-success\">Resend Code</button>-->\r\n      <button id=\"resetPasswordButton\" class=\"btn btn-primary\" [disabled]=\"!username || !verificationCode\" (click)=\"activeAccount()\">Active Account</button>\r\n    </div>\r\n    <div class=\"message\">\r\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/sign-in\" class=\"text-primary\"> Back to Sign In</a>\r\n      &nbsp;or&nbsp;\r\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/resend-active-code\" class=\"text-primary\"> Resend Active Code</a>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/change-password/change-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/change-password/change-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"header h3 mb-3\">Change Your Password</h1>\r\n    <label for=\"oldPassword\" class=\"sr-only\">Old Password</label>\r\n    <input id=\"oldPassword\" name=\"oldPassword\" [(ngModel)]=\"oldPassword\" type=\"password\" class=\"form-control\" placeholder=\"Old Password\" required=\"\" autofocus=\"\">\r\n    <label for=\"newPassword\" class=\"sr-only\">New Password</label>\r\n    <input id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"newPassword\"  type=\"password\"  class=\"form-control\" placeholder=\"New Password\" required=\"\">\r\n\r\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n      <button id=\"forgetPasswordButton\" type=\"button\" routerLink=\"/home\" class=\"btn btn-outline-success\">Cancel</button>\r\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!oldPassword || !newPassword\" (click)=\"changePassword()\">Change Password</button>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"header h3 mb-3\">Change Your Password</h1>\r\n\r\n    <label for=\"newPassword\" class=\"sr-only\">New Password</label>\r\n    <input id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"newPassword\"  type=\"password\"  class=\"form-control\" placeholder=\"New Password\" required=\"\">\r\n\r\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!newPassword\" (click)=\"changePassword()\">Change Password</button>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"header h3 mb-3\">Send Verify Code</h1>\r\n    <label for=\"username\" class=\"sr-only\">Email address</label>\r\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\r\n\r\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n      <button id=\"backToSignInButton\" type=\"button\" routerLink=\"/auth/sign-in\" class=\"btn btn-outline-success\">Back to Sign in</button>\r\n      <button id=\"sendCodeButton\" class=\"btn btn-primary\" (click)=\"sendVerificationCode()\" [disabled]=\"!username\">Send Code</button>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"header h3 mb-3\">Send A New Active Code</h1>\r\n    <label for=\"username\" class=\"sr-only\">Email address</label>\r\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\r\n\r\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n      <button id=\"backToSignInButton\" type=\"button\" (click)=\"backToActiveAccount()\" class=\"btn btn-outline-success\">Back to Active Account</button>\r\n      <button id=\"sendCodeButton\" class=\"btn btn-primary\" (click)=\"resendActiveAccountCode()\" [disabled]=\"!username\">Send Code</button>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"header h3 mb-3\">Reset Your Password</h1>\r\n    <div *ngIf=\"email\" class=\"message text-warning\"> Code will be sent to email: {{email}}</div>\r\n    <label for=\"code\" class=\"sr-only\">Verification Code</label>\r\n    <input id=\"code\" name=\"code\" [(ngModel)]=\"verificationCode\" type=\"text\" class=\"form-control\" placeholder=\"Code\" required=\"\" autofocus=\"\">\r\n    <label for=\"password\" class=\"sr-only\">New Password</label>\r\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"New Password\" required=\"\">\r\n\r\n    <div class=\"message text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n      <button id=\"resendCodeButton\" type=\"button\" routerLink=\"/auth/forget-password\" class=\"btn btn-outline-success\">Resend Code</button>\r\n      <button id=\"resetPasswordButton\" class=\"btn btn-primary\" [disabled]=\"!password || !verificationCode\" (click)=\"resetPassword()\">Reset Password</button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-in/sign-in.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/sign-in/sign-in.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"main-content\">-->\r\n<!--  <div class=\"container-fluid\">-->\r\n<!--&lt;!&ndash;    <amplify-authenticator [signUpConfig]=\"signUpConfig\"></amplify-authenticator>&ndash;&gt;-->\r\n<!--  </div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"64\" height=\"64\">\r\n    <h1 class=\"header h3 mb-3\">Sign In to You Account</h1>\r\n    <label for=\"username\" class=\"sr-only\">User Name</label>\r\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\r\n    <label for=\"password\" class=\"sr-only\">Password</label>\r\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n\r\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n<!--      <button id=\"forgetPasswordButton\" type=\"button\" routerLink=\"/auth/forget-password\" class=\"btn btn-outline-success\">Forget Password</button>-->\r\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!password || !username\" (click)=\"signIn()\">Sign in</button>\r\n    </div>\r\n    <div class=\"message\">\r\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/forget-password\" class=\"text-primary\"> Forget Password</a>\r\n      &nbsp;or&nbsp;\r\n      <a href=\"javascript:void(0)\" routerLink=\"/auth/active-account\" class=\"text-primary\"> Active Your Account</a>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-up/sign-up.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-modules/auth/pages/sign-up/sign-up.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content\">\r\n  <form class=\"form-signin text-center\">\r\n    <img src=\"assets/images/logo.png\" alt=\"\" width=\"64\" height=\"64\">\r\n    <h1 class=\"header h3 mb-3\">Create A New Account</h1>\r\n\r\n    <label for=\"username\" class=\"sr-only\">User Name</label>\r\n    <input id=\"username\" name=\"username\" [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\r\n    <label for=\"password\" class=\"sr-only\">Email</label>\r\n    <input id=\"email\" name=\"email\" [(ngModel)]=\"email\"  type=\"text\"  class=\"form-control\" placeholder=\"Email\" required=\"\">\r\n    <label for=\"password\" class=\"sr-only\">Password</label>\r\n    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\"  type=\"password\"  class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n\r\n    <div class=\"login-error text-danger\">{{ errorMessage }}</div>\r\n    <div class=\"sign-action\">\r\n      <button id=\"forgetPasswordButton\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-outline-success\"> Cancel </button>\r\n      <button id=\"signInButton\" class=\"btn btn-primary\" [disabled]=\"!password || !username||!email\" (click)=\"signUp()\">Create Account </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sub-modules/auth/auth-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sub-modules/auth/auth-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.container */ "./src/app/sub-modules/auth/auth.container.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forget-password/forget-password.component */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/sub-modules/auth/guards/auth.guard.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/sub-modules/auth/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/active-account/active-account.component */ "./src/app/sub-modules/auth/pages/active-account/active-account.component.ts");
/* harmony import */ var _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/resend-active-code/resend-active-code.component */ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts");
/* harmony import */ var _pages_complete_new_password_complete_new_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/complete-new-password/complete-new-password.component */ "./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.ts");













const routes = [
    {
        path: '',
        component: _auth_container__WEBPACK_IMPORTED_MODULE_3__["AuthContainer"],
        children: [
            {
                path: 'sign-up',
                component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
            },
            {
                path: 'active-account',
                component: _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_10__["ActiveAccountComponent"]
            },
            {
                path: 'resend-active-code',
                component: _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_11__["ResendActiveCodeComponent"]
            },
            {
                path: 'change-password',
                component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
            },
            {
                path: 'complete-new-password',
                component: _pages_complete_new_password_complete_new_password_component__WEBPACK_IMPORTED_MODULE_12__["CompleteNewPasswordComponent"]
            },
            {
                path: 'sign-in',
                component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]
            },
            {
                path: 'forget-password',
                component: _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]
            },
            {
                path: 'reset-password',
                component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
            },
        ]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/sub-modules/auth/auth.container.scss":
/*!******************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.container.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep html,\n::ng-deep .content {\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .content {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  padding: 40px;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  background: url(/assets/images/bg2.png) right no-repeat, url(/assets/images/bg1.png) left no-repeat;\n  background-size: contain, contain;\n}\n::ng-deep .content .header {\n  font-size: 20px;\n  color: var(--primary);\n  font-weight: bold;\n}\n::ng-deep .content .form-signin {\n  width: 100%;\n  max-width: 400px;\n  padding: 15px 50px 20px;\n  margin: auto;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.5), 0px 8px 10px 1px rgba(0, 0, 0, 0.4), 0px 3px 14px 2px rgba(0, 0, 0, 0.3);\n}\n::ng-deep .content .form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n}\n::ng-deep .content .form-signin .form-control:focus {\n  z-index: 2;\n}\n::ng-deep .content .form-signin .message {\n  margin-bottom: 4px;\n  margin-top: 4px;\n  font-size: 14px;\n}\n::ng-deep .content .form-signin .sign-action {\n  margin-top: 16px;\n}\n::ng-deep .content .form-signin .sign-action > button {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxTb3VyY2VcXFVJL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcYXV0aFxcYXV0aC5jb250YWluZXIuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9hdXRoLmNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1HQUFBO0VBQ0EsaUNBQUE7QUNGSjtBREdJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBR0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlIQUFBO0FDSk47QURNTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0pSO0FETVE7RUFDRSxVQUFBO0FDSlY7QURRTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNOUjtBRFNNO0VBQ0UsZ0JBQUE7QUNQUjtBRFNRO0VBQ0UsZ0JBQUE7QUNQViIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvYXV0aC5jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaHRtbCxcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnMi5wbmcpIHJpZ2h0IG5vLXJlcGVhdCwgdXJsKC9hc3NldHMvaW1hZ2VzL2JnMS5wbmcpIGxlZnQgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluLCBjb250YWluO1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1zaWduaW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgcGFkZGluZzogMTVweCA1MHB4IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgLy9tYXJnaW46IDIwcHg7XHJcbiAgICAgIC8vZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2lnbi1hY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcblxyXG4gICAgICAgID4gYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCI6Om5nLWRlZXAgaHRtbCxcbjo6bmctZGVlcCAuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnMi5wbmcpIHJpZ2h0IG5vLXJlcGVhdCwgdXJsKC9hc3NldHMvaW1hZ2VzL2JnMS5wbmcpIGxlZnQgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4sIGNvbnRhaW47XG59XG46Om5nLWRlZXAgLmNvbnRlbnQgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMTVweCA1MHB4IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNSksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbjo6bmctZGVlcCAuY29udGVudCAuZm9ybS1zaWduaW4gLm1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuc2lnbi1hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50IC5mb3JtLXNpZ25pbiAuc2lnbi1hY3Rpb24gPiBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/auth/auth.container.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.container.ts ***!
  \****************************************************/
/*! exports provided: AuthContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContainer", function() { return AuthContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthContainer = 
// tslint:disable-next-line:component-class-suffix
class AuthContainer {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // this.router.navigate(['/auth/sign-in']);
    }
};
AuthContainer.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-auth',
        template: __webpack_require__(/*! raw-loader!./auth.container.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/auth.container.html"),
        styles: [__webpack_require__(/*! ./auth.container.scss */ "./src/app/sub-modules/auth/auth.container.scss")]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthContainer);

// https://codepen.io/Lewitje/pen/BNNJjo


/***/ }),

/***/ "./src/app/sub-modules/auth/auth.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sub-modules/auth/auth.module.ts ***!
  \*************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/sub-modules/auth/auth-routing.module.ts");
/* harmony import */ var _auth_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.container */ "./src/app/sub-modules/auth/auth.container.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forget-password/forget-password.component */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sign-up/sign-up.component */ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/active-account/active-account.component */ "./src/app/sub-modules/auth/pages/active-account/active-account.component.ts");
/* harmony import */ var _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/resend-active-code/resend-active-code.component */ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/sub-modules/auth/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_complete_new_password_complete_new_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/complete-new-password/complete-new-password.component */ "./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.ts");















let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_container__WEBPACK_IMPORTED_MODULE_4__["AuthContainer"],
            _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
            _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"],
            _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"],
            _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
            _pages_active_account_active_account_component__WEBPACK_IMPORTED_MODULE_11__["ActiveAccountComponent"],
            _pages_resend_active_code_resend_active_code_component__WEBPACK_IMPORTED_MODULE_12__["ResendActiveCodeComponent"],
            _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
            _pages_complete_new_password_complete_new_password_component__WEBPACK_IMPORTED_MODULE_14__["CompleteNewPasswordComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__["AmplifyAngularModule"],
            _ic_core__WEBPACK_IMPORTED_MODULE_7__["IcCoreModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/active-account/active-account.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/active-account/active-account.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.content .message .text-primary {\n  font-style: italic;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9hY3RpdmUtYWNjb3VudC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxTb3VyY2VcXFVJL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcYXV0aFxccGFnZXNcXGFjdGl2ZS1hY2NvdW50XFxhY3RpdmUtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9hY3RpdmUtYWNjb3VudC9hY3RpdmUtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FESUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURPSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvYWN0aXZlLWFjY291bnQvYWN0aXZlLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICAudGV4dC1wcmltYXJ5e1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRlbnQgLmZvcm0tc2lnbmluIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW46Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IC5tZXNzYWdlIC50ZXh0LXByaW1hcnkge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/active-account/active-account.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/active-account/active-account.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ActiveAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveAccountComponent", function() { return ActiveAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let ActiveAccountComponent = class ActiveAccountComponent {
    constructor(route, router, authService, pageLoaderService, dialog) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.dialog = dialog;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
        this.verificationCode = this.route.snapshot.queryParams.code || '';
    }
    resendActiveCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const routerLink = 'auth/resend-active-code';
            yield this.router.navigate([routerLink], { queryParams: { username: this.username, email: this.email } });
        });
    }
    activeAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.activeAccount(this.username, this.verificationCode);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                const dialogRef = this.dialog.open(_ic_core__WEBPACK_IMPORTED_MODULE_4__["AlertDialog"], {
                    width: '300px',
                    data: `Your Account Has Been Activated!`
                });
                dialogRef.afterClosed().subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.router.navigate([this.loginUrl]);
                }));
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ActiveAccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
ActiveAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-active-account',
        template: __webpack_require__(/*! raw-loader!./active-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/active-account/active-account.component.html"),
        styles: [__webpack_require__(/*! ./active-account.component.scss */ "./src/app/sub-modules/auth/pages/active-account/active-account.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], ActiveAccountComponent);

/*
if (result.result) {
      const dialogRef = this.dialog.open(AlertDialog, {
        width: '300px',
        data: `Account Has Been Created!`
      });

      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate([this.returnUrl], {queryParams: {username: this.username, email: this.email}});
      });
    } else {
      this.errorMessage = `Error: ${result.error}`;
    }
 */


/***/ }),

/***/ "./src/app/sub-modules/auth/pages/change-password/change-password.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/change-password/change-password.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcU291cmNlXFxVSS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU47QURJRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/change-password/change-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/change-password/change-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.changePassword(this.oldPassword, this.newPassword);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                this.authService.signOut();
                // await this.router.navigate([this.loginUrl]);
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/sub-modules/auth/pages/change-password/change-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"]])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9jb21wbGV0ZS1uZXctcGFzc3dvcmQvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcU291cmNlXFxVSS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxjb21wbGV0ZS1uZXctcGFzc3dvcmRcXGNvbXBsZXRlLW5ldy1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9jb21wbGV0ZS1uZXctcGFzc3dvcmQvY29tcGxldGUtbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU47QURJRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1tb2R1bGVzL2F1dGgvcGFnZXMvY29tcGxldGUtbmV3LXBhc3N3b3JkL2NvbXBsZXRlLW5ldy1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CompleteNewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteNewPasswordComponent", function() { return CompleteNewPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let CompleteNewPasswordComponent = class CompleteNewPasswordComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.completeNewPassword(this.newPassword);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                yield this.router.navigate([this.returnUrl]);
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
CompleteNewPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
CompleteNewPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-change-password',
        template: __webpack_require__(/*! raw-loader!./complete-new-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.html"),
        styles: [__webpack_require__(/*! ./complete-new-password.component.scss */ "./src/app/sub-modules/auth/pages/complete-new-password/complete-new-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"]])
], CompleteNewPasswordComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 14px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcU291cmNlXFxVSS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxmb3JnZXQtcGFzc3dvcmRcXGZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW4gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbjpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/forget-password/forget-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(router, authService, pageLoaderService) {
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.resetPasswordUrl = '/auth/reset-password';
    }
    ngOnInit() {
    }
    sendVerificationCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.forgetPassword(this.username);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                this.router.navigate([this.resetPasswordUrl], { queryParams: { username: this.username, email: result.email } });
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_3__["PageLoaderService"] }
];
ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-forget-password',
        template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/forget-password/forget-password.component.html"),
        styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/sub-modules/auth/pages/forget-password/forget-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ic_core__WEBPACK_IMPORTED_MODULE_3__["PageLoaderService"]])
], ForgetPasswordComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 14px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNlbmQtYWN0aXZlLWNvZGUvQzpcXERFVlxcd29ya3NwYWNlc1xcaWNsaW5pY1xcU291cmNlXFxVSS9zcmNcXGFwcFxcc3ViLW1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxyZXNlbmQtYWN0aXZlLWNvZGVcXHJlc2VuZC1hY3RpdmUtY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNlbmQtYWN0aXZlLWNvZGUvcmVzZW5kLWFjdGl2ZS1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3Jlc2VuZC1hY3RpdmUtY29kZS9yZXNlbmQtYWN0aXZlLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW4gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbjpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ResendActiveCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendActiveCodeComponent", function() { return ResendActiveCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ResendActiveCodeComponent = class ResendActiveCodeComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.returnUrl = 'auth/active-account';
    }
    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
    }
    resendActiveAccountCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.resendActiveAccountCode(this.username);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                yield this.backToActiveAccount();
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
    backToActiveAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigate([this.returnUrl], { queryParams: { username: this.username, email: this.email } });
        });
    }
};
ResendActiveCodeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ResendActiveCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-resend-active-code',
        template: __webpack_require__(/*! raw-loader!./resend-active-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.html"),
        styles: [__webpack_require__(/*! ./resend-active-code.component.scss */ "./src/app/sub-modules/auth/pages/resend-active-code/resend-active-code.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"]])
], ResendActiveCodeComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxTb3VyY2VcXFVJL3NyY1xcYXBwXFxzdWItbW9kdWxlc1xcYXV0aFxccGFnZXNcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FESUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRlbnQgLmZvcm0tc2lnbmluIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW46Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/reset-password/reset-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.loginUrl = 'auth/sign-in';
    }
    ngOnInit() {
        this.email = this.route.snapshot.queryParams.email;
        this.username = this.route.snapshot.queryParams.username;
        this.verificationCode = this.route.snapshot.queryParams.code || '';
        // if (!!this.username) {
        //   this.router.navigate(['./']);
        // }
    }
    resetPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.resetPassword(this.username, this.verificationCode, this.password);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                yield this.router.navigate([this.loginUrl]);
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-login',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/reset-password/reset-password.component.html"),
        styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/sub-modules/auth/pages/reset-password/reset-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"]])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-in/sign-in.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[type=text] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.content .message .text-primary {\n  font-style: italic;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9zaWduLWluL0M6XFxERVZcXHdvcmtzcGFjZXNcXGljbGluaWNcXFNvdXJjZVxcVUkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xcc2lnbi1pblxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTjtBRElFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDRko7QURLRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0hKO0FETUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgLnRleHQtcHJpbWFyeXtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250ZW50IC5mb3JtLXNpZ25pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbnQgLmZvcm0tc2lnbmluOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jb250ZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4uY29udGVudCAubWVzc2FnZSAudGV4dC1wcmltYXJ5IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-in/sign-in.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");





let SignInComponent = class SignInComponent {
    /*
    private signUpConfig = {
      header: 'Create A New Account',
      usernameAttributes: 'username',
      hideAllDefaults: true,
      defaultCountryCode: '84',
      signUpFields: [
        {
          label: 'User Name',
          key: 'username',
          required: true,
          displayOrder: 1,
          type: 'string',
        },
        {
          label: 'Your Email',
          key: 'email',
          required: true,
          displayOrder: 2,
          type: 'string',
        },
        {
          label: 'Password',
          key: 'password',
          required: true,
          displayOrder: 3,
          type: 'password'
        },
        {
          label: 'Phone Number',
          key: 'phone_number',
          required: true,
          displayOrder: 4,
          type: 'string'
        }
      ]
    };
    */
    constructor(route, router, authService, pageLoaderService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.completeNewPasswordUrl = 'auth/complete-new-password';
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        this.authService.addSignInListener((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigate([this.returnUrl]);
        }));
    }
    signIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.signIn(this.username, this.password);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                // await this.router.navigate([this.returnUrl]); => ngOnInit()
                if (result.user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    this.authService['NEW_PASSWORD_REQUIRED'] = result.user;
                    yield this.router.navigate([this.completeNewPasswordUrl], { queryParams: { returnUrl: this.returnUrl } });
                }
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sub-modules/auth/pages/sign-in/sign-in.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"]])
], SignInComponent);



/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-up/sign-up.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .form-signin {\n  font-size: 16px;\n}\n.content .form-signin img {\n  margin-bottom: 0;\n}\n.content .form-signin:focus {\n  z-index: 2;\n}\n.content input[name=email] {\n  margin-bottom: -1px;\n  border-radius: 0;\n}\n.content input[name=username] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.content input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9zaWduLXVwL0M6XFxERVZcXHdvcmtzcGFjZXNcXGljbGluaWNcXFNvdXJjZVxcVUkvc3JjXFxhcHBcXHN1Yi1tb2R1bGVzXFxhdXRoXFxwYWdlc1xcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3ViLW1vZHVsZXMvYXV0aC9wYWdlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURDSTtFQUNFLGdCQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTjtBRElFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0U7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNISjtBRE1FO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zdWItbW9kdWxlcy9hdXRoL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W25hbWU9XCJlbWFpbFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIGlucHV0W25hbWU9XCJ1c2VybmFtZVwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuY29udGVudCAuZm9ybS1zaWduaW4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGVudCAuZm9ybS1zaWduaW4gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50IC5mb3JtLXNpZ25pbjpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG4uY29udGVudCBpbnB1dFtuYW1lPWVtYWlsXSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGVudCBpbnB1dFtuYW1lPXVzZXJuYW1lXSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-modules/auth/pages/sign-up/sign-up.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/sub-modules/auth/services/auth.service.ts");
/* harmony import */ var _ic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ic-core */ "./src/app/sub-modules/ic-core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let SignUpComponent = class SignUpComponent {
    constructor(route, router, authService, pageLoaderService, dialog) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.pageLoaderService = pageLoaderService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }
    signUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageLoaderService.showPageLoader();
            const result = yield this.authService.signUp(this.username, this.email, this.password);
            this.pageLoaderService.hidePageLoader();
            if (result.result) {
                const dialogRef = this.dialog.open(_ic_core__WEBPACK_IMPORTED_MODULE_4__["AlertDialog"], {
                    width: '300px',
                    data: `Account Has Been Created!`
                });
                dialogRef.afterClosed().subscribe(() => {
                    this.router.navigate([this.returnUrl]);
                });
            }
            else {
                this.errorMessage = `Error: ${result.error}`;
            }
        });
    }
    cancel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.router.navigate([this.returnUrl]);
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ic-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-modules/auth/pages/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sub-modules/auth/pages/sign-up/sign-up.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ic_core__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], SignUpComponent);



/***/ })

}]);
//# sourceMappingURL=sub-modules-auth-auth-module-es2015.js.map