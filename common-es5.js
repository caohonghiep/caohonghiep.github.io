(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"chip-list\">\r\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n    <mat-chip\r\n      *ngFor=\"let item of selectedItems\"\r\n      [selectable]=\"selectable\"\r\n      [removable]=\"removable\"\r\n      (removed)=\"remove(item)\">\r\n      {{item}}\r\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <input\r\n      placeholder=\"{{placeholder}}\"\r\n      #input\r\n      [formControl]=\"inputCtrl\"\r\n      [matAutocomplete]=\"auto\"\r\n      [matChipInputFor]=\"chipList\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\"\r\n      (matChipInputTokenEnd)=\"add($event)\">\r\n  </mat-chip-list>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\r\n      {{item}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-modules/ic-core/components/nav/nav.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-modules/ic-core/components/nav/nav.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>nav works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>abstract-page works!</p>\n"

/***/ }),

/***/ "./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chip-list {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL2NoaXBzLWF1dG9jb21wbGV0ZS9DOlxcREVWXFx3b3Jrc3BhY2VzXFxpY2xpbmljXFxkdGMtdWkvc3JjXFxhcHBcXGFwcC1tb2R1bGVzXFxpYy1jb3JlXFxjb21wb25lbnRzXFxjaGlwcy1hdXRvY29tcGxldGVcXGNoaXBzLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLW1vZHVsZXMvaWMtY29yZS9jb21wb25lbnRzL2NoaXBzLWF1dG9jb21wbGV0ZS9jaGlwcy1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtbW9kdWxlcy9pYy1jb3JlL2NvbXBvbmVudHMvY2hpcHMtYXV0b2NvbXBsZXRlL2NoaXBzLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChipsAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsAutocompleteComponent", function() { return ChipsAutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ChipsAutocompleteComponent = /** @class */ (function () {
    function ChipsAutocompleteComponent() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.inputCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.filteredItems = this.inputCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { return _this._filter(item); }));
    }
    ChipsAutocompleteComponent.prototype.add = function (event) {
        // if (!this.matAutocomplete.isOpen) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.selectedItems.push(value.trim());
            this.onAdd.emit(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.inputCtrl.setValue(null);
        // }
    };
    ChipsAutocompleteComponent.prototype.remove = function (fruit) {
        var index = this.selectedItems.indexOf(fruit);
        if (index >= 0) {
            var value = this.selectedItems.splice(index, 1);
            this.onRemove.emit(value[0]);
        }
    };
    ChipsAutocompleteComponent.prototype.selected = function (event) {
        this.selectedItems.push(event.option.viewValue);
        this.inputElement.nativeElement.value = '';
        this.inputCtrl.setValue(null);
        this.onAdd.emit(event.option.viewValue);
    };
    ChipsAutocompleteComponent.prototype._filter = function (value) {
        var _this = this;
        var unSelectedItems = this.allItems.filter(function (item) { return !_this.selectedItems.includes(item); });
        if (value) {
            var filterValue_1 = value.toLowerCase();
            return unSelectedItems.filter(function (item) { return item.toLowerCase().indexOf(filterValue_1) === 0; });
        }
        else {
            return unSelectedItems;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ChipsAutocompleteComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ChipsAutocompleteComponent.prototype, "selectedItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ChipsAutocompleteComponent.prototype, "allItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ChipsAutocompleteComponent.prototype, "onAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ChipsAutocompleteComponent.prototype, "onRemove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('input', { static: false })
    ], ChipsAutocompleteComponent.prototype, "inputElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('auto', { static: false })
    ], ChipsAutocompleteComponent.prototype, "matAutocomplete", void 0);
    ChipsAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ic-chips-autocomplete',
            template: __webpack_require__(/*! raw-loader!./chips-autocomplete.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./chips-autocomplete.component.scss */ "./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.scss")]
        })
    ], ChipsAutocompleteComponent);
    return ChipsAutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/app-modules/ic-core/components/nav/nav.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/app-modules/ic-core/components/nav/nav.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1tb2R1bGVzL2ljLWNvcmUvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-modules/ic-core/components/nav/nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/app-modules/ic-core/components/nav/nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-modules/ic-core/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/app-modules/ic-core/components/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/app-modules/ic-core/ic-core.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-modules/ic-core/ic-core.module.ts ***!
  \*******************************************************/
/*! exports provided: HttpLoaderFactory, IcCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcCoreModule", function() { return IcCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _components_chips_autocomplete_chips_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chips-autocomplete/chips-autocomplete.component */ "./src/app/app-modules/ic-core/components/chips-autocomplete/chips-autocomplete.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/app-modules/ic-core/components/nav/nav.component.ts");
/* harmony import */ var _pages_abstract_page_abstract_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/abstract-page/abstract-page.component */ "./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.ts");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
}
var components = [
    _components_chips_autocomplete_chips_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__["ChipsAutocompleteComponent"],
    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
    _pages_abstract_page_abstract_page_component__WEBPACK_IMPORTED_MODULE_11__["AbstractPageComponent"]
];
var IcCoreModule = /** @class */ (function () {
    function IcCoreModule() {
    }
    IcCoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: components,
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                })
            ],
            exports: components
        })
    ], IcCoreModule);
    return IcCoreModule;
}());



/***/ }),

/***/ "./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1tb2R1bGVzL2ljLWNvcmUvcGFnZXMvYWJzdHJhY3QtcGFnZS9hYnN0cmFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: AbstractPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPageComponent", function() { return AbstractPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbstractPageComponent = /** @class */ (function () {
    function AbstractPageComponent() {
    }
    AbstractPageComponent.prototype.ngOnInit = function () {
    };
    AbstractPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ic-abstract-page',
            template: __webpack_require__(/*! raw-loader!./abstract-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.html"),
            styles: [__webpack_require__(/*! ./abstract-page.component.scss */ "./src/app/app-modules/ic-core/pages/abstract-page/abstract-page.component.scss")]
        })
    ], AbstractPageComponent);
    return AbstractPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map