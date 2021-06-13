(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-dynamic-page-dynamic-module"],{

/***/ "DMji":
/*!***************************************************!*\
  !*** ./src/app/core/services/magnolia.service.ts ***!
  \***************************************************/
/*! exports provided: MagnoliaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnoliaService", function() { return MagnoliaService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_cms_cms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/cms/cms.service */ "Y+X5");
/* harmony import */ var _shared_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/i18n/i18n.service */ "aAiY");




class MagnoliaService {
    constructor(cmsService, i18nService) {
        this.cmsService = cmsService;
        this.i18nService = i18nService;
        this.PROJECT = 'ubico';
        this.URL_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].URL_API}/cms/api/v1`;
        this.cmsService.urlCms = this.URL_API;
    }
    getPage(page) {
        return this.cmsService
            .get(`pages-endpoint/${this.PROJECT}/${page}`, { params: this.addParams });
    }
    get addParams() {
        return {
            locale: this.i18nService.currentLanguage,
        };
    }
}
MagnoliaService.ɵfac = function MagnoliaService_Factory(t) { return new (t || MagnoliaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_cms_cms_service__WEBPACK_IMPORTED_MODULE_2__["CmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"])); };
MagnoliaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MagnoliaService, factory: MagnoliaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MbDa":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-dynamic/page-dynamic.module.ts ***!
  \***********************************************************/
/*! exports provided: PageDynamicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDynamicModule", function() { return PageDynamicModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_app_top_button_app_top_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/app-top-button/app-top-button.module */ "qEl5");
/* harmony import */ var _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/directives/directives.module */ "2oKa");
/* harmony import */ var _page_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-dynamic.component */ "uPkc");
/* harmony import */ var _page_dynamic_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-dynamic.routing */ "bx9+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class PageDynamicModule {
}
PageDynamicModule.entry = _page_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["PageDynamicComponent"];
PageDynamicModule.ɵfac = function PageDynamicModule_Factory(t) { return new (t || PageDynamicModule)(); };
PageDynamicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PageDynamicModule });
PageDynamicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesModule"],
            _page_dynamic_routing__WEBPACK_IMPORTED_MODULE_4__["PageDynamicRoutingModule"],
            src_app_components_app_top_button_app_top_button_module__WEBPACK_IMPORTED_MODULE_1__["AppTopButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PageDynamicModule, { declarations: [_page_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["PageDynamicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesModule"],
        _page_dynamic_routing__WEBPACK_IMPORTED_MODULE_4__["PageDynamicRoutingModule"],
        src_app_components_app_top_button_app_top_button_module__WEBPACK_IMPORTED_MODULE_1__["AppTopButtonModule"]] }); })();


/***/ }),

/***/ "RLeD":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/w2m-link/w2m-link.module.ts ***!
  \***************************************************************/
/*! exports provided: W2mLinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mLinkModule", function() { return W2mLinkModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./w2m-link.component */ "rR0t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class W2mLinkModule {
}
W2mLinkModule.ɵfac = function W2mLinkModule_Factory(t) { return new (t || W2mLinkModule)(); };
W2mLinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: W2mLinkModule });
W2mLinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](W2mLinkModule, { declarations: [_w2m_link_component__WEBPACK_IMPORTED_MODULE_2__["W2mLinkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_w2m_link_component__WEBPACK_IMPORTED_MODULE_2__["W2mLinkComponent"]] }); })();


/***/ }),

/***/ "UbBx":
/*!***********************************************************************!*\
  !*** ./src/app/components/app-top-button/app-top-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppTopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTopButtonComponent", function() { return AppTopButtonComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_w2m_button_w2m_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/w2m-button/w2m-button.component */ "Fp9J");





function AppTopButtonComponent_w2m_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clicked", function AppTopButtonComponent_w2m_button_0_Template_w2m_button_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.goToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "em", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("buttonData", ctx_r0.buttonData);
} }
class AppTopButtonComponent {
    constructor(platform, viewportScroller) {
        this.platform = platform;
        this.viewportScroller = viewportScroller;
        this.showButton = false;
        this.buttonData = {
            textButton: '',
        };
        this.DEFAULT_HEIGHT_SCROLL = 200;
    }
    scrolled() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platform)) {
            this.showButton = window.scrollY > this.DEFAULT_HEIGHT_SCROLL;
        }
    }
    goToTop() {
        this.viewportScroller.scrollToPosition([0, 0]);
    }
}
AppTopButtonComponent.ɵfac = function AppTopButtonComponent_Factory(t) { return new (t || AppTopButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"])); };
AppTopButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppTopButtonComponent, selectors: [["app-top-button"]], hostBindings: function AppTopButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppTopButtonComponent_scroll_HostBindingHandler() { return ctx.scrolled(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "app-top-button", 3, "buttonData", "clicked", 4, "ngIf"], [1, "app-top-button", 3, "buttonData", "clicked"], [1, "fad", "fa-chevron-double-up"]], template: function AppTopButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppTopButtonComponent_w2m_button_0_Template, 2, 1, "w2m-button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _shared_components_w2m_button_w2m_button_component__WEBPACK_IMPORTED_MODULE_2__["W2mButtonComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.app-top-button[_ngcontent-%COMP%] {\n  bottom: 2rem;\n  box-shadow: 0 0 0.625rem #00000029;\n  position: fixed;\n  right: 2rem;\n}\n\n.app-top-button[_ngcontent-%COMP%]     button {\n  align-items: center;\n  background-color: white;\n  color: #72BF44;\n  font-size: 1.2rem;\n  height: 3.125rem;\n  padding: 0 1.1rem;\n  width: 3.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXBwLXRvcC1idXR0b24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7OztFQUtFLGNDTFM7QUNDWDs7QUZPQTs7Ozs7RUFLRSxjQ0lLO0FDUlA7O0FGT0E7RUFDRSxjQ0dhO0VERmIsZ0JBQUE7QUVKRjs7QUZLRTtFQUNFLHlCQ2xCSTtFRG1CSixZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FFSEo7O0FGT0E7RUFDRSxjQzVCTTtFRDZCTiwwQkFBQTtFQUNBLGdCQUFBO0FFSkY7O0FGTUU7RUFDRSxjQ25DTztFRG9DUCxnQkFBQTtBRUpKOztBRllNOztFQUVFLHlCQ3RCVTtBQ2FsQjs7QUZhSTtFQUNFLG1CQzNCWTtBQ2dCbEI7O0FGaUJNOztFQUVFLHlCQ2xDSTtBQ21CWjs7QUZtQkk7RUFDRSxtQkN2Q007QUNzQlo7O0FGb0JJO0VBQ0UseUJDM0NNO0FDeUJaOztBRndCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRXJCRjs7QUZ1QkU7RUFMRjtJQU1JLGlCQUFBO0lBQ0EsaUJBQUE7RUVwQkY7QUFDRjs7QUZ5QkU7RUFDRTtJQUNFLDJCQzNDUTtFQ3FCWjtFRnlCRTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7RUV2Qko7QUFDRjs7QUY4QkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FFM0JKOztBRjZCSTtFQUNFLGNDekZFO0VEMEZGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FFM0JOOztBRjZCTTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUUxQk47QUFDRjs7QUY0Qk07RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRTFCUjs7QUY0QlE7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsZUFBQTtFRXpCUjtBQUNGOztBRmdDQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUU3QkE7O0FGK0JFO0VBSkY7SUcvSUUsc0JGMERnQjtJRXpEaEIsbUJGeURnQjtFQytEaEI7QUFDRjs7QUZnQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQzNKUztFRDRKVCxjQ3RJTTtFRHVJTixnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFN0JGOztBRitCRTs7RUFFRSx1QkFBQTtBRTdCSjs7QUZrQ0M7RUFDQyxtQkN6S007QUMwSVI7O0FGaUNFO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtBRS9CSjs7QUZvQ0E7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0FFakNGOztBRm1DRTtFQUNFLHVDQUFBO0FFakNKOztBQXpKQTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBNEpGOztBQTFKRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRE5JO0VDT0osaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTRKSiIsImZpbGUiOiJhcHAtdG9wLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL2Jhc2VcIjtcblxuLmFwcC10b3AtYnV0dG9uIHtcbiAgYm90dG9tOiAycmVtO1xuICBib3gtc2hhZG93OiAwIDAgMC42MjVyZW0gIzAwMDAwMDI5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAycmVtO1xuXG4gIDo6bmctZGVlcCBidXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwIDEuMXJlbTtcbiAgICB3aWR0aDogMy4xMjVyZW07XG4gIH1cbn1cbiIsIkBtaXhpbiB1YmktcGFkZGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206ICRzZWN0aW9uLXBhZGRpbmc7XG4gIHBhZGRpbmctdG9wOiAkc2VjdGlvbi1wYWRkaW5nO1xufVxuIl19 */"] });


/***/ }),

/***/ "bx9+":
/*!************************************************************!*\
  !*** ./src/app/pages/page-dynamic/page-dynamic.routing.ts ***!
  \************************************************************/
/*! exports provided: PageDynamicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDynamicRoutingModule", function() { return PageDynamicRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-dynamic.component */ "uPkc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '**',
        component: _page_dynamic_component__WEBPACK_IMPORTED_MODULE_1__["PageDynamicComponent"],
    },
];
class PageDynamicRoutingModule {
}
PageDynamicRoutingModule.ɵfac = function PageDynamicRoutingModule_Factory(t) { return new (t || PageDynamicRoutingModule)(); };
PageDynamicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PageDynamicRoutingModule });
PageDynamicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageDynamicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "qEl5":
/*!********************************************************************!*\
  !*** ./src/app/components/app-top-button/app-top-button.module.ts ***!
  \********************************************************************/
/*! exports provided: AppTopButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTopButtonModule", function() { return AppTopButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_w2m_button_w2m_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/w2m-button/w2m-button.module */ "RBxI");
/* harmony import */ var _app_top_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-top-button.component */ "UbBx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppTopButtonModule {
}
AppTopButtonModule.ɵfac = function AppTopButtonModule_Factory(t) { return new (t || AppTopButtonModule)(); };
AppTopButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppTopButtonModule });
AppTopButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_components_w2m_button_w2m_button_module__WEBPACK_IMPORTED_MODULE_1__["W2mButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppTopButtonModule, { declarations: [_app_top_button_component__WEBPACK_IMPORTED_MODULE_2__["AppTopButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_components_w2m_button_w2m_button_module__WEBPACK_IMPORTED_MODULE_1__["W2mButtonModule"]], exports: [_app_top_button_component__WEBPACK_IMPORTED_MODULE_2__["AppTopButtonComponent"]] }); })();


/***/ }),

/***/ "rR0t":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/w2m-link/w2m-link.component.ts ***!
  \******************************************************************/
/*! exports provided: W2mLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mLinkComponent", function() { return W2mLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function W2mLinkComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.urlLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function W2mLinkComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.urlLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function W2mLinkComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class W2mLinkComponent {
    get isInternalLink() {
        this.urlLink = this.urlLink.trim();
        return !this.urlLink.startsWith('http');
    }
}
W2mLinkComponent.ɵfac = function W2mLinkComponent_Factory(t) { return new (t || W2mLinkComponent)(); };
W2mLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: W2mLinkComponent, selectors: [["w2m-link"]], inputs: { urlLink: "urlLink" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[3, "routerLink", 4, "ngIf", "ngIfElse"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "routerLink"], [3, "ngTemplateOutlet"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function W2mLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, W2mLinkComponent_a_0_Template, 2, 2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, W2mLinkComponent_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, W2mLinkComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlLink && ctx.isInternalLink)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlLink && !ctx.isInternalLink)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["a[_ngcontent-%COMP%] {\n  color: unset;\n}\na[_ngcontent-%COMP%]:hover {\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3cybS1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0oiLCJmaWxlIjoidzJtLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgY29sb3I6IHVuc2V0O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB1bnNldDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "uPkc":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-dynamic/page-dynamic.component.ts ***!
  \**************************************************************/
/*! exports provided: PageDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDynamicComponent", function() { return PageDynamicComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_directives_dynamic_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/directives/dynamic.directive */ "cu0m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _core_services_dynamic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/dynamic.service */ "2SE/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_magnolia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/magnolia.service */ "DMji");
/* harmony import */ var src_app_shared_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/i18n/i18n.service */ "aAiY");
/* harmony import */ var _components_app_top_button_app_top_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/app-top-button/app-top-button.component */ "UbBx");











function PageDynamicComponent_ng_template_1_Template(rf, ctx) { }
class PageDynamicComponent {
    constructor(titleService, dynamicService, cdref, router, magnoliaService, i18nService) {
        this.titleService = titleService;
        this.dynamicService = dynamicService;
        this.cdref = cdref;
        this.router = router;
        this.magnoliaService = magnoliaService;
        this.i18nService = i18nService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeLanguage();
    }
    ngOnInit() {
        this.renderPage();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    renderPage() {
        this.i18nService.init(this.router.url);
        this.CURRENT_URL = this.i18nService.getURL(this.router.url);
        this.magnoliaService.getPage(this.CURRENT_URL).subscribe((page) => {
            this.dynamicHost.viewContainerRef.clear();
            const fields = page.data;
            const { title } = fields;
            this.titleService.setTitle(title);
            this.renderComponents(fields);
        });
    }
    changeLanguage() {
        this.i18nService.changeLanguage$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.unsubscribe$)).subscribe(() => {
            if (this.CURRENT_URL !== undefined) {
                this.router.navigate([`${this.i18nService.currentLanguage}/${this.CURRENT_URL}`]);
            }
        });
    }
    renderComponents(fields) {
        const { content } = fields;
        this.dynamicService.processModules(content).subscribe(module => {
            content.filter(data => this.dynamicService.hasModuleActive(data.typeSection))
                .map((item, index) => this.dynamicService
                .loadComponent(module[index], item.typeSection, item, this.dynamicHost));
        });
    }
}
PageDynamicComponent.ɵfac = function PageDynamicComponent_Factory(t) { return new (t || PageDynamicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_dynamic_service__WEBPACK_IMPORTED_MODULE_5__["DynamicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_magnolia_service__WEBPACK_IMPORTED_MODULE_7__["MagnoliaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18nService"])); };
PageDynamicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageDynamicComponent, selectors: [["w2m-page-dynamic"]], viewQuery: function PageDynamicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_core_directives_dynamic_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicDirective"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dynamicHost = _t.first);
    } }, decls: 3, vars: 0, consts: [["id", "content"], ["appDynamicHost", ""]], template: function PageDynamicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PageDynamicComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-top-button");
    } }, directives: [_core_directives_dynamic_directive__WEBPACK_IMPORTED_MODULE_2__["DynamicDirective"], _components_app_top_button_app_top_button_component__WEBPACK_IMPORTED_MODULE_9__["AppTopButtonComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=pages-page-dynamic-page-dynamic-module.js.map