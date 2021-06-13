(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sections-section-banner-data-section-banner-data-module"],{

/***/ "+fkp":
/*!****************************************************************************!*\
  !*** ./src/app/sections/section-banner-data/section-banner-data.module.ts ***!
  \****************************************************************************/
/*! exports provided: SectionBannerDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBannerDataModule", function() { return SectionBannerDataModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _section_banner_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-banner-data.component */ "CWN3");
/* harmony import */ var _section_banner_data_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-banner-data.routing */ "dVI3");
/* harmony import */ var _components_animated_digit_animated_digit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/animated-digit/animated-digit.module */ "M6FE");
/* harmony import */ var _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/directives/directives.module */ "2oKa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SectionBannerDataModule {
}
SectionBannerDataModule.ɵfac = function SectionBannerDataModule_Factory(t) { return new (t || SectionBannerDataModule)(); };
SectionBannerDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SectionBannerDataModule });
SectionBannerDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _section_banner_data_routing__WEBPACK_IMPORTED_MODULE_2__["SectionBannerDataRoutingModule"],
            _components_animated_digit_animated_digit_module__WEBPACK_IMPORTED_MODULE_3__["AnimatedDigitModule"],
            _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SectionBannerDataModule, { declarations: [_section_banner_data_component__WEBPACK_IMPORTED_MODULE_1__["SectionBannerDataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _section_banner_data_routing__WEBPACK_IMPORTED_MODULE_2__["SectionBannerDataRoutingModule"],
        _components_animated_digit_animated_digit_module__WEBPACK_IMPORTED_MODULE_3__["AnimatedDigitModule"],
        _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"]] }); })();


/***/ }),

/***/ "CWN3":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/section-banner-data/section-banner-data.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SectionBannerDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBannerDataComponent", function() { return SectionBannerDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_directives_animated_counter_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/directives/animated-counter.directive */ "l819");



function SectionBannerDataComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Scroll ", item_r1, "");
} }
const _c0 = function () { return [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]; };
class SectionBannerDataComponent {
    ngOnInit() {
    }
}
SectionBannerDataComponent.ɵfac = function SectionBannerDataComponent_Factory(t) { return new (t || SectionBannerDataComponent)(); };
SectionBannerDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionBannerDataComponent, selectors: [["section-banner-data"]], decls: 56, vars: 4, consts: [[4, "ngFor", "ngForOf"], [1, "section", "section-banner-data", "brand-color", "w2m"], ["src", "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80", "alt", "city background", 1, "section-banner-data__background--img"], [1, "section-banner-data__background--color"], [1, "container"], [1, "banner-data"], [1, "columns", "is-multiline", "is-centered", "is-variable", "is-mobile"], [1, "column", "is-12-mobile", "is-three-fifths-desktop"], [1, "banner-data__head"], [1, "banner-data__head-title"], [1, "banner-data__head-text"], [1, "columns", "is-multiline", "is-variable", "is-mobile"], [1, "column", "is-6-mobile", "is-4-tablet", "is-2-desktop"], [1, "banner-data__stat"], [1, "banner-data__stat-number", 3, "appAnimatedCounter", "delay"], [1, "banner-data__stat-number-text"], [1, "banner-data__stat-number"]], template: function SectionBannerDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionBannerDataComponent_li_1_Template, 3, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "w2m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " W2M Fusce viverra, augue non volutpat vestibulum, risus ex congue libero, eget volutpat nunc ligula sit amet arcu. Maecenas dui justo, venenatis id mollis a, sagittis eu felis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "534");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pasajeros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Pa\u00EDses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "209");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hoteles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "431");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Empleados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appAnimatedCounter", 123)("delay", 1000);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _core_directives_animated_counter_directive__WEBPACK_IMPORTED_MODULE_2__["AnimatedCounterDirective"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.show[_ngcontent-%COMP%] {\n  transition: ease-in-out 0.3s;\n}\n\n.section-banner-data[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  padding: 0;\n  position: relative;\n}\n\n.section-banner-data__background--img[_ngcontent-%COMP%] {\n  height: 100%;\n  left: 0;\n  object-fit: cover;\n  opacity: 0.55;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n}\n\n.section-banner-data__background--color[_ngcontent-%COMP%] {\n  background-color: #000000F7;\n  padding: 3.75rem 1.5rem 1.875rem 1.5rem;\n  z-index: 5;\n}\n\n@media (min-width: 64rem) {\n  .section-banner-data__background--color[_ngcontent-%COMP%] {\n    padding-bottom: 5.625rem;\n  }\n}\n\n.section-banner-data[_ngcontent-%COMP%]   .banner-data__head[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin-bottom: 4.375rem;\n  text-align: center;\n}\n\n.section-banner-data[_ngcontent-%COMP%]   .banner-data__head-title[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.section-banner-data[_ngcontent-%COMP%]   .banner-data__stat[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media screen and (max-width: 64rem) {\n  .section-banner-data[_ngcontent-%COMP%]   .banner-data__stat[_ngcontent-%COMP%] {\n    padding-bottom: 2.5rem;\n  }\n}\n\n.section-banner-data[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 3.25rem;\n  font-weight: 200;\n}\n\n.section-banner-data[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 1.375rem;\n  width: 1.875rem;\n}\n\n.section-banner-data[_ngcontent-%COMP%]   .banner-data__stat-number-text[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 1.375rem;\n  font-weight: 200;\n  margin-top: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2VjdGlvbi1iYW5uZXItZGF0YS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7O0VBS0UsY0NMUztBQ0NYOztBRk9BOzs7OztFQUtFLGNDSUs7QUNSUDs7QUZPQTtFQUNFLGNDR2E7RURGYixnQkFBQTtBRUpGOztBRktFO0VBQ0UseUJDbEJJO0VEbUJKLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUVISjs7QUZPQTtFQUNFLGNDNUJNO0VENkJOLDBCQUFBO0VBQ0EsZ0JBQUE7QUVKRjs7QUZNRTtFQUNFLGNDbkNPO0VEb0NQLGdCQUFBO0FFSko7O0FGWU07O0VBRUUseUJDdEJVO0FDYWxCOztBRmFJO0VBQ0UsbUJDM0JZO0FDZ0JsQjs7QUZpQk07O0VBRUUseUJDbENJO0FDbUJaOztBRm1CSTtFQUNFLG1CQ3ZDTTtBQ3NCWjs7QUZvQkk7RUFDRSx5QkMzQ007QUN5Qlo7O0FGd0JBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FFckJGOztBRnVCRTtFQUxGO0lBTUksaUJBQUE7SUFDQSxpQkFBQTtFRXBCRjtBQUNGOztBRnlCRTtFQUNFO0lBQ0UsMkJDM0NRO0VDcUJaO0VGeUJFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFRXZCSjtBQUNGOztBRjhCRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUUzQko7O0FGNkJJO0VBQ0UsY0N6RkU7RUQwRkYsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUUzQk47O0FGNkJNO0VBVkY7SUFXSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFRTFCTjtBQUNGOztBRjRCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FFMUJSOztBRjRCUTtFQUpGO0lBS0ksZ0JBQUE7SUFDQSxlQUFBO0VFekJSO0FBQ0Y7O0FGZ0NBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBRTdCQTs7QUYrQkU7RUFKRjtJRy9JRSxzQkYwRGdCO0lFekRoQixtQkZ5RGdCO0VDK0RoQjtBQUNGOztBRmdDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJDM0pTO0VENEpULGNDdElNO0VEdUlOLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUU3QkY7O0FGK0JFOztFQUVFLHVCQUFBO0FFN0JKOztBRmtDQztFQUNDLG1CQ3pLTTtBQzBJUjs7QUZpQ0U7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0FFL0JKOztBRm9DQTtFQUNFLGdCQUFBO0VBQ0EsdUNBQUE7QUVqQ0Y7O0FGbUNFO0VBQ0UsdUNBQUE7QUVqQ0o7O0FBekpBO0VBQ0UsNEJBQUE7QUE0SkY7O0FBekpBO0VBQ0UsY0RrQk07RUNqQk4sVUFBQTtFQUNBLGtCQUFBO0FBNEpGOztBQTFKRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUE0Sko7O0FBekpFO0VBQ0UsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QUEySko7O0FBekpJO0VBTEY7SUFNSSx3QkFBQTtFQTRKSjtBQUNGOztBQXhKSTtFQUNFLGNEVEU7RUNVRix1QkFBQTtFQUNBLGtCQUFBO0FBMEpOOztBQXhKTTtFQUNFLGNEZEE7RUNlQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUEwSlI7O0FBdEpJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXdKTjs7QUF0Sk07RUFORjtJQU9JLHNCQUFBO0VBeUpOO0FBQ0Y7O0FBdkpNO0VBQ0UsY0RoQ0E7RUNpQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXlKUjs7QUF2SlE7RUFDRSx5QkR6REY7RUMwREUsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQXlKVjs7QUF0SlE7RUFDRSxjRDlDRjtFQytDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUF3SlYiLCJmaWxlIjoic2VjdGlvbi1iYW5uZXItZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL2Jhc2VcIjtcblxuLnNob3cge1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xufVxuXG4uc2VjdGlvbi1iYW5uZXItZGF0YSB7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmX19iYWNrZ3JvdW5kLS1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuNTU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2JhY2tncm91bmQtLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwRjc7XG4gICAgcGFkZGluZzogMy43NXJlbSAxLjVyZW0gMS44NzVyZW0gMS41cmVtO1xuICAgIHotaW5kZXg6IDU7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1LjYyNXJlbTtcbiAgICB9XG4gIH1cblxuICAuYmFubmVyLWRhdGEge1xuICAgICZfX2hlYWQge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQuMzc1cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19zdGF0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICAgICAgfVxuXG4gICAgICAmLW51bWJlciB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMy4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEuMzc1cmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtdGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4xMjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiB1YmktcGFkZGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206ICRzZWN0aW9uLXBhZGRpbmc7XG4gIHBhZGRpbmctdG9wOiAkc2VjdGlvbi1wYWRkaW5nO1xufVxuIl19 */"] });


/***/ }),

/***/ "M6FE":
/*!********************************************************************!*\
  !*** ./src/app/components/animated-digit/animated-digit.module.ts ***!
  \********************************************************************/
/*! exports provided: AnimatedDigitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedDigitModule", function() { return AnimatedDigitModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _animated_digit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animated-digit.component */ "WO+5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AnimatedDigitModule {
}
AnimatedDigitModule.ɵfac = function AnimatedDigitModule_Factory(t) { return new (t || AnimatedDigitModule)(); };
AnimatedDigitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AnimatedDigitModule });
AnimatedDigitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnimatedDigitModule, { declarations: [_animated_digit_component__WEBPACK_IMPORTED_MODULE_1__["AnimatedDigitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_animated_digit_component__WEBPACK_IMPORTED_MODULE_1__["AnimatedDigitComponent"]] }); })();


/***/ }),

/***/ "WO+5":
/*!***********************************************************************!*\
  !*** ./src/app/components/animated-digit/animated-digit.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnimatedDigitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedDigitComponent", function() { return AnimatedDigitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["animatedDigit"];
class AnimatedDigitComponent {
    ngAfterViewInit() {
        if (this.digit) {
            this.animateCount();
        }
    }
    ngOnChanges(changes) {
        if (changes.digit) {
            // this.animateCount()
        }
    }
    animateCount() {
        if (!this.duration) {
            this.duration = 1000;
        }
        if (typeof this.digit === 'number') {
            this.counterFunc(this.digit, this.duration, this.animatedDigit);
        }
    }
    counterFunc(endValue, durationMs, element) {
        if (!this.steps) {
            this.steps = 12;
        }
        const stepCount = Math.abs(durationMs / this.steps);
        const valueIncrement = (endValue - 0) / stepCount;
        const sinValueIncrement = Math.PI / stepCount;
        let currentValue = 0;
        let currentSinValue = 0;
        function step() {
            currentSinValue += sinValueIncrement;
            currentValue += valueIncrement * Math.pow(Math.sin(currentSinValue), 2) * 2;
            element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
            if (currentSinValue < Math.PI) {
                window.requestAnimationFrame(step);
            }
        }
        step();
    }
}
AnimatedDigitComponent.ɵfac = function AnimatedDigitComponent_Factory(t) { return new (t || AnimatedDigitComponent)(); };
AnimatedDigitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimatedDigitComponent, selectors: [["animated-digit"]], viewQuery: function AnimatedDigitComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animatedDigit = _t.first);
    } }, inputs: { duration: "duration", digit: "digit", steps: "steps" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [["animatedDigit", ""]], template: function AnimatedDigitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.digit);
    } }, styles: [".animated-digit[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2) 20%;\n  border: 2px solid #E8CCE9;\n  border-radius: 60px;\n  color: white;\n  display: inline-flex;\n  font-size: 32pt;\n  height: 60px;\n  justify-content: center;\n  margin-top: 1em;\n  padding: 24px;\n  text-align: center;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuaW1hdGVkLWRpZ2l0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJhbmltYXRlZC1kaWdpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmltYXRlZC1kaWdpdCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKSAyMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFOENDRTk7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMzJwdDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "dVI3":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/section-banner-data/section-banner-data.routing.ts ***!
  \*****************************************************************************/
/*! exports provided: SectionBannerDataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBannerDataRoutingModule", function() { return SectionBannerDataRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _section_banner_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-banner-data.component */ "CWN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _section_banner_data_component__WEBPACK_IMPORTED_MODULE_1__["SectionBannerDataComponent"],
    },
];
class SectionBannerDataRoutingModule {
}
SectionBannerDataRoutingModule.ɵfac = function SectionBannerDataRoutingModule_Factory(t) { return new (t || SectionBannerDataRoutingModule)(); };
SectionBannerDataRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SectionBannerDataRoutingModule });
SectionBannerDataRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SectionBannerDataRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=sections-section-banner-data-section-banner-data-module.js.map