(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/admin/src/app/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./projects/admin/src/app/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./projects/admin/src/app/dashboard-page/dashboard-page.component.ts");





const routes = [
    {
        path: '',
        component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__["DashboardPageComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/admin/src/app/app.component.ts":
/*!*************************************************!*\
  !*** ./projects/admin/src/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "admin page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/admin/src/app/app.module.ts":
/*!**********************************************!*\
  !*** ./projects/admin/src/app/app.module.ts ***!
  \**********************************************/
/*! exports provided: AppModule, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./projects/admin/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./projects/admin/src/app/app.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./projects/admin/src/app/dashboard-page/dashboard-page.component.ts");






class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__["DashboardPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__["DashboardPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
class AdminModule {
    static forRoot() {
        return {
            ngModule: AppModule,
            providers: []
        };
    }
}
AdminModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AdminModule });
AdminModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{}]
    }], null, null); })();


/***/ }),

/***/ "./projects/admin/src/app/dashboard-page/dashboard-page.component.ts":
/*!***************************************************************************!*\
  !*** ./projects/admin/src/app/dashboard-page/dashboard-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardPageComponent.??fac = function DashboardPageComponent_Factory(t) { return new (t || DashboardPageComponent)(); };
DashboardPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardPageComponent, selectors: [["app-dashboard-page"]], decls: 2, vars: 0, template: function DashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "dashboard-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-page',
                templateUrl: './dashboard-page.component.html',
                styleUrls: ['./dashboard-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.??fac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 2, vars: 0, template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Grocery store is online food and grocery store present through physical retail stores, online portal . Here we have diverse product portfolio ranging from Fresh fruits and Vegetables, Rice and Dals, Spices. Here you find wide range option in various catagory especially handpicked items. We provide you the best quality of product because customers satisfaction is our first priority.You can pay online using your debit / credit card or by cash on delivery. We guarantee on time delivery, and the best quality.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/all-best-products/all-best-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/all-best-products/all-best-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AllBestProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBestProductsComponent", function() { return AllBestProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class AllBestProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AllBestProductsComponent.??fac = function AllBestProductsComponent_Factory(t) { return new (t || AllBestProductsComponent)(); };
AllBestProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AllBestProductsComponent, selectors: [["app-all-best-products"]], decls: 392, vars: 0, consts: [[1, "banner"], [1, "w3l_banner_nav_right"], [1, "products-breadcrumb"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "index.html"], [1, "w3l_banner_nav_right_banner3"], [1, "blink_me"], [1, "w3ls_w3l_banner_nav_right_grid"], [1, "w3ls_w3l_banner_nav_right_grid1"], [1, "col-md-3", "w3ls_w3l_banner_left"], [1, "hover14", "column"], [1, "agile_top_brand_left_grid", "w3l_agile_top_brand_left_grid"], [1, "agile_top_brand_left_grid_pos"], ["src", "./assets/images/offer.png", "alt", " ", 1, "img-responsive"], [1, "agile_top_brand_left_grid1"], [1, "snipcart-item", "block"], [1, "snipcart-thumb"], ["href", "/productDescription"], ["src", "./assets/images/5.png", "alt", " ", 1, "img-responsive"], [1, "snipcart-details"], ["action", "#", "method", "post"], ["type", "hidden", "name", "cmd", "value", "_cart"], ["type", "hidden", "name", "add", "value", "1"], ["type", "hidden", "name", "business", "value", " "], ["type", "hidden", "name", "item_name", "value", "knorr instant soup"], ["type", "hidden", "name", "amount", "value", "3.00"], ["type", "hidden", "name", "discount_amount", "value", "1.00"], ["type", "hidden", "name", "currency_code", "value", "USD"], ["type", "hidden", "name", "return", "value", " "], ["type", "hidden", "name", "cancel_return", "value", " "], ["type", "submit", "name", "submit", "value", "Add to cart", 1, "button"], ["src", "./assets/images/6.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "chings noodles"], ["type", "hidden", "name", "amount", "value", "5.00"], ["src", "./assets/images/7.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "lahsun sev"], ["src", "./assets/images/8.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "premium bake rusk"], [1, "clearfix"], ["src", "./assets/images/9.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "fresh spinach"], ["type", "hidden", "name", "amount", "value", "2.00"], ["src", "./assets/images/10.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "fresh mango dasheri"], [1, "tag"], ["src", "./assets/images/tag.png", "alt", " ", 1, "img-responsive"], ["src", "./assets/images/11.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "fresh apple red"], ["type", "hidden", "name", "amount", "value", "6.00"], ["src", "./assets/images/12.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "fresh broccoli"], ["type", "hidden", "name", "amount", "value", "4.00"], ["src", "./assets/images/13.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "mixed fruit juice"], ["src", "./assets/images/14.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "prune juice"], ["src", "./assets/images/15.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "coco cola can"], ["src", "./assets/images/16.png", "alt", " ", 1, "img-responsive"], ["type", "hidden", "name", "item_name", "value", "sprite bottle"]], template: function AllBestProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Branded Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Best Deals For New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Popular Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "knorr instant soup (100 gm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "$3.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "$5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "chings noodles (75 gm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "$5.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "$8.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "lahsun sev (150 gm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "$3.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "$5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "premium bake rusk (300 gm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "$5.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "$7.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "vegetables & fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "fresh spinach (palak)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "$2.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "$3.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "fresh mango dasheri (1 kg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "$5.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "$8.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](204, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](205, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "fresh apple red (1 kg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "$6.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "$8.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](226, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](232, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](234, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "fresh broccoli (500 gm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "$4.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "$6.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](259, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "beverages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "mixed fruit juice (1 ltr)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "$3.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "$4.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](291, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](292, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](293, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](294, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](295, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](297, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](299, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "prune juice - sunsweet (1 ltr)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "$4.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "$5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](321, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](322, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](324, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](325, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](327, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](328, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](329, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](334, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](340, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "coco cola zero can (330 ml)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "$3.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "$5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](350, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](351, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](352, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](353, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](354, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](355, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](356, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](357, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](359, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](364, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](370, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "sprite bottle (2 ltr)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "$3.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "$4.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](380, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](382, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](383, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](384, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](386, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](387, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](388, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](389, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](390, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](391, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1iZXN0LXByb2R1Y3RzL2FsbC1iZXN0LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AllBestProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-best-products',
                templateUrl: './all-best-products.component.html',
                styleUrls: ['./all-best-products.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _all_best_products_all_best_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-best-products/all-best-products.component */ "./src/app/all-best-products/all-best-products.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-description/product-description.component */ "./src/app/product-description/product-description.component.ts");
/* harmony import */ var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products-page/products-page.component */ "./src/app/products-page/products-page.component.ts");
/* harmony import */ var _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout-page/checkout-page.component */ "./src/app/checkout-page/checkout-page.component.ts");
/* harmony import */ var projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! projects/admin/src/app/app.module */ "./projects/admin/src/app/app.module.ts");
















const routes = [
    // {path: 'admin', loadChildren: () => import('../../projects/admin/src/app/app.module').then(m => m.AdminModule)},
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"] },
    { path: 'loginPage', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"] },
    { path: 'aboutPage', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"] },
    { path: 'productsPage/:cat/:subcat', component: _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_10__["ProductsPageComponent"] },
    { path: 'allBestProducts', component: _all_best_products_all_best_products_component__WEBPACK_IMPORTED_MODULE_3__["AllBestProductsComponent"] },
    { path: 'productDescription/:prod', component: _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_9__["ProductDescriptionComponent"] },
    { path: 'contactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
    { path: 'privacyPolicy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"] },
    { path: 'cart', component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__["CartPageComponent"] },
    { path: 'checkOut', component: _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutPageComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"].forRoot()
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_12__["AppModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"].forRoot()
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a1, a2) { return ["/productsPage", a1, a2]; };
function AppComponent_li_80_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const subcat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](2, _c0, subcat_r3.category_id, subcat_r3.subCategory_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", subcat_r3.subCategory_name, "");
} }
function AppComponent_li_80_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AppComponent_li_80_li_5_a_1_Template, 2, 5, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const subcat_r3 = ctx.$implicit;
    const categ_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", subcat_r3.category_id === categ_r1.category_id);
} }
const _c1 = function (a1) { return ["/productsPage", a1, null]; };
function AppComponent_li_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AppComponent_li_80_li_5_Template, 2, 1, "li", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const categ_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c1, categ_r1.category_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", categ_r1.category_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.subCategory);
} }
class AppComponent {
    // postData = 
    // {
    //   "category_name": "Fruits & Vegetables"
    // };
    constructor(myservice, http, route) {
        this.myservice = myservice;
        this.http = http;
        this.route = route;
        this.title = 'frontend';
        setInterval(() => {
            if (this.cartno == null && this.cartno == undefined) {
                this.cartno = 0;
            }
            else {
                this.cartno = Object.keys(JSON.parse(localStorage.getItem('cart'))).length;
                console.log(this.cartno);
            }
        }, 500);
    }
    ngOnInit() {
        this.myservice.getCategory().subscribe((data) => {
            this.category = data;
            console.log("allcategory", this.category);
        });
        this.myservice.getSubCategory().subscribe((data) => {
            this.subCategory = data;
            console.log("allsubcategory", this.subCategory);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 174, vars: 2, consts: [[1, "agileits_header"], [1, "w3l_offers"], ["href", "products.html"], [1, "w3l_search"], ["action", "#", "method", "post"], ["type", "text", "name", "Product", "value", "Search a product...", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Search a product...';}", "required", ""], ["type", "submit", "value", " "], [1, "product_list_header"], ["type", "submit", "routerLink", "/cart", "name", "submit", 1, "button", 3, "value"], [1, "w3l_header_right"], [1, "dropdown", "profile_details_drop"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "caret"], [1, "mega-dropdown-menu"], [1, "w3ls_vegetables"], [1, "dropdown-menu", "drp-mnu"], ["routerLink", "/loginPage"], [1, "w3l_header_right1"], ["href", "/contactUs"], [1, "clearfix"], [1, "logo_products"], [1, "container"], [1, "w3ls_logo_products_left"], ["href", "index.html"], [1, "w3ls_logo_products_left1"], [1, "special_items"], ["href", "events.html"], ["routerLink", "/aboutPage"], ["href", "/productsPage"], ["href", "services.html"], [1, "phone_email"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["href", "mailto:store@grocery.com"], [1, "banner"], [1, "w3l_banner_nav_left"], [1, "navbar", "nav_bottom"], [1, "navbar-header", "nav_2"], ["type", "button", "data-toggle", "collapse", "data-target", "#bs-megadropdown-tabs", 1, "navbar-toggle", "collapsed", "navbar-toggle1"], [1, "sr-only"], [1, "icon-bar"], ["id", "bs-megadropdown-tabs", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "nav_1"], ["class", "dropdown mega-dropdown active", 4, "ngFor", "ngForOf"], [1, "newsletter"], [1, "w3agile_newsletter_left"], [1, "w3agile_newsletter_right"], ["type", "email", "name", "Email", "value", "Email", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Email';}", "required", ""], ["type", "submit", "value", "subscribe now"], [1, "footer"], [1, "col-md-3", "w3_footer_grid"], [1, "w3_footer_grid_list"], ["href", "short-codes.html"], ["href", "faqs.html"], ["href", "/privacyPolicy"], ["href", "pet.html"], ["href", "frozen.html"], ["href", "kitchen.html"], ["href", "household.html"], [1, "agile_footer_grids"], [1, "col-md-3", "w3_footer_grid", "agile_footer_grids_w3_footer"], [1, "w3_footer_grid_bottom"], ["src", "./assets/images/card.png", "alt", " ", 1, "img-responsive"], [1, "agileits_social_icons"], ["href", "#", 1, "facebook"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "#", 1, "twitter"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["href", "#", 1, "google"], ["aria-hidden", "true", 1, "fa", "fa-google-plus"], ["href", "#", 1, "instagram"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "#", 1, "dribbble"], ["aria-hidden", "true", 1, "fa", "fa-dribbble"], [1, "dropdown", "mega-dropdown", "active"], ["data-toggle", "dropdown", 1, "dropdown-toggle", 3, "routerLink"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["class", "dropdown-item", 3, "routerLink", 4, "ngIf"], [1, "dropdown-item", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Today's special Offers !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Grocery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Best Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "(+0123) 234 567");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "store@grocery.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "nav", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, AppComponent_li_80_Template, 6, 5, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "sign up for our newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Best Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Short Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "policy info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "what in stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Pet Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Frozen Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Kitchen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Branded Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Households");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "100% secure payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "connect with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "ul", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("value", "My cart item(", ctx.cartno, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.category);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul.dropdown-menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.dropdown[_ngcontent-%COMP%]{\r\n    position:relative;\r\n}\r\n.dropdown[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top:-6px;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:after {\r\n    text-decoration: underline;\r\n    transform: rotate(-90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLE1BQU07SUFDTixVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItbmF2IGxpOmhvdmVyID4gdWwuZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZHJvcGRvd257XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uZHJvcGRvd24+LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6LTZweDtcclxufVxyXG5cclxuLyogcm90YXRlIGNhcmV0IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyOmFmdGVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufSBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "./src/app/registration-page/registration-page.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-page/products-page.component */ "./src/app/products-page/products-page.component.ts");
/* harmony import */ var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-description/product-description.component */ "./src/app/product-description/product-description.component.ts");
/* harmony import */ var _all_best_products_all_best_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-best-products/all-best-products.component */ "./src/app/all-best-products/all-best-products.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout-page/checkout-page.component */ "./src/app/checkout-page/checkout-page.component.ts");
/* harmony import */ var _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../projects/admin/src/app/app.module */ "./projects/admin/src/app/app.module.ts");























class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_my_service_service__WEBPACK_IMPORTED_MODULE_14__["MyServiceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_20__["AdminModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationPageComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
        _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"],
        _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductsPageComponent"],
        _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_10__["ProductDescriptionComponent"],
        _all_best_products_all_best_products_component__WEBPACK_IMPORTED_MODULE_11__["AllBestProductsComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
        _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyComponent"],
        _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_17__["CartPageComponent"],
        _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_20__["AppModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                    _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationPageComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                    _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"],
                    _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductsPageComponent"],
                    _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_10__["ProductDescriptionComponent"],
                    _all_best_products_all_best_products_component__WEBPACK_IMPORTED_MODULE_11__["AllBestProductsComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                    _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyComponent"],
                    _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_17__["CartPageComponent"],
                    _checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_20__["AdminModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]
                ],
                providers: [_services_my_service_service__WEBPACK_IMPORTED_MODULE_14__["MyServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart-page/cart-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.ts ***!
  \**************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = function (a1) { return ["/productDescription", a1]; };
function CartPageComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartPageComponent_tr_29_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const pro_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.minusCart(pro_r1.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CartPageComponent_tr_29_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const pro_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return (ctx_r4.cart[pro_r1.product_id] = $event); })("ngModelChange", function CartPageComponent_tr_29_Template_input_ngModelChange_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.updateCart(ctx_r5.cart); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartPageComponent_tr_29_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const pro_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.plusCart(pro_r1.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartPageComponent_tr_29_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const pro_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.removeCartItem(pro_r1.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const pro_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, pro_r1.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", pro_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, pro_r1.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](pro_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx_r0.cart[pro_r1.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.cart[pro_r1.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", pro_r1.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9 ", ctx_r0.calculate(pro_r1.discount, ctx_r0.cart[pro_r1.product_id]), "");
} }
class CartPageComponent {
    constructor(myservice, http, route, router) {
        this.myservice = myservice;
        this.http = http;
        this.route = route;
        this.router = router;
        this.getProductsById = [];
        this.totalPrice = 0;
        this.cart = JSON.parse(localStorage.getItem('cart'));
    }
    ngOnInit() {
        for (var item in this.cart) {
            console.log("cartitem", item);
            this.myservice.getProductsById(item).subscribe((data) => {
                this.getProductsById.push(data);
                console.log("getProductsById", this.getProductsById);
            });
        }
    }
    ngAfterContentChecked() {
        this.calculateTotal();
    }
    calculate(price, qunt) {
        return price * qunt;
    }
    calculateTotal() {
        this.totalPrice = 0;
        for (var i = 0; i < this.getProductsById.length; i++) {
            if (this.getProductsById[i].discount) {
                this.totalPrice += this.getProductsById[i].discount * this.cart[this.getProductsById[i].product_id];
            }
        }
    }
    continueShopping() {
        this.router.navigate([''])
            .then(() => {
            window.location.reload();
        });
    }
    Checkout() {
        this.router.navigate(['/checkOut']);
    }
    removeCartItem(cartId) {
        console.log(cartId);
        delete this.cart[cartId];
        localStorage.setItem('cart', JSON.stringify(this.cart));
        window.location.reload();
        console.log(this.cart);
    }
    clearCart() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        localStorage.clear();
        this.cart = {};
        localStorage.setItem('cart', JSON.stringify(this.cart));
        window.location.reload();
    }
    updateCart(cart) {
        console.log(cart);
        for (var item in this.cart) {
            console.log("cartitem", item);
            if (cart[item] == null) {
                delete this.cart[item];
                window.location.reload();
            }
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    minusCart(cartId) {
        console.log('minusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] - 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        if (this.cart[idstr] == 0) {
            delete this.cart[cartId];
            localStorage.setItem('cart', JSON.stringify(this.cart));
            window.location.reload();
        }
        this.updateCart(this.cart);
    }
    plusCart(cartId) {
        console.log('plusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] + 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        this.updateCart(this.cart);
    }
}
CartPageComponent.??fac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CartPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CartPageComponent, selectors: [["app-cart-page"]], decls: 43, vars: 2, consts: [[1, "w3l_banner_nav_right"], [1, "row", "bootstrap", "snippets"], [1, "col-md-12"], [1, "col-lg-12", "col-sm-12"], [1, "title"], [1, "col-lg-12", "col-sm-12", "hero-feature"], [1, "table-responsive"], [1, "table", "table-bordered", "tbl-cart"], [1, "hidden-xs"], [1, "td-qty"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [4, "ngFor", "ngForOf"], ["colspan", "6", "align", "right"], ["colspan", "2", 1, "total"], [1, "btns-cart"], ["type", "button", 1, "btn", "btn-primary", 2, "float", "left", 3, "click"], [1, "fa", "fa-arrow-circle-left"], ["type", "button", 1, "btn", "btn-primary", 2, "float", "right", 3, "click"], [1, "fa", "fa-arrow-circle-right"], [3, "routerLink"], ["alt", "Age Of Wisdom Tan Graphic Tee", "title", "", "width", "47", "height", "47", 3, "src"], ["name", ""], ["value", "", "selected", "selected"], ["value", ""], [1, "input-group", "bootstrap-touchspin"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-down", 3, "click"], [1, "input-group-addon", "bootstrap-touchspin-prefix", 2, "display", "none"], ["type", "number", "name", "", 1, "input-qty", "form-control", "text-center", 2, "display", "block", 3, "ngModel", "value", "ngModelChange"], [1, "input-group-addon", "bootstrap-touchspin-postfix", 2, "display", "none"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-up", 3, "click"], [1, "price"], [1, "text-center"], ["rel", "2", 1, "remove_cart", 3, "click"], [1, "fa", "fa-trash-o"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "SHOPPING CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Unit Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Sub Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartPageComponent_Template_a_click_26_listener() { return ctx.clearCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Empty Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, CartPageComponent_tr_29_Template, 33, 12, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartPageComponent_Template_button_click_37_listener() { return ctx.continueShopping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Continue Shopping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartPageComponent_Template_button_click_40_listener() { return ctx.Checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.getProductsById);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9 ", ctx.totalPrice, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\r\n\r\nbody[_ngcontent-%COMP%]{margin-top:20px;\r\nbackground:#ddd;\r\n}\r\n\r\n.link-p[_ngcontent-%COMP%] {\r\n    display: block;\r\n    min-height: 250px;\r\n    height: auto;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    border-collapse: separate;\r\n}\r\n\r\n.table-hover[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\r\n\tborder-bottom: 1px solid #C2C2C2;\r\n\tpadding-bottom: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n\tfont-size: 0.875em;\r\n\tbackground: #f5f5f5;\r\n\tborder-top: 10px solid #fff;\r\n\tvertical-align: middle;\r\n\tpadding: 12px 8px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\r\n\tpadding-left: 20px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tborder-bottom: 2px solid #C2C2C2;\r\n\tdisplay: inline-block;\r\n\tpadding: 0 5px;\r\n\tpadding-bottom: 5px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #344644;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\\f0dc\";\r\n\tfont-family: FontAwesome;\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\ttext-decoration: inherit;\r\n\tmargin-left: 5px;\r\n\tfont-size: 0.75em;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > a.asc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\\f0dd\";\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > a.desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\\f0de\";\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #2bb6a3;\r\n\tborder-color: #2bb6a3;\r\n}\r\n\r\n.table.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n\ttransition: background-color 0.15s ease-in-out 0s;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .call-type[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tfont-size: 0.75em;\r\n\ttext-align: center;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%] {\r\n\tline-height: 1.5;\r\n\tfont-weight: 400;\r\n\tfont-size: 1.125em;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 0.875em;\r\n\tcolor: #969696;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%] {\r\n\tfont-size: 0.875em;\r\n\tline-height: 1.2;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   a.table-link[_ngcontent-%COMP%] {\r\n\tmargin: 0 5px;\r\n\tfont-size: 1.125em;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   a.table-link[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #2aa493;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   a.table-link.danger[_ngcontent-%COMP%] {\r\n\tcolor: #fe635f;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   a.table-link.danger[_ngcontent-%COMP%]:hover {\r\n\tcolor: #dd504c;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n\tbackground: none;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid #ebebeb;\r\n\ttransition: background-color 0.15s ease-in-out 0s;\r\n\tposition: relative;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tbackground-color: #f6f6f6;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tfont-weight: 600;\r\n\tpadding-bottom: 7px;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\twidth: 50%;\r\n\tfloat: left;\r\n\tfont-size: 0.875em;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n\tcolor: #8dc859;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   .warranty[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\twidth: 50%;\r\n\tfloat: left;\r\n\tfont-size: 0.875em;\r\n}\r\n\r\n.table-products[_ngcontent-%COMP%]   .warranty[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n\tcolor: #f1c40f;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr.table-line-fb[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n\tbackground-color: #9daccb;\r\n\tcolor: #262525;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr.table-line-twitter[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n\tbackground-color: #9fccff;\r\n\tcolor: #262525;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr.table-line-plus[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n\tbackground-color: #eea59c;\r\n\tcolor: #262525;\r\n}\r\n\r\n.table-stats[_ngcontent-%COMP%]   .status-social-icon[_ngcontent-%COMP%] {\r\n\tfont-size: 1.9em;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.table-stats[_ngcontent-%COMP%]   .table-line-fb[_ngcontent-%COMP%]   .status-social-icon[_ngcontent-%COMP%] {\r\n\tcolor: #556484;\r\n}\r\n\r\n.table-stats[_ngcontent-%COMP%]   .table-line-twitter[_ngcontent-%COMP%]   .status-social-icon[_ngcontent-%COMP%] {\r\n\tcolor: #5885b8;\r\n}\r\n\r\n.table-stats[_ngcontent-%COMP%]   .table-line-plus[_ngcontent-%COMP%]   .status-social-icon[_ngcontent-%COMP%] {\r\n\tcolor: #a75d54;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQSxLQUFLLGVBQWU7QUFDcEIsZUFBZTtBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLFdBQVc7O0FBQ1g7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7O0lBRUksc0JBQXNCO0FBQzFCOztBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0QixpQkFBaUI7QUFDbEI7O0FBQ0E7O0NBRUMsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQix3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCOztBQUNBO0NBRUMsaURBQWlEO0FBQ2xEOztBQUNBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixnQ0FBZ0M7Q0FFaEMsaURBQWlEO0NBQ2pELGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQix5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2Qjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDsgXHJcbn1cclxuXHJcbmJvZHl7bWFyZ2luLXRvcDoyMHB4O1xyXG5iYWNrZ3JvdW5kOiNkZGQ7XHJcbn1cclxuXHJcbi5saW5rLXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIFRBQkxFUyAqL1xyXG4udGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxufVxyXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gdGQsXHJcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHI6aG92ZXIgPiB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbi50YWJsZSB0aGVhZCA+IHRyID4gdGgge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzJDMkMyO1xyXG5cdHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi50YWJsZSB0Ym9keSA+IHRyID4gdGQge1xyXG5cdGZvbnQtc2l6ZTogMC44NzVlbTtcclxuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG5cdGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmZjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdHBhZGRpbmc6IDEycHggOHB4O1xyXG59XHJcbi50YWJsZSB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXHJcbi50YWJsZSB0aGVhZCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4udGFibGUgdGhlYWQgPiB0ciA+IHRoIHNwYW4ge1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzJDMkMyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAwIDVweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRhYmxlIHRoZWFkID4gdHIgPiB0aCA+IGEgc3BhbiB7XHJcblx0Y29sb3I6ICMzNDQ2NDQ7XHJcbn1cclxuLnRhYmxlIHRoZWFkID4gdHIgPiB0aCA+IGEgc3BhbjphZnRlciB7XHJcblx0Y29udGVudDogXCJcXGYwZGNcIjtcclxuXHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0Zm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuLnRhYmxlIHRoZWFkID4gdHIgPiB0aCA+IGEuYXNjIHNwYW46YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXFxmMGRkXCI7XHJcbn1cclxuLnRhYmxlIHRoZWFkID4gdHIgPiB0aCA+IGEuZGVzYyBzcGFuOmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlxcZjBkZVwiO1xyXG59XHJcbi50YWJsZSB0aGVhZCA+IHRyID4gdGggPiBhOmhvdmVyIHNwYW4ge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogIzJiYjZhMztcclxuXHRib3JkZXItY29sb3I6ICMyYmI2YTM7XHJcbn1cclxuLnRhYmxlLnRhYmxlLWhvdmVyIHRib2R5ID4gdHIgPiB0ZCB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0IDBzO1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkIC5jYWxsLXR5cGUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMC43NWVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQgLmZpcnN0LWxpbmUge1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXNpemU6IDEuMTI1ZW07XHJcbn1cclxuLnRhYmxlIHRib2R5IHRyIHRkIC5maXJzdC1saW5lIHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMC44NzVlbTtcclxuXHRjb2xvcjogIzk2OTY5NjtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi50YWJsZSB0Ym9keSB0ciB0ZCAuc2Vjb25kLWxpbmUge1xyXG5cdGZvbnQtc2l6ZTogMC44NzVlbTtcclxuXHRsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcbi50YWJsZSBhLnRhYmxlLWxpbmsge1xyXG5cdG1hcmdpbjogMCA1cHg7XHJcblx0Zm9udC1zaXplOiAxLjEyNWVtO1xyXG59XHJcbi50YWJsZSBhLnRhYmxlLWxpbms6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogIzJhYTQ5MztcclxufVxyXG4udGFibGUgYS50YWJsZS1saW5rLmRhbmdlciB7XHJcblx0Y29sb3I6ICNmZTYzNWY7XHJcbn1cclxuLnRhYmxlIGEudGFibGUtbGluay5kYW5nZXI6aG92ZXIge1xyXG5cdGNvbG9yOiAjZGQ1MDRjO1xyXG59XHJcblxyXG4udGFibGUtcHJvZHVjdHMgdGJvZHkgPiB0ciA+IHRkIHtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQgMHM7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCAwcztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRhYmxlLXByb2R1Y3RzIHRib2R5ID4gdHI6aG92ZXIgPiB0ZCB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuLnRhYmxlLXByb2R1Y3RzIC5uYW1lIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLnRhYmxlLXByb2R1Y3RzIC5wcmljZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Zm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi50YWJsZS1wcm9kdWN0cyAucHJpY2UgPiBpIHtcclxuXHRjb2xvcjogIzhkYzg1OTtcclxufVxyXG4udGFibGUtcHJvZHVjdHMgLndhcnJhbnR5IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuLnRhYmxlLXByb2R1Y3RzIC53YXJyYW50eSA+IGkge1xyXG5cdGNvbG9yOiAjZjFjNDBmO1xyXG59XHJcbi50YWJsZSB0Ym9keSA+IHRyLnRhYmxlLWxpbmUtZmIgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzlkYWNjYjtcclxuXHRjb2xvcjogIzI2MjUyNTtcclxufVxyXG4udGFibGUgdGJvZHkgPiB0ci50YWJsZS1saW5lLXR3aXR0ZXIgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzlmY2NmZjtcclxuXHRjb2xvcjogIzI2MjUyNTtcclxufVxyXG4udGFibGUgdGJvZHkgPiB0ci50YWJsZS1saW5lLXBsdXMgPiB0ZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlYTU5YztcclxuXHRjb2xvcjogIzI2MjUyNTtcclxufVxyXG4udGFibGUtc3RhdHMgLnN0YXR1cy1zb2NpYWwtaWNvbiB7XHJcblx0Zm9udC1zaXplOiAxLjllbTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcbi50YWJsZS1zdGF0cyAudGFibGUtbGluZS1mYiAuc3RhdHVzLXNvY2lhbC1pY29uIHtcclxuXHRjb2xvcjogIzU1NjQ4NDtcclxufVxyXG4udGFibGUtc3RhdHMgLnRhYmxlLWxpbmUtdHdpdHRlciAuc3RhdHVzLXNvY2lhbC1pY29uIHtcclxuXHRjb2xvcjogIzU4ODViODtcclxufVxyXG4udGFibGUtc3RhdHMgLnRhYmxlLWxpbmUtcGx1cyAuc3RhdHVzLXNvY2lhbC1pY29uIHtcclxuXHRjb2xvcjogI2E3NWQ1NDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-page',
                templateUrl: './cart-page.component.html',
                styleUrls: ['./cart-page.component.css']
            }]
    }], function () { return [{ type: _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/checkout-page/checkout-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/checkout-page/checkout-page.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageComponent", function() { return CheckoutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function CheckoutPageComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const pro_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", pro_r1.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.cart[pro_r1.product_id]);
} }
class CheckoutPageComponent {
    constructor(myservice, http, route, router) {
        this.myservice = myservice;
        this.http = http;
        this.route = route;
        this.router = router;
        this.getProductsById = [];
        this.cart = JSON.parse(localStorage.getItem('cart'));
    }
    ngOnInit() {
        for (var item in this.cart) {
            console.log("cartitem", item);
            this.myservice.getProductsById(item).subscribe((data) => {
                this.getProductsById.push(data);
                console.log("getProductsById", this.getProductsById);
            });
        }
    }
}
CheckoutPageComponent.??fac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckoutPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CheckoutPageComponent, selectors: [["app-checkout-page"]], decls: 47, vars: 1, consts: [[1, "w3l_banner_nav_right", 2, "padding", "25px"], [1, ""], ["id", "items"], [1, "list-group"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputname"], ["type", "name", "id", "inputname", "placeholder", "Name", 1, "form-control"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], [1, "form-group"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["type", "text", "id", "inputAddress2", "placeholder", "Enter State", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], ["type", "tel", "id", "inputPhone", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-primary", "badge-pill"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Step 1 - My Cart Checkout - Review Your Cart Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CheckoutPageComponent_li_6_Template, 4, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Step 2 - Enter Address & Other Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Address line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.getProductsById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CheckoutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout-page',
                templateUrl: './checkout-page.component.html',
                styleUrls: ['./checkout-page.component.css']
            }]
    }], function () { return [{ type: _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactUsComponent.??fac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 56, vars: 0, consts: [[1, "banner"], [1, "w3l_banner_nav_right"], [1, "products-breadcrumb"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "index.html"], [1, "mail"], [1, "agileinfo_mail_grids"], [1, "col-md-4", "agileinfo_mail_grid_left"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["href", "mailto:info@example.com"], ["aria-hidden", "true", 1, "fa", "fa-phone"], [1, "col-md-8", "agileinfo_mail_grid_right"], ["action", "#", "method", "post"], [1, "col-md-6", "wthree_contact_left_grid"], ["type", "text", "name", "Name", "value", "Name*", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Name*';}", "required", ""], ["type", "email", "name", "Email", "value", "Email*", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Email*';}", "required", ""], ["type", "text", "name", "Telephone", "value", "Telephone*", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Telephone*';}", "required", ""], ["type", "text", "name", "Subject", "value", "Subject*", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Subject*';}", "required", ""], [1, "clearfix"], ["name", "Message", "onfocus", "this.value = '';", "onblur", "if (this.value == '') {this.value = 'Message...';}", "required", ""], ["type", "submit", "value", "Submit"], ["type", "reset", "value", "Clear"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96748.15352429623!2d-74.25419879353115!3d40.731667701988506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping+mall+in+New+York%2C+NY%2C+United+States!5e0!3m2!1sen!2sin!4v1467205237951", 2, "border", "0"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Mail Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Mail Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "868 1st Avenue NYC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "info@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "call to us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "(+123) 233 2362 826");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Message...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "iframe", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function HomePageComponent_div_75_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const new_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](new_r9.variant_name);
} }
function HomePageComponent_div_75_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomePageComponent_div_75_div_2_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r10.minusCart(card_r4.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomePageComponent_div_75_div_2_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return (ctx_r13.cart[card_r4.product_id] = $event); })("ngModelChange", function HomePageComponent_div_75_div_2_div_19_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r15.updateCart(ctx_r15.cart); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomePageComponent_div_75_div_2_div_19_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r16.plusCart(card_r4.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx_r7.cart[card_r4.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r7.cart[card_r4.product_id]);
} }
function HomePageComponent_div_75_div_2_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomePageComponent_div_75_div_2_input_20_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r19.addCart(card_r4.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a1) { return ["/productDescription", a1]; };
function HomePageComponent_div_75_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, HomePageComponent_div_75_div_2_span_13_Template, 2, 1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, HomePageComponent_div_75_div_2_div_19_Template, 8, 2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, HomePageComponent_div_75_div_2_input_20_Template, 1, 0, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, card_r4.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", card_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", card_r4.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.ConvertToJSON(card_r4.quantity_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", card_r4.discount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", card_r4.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.cart[card_r4.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.cart[card_r4.product_id]);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function HomePageComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomePageComponent_div_75_div_2_Template, 21, 10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c1, ctx_r0.selectedIdx == i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", item_r1);
} }
class HomePageComponent {
    constructor(myservice, route) {
        this.myservice = myservice;
        this.route = route;
        this.slides = [[]];
        this.selectedIdx = 0;
        if (localStorage.getItem('cart') == null) {
            this.cart = {};
        }
        else {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
    ngOnInit() {
        this.myservice.getProducts().subscribe((data) => {
            this.products = data;
            this.slides = this.chunk(this.products, 4);
        });
    }
    selectItem(prenex) {
        console.log("prenex", this.selectedIdx);
        if (prenex == "prev" && this.selectedIdx !== 0) {
            console.log("prev", this.selectedIdx);
            this.selectedIdx = this.selectedIdx - 1;
        }
        if (prenex == "next" && this.selectedIdx < this.slides.length - 1) {
            console.log("next", this.selectedIdx);
            this.selectedIdx = this.selectedIdx + 1;
        }
    }
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    ConvertToJSON(prod) {
        //  console.log("ConvertToJSON", prod);
        var data = [];
        data.push(prod);
        //console.log(data);
        return data;
    }
    addCart(cartId) {
        console.log('working', cartId);
        var idstr = cartId.toString();
        console.log(idstr);
        if (this.cart[idstr] != undefined) {
            this.cart[idstr] = this.cart[idstr] + 1;
        }
        else {
            this.cart[idstr] = 1;
        }
        this.updateCart(this.cart);
    }
    updateCart(cart) {
        console.log(cart);
        for (var item in this.cart) {
            console.log("cartitem", item);
            if (cart[item] == null) {
                delete this.cart[item];
            }
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    minusCart(cartId) {
        console.log('minusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] - 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        if (this.cart[idstr] == 0) {
            delete this.cart[cartId];
        }
        this.updateCart(this.cart);
    }
    plusCart(cartId) {
        console.log('plusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] + 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        this.updateCart(this.cart);
    }
}
HomePageComponent.??fac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HomePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 162, vars: 1, consts: [[1, "slider"], [1, "flexslider"], [1, "slides"], [1, "w3l_banner_nav_right_banner"], [1, "more"], ["href", "", "data-text", "Shop now", 1, "button--saqui", "button--round-l", "button--text-thick"], [1, "w3l_banner_nav_right_banner1"], [1, "w3l_banner_nav_right_banner2"], [1, "banner_bottom"], [1, "wthree_banner_bottom_left_grid_sub"], [1, "wthree_banner_bottom_left_grid_sub1"], [1, "col-md-4", "wthree_banner_bottom_left"], [1, "wthree_banner_bottom_left_grid"], ["src", "./assets/images/4.jpg", "alt", " ", 1, "img-responsive"], [1, "wthree_banner_bottom_left_grid_pos"], ["src", "./assets/images/5.jpg", "alt", " ", 1, "img-responsive"], [1, "wthree_banner_btm_pos"], ["src", "./assets/images/6.jpg", "alt", " ", 1, "img-responsive"], [1, "wthree_banner_btm_pos1"], [1, "clearfix"], [1, "top-brands"], [1, "container", "w3ls_w3l_banner_nav_right_grid", "w3ls_w3l_banner_nav_right_grid_veg"], [1, "row", "w3ls_w3l_banner_nav_right_grid1_veg"], ["id", "myCarousel", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "item carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-slide", "prev", 1, "carousel-control", "left", "carousel-control-prev", 3, "click"], [1, "fa", "fa-angle-left"], ["data-slide", "next", 1, "carousel-control", "right", "carousel-control-next", 3, "click"], [1, "fa", "fa-angle-right"], [1, "fresh-vegetables"], [1, "container"], [1, "w3l_fresh_vegetables_grids"], [1, "col-md-3", "w3l_fresh_vegetables_grid", "w3l_fresh_vegetables_grid_left"], [1, "w3l_fresh_vegetables_grid2"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["href", "products.html"], ["href", "vegetables.html"], ["href", "drinks.html"], ["href", "pet.html"], ["href", "bread.html"], ["href", "household.html"], [1, "col-md-9", "w3l_fresh_vegetables_grid_right"], [1, "col-md-4", "w3l_fresh_vegetables_grid"], [1, "w3l_fresh_vegetables_grid1"], ["src", "./assets/images/8.jpg", "alt", " ", 1, "img-responsive"], [1, "w3l_fresh_vegetables_grid1_rel"], ["src", "./assets/images/7.jpg", "alt", " ", 1, "img-responsive"], [1, "w3l_fresh_vegetables_grid1_rel_pos"], [1, "more", "m1"], ["href", "products.html", "data-text", "Shop now", 1, "button--saqui", "button--round-l", "button--text-thick"], [1, "w3l_fresh_vegetables_grid1_bottom"], ["src", "./assets/images/10.jpg", "alt", " ", 1, "img-responsive"], [1, "w3l_fresh_vegetables_grid1_bottom_pos"], ["src", "./assets/images/9.jpg", "alt", " ", 1, "img-responsive"], ["src", "./assets/images/11.jpg", "alt", " ", 1, "img-responsive"], [1, "agileinfo_move_text"], [1, "agileinfo_marquee"], [1, "blink_me"], [1, "agileinfo_breaking_news"], [1, "item", "carousel-item", 3, "ngClass"], [1, "row"], ["class", "col-sm-3 clearfix w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "clearfix", "w3ls_w3l_banner_left", "w3ls_w3l_banner_left_asdfdfd"], [1, "hover14", "column"], [1, "agile_top_brand_left_grid", "w3l_agile_top_brand_left_grid"], [1, "tag"], ["src", "./assets/images/tag.png", "alt", " ", 1, "img-responsive"], [1, "agile_top_brand_left_grid1"], [1, "snipcart-item", "block"], [1, "snipcart-thumb"], [3, "routerLink"], ["alt", " ", 1, "img-responsive", 3, "src"], [4, "ngFor", "ngForOf"], [1, "snipcart-details"], ["class", "input-group bootstrap-touchspin", 4, "ngIf"], ["type", "submit", "name", "submit", "value", "Add to cart", "class", "button", 3, "click", 4, "ngIf"], [1, "input-group", "bootstrap-touchspin"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-down", 3, "click"], ["type", "number", "name", "", 1, "input-qty", "form-control", "text-center", 2, "display", "block", 3, "value", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-up", 3, "click"], ["type", "submit", "name", "submit", "value", "Add to cart", 1, "button", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Make your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " with Spicy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Make your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " with Spicy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "upto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " off.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Discount Offer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "introducing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "best store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "groceries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " $10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, HomePageComponent_div_75_Template, 3, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomePageComponent_Template_a_click_76_listener() { return ctx.selectItem("prev"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomePageComponent_Template_a_click_78_listener() { return ctx.selectItem("next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Top Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "All Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Juices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Pet Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Bread & Bakery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Spices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Dry Fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Dairy Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Special Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "25% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, " on first order and also get gift voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\tcolor: #ffc000;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .thumb-wrapper[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .thumb-content[_ngcontent-%COMP%] {\r\n\tpadding: 15px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%] {\r\n\tmargin-top: 100px !important;\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control.left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tmargin-left: -3px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control.left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tmargin-right: -3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLE9BQU87Q0FDUCxRQUFRO0NBQ1IsYUFBYTtBQUNkOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxpQkFBaUI7SUFDZCxrQkFBa0I7Q0FDckIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLGFBQWE7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuaDIge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW46IDMwcHggMCA4MHB4O1xyXG59XHJcbmgyIGIge1xyXG5cdGNvbG9yOiAjZmZjMDAwO1xyXG59XHJcbmgyOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGhlaWdodDogNHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogLTIwcHg7XHJcbn1cclxuLmNhcm91c2VsIHtcclxuXHRtYXJnaW46IDUwcHggYXV0bztcclxuXHRwYWRkaW5nOiAwIDcwcHg7XHJcbn1cclxuLmNhcm91c2VsIC5pdGVtIHtcclxuXHRtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLnRodW1iLXdyYXBwZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2Fyb3VzZWwgLnRodW1iLWNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sIHtcclxuXHRtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wgaSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTE2cHggMCAwIDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IGkge1xyXG5cdG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG59XHJcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IGkge1xyXG5cdG1hcmdpbi1yaWdodDogLTNweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return [{ type: _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class LoginPageComponent {
    constructor(http) {
        this.http = http;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.profileForm.value);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + 'api/register', this.profileForm).subscribe((response) => console.log(response), (error) => console.log(error));
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.toggle').click(function () {
            // Switches the Icon
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).children('i').toggleClass('fa-pencil');
            // Switches the forms  
            jquery__WEBPACK_IMPORTED_MODULE_1__('.form').animate({
                height: "toggle",
                'padding-top': 'toggle',
                'padding-bottom': 'toggle',
                opacity: "toggle"
            }, "slow");
        });
    }
}
LoginPageComponent.??fac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
LoginPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 41, vars: 1, consts: [[1, "banner"], [1, "w3l_banner_nav_right"], [1, "products-breadcrumb"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "index.html"], [1, "w3_login"], [1, "w3_login_module"], [1, "module", "form-module"], [1, "toggle"], [1, "fa", "fa-times", "fa-pencil"], [1, "tooltip"], [1, "form"], ["action", "#", "method", "post"], ["type", "text", "name", "Username", "placeholder", "Username", "required", " "], ["type", "password", "name", "Password", "placeholder", "Password", "required", " "], ["type", "submit", "value", "Login"], [3, "formGroup", "ngSubmit"], ["type", "text", "name", "Username", "formControlName", "username", "placeholder", "Username", "required", " "], ["type", "password", "name", "Password", "formControlName", "password", "placeholder", "Password", "required", " "], ["type", "email", "name", "Email", "formControlName", "email", "placeholder", "Email Address", "required", " "], ["type", "text", "name", "Phone", "formControlName", "phone", "placeholder", "Phone Number", "required", " "], ["type", "submit", "value", "Register"], [1, "cta"], ["href", "#"], [1, "clearfix"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Sign In & Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Sign In & Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Click Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Login to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.profileForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.??fac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 80, vars: 0, consts: [[1, "banner"], [1, "w3l_banner_nav_right"], [1, "products-breadcrumb"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "index.html"], [1, "privacy"], [1, "privacy1"], [1, "banner-bottom-grid1", "privacy1-grid"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-user"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-search"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-paste"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-qrcode"], [1, "banner-bottom-grid1", "privacy2-grid"], [1, "privacy2-grid1"], [1, "privacy2-grid1-sub"], [1, "clearfix"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Privacy Policy & Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "News Feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "deserunt mollit anim id est laborum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "1. sint occaecat cupidatat non proident, sunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "2.perspiciatis unde omnis iste natus error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "3. natus error sit voluptatem accusant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "4. occaecat cupidatat non proident, sunt in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "5. deserunt mollit anim id est laborum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/product-description/product-description.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product-description/product-description.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function() { return ProductDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function ProductDescriptionComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_div_51_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.minusCart(ctx_r3.getProductsById.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductDescriptionComponent_div_51_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return (ctx_r5.cart[ctx_r5.getProductsById.product_id] = $event); })("ngModelChange", function ProductDescriptionComponent_div_51_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.updateCart(ctx_r6.cart); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_div_51_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.plusCart(ctx_r7.getProductsById.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx_r0.cart[ctx_r0.getProductsById.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.cart[ctx_r0.getProductsById.product_id]);
} }
function ProductDescriptionComponent_input_52_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_input_52_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.addCart(ctx_r8.getProductsById.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductDescriptionComponent_div_64_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const new_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](new_r18.variant_name);
} }
function ProductDescriptionComponent_div_64_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_div_64_div_2_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const card_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r19.minusCart(card_r13.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductDescriptionComponent_div_64_div_2_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const card_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return (ctx_r22.cart[card_r13.product_id] = $event); })("ngModelChange", function ProductDescriptionComponent_div_64_div_2_div_19_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r24.updateCart(ctx_r24.cart); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_div_64_div_2_div_19_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const card_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r25.plusCart(card_r13.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const card_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx_r16.cart[card_r13.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r16.cart[card_r13.product_id]);
} }
function ProductDescriptionComponent_div_64_div_2_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_div_64_div_2_input_20_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30); const card_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r28.addCart(card_r13.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a1) { return ["/productDescription", a1]; };
function ProductDescriptionComponent_div_64_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductDescriptionComponent_div_64_div_2_span_13_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductDescriptionComponent_div_64_div_2_div_19_Template, 8, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ProductDescriptionComponent_div_64_div_2_input_20_Template, 1, 0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const card_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, card_r13.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", card_r13.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", card_r13.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r12.ConvertToJSON(card_r13.quantity_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", card_r13.discount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", card_r13.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.cart[card_r13.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r12.cart[card_r13.product_id]);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function ProductDescriptionComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ProductDescriptionComponent_div_64_div_2_Template, 21, 10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c1, ctx_r2.selectedIdx == i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", item_r10);
} }
class ProductDescriptionComponent {
    constructor(myservice, route) {
        this.myservice = myservice;
        this.route = route;
        this.getProductsById = "";
        this.slides = [[]];
        this.selectedIdx = 0;
        this.route.params.subscribe(params => {
            this.productId = params['prod'];
            console.log(this.productId);
            //   this.ngOnInit();
        });
        if (localStorage.getItem('cart') == null) {
            this.cart = {};
        }
        else {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
    ngOnInit() {
        this.myservice.getProductsById(this.productId).subscribe((data) => {
            this.getProductsById = data;
            console.log("getProductsById", this.getProductsById);
        });
        this.myservice.getProducts().subscribe((data) => {
            this.products = data;
            this.slides = this.chunk(this.products, 4);
        });
    }
    selectItem(prenex) {
        console.log("prenex", this.selectedIdx);
        if (prenex == "prev" && this.selectedIdx !== 0) {
            console.log("prev", this.selectedIdx);
            this.selectedIdx = this.selectedIdx - 1;
        }
        if (prenex == "next" && this.selectedIdx < this.slides.length - 1) {
            console.log("next", this.selectedIdx);
            this.selectedIdx = this.selectedIdx + 1;
        }
    }
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    ConvertToJSON(prod) {
        //  console.log("ConvertToJSON", prod);
        var data = [];
        data.push(prod);
        //console.log(data);
        return data;
    }
    addCart(cartId) {
        console.log('working', cartId);
        var idstr = cartId.toString();
        console.log(idstr);
        if (this.cart[idstr] != undefined) {
            this.cart[idstr] = this.cart[idstr] + 1;
        }
        else {
            this.cart[idstr] = 1;
        }
        this.updateCart(this.cart);
    }
    updateCart(cart) {
        console.log(cart);
        for (var item in this.cart) {
            console.log("cartitem", item);
            if (cart[item] == null) {
                delete this.cart[item];
            }
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    minusCart(cartId) {
        console.log('minusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] - 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        if (this.cart[idstr] == 0) {
            delete this.cart[cartId];
        }
        this.updateCart(this.cart);
    }
    plusCart(cartId) {
        console.log('plusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] + 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        this.updateCart(this.cart);
    }
}
ProductDescriptionComponent.??fac = function ProductDescriptionComponent_Factory(t) { return new (t || ProductDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductDescriptionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductDescriptionComponent, selectors: [["app-product-description"]], decls: 69, vars: 9, consts: [[1, "banner"], [1, "w3l_banner_nav_right"], [1, "products-breadcrumb"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "index.html"], [1, "w3l_banner_nav_right_banner3"], [1, "blink_me"], [1, "agileinfo_single"], [1, "col-md-6", "agileinfo_single_left"], ["id", "example", "alt", " ", 1, "img-responsive", 2, "height", "20em", 3, "src"], [1, "col-md-6", "agileinfo_single_right"], [1, "rating1"], [1, "starRating"], ["id", "rating5", "type", "radio", "name", "rating", "value", "5"], ["for", "rating5"], ["id", "rating4", "type", "radio", "name", "rating", "value", "4"], ["for", "rating4"], ["id", "rating3", "type", "radio", "name", "rating", "value", "3", "checked", ""], ["for", "rating3"], ["id", "rating2", "type", "radio", "name", "rating", "value", "2"], ["for", "rating2"], ["id", "rating1", "type", "radio", "name", "rating", "value", "1"], ["for", "rating1"], [1, "w3agile_description"], [1, "snipcart-item", "block"], [1, "snipcart-thumb", "agileinfo_single_right_snipcart"], [1, "snipcart-details", "qunt"], ["class", "input-group bootstrap-touchspin", 4, "ngIf"], ["type", "submit", "name", "submit", "value", "Add to cart", "class", "button", 3, "click", 4, "ngIf"], [1, "clearfix"], [1, "top-brands"], [1, "container", "w3ls_w3l_banner_nav_right_grid", "w3ls_w3l_banner_nav_right_grid_veg"], [1, "row", "w3ls_w3l_banner_nav_right_grid1_veg"], ["id", "myCarousel", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "item carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-slide", "prev", 1, "carousel-control", "left", "carousel-control-prev", 3, "click"], [1, "fa", "fa-angle-left"], ["data-slide", "next", 1, "carousel-control", "right", "carousel-control-next", 3, "click"], [1, "fa", "fa-angle-right"], [1, "input-group", "bootstrap-touchspin"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-down", 3, "click"], ["type", "number", "name", "", 1, "input-qty", "form-control", "text-center", 2, "display", "block", 3, "value", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-up", 3, "click"], ["type", "submit", "name", "submit", "value", "Add to cart", 1, "button", 3, "click"], [1, "item", "carousel-item", 3, "ngClass"], [1, "row"], ["class", "col-sm-3 clearfix w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "clearfix", "w3ls_w3l_banner_left", "w3ls_w3l_banner_left_asdfdfd"], [1, "hover14", "column"], [1, "agile_top_brand_left_grid", "w3l_agile_top_brand_left_grid"], [1, "tag"], ["src", "./assets/images/tag.png", "alt", " ", 1, "img-responsive"], [1, "agile_top_brand_left_grid1"], [1, "snipcart-thumb"], [3, "routerLink"], ["alt", " ", 1, "img-responsive", 3, "src"], [4, "ngFor", "ngForOf"], [1, "snipcart-details"]], template: function ProductDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Best Deals For New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, ProductDescriptionComponent_div_51_Template, 8, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ProductDescriptionComponent_input_52_Template, 1, 0, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, ProductDescriptionComponent_div_64_Template, 3, 4, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_Template_a_click_65_listener() { return ctx.selectItem("prev"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductDescriptionComponent_Template_a_click_67_listener() { return ctx.selectItem("next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getProductsById.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getProductsById.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.getProductsById.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getProductsById.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", ctx.getProductsById.discount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", ctx.getProductsById.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cart[ctx.getProductsById.product_id]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cart[ctx.getProductsById.product_id]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\r\n\r\n.qunt[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    float: left;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\tcolor: #ffc000;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .thumb-wrapper[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .thumb-content[_ngcontent-%COMP%] {\r\n\tpadding: 15px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%] {\r\n\tmargin-top: 100px !important;\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control.left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tmargin-left: -3px;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]   .carousel-control.left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tmargin-right: -3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXNjcmlwdGlvbi9wcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLE9BQU87Q0FDUCxRQUFRO0NBQ1IsYUFBYTtBQUNkOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxpQkFBaUI7SUFDZCxrQkFBa0I7Q0FDckIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsYUFBYTtBQUNkOztBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLGFBQWE7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXNjcmlwdGlvbi9wcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7IFxyXG59XHJcblxyXG4ucXVudHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaDIge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW46IDMwcHggMCA4MHB4O1xyXG59XHJcbmgyIGIge1xyXG5cdGNvbG9yOiAjZmZjMDAwO1xyXG59XHJcbmgyOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGhlaWdodDogNHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogLTIwcHg7XHJcbn1cclxuLmNhcm91c2VsIHtcclxuXHRtYXJnaW46IDUwcHggYXV0bztcclxuXHRwYWRkaW5nOiAwIDcwcHg7XHJcbn1cclxuLmNhcm91c2VsIC5pdGVtIHtcclxuXHRtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLnRodW1iLXdyYXBwZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2Fyb3VzZWwgLnRodW1iLWNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sIHtcclxuXHRtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wgaSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTE2cHggMCAwIDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IGkge1xyXG5cdG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG59XHJcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IGkge1xyXG5cdG1hcmdpbi1yaWdodDogLTNweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-description',
                templateUrl: './product-description.component.html',
                styleUrls: ['./product-description.component.css']
            }]
    }], function () { return [{ type: _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products-page/products-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-page/products-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-service.service */ "./src/app/services/my-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function ProductsPageComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.getSubCategoryById);
} }
function ProductsPageComponent_h3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.getSubCategoryById);
} }
function ProductsPageComponent_h3_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.getCategoryById);
} }
function ProductsPageComponent_div_21_div_1_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const new_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](new_r11.variant_name);
} }
function ProductsPageComponent_div_21_div_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsPageComponent_div_21_div_1_div_1_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.minusCart(pro_r4.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductsPageComponent_div_21_div_1_div_1_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return (ctx_r15.cart[pro_r4.product_id] = $event); })("ngModelChange", function ProductsPageComponent_div_21_div_1_div_1_div_19_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4); return ctx_r17.updateCart(ctx_r17.cart); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsPageComponent_div_21_div_1_div_1_div_19_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r18.plusCart(pro_r4.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx_r9.cart[pro_r4.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r9.cart[pro_r4.product_id]);
} }
function ProductsPageComponent_div_21_div_1_div_1_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductsPageComponent_div_21_div_1_div_1_input_20_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23); const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r21.addCart(pro_r4.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a1) { return ["/productDescription", a1]; };
function ProductsPageComponent_div_21_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductsPageComponent_div_21_div_1_div_1_span_13_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductsPageComponent_div_21_div_1_div_1_div_19_Template, 8, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ProductsPageComponent_div_21_div_1_div_1_input_20_Template, 1, 0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, pro_r4.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", pro_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", pro_r4.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r7.ConvertToJSON(pro_r4.quantity_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", pro_r4.discount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u20B9", pro_r4.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.cart[pro_r4.product_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r7.cart[pro_r4.product_id]);
} }
function ProductsPageComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductsPageComponent_div_21_div_1_div_1_Template, 21, 10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cnew_r6 = ctx.$implicit;
    const pro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", cnew_r6.category_id == ctx_r5.categoryId && (ctx_r5.subCategoryId == pro_r4.subcategory || ctx_r5.subCategoryId == "null"));
} }
function ProductsPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductsPageComponent_div_21_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const pro_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.ConvertToJSON(pro_r4.category));
} }
class ProductsPageComponent {
    constructor(myservice, route) {
        this.myservice = myservice;
        this.route = route;
        this.route.params.subscribe(params => {
            this.categoryId = params['cat'];
            this.subCategoryId = params['subcat'];
            console.log(this.categoryId, this.subCategoryId); // you should have your id here.
            this.ngOnInit();
        });
        if (localStorage.getItem('cart') == null) {
            this.cart = {};
        }
        else {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
    ngOnInit() {
        this.myservice.getProducts().subscribe((data) => {
            this.products = data;
            console.log("allproducts", this.products);
        });
        this.myservice.getCategoryById(this.categoryId).subscribe((data) => {
            this.categ = data;
            this.getCategoryById = this.categ.category_name;
            console.log("getCategoryById", this.getCategoryById);
        });
        if (this.subCategoryId !== "null") {
            this.myservice.getSubCategoryById(this.subCategoryId).subscribe((data) => {
                this.categ = data;
                this.getSubCategoryById = this.categ.subCategory_name;
                console.log("getSubCategoryById", this.getSubCategoryById);
            });
        }
    }
    ConvertToJSON(prod) {
        //  console.log("ConvertToJSON", prod);
        var data = [];
        data.push(prod);
        //console.log(data);
        return data;
    }
    addCart(cartId) {
        console.log('working', cartId);
        var idstr = cartId.toString();
        console.log(idstr);
        if (this.cart[idstr] != undefined) {
            this.cart[idstr] = this.cart[idstr] + 1;
        }
        else {
            this.cart[idstr] = 1;
        }
        this.updateCart(this.cart);
    }
    updateCart(cart) {
        console.log(cart);
        for (var item in this.cart) {
            console.log("cartitem", item);
            if (cart[item] == null) {
                delete this.cart[item];
            }
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    minusCart(cartId) {
        console.log('minusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] - 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        if (this.cart[idstr] == 0) {
            delete this.cart[cartId];
        }
        this.updateCart(this.cart);
    }
    plusCart(cartId) {
        console.log('plusCart', cartId);
        var idstr = cartId.toString();
        this.cart[idstr] = this.cart[idstr] + 1;
        this.cart[idstr] = Math.max(0, this.cart[idstr]);
        this.updateCart(this.cart);
    }
}
ProductsPageComponent.??fac = function ProductsPageComponent_Factory(t) { return new (t || ProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductsPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductsPageComponent, selectors: [["app-products-page"]], decls: 23, vars: 5, consts: [[1, "banner"], [1, "w3l_banner_nav_right"], [1, "products-breadcrumb"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["href", "index.html"], [4, "ngIf"], [1, "w3l_banner_nav_right_banner5"], [1, "blink_me"], [1, "w3ls_w3l_banner_nav_right_grid", "w3ls_w3l_banner_nav_right_grid_veg"], ["class", "w3l_fruit", 4, "ngIf"], [1, "row", "w3ls_w3l_banner_nav_right_grid1", "w3ls_w3l_banner_nav_right_grid1_veg"], [4, "ngFor", "ngForOf"], [1, "clearfix"], [1, "w3l_fruit"], ["class", "col-md-3 sm-4 clearfix w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd", 4, "ngIf"], [1, "col-md-3", "sm-4", "clearfix", "w3ls_w3l_banner_left", "w3ls_w3l_banner_left_asdfdfd"], [1, "hover14", "column"], [1, "agile_top_brand_left_grid", "w3l_agile_top_brand_left_grid"], [1, "tag"], ["src", "./assets/images/tag.png", "alt", " ", 1, "img-responsive"], [1, "agile_top_brand_left_grid1"], [1, "snipcart-item", "block"], [1, "snipcart-thumb", 2, "text-align", "center"], [3, "routerLink"], ["alt", " ", 1, "img-responsive", 3, "src"], [1, "snipcart-details"], ["class", "input-group bootstrap-touchspin", 4, "ngIf"], ["type", "submit", "name", "submit", "value", "Add to cart", "class", "button", 3, "click", 4, "ngIf"], [1, "input-group", "bootstrap-touchspin"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-down", 3, "click"], ["type", "number", "name", "", 1, "input-qty", "form-control", "text-center", 2, "display", "block", 3, "value", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-default", "bootstrap-touchspin-up", 3, "click"], ["type", "submit", "name", "submit", "value", "Add to cart", 1, "button", 3, "click"]], template: function ProductsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductsPageComponent_li_12_Template, 4, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Best Deals For New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ProductsPageComponent_h3_18_Template, 2, 1, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductsPageComponent_h3_19_Template, 2, 1, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ProductsPageComponent_div_21_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getCategoryById);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.subCategoryId !== "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.subCategoryId !== "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.subCategoryId == "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMtcGFnZS9wcm9kdWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMtcGFnZS9wcm9kdWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products-page',
                templateUrl: './products-page.component.html',
                styleUrls: ['./products-page.component.css']
            }]
    }], function () { return [{ type: _services_my_service_service__WEBPACK_IMPORTED_MODULE_1__["MyServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration-page/registration-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/registration-page/registration-page.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class RegistrationPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegistrationPageComponent.??fac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(); };
RegistrationPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], decls: 49, vars: 0, consts: [[1, "my-form"], [1, "cotainer"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "card-body"], ["name", "my-form", "onsubmit", "return validform()", "action", "success.php", "method", ""], [1, "form-group", "row"], ["for", "full_name", 1, "col-md-4", "col-form-label", "text-md-right"], [1, "col-md-6"], ["type", "text", "id", "full_name", "name", "full-name", 1, "form-control"], ["for", "email_address", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "email_address", "name", "email-address", 1, "form-control"], ["for", "user_name", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "user_name", "name", "username", 1, "form-control"], ["for", "phone_number", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "phone_number", 1, "form-control"], ["for", "present_address", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "present_address", 1, "form-control"], ["for", "permanent_address", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "permanent_address", "name", "permanent-address", 1, "form-control"], ["for", "nid_number", 1, "col-md-4", "col-form-label", "text-md-right"], ["title", "National Id Card"], ["type", "text", "id", "nid_number", "name", "nid-number", 1, "form-control"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "btn", "btn-primary"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "E-Mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Present Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Permanent Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "abbr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "NID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegistrationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-page',
                templateUrl: './registration-page.component.html',
                styleUrls: ['./registration-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/my-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/my-service.service.ts ***!
  \************************************************/
/*! exports provided: MyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceService", function() { return MyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MyServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCategory() {
        let endPoints = "api/category/";
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
    getCategoryById(id) {
        let endPoints = "api/categoryDetails/" + id;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
    addCategory(postData) {
        let endPoints = "api/category/";
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints, postData);
    }
    updateCategory(postData) {
        let endPoints = "api/categoryDetails/1/";
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints, postData);
    }
    deleteCategory() {
        let endPoints = "api/categoryDetails/5/";
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
    /////////////////////////////////////////
    getSubCategory() {
        let endPoints = "api/subcategory/";
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
    getSubCategoryById(id) {
        let endPoints = "api/subcategoryDetails/" + id;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
    /////////////////////////////////////////
    getProducts() {
        let endPoints = "api/product/";
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
    getProductsById(id) {
        let endPoints = "api/productDetails/" + id;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + endPoints);
    }
}
MyServiceService.??fac = function MyServiceService_Factory(t) { return new (t || MyServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MyServiceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: MyServiceService, factory: MyServiceService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    DefaultLanguage: "en",
    production: false,
    development: true,
    environmentName: "DEV",
    baseURL: "http://127.0.0.1:8000/" // your will be http://localhost/backend/api
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\WebDevelopmentWithPython\trunk\FrontEndAngularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map