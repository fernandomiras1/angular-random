(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sections-app-news-app-news-module"],{

/***/ "4m01":
/*!*******************************************************!*\
  !*** ./src/app/sections/app-news/app-news.routing.ts ***!
  \*******************************************************/
/*! exports provided: appNewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appNewsRoutingModule", function() { return appNewsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news.component */ "mSvJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _app_news_component__WEBPACK_IMPORTED_MODULE_1__["appNewsComponent"],
    },
];
class appNewsRoutingModule {
}
appNewsRoutingModule.ɵfac = function appNewsRoutingModule_Factory(t) { return new (t || appNewsRoutingModule)(); };
appNewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: appNewsRoutingModule });
appNewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](appNewsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ehfI":
/*!******************************************************!*\
  !*** ./src/app/sections/app-news/app-news.module.ts ***!
  \******************************************************/
/*! exports provided: appNewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appNewsModule", function() { return appNewsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-news.component */ "mSvJ");
/* harmony import */ var _app_news_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-news.routing */ "4m01");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class appNewsModule {
}
appNewsModule.ɵfac = function appNewsModule_Factory(t) { return new (t || appNewsModule)(); };
appNewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: appNewsModule });
appNewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_news_routing__WEBPACK_IMPORTED_MODULE_2__["appNewsRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](appNewsModule, { declarations: [_app_news_component__WEBPACK_IMPORTED_MODULE_1__["appNewsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_news_routing__WEBPACK_IMPORTED_MODULE_2__["appNewsRoutingModule"]] }); })();


/***/ }),

/***/ "mSvJ":
/*!*********************************************************!*\
  !*** ./src/app/sections/app-news/app-news.component.ts ***!
  \*********************************************************/
/*! exports provided: appNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appNewsComponent", function() { return appNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class appNewsComponent {
    ngOnInit() {
    }
}
appNewsComponent.ɵfac = function appNewsComponent_Factory(t) { return new (t || appNewsComponent)(); };
appNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: appNewsComponent, selectors: [["app-news"]], decls: 136, vars: 0, consts: [[1, "section"], [1, "container", "app-news"], [1, "columns"], [1, "column"], [1, "columns", "is-multiline", "is-variable"], [1, "column", "is-12-tablet", "is-8-widescreen"], [1, "column", "is-12", "app-news-subtitle"], [1, "small-line"], [1, "column", "is-6"], ["href", "#"], [1, "columns", "app-news__card"], [1, "app-news__card-image"], ["src", "../../../assets/img/ubico/article-1.jpg", "alt", "Article image", 1, "app-news__card-image-img"], [1, "app-news__card-title"], [1, "app-news__card-description"], [1, "app-news__card-category"], [1, "far", "fa-tags"], [1, "columns", "app-news__medium-card"], [1, "column", "is-12"], [1, "app-news__medium-card-image"], ["src", "../../../assets/img/ubico/home-2.jpg", "alt", "Article image", 1, "app-news__medium-card-image-img"], [1, "app-news__medium-card-text"], [1, "app-news__medium-card-text-title"], [1, "app-news__medium-card-text-category"], [1, "column", "is-12-tablet", "is-4-widescreen"], [1, "columns", "app-news__small-card"], [1, "column", "is-4"], [1, "app-news__small-card-image"], ["src", "../../../assets/img/ubico/home-2.jpg", "alt", "Article image", 1, "app-news__small-card-image-img"], [1, "column", "is-8"], [1, "app-news__small-card-text"], [1, "app-news__small-card-text-title"], [1, "app-news__small-card-category"]], template: function appNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quieres saber m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Art\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Vestibulum consequat consectetur luctus. Donec fringilla, ipsum ac pulvinar placerat, metus nibh bibendum ipsum, eu congue leo lacus at velit. Nullam blandit. Lacus vitae ullamcorper blandit,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Destinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lunes 12 de Febrero 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Quisque a est in enim commodo sollicitudin nec in enim. Quisque consequat euismod mauris, ac hendrerit turpis sodales eget. Nunc posuere tempor posuere. Nam egestas commodo justo, eget malesuada mi rhoncus ac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Destinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lunes 12 de Febrero 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum possimus tenetur commodi architecto, perferendis iure nesciunt dolore eligendi dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Destinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lunes 12 de Febrero 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Noticias Destacadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, saepe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Destinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Lunes 12 de Febrero 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Destinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Lunes 12 de Febrero 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Destinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Lunes 12 de Febrero 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.app-news[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n\n.app-news-subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n\n.app-news-subtitle[_ngcontent-%COMP%]   .small-line[_ngcontent-%COMP%] {\n  background: #72BF44;\n  height: 0.3125rem;\n  width: 3.75rem;\n}\n\n.app-news-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.app-news__card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 26.5rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n\n@media (min-width: 64rem) {\n  .app-news__card[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n.app-news__card-image[_ngcontent-%COMP%] {\n  height: 12rem;\n  overflow: hidden;\n  width: 100%;\n}\n\n@media (min-width: 64rem) {\n  .app-news__card-image[_ngcontent-%COMP%] {\n    height: 11.75rem;\n  }\n}\n\n.app-news__card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n  transition: 0.3s ease;\n  width: 100%;\n}\n\n.app-news__card-title[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  height: 2.8125rem;\n  -webkit-line-clamp: 2;\n  margin-top: 1.25rem;\n  overflow: hidden;\n}\n\n.app-news__card-description[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  height: 4.375rem;\n  -webkit-line-clamp: 3;\n  margin-top: 1.25rem;\n  overflow: hidden;\n}\n\n.app-news__card-category[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: absolute;\n}\n\n.app-news__card-category[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-block-end: 0;\n}\n\n.app-news__card-category[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72BF44;\n}\n\n.app-news__card[_ngcontent-%COMP%]:hover   .app-news__card-image-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.app-news__medium-card[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (min-width: 48.0625rem) {\n  .app-news__medium-card[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.app-news__medium-card-image[_ngcontent-%COMP%] {\n  height: 12rem;\n  overflow: hidden;\n}\n\n@media (min-width: 64rem) {\n  .app-news__medium-card-image[_ngcontent-%COMP%] {\n    height: 11.75rem;\n  }\n}\n\n.app-news__medium-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n  transition: 0.3s ease;\n  width: 100%;\n}\n\n.app-news__medium-card-text[_ngcontent-%COMP%] {\n  height: 7rem;\n  position: relative;\n}\n\n@media (min-width: 48.0625rem) {\n  .app-news__medium-card-text[_ngcontent-%COMP%] {\n    height: 11.75rem;\n  }\n}\n\n.app-news__medium-card-text-title[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  height: 4.375rem;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n\n@media (min-width: 64rem) {\n  .app-news__medium-card-text-title[_ngcontent-%COMP%] {\n    -webkit-line-clamp: 3;\n  }\n}\n\n.app-news__medium-card-text-category[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n\n.app-news__medium-card-text-category[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72BF44;\n}\n\n.app-news__medium-card-text-category[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-block-end: 0;\n}\n\n.app-news__medium-card[_ngcontent-%COMP%]:hover   .app-news__medium-card-image-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.app-news__small-card[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media (min-width: 48.0625rem) {\n  .app-news__small-card[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.app-news__small-card-text[_ngcontent-%COMP%] {\n  height: 7rem;\n  position: relative;\n}\n\n@media (min-width: 48.0625rem) {\n  .app-news__small-card-text[_ngcontent-%COMP%] {\n    height: 12.35rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .app-news__small-card-text[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n\n.app-news__small-card-text-title[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  height: 2.9rem;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n\n.app-news__small-card-image[_ngcontent-%COMP%] {\n  height: 12rem;\n  overflow: hidden;\n}\n\n@media (min-width: 64rem) {\n  .app-news__small-card-image[_ngcontent-%COMP%] {\n    height: 7.375rem;\n  }\n}\n\n.app-news__small-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n  transition: 0.3s ease;\n  width: 100%;\n}\n\n.app-news__small-card-category[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: absolute;\n}\n\n.app-news__small-card-category[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-block-end: 0;\n}\n\n.app-news__small-card-category[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72BF44;\n}\n\n.app-news__small-card[_ngcontent-%COMP%]:hover   .app-news__small-card-image-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXBwLW5ld3MuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7OztFQUtFLGNDTFM7QUNDWDs7QUZPQTs7Ozs7RUFLRSxjQ0lLO0FDUlA7O0FGT0E7RUFDRSxjQ0dhO0VERmIsZ0JBQUE7QUVKRjs7QUZLRTtFQUNFLHlCQ2xCSTtFRG1CSixZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FFSEo7O0FGT0E7RUFDRSxjQzVCTTtFRDZCTiwwQkFBQTtFQUNBLGdCQUFBO0FFSkY7O0FGTUU7RUFDRSxjQ25DTztFRG9DUCxnQkFBQTtBRUpKOztBRllNOztFQUVFLHlCQ3RCVTtBQ2FsQjs7QUZhSTtFQUNFLG1CQzNCWTtBQ2dCbEI7O0FGaUJNOztFQUVFLHlCQ2xDSTtBQ21CWjs7QUZtQkk7RUFDRSxtQkN2Q007QUNzQlo7O0FGb0JJO0VBQ0UseUJDM0NNO0FDeUJaOztBRndCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRXJCRjs7QUZ1QkU7RUFMRjtJQU1JLGlCQUFBO0lBQ0EsaUJBQUE7RUVwQkY7QUFDRjs7QUZ5QkU7RUFDRTtJQUNFLDJCQzNDUTtFQ3FCWjtFRnlCRTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7RUV2Qko7QUFDRjs7QUY4QkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FFM0JKOztBRjZCSTtFQUNFLGNDekZFO0VEMEZGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Es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LGdCQUFBO0FBd0lSOztBQXBJSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQXNJTjs7QUFwSU07RUFKRjtJQUtJLGdCQUFBO0VBdUlOO0FBQ0Y7O0FBcklNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBdUlSOztBQW5JSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQXFJTjs7QUFuSU07RUFDRSxtQkFBQTtBQXFJUjs7QUFsSU07RUFDRSxjRDFNQTtBQzhVUjs7QUEvSE07RUFDRSxxQkFBQTtBQWlJUiIsImZpbGUiOiJhcHAtbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL2Jhc2VcIjtcblxuLmFwcC1uZXdzIHtcbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJi1zdWJ0aXRsZSB7XG4gICAgcCB7XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLnNtYWxsLWxpbmUge1xuICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICAgICAgaGVpZ2h0OiAwLjMxMjVyZW07XG4gICAgICB3aWR0aDogMy43NXJlbTtcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gICAgfVxuICB9XG5cbiAgJl9fY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMjYuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmLWltYWdlIHtcbiAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICBoZWlnaHQ6IDExLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtdGl0bGUge1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgaGVpZ2h0OiAyLjgxMjVyZW07XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGhlaWdodDogNC4zNzVyZW07XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLWNhdGVnb3J5IHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgaDUge1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgICAgfVxuXG4gICAgICBlbSB7XG4gICAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuYXBwLW5ld3NfX2NhcmQtaW1hZ2UtaW1nIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX21lZGl1bS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgfVxuXG4gICAgJi1pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGhlaWdodDogMTEuNzVyZW07XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgICAgaGVpZ2h0OiAxMS43NXJlbTtcbiAgICAgIH1cblxuICAgICAgJi10aXRsZSB7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBoZWlnaHQ6IDQuMzc1cmVtO1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtY2F0ZWdvcnkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBlbSB7XG4gICAgICAgICAgY29sb3I6ICRncmVlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuYXBwLW5ld3NfX21lZGl1bS1jYXJkLWltYWdlLWltZyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19zbWFsbC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgICAgaGVpZ2h0OiAxMi4zNXJlbTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgJi10aXRsZSB7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBoZWlnaHQ6IDIuOXJlbTtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAxMnJlbTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICBoZWlnaHQ6IDcuMzc1cmVtO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtY2F0ZWdvcnkge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGVtIHtcbiAgICAgICAgY29sb3I6ICRncmVlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5hcHAtbmV3c19fc21hbGwtY2FyZC1pbWFnZS1pbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gdWJpLXBhZGRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAkc2VjdGlvbi1wYWRkaW5nO1xuICBwYWRkaW5nLXRvcDogJHNlY3Rpb24tcGFkZGluZztcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=sections-app-news-app-news-module.js.map