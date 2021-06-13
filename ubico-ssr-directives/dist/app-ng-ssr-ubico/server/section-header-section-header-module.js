exports.ids = ["section-header-section-header-module"];
exports.modules = {

/***/ "0D8H":
/*!********************************************!*\
  !*** ./src/app/sections/section-common.ts ***!
  \********************************************/
/*! exports provided: SectionCommon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCommon", function() { return SectionCommon; });
/* harmony import */ var _core_enum_components_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/enum/components-enum */ "DIOt");

class SectionCommon {
    constructor() {
        this.ComponentType = _core_enum_components_enum__WEBPACK_IMPORTED_MODULE_0__["ComponentsEnum"];
    }
}


/***/ }),

/***/ "5WaS":
/*!*********************************************************************!*\
  !*** ./src/app/sections/section-header/section-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function() { return SectionHeaderComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _section_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section-common */ "0D8H");
/* harmony import */ var _components_w2m_language_picker_w2m_language_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/w2m-language-picker/w2m-language-picker.component */ "kDZV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_components_w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/w2m-link/w2m-link.component */ "rR0t");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");









function SectionHeaderComponent_ng_container_0_w2m_link_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-link", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", header_r1.button == null ? null : header_r1.button.urlButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](header_r1.button == null ? null : header_r1.button.textButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", header_r1.button == null ? null : header_r1.button.iconButton);
} }
function SectionHeaderComponent_ng_container_0_ul_13_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "w2m-link", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", option_r10.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r10.name, " ");
} }
function SectionHeaderComponent_ng_container_0_ul_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "w2m-link", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SectionHeaderComponent_ng_container_0_ul_13_li_6_Template, 3, 2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", item_r8.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r8.options);
} }
function SectionHeaderComponent_ng_container_0_w2m_link_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-link", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", item_r11.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r11.icon);
} }
function SectionHeaderComponent_ng_container_0_h6_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "w2mSafeToHtml");
} if (rf & 2) {
    const header_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, header_r1.copyright), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { headerscrolled: a0 }; };
function SectionHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "em", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SectionHeaderComponent_ng_container_0_Template_em_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "w2m-language-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SectionHeaderComponent_ng_container_0_w2m_link_9_Template, 5, 3, "w2m-link", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-drawer-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-drawer", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SectionHeaderComponent_ng_container_0_ul_13_Template, 7, 3, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SectionHeaderComponent_ng_container_0_w2m_link_16_Template, 2, 2, "w2m-link", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SectionHeaderComponent_ng_container_0_h6_17_Template, 2, 3, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const header_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r0.headerScrolled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", header_r1.button);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getSubItems(header_r1.items));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", header_r1.icons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", header_r1.copyright);
} }
class SectionHeaderComponent extends _section_common__WEBPACK_IMPORTED_MODULE_2__["SectionCommon"] {
    constructor(platform) {
        super();
        this.platform = platform;
        this.headerScrolled = false;
        this.headerTransparent = true;
        this.headerHeight = 85;
    }
    getSubItems(items) {
        return items
            .map(item => item.subMenu)
            .reduce((acc, val) => acc.concat(val), []);
    }
    handleScroll() {
        if (this.headerTransparent) {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platform)) {
                this.headerScrolled = window.scrollY > this.headerHeight;
            }
        }
    }
}
SectionHeaderComponent.ɵfac = function SectionHeaderComponent_Factory(t) { return new (t || SectionHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
SectionHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionHeaderComponent, selectors: [["section-header"]], hostBindings: function SectionHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function SectionHeaderComponent_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { header: "header" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "w2m-sidenav-header", 3, "ngClass"], [1, "w2m-sidenav-header__container", "container", "is-flex", "is-align-items-center", "is-justify-content-space-between"], [1, "w2m-sidenav-header__container-logo"], [1, "far", "fa-bars", 3, "click"], ["src", "../../../assets/img/ubico/logo-ubico-light.svg", "alt", "Ubico Logo", 1, "w2m-sidenav-header__container-logo--light"], ["src", "../../../assets/img/ubico/logo-ubico-dark.svg", "alt", "Ubico Logo", 1, "w2m-sidenav-header__container-logo--dark"], [1, "w2m-sidenav-header__container-language-picker"], ["class", "w2m-sidenav-header__container-private-area", 3, "urlLink", 4, "ngIf"], [1, "w2m-sidenav-menu"], ["mode", "over", 1, "w2m-sidenav-menu__container"], ["drawer", ""], [4, "ngFor", "ngForOf"], [1, "w2m-sidenav-menu__container-rrss"], [1, "w2m-sidenav-menu__container-rrss-icons"], [3, "urlLink", 4, "ngFor", "ngForOf"], [3, "innerHtml", 4, "ngIf"], [1, "w2m-sidenav-header__container-private-area", 3, "urlLink"], [3, "ngClass"], [3, "urlLink"], [1, "w2m-sidenav-menu__container-link", 3, "urlLink"], [3, "innerHtml"]], template: function SectionHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SectionHeaderComponent_ng_container_0_Template, 18, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.fields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _components_w2m_language_picker_w2m_language_picker_component__WEBPACK_IMPORTED_MODULE_3__["W2MLanguagePickerComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _shared_components_w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_5__["W2mLinkComponent"]], pipes: [_core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_6__["W2mSafeHtmlPipe"]], styles: [".w2m-sidenav-header[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  height: 5.3125rem;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n}\n.w2m-sidenav-header__container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1.25rem;\n}\n@media (min-width: 64rem) {\n  .w2m-sidenav-header__container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.w2m-sidenav-header__container-logo[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 1rem;\n}\n.w2m-sidenav-header__container-logo--dark[_ngcontent-%COMP%] {\n  display: none;\n}\n.w2m-sidenav-header__container-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.w2m-sidenav-header__container-logo[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.w2m-sidenav-header__container-language-picker[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4rem;\n}\n@media (min-width: 64rem) {\n  .w2m-sidenav-header__container-language-picker[_ngcontent-%COMP%] {\n    right: 10.5rem;\n  }\n}\n.w2m-sidenav-header__container-private-area[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n@media (min-width: 64rem) {\n  .w2m-sidenav-header__container-private-area[_ngcontent-%COMP%] {\n    border: solid 0.125rem #FFFFFF;\n    border-radius: 3.125rem;\n    cursor: pointer;\n    padding: 0.3rem 1rem;\n    transition: 0.3s;\n  }\n}\n@media (min-width: 64rem) {\n  .w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]:hover {\n    background: #72BF44;\n    border-color: #72BF44;\n    color: #FFFFFF;\n    transition: 0.3s;\n  }\n}\n.w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 0.75rem;\n}\n.w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 64rem) {\n  .w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: block;\n    margin-block-end: 0;\n  }\n}\n.w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n}\n@media (min-width: 64rem) {\n  .w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.w2m-sidenav-header__container-link[_ngcontent-%COMP%]     a {\n  color: #FFFFFF;\n  transition: all 0.3s ease-in-out 0s;\n}\n.w2m-sidenav-header__container-link[_ngcontent-%COMP%]     a:hover, .w2m-sidenav-header__container-link[_ngcontent-%COMP%]     a:focus, .w2m-sidenav-header__container-link[_ngcontent-%COMP%]     a:active {\n  color: #FFFFFF;\n  text-decoration: underline;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0 0.1875rem 0.625rem rgba(0, 0, 0, 0.085);\n  height: 5.625rem;\n  position: fixed;\n  top: 0;\n  transition: ease-in-out 0.3s;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%]   .w2m-sidenav-header__container-logo--light[_ngcontent-%COMP%] {\n  display: none;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%]   .w2m-sidenav-header__container-logo--dark[_ngcontent-%COMP%] {\n  display: block;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%]   .w2m-sidenav-header__container-logo[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72BF44;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%]   .w2m-sidenav-header__container-private-area[_ngcontent-%COMP%] {\n  border-color: #72BF44;\n  color: #72BF44;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%]   .w2m-sidenav-header__container-private-area[_ngcontent-%COMP%]:hover {\n  background: #72BF44;\n  color: #FFFFFF;\n}\n.w2m-sidenav-header.headerscrolled[_ngcontent-%COMP%]     .w-button-language {\n  color: #72BF44;\n}\n.w2m-sidenav-menu__container[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  height: 100vh;\n  padding: 1.25rem;\n  position: fixed;\n  width: 18.75rem;\n  z-index: 3;\n}\n@media (min-width: 48.0625rem) {\n  .w2m-sidenav-menu__container[_ngcontent-%COMP%] {\n    padding: 1.25rem 0.625rem 1.875rem 3.75rem;\n    width: 25rem;\n  }\n}\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-bottom: solid 0.0625rem #D0D0D0;\n}\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 1.25rem 0;\n}\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n.w2m-sidenav-menu__container-rrss[_ngcontent-%COMP%] {\n  margin-top: 3.75rem;\n  width: 100%;\n}\n.w2m-sidenav-menu__container-rrss-icons[_ngcontent-%COMP%] {\n  color: #72BF44;\n  display: flex;\n  gap: 1.25rem;\n  margin-bottom: 1.25rem;\n  transition: 0.3 ease;\n}\n.w2m-sidenav-menu__container-rrss-icons[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  transition: 0.1s ease;\n}\n.w2m-sidenav-menu__container-rrss-icons[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n}\n  .mat-drawer-backdrop.mat-drawer-shown {\n  position: fixed;\n}\n  .mat-drawer {\n  color: #616161;\n}\n  .mat-drawer-container {\n  z-index: 3 !important;\n}\n  .mat-drawer-inner-container {\n  padding-right: 1.25rem;\n  scrollbar-width: thin;\n}\n  .mat-drawer-inner-container a:focus-visible {\n  outline: none;\n}\n@media (min-width: 64rem) {\n    .mat-drawer-inner-container {\n    padding-right: 3.125rem;\n  }\n}\n  .mat-drawer-inner-container::-webkit-scrollbar {\n  width: 0.375rem;\n}\n  .mat-drawer-inner-container::-webkit-scrollbar-thumb {\n  background: #D0D0D0;\n  border-radius: 0.625rem;\n  margin: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRkY7QUFJRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFKRjtJQUtJLFVBQUE7RUFESjtBQUNGO0FBR0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBRE47QUFHTTtFQUNFLGFBQUE7QUFEUjtBQUlNO0VBQ0UsV0FBQTtBQUZSO0FBS007RUFDRSxjQ1BBO0VEUUEsZUFBQTtBQUhSO0FBT0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFMTjtBQU9NO0VBSkY7SUFLSSxjQUFBO0VBSk47QUFDRjtBQU9JO0VBQ0UsY0N0QkU7QURpQlI7QUFPTTtFQUhGO0lBSUksOEJBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VBSk47QUFDRjtBQU9RO0VBREY7SUFFSSxtQkN0REY7SUR1REUscUJDdkRGO0lEd0RFLGNDcENGO0lEcUNFLGdCQUFBO0VBSlI7QUFDRjtBQU9NO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUxSO0FBT1E7RUFDRSxhQUFBO0FBTFY7QUFPVTtFQUhGO0lBSUksY0FBQTtJQUNBLG1CQUFBO0VBSlY7QUFDRjtBQVFNO0VBQ0UsbUJBQUE7QUFOUjtBQVFRO0VBSEY7SUFJSSxrQkFBQTtFQUxSO0FBQ0Y7QUFVTTtFQUNFLGNDbkVBO0VEb0VBLG1DQUFBO0FBUlI7QUFVUTtFQUdFLGNDekVGO0VEMEVFLDBCQUFBO0FBVlY7QUFnQkU7RUFDRSxtQkNqRkk7RURrRkoscURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsNEJBQUE7QUFkSjtBQWdCSTtFQUNFLGFBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7QUFmTjtBQWtCSTtFQUNFLGNDckhFO0FEcUdSO0FBbUJJO0VBQ0UscUJDekhFO0VEMEhGLGNDMUhFO0FEeUdSO0FBb0JJO0VBQ0UsbUJDOUhFO0VEK0hGLGNDM0dFO0FEeUZSO0FBcUJJO0VBQ0UsY0NuSUU7QURnSFI7QUEyQkU7RUFDRSx5QkN4SEk7RUR5SEosYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBeEJKO0FBMEJJO0VBUkY7SUFTSSwwQ0FBQTtJQUNBLFlBQUE7RUF2Qko7QUFDRjtBQXlCSTtFQUNFLHNDQUFBO0FBdkJOO0FBeUJNOztFQUVFLFNBQUE7QUF2QlI7QUEwQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUF4QlI7QUEwQlE7RUFDRSxjQ3ZLQztBRCtJWDtBQTZCSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQTNCTjtBQTZCTTtFQUNFLGNDL0tBO0VEZ0xBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQTNCUjtBQTZCUTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUEzQlY7QUE2QlU7RUFDRSxjQzVMRDtBRGlLWDtBQW9DQTtFQUNFLGVBQUE7QUFqQ0Y7QUFvQ0E7RUFDRSxjQ3pMSztBRHdKUDtBQW9DQTtFQUNFLHFCQUFBO0FBakNGO0FBb0NBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQWpDRjtBQW9DSTtFQUNFLGFBQUE7QUFsQ047QUFzQ0U7RUFWRjtJQVdJLHVCQUFBO0VBbkNGO0FBQ0Y7QUFxQ0U7RUFDRSxlQUFBO0FBbkNKO0FBc0NFO0VBQ0UsbUJDbE5XO0VEbU5YLHVCQUFBO0VBQ0EsZUFBQTtBQXBDSiIsImZpbGUiOiJzZWN0aW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby92YXJpYWJsZXNcIjtcblxuLy9IZWFkZXJcbi53Mm0tc2lkZW5hdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA1LjMxMjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAmLWxvZ28ge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDFyZW07XG5cbiAgICAgICYtLWRhcmsge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgZW0ge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1sYW5ndWFnZS1waWNrZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDRyZW07XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICByaWdodDogMTAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXByaXZhdGUtYXJlYSB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjEyNXJlbSAkd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGdyZWVuO1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW0ge1xuICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICA6Om5nLWRlZXAgYSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5oZWFkZXJzY3JvbGxlZCB7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xODc1cmVtIDAuNjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wODUpO1xuICAgIGhlaWdodDogNS42MjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuXG4gICAgLncybS1zaWRlbmF2LWhlYWRlcl9fY29udGFpbmVyLWxvZ28tLWxpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLncybS1zaWRlbmF2LWhlYWRlcl9fY29udGFpbmVyLWxvZ28tLWRhcmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLncybS1zaWRlbmF2LWhlYWRlcl9fY29udGFpbmVyLWxvZ28gZW0ge1xuICAgICAgY29sb3I6ICRncmVlbjtcbiAgICB9XG5cbiAgICAudzJtLXNpZGVuYXYtaGVhZGVyX19jb250YWluZXItcHJpdmF0ZS1hcmVhIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGdyZWVuO1xuICAgICAgY29sb3I6ICRncmVlbjtcbiAgICB9XG5cbiAgICAudzJtLXNpZGVuYXYtaGVhZGVyX19jb250YWluZXItcHJpdmF0ZS1hcmVhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC53LWJ1dHRvbi1sYW5ndWFnZSB7XG4gICAgICBjb2xvcjogJGdyZWVuO1xuICAgIH1cbiAgfVxufVxuXG4vL01lbnVcblxuLncybS1zaWRlbmF2LW1lbnUge1xuICAmX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgICB6LWluZGV4OiAzO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMC42MjVyZW0gMS44NzVyZW0gMy43NXJlbTtcbiAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjA2MjVyZW0gJHNvZnRncmF5LTEwMDtcblxuICAgICAgaDMsXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxLjI1cmVtIDA7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1ycnNzIHtcbiAgICAgIG1hcmdpbi10b3A6IDMuNzVyZW07XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJi1pY29ucyB7XG4gICAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zIGVhc2U7XG5cbiAgICAgICAgZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy9NYXRlcmlhbCByZXNldCBzdHlsZXNcbjo6bmctZGVlcCAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXIge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbjo6bmctZGVlcCAubWF0LWRyYXdlci1jb250YWluZXIge1xuICB6LWluZGV4OiAzICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG5cbiAgYSB7XG4gICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuMzc1cmVtO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRzb2Z0Z3JheS0xMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgbWFyZ2luOiAxLjI1cmVtO1xuICB9XG59XG4iLCIvLyBPdmVycmlkaW5nIGdsb2JhbCB2YXJpYWJsZXNcblxuLy8gQ09MT1JTXG5cbiRkYXJrYmx1ZTogIzAwM0U3MjtcblxuJGdyZWVuOiAjNzJCRjQ0O1xuXG4kc29mdGJsdWU6ICMwMEE3RTE7XG4kc29mdGJsdWUtMTAwOiAjQjNFNUY2O1xuXG4kdHVycXVvaXNlOiAjMUVDQUQzO1xuXG4kcGluazogI0RGMTY4MztcblxuJHB1cnBsZTogIzYwMjY5RTtcblxuJHJlZDogI0ZGMEEwQTtcblxuJG9yYW5nZTogI0Y0QjYzRTtcblxuJGdyYXk6ICM2MTYxNjE7XG4kc29mdGdyYXktMTAwOiAjRDBEMEQwO1xuJHNvZnRncmF5LTMwMDogIzkwOTA5MDtcbiRkYXJrZ3JheS05MDA6ICMzMzMzMzM7XG5cbiR3aGl0ZTogI0ZGRkZGRjtcblxuJGliZXJvc3Rhci1jb2xvcjogIzY3QkFBRjtcbiR3Mm0tY29sb3I6ICNDNEQ2MDA7XG5cbiR0aXRsZXMtY29sb3I6ICRkYXJrYmx1ZTtcbiRib2R5LWNvbG9yOiAkZ3JheTtcbiRzb2Z0LXRleHQ6ICRzb2Z0Z3JheS0zMDA7XG5cbiRwcmltYXJ5OiAkZGFya2JsdWU7XG4kc2Vjb25kYXJ5OiAkZ3JlZW47XG4kdGVydGlhcnk6ICRzb2Z0Ymx1ZTtcbiRxdWF0ZXJuYXJ5OiAkdHVycXVvaXNlO1xuJHF1aW5hcnk6ICRwaW5rO1xuJHNleHRhcnk6ICRwdXJwbGU7XG5cbiRpbmZvOiAkc29mdGJsdWUtMTAwO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAkb3JhbmdlO1xuJGRhbmdlcjogJHJlZDtcblxuJGhlYWRpbmdzLWNvbG9yOiAkcHJpbWFyeTtcblxuLy8gQk9YIENPTVBPTkVOVFNcbiRyZXZlcnNlLWJveDogcm93LXJldmVyc2U7XG5cbi8vQnJlYWtwb2ludHNcbiRtZWRpYS10YWJsZXQ6IDQ4LjA2MjVyZW07XG4kbWVkaWEtZGVza3RvcDogNjRyZW07XG4kbWVkaWEtd2lkZXNjcmVlbjogNzZyZW07XG4kbWVkaWEtZnVsbGhkOiA4OHJlbTtcblxuLy8gU2VjdGlvbnNcbiRzZWN0aW9uLXBhZGRpbmc6IDcuNXJlbTtcbiJdfQ== */"] });


/***/ }),

/***/ "8u+L":
/*!******************************************************************!*\
  !*** ./src/app/sections/section-header/section-header.module.ts ***!
  \******************************************************************/
/*! exports provided: SectionHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderModule", function() { return SectionHeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var src_app_shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/w2m-link/w2m-link.module */ "RLeD");
/* harmony import */ var src_app_components_w2m_language_picker_w2m_language_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/w2m-language-picker/w2m-language-picker.module */ "LtaP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _section_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-header.component */ "5WaS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








const MATERIAL_MODULES = [
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
];
class SectionHeaderModule {
}
SectionHeaderModule.entry = _section_header_component__WEBPACK_IMPORTED_MODULE_6__["SectionHeaderComponent"];
SectionHeaderModule.ɵfac = function SectionHeaderModule_Factory(t) { return new (t || SectionHeaderModule)(); };
SectionHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SectionHeaderModule });
SectionHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
            src_app_shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_3__["W2mLinkModule"],
            MATERIAL_MODULES,
            src_app_components_w2m_language_picker_w2m_language_picker_module__WEBPACK_IMPORTED_MODULE_4__["W2MLanguagePickerModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SectionHeaderModule, { declarations: [_section_header_component__WEBPACK_IMPORTED_MODULE_6__["SectionHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
        src_app_shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_3__["W2mLinkModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], src_app_components_w2m_language_picker_w2m_language_picker_module__WEBPACK_IMPORTED_MODULE_4__["W2MLanguagePickerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]], exports: [_section_header_component__WEBPACK_IMPORTED_MODULE_6__["SectionHeaderComponent"]] }); })();


/***/ }),

/***/ "DIOt":
/*!**********************************************!*\
  !*** ./src/app/core/enum/components-enum.ts ***!
  \**********************************************/
/*! exports provided: ComponentsEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsEnum", function() { return ComponentsEnum; });
// eslint-disable-next-line no-shadow
var ComponentsEnum;
(function (ComponentsEnum) {
    ComponentsEnum["ComponentImage"] = "component-image";
    ComponentsEnum["ComponentInfoText"] = "component-info-text";
    ComponentsEnum["ComponentSubtitle"] = "component-subtitle";
    ComponentsEnum["ComponentCarousel"] = "component-carousel";
    ComponentsEnum["ComponentButton"] = "component-button";
})(ComponentsEnum || (ComponentsEnum = {}));


/***/ }),

/***/ "LtaP":
/*!******************************************************************************!*\
  !*** ./src/app/components/w2m-language-picker/w2m-language-picker.module.ts ***!
  \******************************************************************************/
/*! exports provided: W2MLanguagePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2MLanguagePickerModule", function() { return W2MLanguagePickerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _w2m_language_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./w2m-language-picker.component */ "kDZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






const MATERIAL_MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
];
class W2MLanguagePickerModule {
}
W2MLanguagePickerModule.ɵfac = function W2MLanguagePickerModule_Factory(t) { return new (t || W2MLanguagePickerModule)(); };
W2MLanguagePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: W2MLanguagePickerModule });
W2MLanguagePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            MATERIAL_MODULES,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](W2MLanguagePickerModule, { declarations: [_w2m_language_picker_component__WEBPACK_IMPORTED_MODULE_4__["W2MLanguagePickerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_w2m_language_picker_component__WEBPACK_IMPORTED_MODULE_4__["W2MLanguagePickerComponent"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();


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

/***/ "ZDRU":
/*!*****************************************************!*\
  !*** ./src/app/core/pipes/w2m-safe-to-html.pipe.ts ***!
  \*****************************************************/
/*! exports provided: W2mSafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mSafeHtmlPipe", function() { return W2mSafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class W2mSafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return value ? this.sanitizer.bypassSecurityTrustHtml(value) : '';
    }
}
W2mSafeHtmlPipe.ɵfac = function W2mSafeHtmlPipe_Factory(t) { return new (t || W2mSafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
W2mSafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "w2mSafeToHtml", type: W2mSafeHtmlPipe, pure: true });


/***/ }),

/***/ "aAiY":
/*!*********************************************!*\
  !*** ./src/app/shared/i18n/i18n.service.ts ***!
  \*********************************************/
/*! exports provided: I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "a4Kx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class I18nService {
    constructor(translate, req, platform, document) {
        this.translate = translate;
        this.req = req;
        this.platform = platform;
        this.document = document;
        this.defaultLanguage = 'es';
        this.allowedLanguages = [
            {
                code: 'en',
                name: 'English',
                startDate: 0,
            },
            {
                code: 'es',
                name: 'Español',
                startDate: 1,
            },
        ];
        this.changeLanguageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.defaultLanguage);
        this.currentLang = this.getLanguage();
        this.changeLanguage$ = this.changeLanguageSubject.asObservable();
    }
    init(path) {
        this.translate.addLangs(this.allowedLanguages.map(lang => lang.code));
        this.currentLanguage = this.processLanguage(path);
        this.changeLanguageSubject.next(this.currentLanguage);
        this.translate.use(this.processLanguage(path));
        this.setLangHTML();
    }
    find() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.allowedLanguages);
    }
    getURL(path) {
        return path.replace(`/${this.processLanguage(path)}`, '');
    }
    changeLanguage(selected) {
        if (selected.code !== this.currentLanguage) {
            this.currentLanguage = selected.code;
            this.translate.use(selected.code);
            this.changeLanguageSubject.next(selected.code);
            this.setLangHTML();
        }
    }
    getLanguage() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platform)
            ? this.currentLanguage || this.defaultLanguage
            : this.getLangFromSSR();
    }
    getLangFromSSR() {
        return this.req
            ? this.extractLang(this.req.url)
            : this.defaultLanguage;
    }
    processLanguage(path) {
        return this.allowedLanguages.some((lang) => lang.code === this.extractLang(path))
            ? this.extractLang(path)
            : this.defaultLanguage;
    }
    extractLang(lang) {
        return lang.substring(1, 3);
    }
    setLangHTML() {
        this.document.documentElement.lang = this.currentLang;
    }
    get currentLanguage() {
        return this.currentLang;
    }
    set currentLanguage(lng) {
        this.currentLang = lng;
    }
}
I18nService.ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_1__["REQUEST"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
I18nService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: I18nService, factory: I18nService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cqX/":
/*!********************************************!*\
  !*** ./src/app/core/pipes/pipes.module.ts ***!
  \********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w2m-safe-to-html.pipe */ "ZDRU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const PIPES = [
    _w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_1__["W2mSafeHtmlPipe"],
];
class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_1__["W2mSafeHtmlPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_1__["W2mSafeHtmlPipe"]] }); })();


/***/ }),

/***/ "kDZV":
/*!*********************************************************************************!*\
  !*** ./src/app/components/w2m-language-picker/w2m-language-picker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: W2MLanguagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2MLanguagePickerComponent", function() { return W2MLanguagePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/i18n/i18n.service */ "aAiY");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function W2MLanguagePickerComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function W2MLanguagePickerComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const language_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelectLanguage(language_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r2.name, " ");
} }
class W2MLanguagePickerComponent {
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    ngOnInit() {
        this.languages = this.i18nService.find();
        this.changeLanguage();
    }
    onSelectLanguage(selected) {
        this.i18nService.changeLanguage(selected);
    }
    changeLanguage() {
        this.i18nService.changeLanguage$.subscribe((lng) => {
            this.currentLang = lng;
        });
    }
}
W2MLanguagePickerComponent.ɵfac = function W2MLanguagePickerComponent_Factory(t) { return new (t || W2MLanguagePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"])); };
W2MLanguagePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: W2MLanguagePickerComponent, selectors: [["w2m-language-picker"]], decls: 8, vars: 7, consts: [["mat-menu-item", "", 1, "is-flex", "w-button-language", 3, "matMenuTriggerFor"], [1, "fas", "fa-sort-down"], ["menu", "matMenu"], ["class", "is-flex", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "is-flex", 3, "click"]], template: function W2MLanguagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, W2MLanguagePickerComponent_button_6_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.currentLang), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.languages));
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".w-button-language[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  color: #FFFFFF;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.w-button-language[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-left: 0.3125rem;\n  margin-top: 0.8125rem;\n  position: relative;\n}\n.w-button-language[_ngcontent-%COMP%]:hover {\n  background: none;\n  box-shadow: none;\n}\n.w-button-language[_ngcontent-%COMP%]     .mat-ripple-element {\n  background-color: transparent;\n}\n  .mat-menu-content button:hover {\n  background: none !important;\n  box-shadow: none;\n}\n  .mat-menu-panel {\n  border-radius: 0 !important;\n  margin-left: -4.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3cybS1sYW5ndWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsY0NzQk07RURyQk4sZUFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFLRTtFQUNFLDZCQUFBO0FBSEo7QUFTSTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVdBO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtBQVJGIiwiZmlsZSI6IncybS1sYW5ndWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Njc3MvdWJpY28vdmFyaWFibGVzXCI7XG5cbi53LWJ1dHRvbi1sYW5ndWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICBlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMzEyNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjgxMjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudCB7XG4gIGJ1dHRvbiB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTQuNXJlbSAhaW1wb3J0YW50O1xufVxuIiwiLy8gT3ZlcnJpZGluZyBnbG9iYWwgdmFyaWFibGVzXG5cbi8vIENPTE9SU1xuXG4kZGFya2JsdWU6ICMwMDNFNzI7XG5cbiRncmVlbjogIzcyQkY0NDtcblxuJHNvZnRibHVlOiAjMDBBN0UxO1xuJHNvZnRibHVlLTEwMDogI0IzRTVGNjtcblxuJHR1cnF1b2lzZTogIzFFQ0FEMztcblxuJHBpbms6ICNERjE2ODM7XG5cbiRwdXJwbGU6ICM2MDI2OUU7XG5cbiRyZWQ6ICNGRjBBMEE7XG5cbiRvcmFuZ2U6ICNGNEI2M0U7XG5cbiRncmF5OiAjNjE2MTYxO1xuJHNvZnRncmF5LTEwMDogI0QwRDBEMDtcbiRzb2Z0Z3JheS0zMDA6ICM5MDkwOTA7XG4kZGFya2dyYXktOTAwOiAjMzMzMzMzO1xuXG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRpYmVyb3N0YXItY29sb3I6ICM2N0JBQUY7XG4kdzJtLWNvbG9yOiAjQzRENjAwO1xuXG4kdGl0bGVzLWNvbG9yOiAkZGFya2JsdWU7XG4kYm9keS1jb2xvcjogJGdyYXk7XG4kc29mdC10ZXh0OiAkc29mdGdyYXktMzAwO1xuXG4kcHJpbWFyeTogJGRhcmtibHVlO1xuJHNlY29uZGFyeTogJGdyZWVuO1xuJHRlcnRpYXJ5OiAkc29mdGJsdWU7XG4kcXVhdGVybmFyeTogJHR1cnF1b2lzZTtcbiRxdWluYXJ5OiAkcGluaztcbiRzZXh0YXJ5OiAkcHVycGxlO1xuXG4kaW5mbzogJHNvZnRibHVlLTEwMDtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogJG9yYW5nZTtcbiRkYW5nZXI6ICRyZWQ7XG5cbiRoZWFkaW5ncy1jb2xvcjogJHByaW1hcnk7XG5cbi8vIEJPWCBDT01QT05FTlRTXG4kcmV2ZXJzZS1ib3g6IHJvdy1yZXZlcnNlO1xuXG4vL0JyZWFrcG9pbnRzXG4kbWVkaWEtdGFibGV0OiA0OC4wNjI1cmVtO1xuJG1lZGlhLWRlc2t0b3A6IDY0cmVtO1xuJG1lZGlhLXdpZGVzY3JlZW46IDc2cmVtO1xuJG1lZGlhLWZ1bGxoZDogODhyZW07XG5cbi8vIFNlY3Rpb25zXG4kc2VjdGlvbi1wYWRkaW5nOiA3LjVyZW07XG4iXX0= */"] });


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


/***/ })

};;
//# sourceMappingURL=section-header-section-header-module.js.map