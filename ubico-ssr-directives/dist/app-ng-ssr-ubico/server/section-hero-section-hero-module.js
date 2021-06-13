exports.ids = ["section-hero-section-hero-module"];
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

/***/ "5XRq":
/*!**********************************************************!*\
  !*** ./src/app/sections/section-hero/model/hero-type.ts ***!
  \**********************************************************/
/*! exports provided: HeroType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroType", function() { return HeroType; });
/* eslint-disable no-shadow */
var HeroType;
(function (HeroType) {
    HeroType["HOME"] = "hero-home";
    HeroType["NEWS"] = "hero-news";
})(HeroType || (HeroType = {}));


/***/ }),

/***/ "6086":
/*!****************************************************************!*\
  !*** ./src/app/shared/models/constants/slider-ubico-config.ts ***!
  \****************************************************************/
/*! exports provided: sliderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderConfig", function() { return sliderConfig; });
const sliderConfig = {
    showArrows: true,
    positionBullets: 'bottom',
    showCustomArrows: true,
    customArrows: {
        position: 'center',
        left: {
            icon: 'fas fa-chevron-left',
        },
        right: {
            icon: 'fas fa-chevron-right',
        },
    },
    alignBullets: 'right',
    type: 'slider',
    rewind: true,
    rewindDuration: 3000,
    focusAt: 0,
    perView: 1,
    gap: 30,
    isCenter: false,
    isAutoplay: false,
};


/***/ }),

/***/ "65ci":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/w2m-image/w2m-image.module.ts ***!
  \*****************************************************************/
/*! exports provided: W2mImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mImageModule", function() { return W2mImageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _w2m_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./w2m-image.component */ "etB0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class W2mImageModule {
}
W2mImageModule.ɵfac = function W2mImageModule_Factory(t) { return new (t || W2mImageModule)(); };
W2mImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: W2mImageModule });
W2mImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](W2mImageModule, { declarations: [_w2m_image_component__WEBPACK_IMPORTED_MODULE_2__["W2mImageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]], exports: [_w2m_image_component__WEBPACK_IMPORTED_MODULE_2__["W2mImageComponent"]] }); })();


/***/ }),

/***/ "D9Jl":
/*!*****************************************************************!*\
  !*** ./src/app/sections/section-hero/section-hero.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeroComponent", function() { return SectionHeroComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_models_constants_slider_ubico_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/constants/slider-ubico-config */ "6086");
/* harmony import */ var _section_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section-common */ "0D8H");
/* harmony import */ var _model_hero_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/hero-type */ "5XRq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _w2m_ngx_components_w2m_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @w2m/ngx-components/w2m-slider */ "/aJY");
/* harmony import */ var _shared_components_w2m_image_w2m_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/w2m-image/w2m-image.component */ "etB0");
/* harmony import */ var _shared_components_w2m_button_w2m_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/w2m-button/w2m-button.component */ "Fp9J");
/* harmony import */ var _shared_components_w2m_subtitle_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/w2m-subtitle/w2m-subtitle.component */ "WBgv");










function SectionHeroComponent_div_1_ng_container_1_ng_container_1_ng_container_1_w2m_image_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "w2m-image", 10);
} if (rf & 2) {
    const slide_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("image", slide_r9);
} }
function SectionHeroComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "w2m-slider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SectionHeroComponent_div_1_ng_container_1_ng_container_1_ng_container_1_w2m_image_2_Template, 1, 1, "w2m-image", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sliderConfig", ctx_r7.sliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r4.field);
} }
function SectionHeroComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_1_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.field.length);
} }
function SectionHeroComponent_div_1_ng_container_1_ng_container_2_w2m_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "w2m-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clicked", function SectionHeroComponent_div_1_ng_container_1_ng_container_2_w2m_button_1_Template_w2m_button_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r13.scrollDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "em", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("buttonData", item_r4);
} }
function SectionHeroComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_1_ng_container_1_ng_container_2_w2m_button_1_Template, 3, 1, "w2m-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4);
} }
function SectionHeroComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SectionHeroComponent_div_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", item_r4.typeComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r3.ComponentType.ComponentCarousel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r3.ComponentType.ComponentButton);
} }
function SectionHeroComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_1_ng_container_1_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.data.fields);
} }
function SectionHeroComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 15);
} }
function SectionHeroComponent_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r17.data.backgroundImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r17.data.altText);
} }
function SectionHeroComponent_div_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "w2m-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("w2mSubtitle", item_r19.field);
} }
function SectionHeroComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_3_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", item_r19.typeComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r18.ComponentType.ComponentSubtitle);
} }
function SectionHeroComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_3_img_1_Template, 1, 2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SectionHeroComponent_div_3_ng_container_2_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.data.typeHero);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.data.backgroundImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.data.fields);
} }
class SectionHeroComponent extends _section_common__WEBPACK_IMPORTED_MODULE_2__["SectionCommon"] {
    constructor(document, viewportScroller) {
        super();
        this.document = document;
        this.viewportScroller = viewportScroller;
        this.sliderConfig = src_app_shared_models_constants_slider_ubico_config__WEBPACK_IMPORTED_MODULE_1__["sliderConfig"];
        this.heroType = _model_hero_type__WEBPACK_IMPORTED_MODULE_3__["HeroType"];
    }
    scrollDown() {
        const idsElements = this.document.querySelectorAll('section[id]:not([id=""])');
        const id = Array.from(idsElements).map(el => el.id).shift();
        this.viewportScroller.scrollToAnchor(id);
    }
}
SectionHeroComponent.ɵfac = function SectionHeroComponent_Factory(t) { return new (t || SectionHeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["ViewportScroller"])); };
SectionHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SectionHeroComponent, selectors: [["section-hero"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "ngSwitch"], ["class", "section-hero-home", 4, "ngSwitchCase"], ["class", "section-hero-news", 4, "ngSwitchCase"], ["class", "section-hero-default", 3, "ngClass", 4, "ngSwitchDefault"], [1, "section-hero-home"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [4, "ngSwitchCase"], [4, "ngIf"], [1, "container", 3, "sliderConfig"], ["class", "slide", 3, "image", 4, "ngFor", "ngForOf"], [1, "slide", 3, "image"], ["class", "columns is-centered section-hero-home__button", 3, "buttonData", "clicked", 4, "ngIf"], [1, "columns", "is-centered", "section-hero-home__button", 3, "buttonData", "clicked"], ["src", "../../../assets/img/hero-icon.svg", "alt", ""], [1, "fas", "fa-sort-down"], [1, "section-hero-news"], [1, "section-hero-default", 3, "ngClass"], ["class", "section-hero-default--image", 3, "src", "alt", 4, "ngIf"], [1, "section-hero-default--image", 3, "src", "alt"], [1, "section-hero-default--title", 3, "w2mSubtitle"]], template: function SectionHeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SectionHeroComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SectionHeroComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SectionHeroComponent_div_3_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.data.typeHero);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.heroType.HOME);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.heroType.NEWS);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _w2m_ngx_components_w2m_slider__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _shared_components_w2m_image_w2m_image_component__WEBPACK_IMPORTED_MODULE_6__["W2mImageComponent"], _shared_components_w2m_button_w2m_button_component__WEBPACK_IMPORTED_MODULE_7__["W2mButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _shared_components_w2m_subtitle_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_8__["W2mSubtitleComponent"]], styles: [".section-hero-home[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n  width: 100%;\n}\n.section-hero-home[_ngcontent-%COMP%]    .glide__bullets.right {\n  right: 0 !important;\n}\n.section-hero-home[_ngcontent-%COMP%]    .w2m-slide-arrow button {\n  background-color: transparent !important;\n  box-shadow: none;\n  font-size: 2.8rem !important;\n}\n.section-hero-home[_ngcontent-%COMP%]    .w2m-slide-arrow--left {\n  left: 2% !important;\n}\n.section-hero-home[_ngcontent-%COMP%]    .w2m-slide-arrow--right {\n  right: 2% !important;\n}\n.section-hero-home-container-title[_ngcontent-%COMP%] {\n  bottom: 7.5rem;\n  left: 0;\n  margin-left: 8rem;\n  position: absolute;\n  z-index: 4;\n}\n.section-hero-home-container-title[_ngcontent-%COMP%]     h1 {\n  color: #FFFFFF !important;\n  margin-block-end: 0;\n  text-shadow: 0 0.1875rem 0.375rem #00000042;\n}\n.section-hero-home__button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  top: -10rem;\n}\n.section-hero-home__button[_ngcontent-%COMP%]     button {\n  align-items: center;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n.section-hero-home__button[_ngcontent-%COMP%]     button:hover {\n  background: none;\n  box-shadow: none;\n}\n.section-hero-home__button[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72BF44;\n  font-size: 1.8rem;\n  line-height: 0.8;\n  margin: 0;\n  margin-bottom: 0.3125rem;\n}\n.section-hero-home--icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.section-hero-news[_ngcontent-%COMP%] {\n  color: black;\n}\n.section-hero-default--image[_ngcontent-%COMP%] {\n  height: 60vh;\n  object-fit: cover;\n  width: 100vw;\n}\n.section-hero-default--title[_ngcontent-%COMP%] {\n  bottom: 20rem;\n  left: 1.5rem;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3Rpb24taGVyby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhKO0FBS0k7RUFDRSxtQkFBQTtBQUhOO0FBT007RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFMUjtBQVFNO0VBQ0UsbUJBQUE7QUFOUjtBQVNNO0VBQ0Usb0JBQUE7QUFQUjtBQVdJO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVROO0FBV007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFUUjtBQWFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWE47QUFhTTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBWFI7QUFhUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFYVjtBQWVNO0VBQ0UsY0N6REE7RUQwREEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQWJSO0FBaUJJO0VBQ0UsZUFBQTtBQWZOO0FBbUJFO0VBQ0UsWUFBQTtBQWpCSjtBQXFCSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFuQk47QUFzQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBcEJOIiwiZmlsZSI6InNlY3Rpb24taGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlcm9cbkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby92YXJpYWJsZXNcIjtcblxuLnNlY3Rpb24taGVybyB7XG4gICYtaG9tZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICA6Om5nLWRlZXAuZ2xpZGVfX2J1bGxldHMucmlnaHQge1xuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAudzJtLXNsaWRlLWFycm93IHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi44cmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgICYtLWxlZnQge1xuICAgICAgICBsZWZ0OiAyJSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmLS1yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAyJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtY29udGFpbmVyLXRpdGxlIHtcbiAgICAgIGJvdHRvbTogNy41cmVtO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cmVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogNDtcblxuICAgICAgOjpuZy1kZWVwIGgxIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4zNzVyZW0gIzAwMDAwMDQyO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTEwcmVtO1xuXG4gICAgICA6Om5nLWRlZXAgYnV0dG9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVtIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEyNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cblxuICAmLW5ld3Mge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gICYtZGVmYXVsdCB7XG4gICAgJi0taW1hZ2Uge1xuICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgfVxuXG4gICAgJi0tdGl0bGUge1xuICAgICAgYm90dG9tOiAyMHJlbTtcbiAgICAgIGxlZnQ6IDEuNXJlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIl19 */"] });


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

/***/ "Fp9J":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/w2m-button/w2m-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: W2mButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mButtonComponent", function() { return W2mButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../w2m-link/w2m-link.component */ "rR0t");




function W2mButtonComponent_w2m_link_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buttonData.textButton);
} }
function W2mButtonComponent_w2m_link_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "w2m-link", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function W2mButtonComponent_w2m_link_0_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clicked.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, W2mButtonComponent_w2m_link_0_span_3_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlLink", ctx_r0.buttonData.urlButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("color", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.buttonData.textButton);
} }
const _c0 = ["*"];
class W2mButtonComponent {
    constructor() {
        this.disabled = false;
        this.color = 'accent';
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
W2mButtonComponent.ɵfac = function W2mButtonComponent_Factory(t) { return new (t || W2mButtonComponent)(); };
W2mButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: W2mButtonComponent, selectors: [["w2m-button"]], inputs: { buttonData: "buttonData", disabled: "disabled", color: "color" }, outputs: { clicked: "clicked" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "urlLink", 4, "ngIf"], [3, "urlLink"], [3, "disabled", "color", "click"], ["class", "w2m-button--text", 4, "ngIf"], [1, "w2m-button--text"]], template: function W2mButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, W2mButtonComponent_w2m_link_0_Template, 4, 4, "w2m-link", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_2__["W2mLinkComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3Mm0tYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "QDaJ":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/w2m-subtitle/w2m-subtitle.module.ts ***!
  \***********************************************************************/
/*! exports provided: W2mSubtitleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mSubtitleModule", function() { return W2mSubtitleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w2m-subtitle.component */ "WBgv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class W2mSubtitleModule {
}
W2mSubtitleModule.ɵfac = function W2mSubtitleModule_Factory(t) { return new (t || W2mSubtitleModule)(); };
W2mSubtitleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: W2mSubtitleModule });
W2mSubtitleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](W2mSubtitleModule, { declarations: [_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_1__["W2mSubtitleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_1__["W2mSubtitleComponent"]] }); })();


/***/ }),

/***/ "RBxI":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/w2m-button/w2m-button.module.ts ***!
  \*******************************************************************/
/*! exports provided: W2mButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mButtonModule", function() { return W2mButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w2m-button.component */ "Fp9J");
/* harmony import */ var _w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../w2m-link/w2m-link.module */ "RLeD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class W2mButtonModule {
}
W2mButtonModule.ɵfac = function W2mButtonModule_Factory(t) { return new (t || W2mButtonModule)(); };
W2mButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: W2mButtonModule });
W2mButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](W2mButtonModule, { declarations: [_w2m_button_component__WEBPACK_IMPORTED_MODULE_1__["W2mButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"]], exports: [_w2m_button_component__WEBPACK_IMPORTED_MODULE_1__["W2mButtonComponent"]] }); })();


/***/ }),

/***/ "REWH":
/*!**************************************************************!*\
  !*** ./src/app/sections/section-hero/section-hero.module.ts ***!
  \**************************************************************/
/*! exports provided: SectionHeroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeroModule", function() { return SectionHeroModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/w2m-subtitle/w2m-subtitle.module */ "QDaJ");
/* harmony import */ var _w2m_ngx_components_w2m_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @w2m/ngx-components/w2m-slider */ "/aJY");
/* harmony import */ var src_app_shared_components_w2m_image_w2m_image_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/w2m-image/w2m-image.module */ "65ci");
/* harmony import */ var src_app_shared_components_w2m_button_w2m_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/w2m-button/w2m-button.module */ "RBxI");
/* harmony import */ var _section_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-hero.component */ "D9Jl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SectionHeroModule {
}
SectionHeroModule.entry = _section_hero_component__WEBPACK_IMPORTED_MODULE_5__["SectionHeroComponent"];
SectionHeroModule.ɵfac = function SectionHeroModule_Factory(t) { return new (t || SectionHeroModule)(); };
SectionHeroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SectionHeroModule });
SectionHeroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_1__["W2mSubtitleModule"],
            _w2m_ngx_components_w2m_slider__WEBPACK_IMPORTED_MODULE_2__["SliderModule"],
            src_app_shared_components_w2m_image_w2m_image_module__WEBPACK_IMPORTED_MODULE_3__["W2mImageModule"],
            src_app_shared_components_w2m_button_w2m_button_module__WEBPACK_IMPORTED_MODULE_4__["W2mButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SectionHeroModule, { declarations: [_section_hero_component__WEBPACK_IMPORTED_MODULE_5__["SectionHeroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_1__["W2mSubtitleModule"],
        _w2m_ngx_components_w2m_slider__WEBPACK_IMPORTED_MODULE_2__["SliderModule"],
        src_app_shared_components_w2m_image_w2m_image_module__WEBPACK_IMPORTED_MODULE_3__["W2mImageModule"],
        src_app_shared_components_w2m_button_w2m_button_module__WEBPACK_IMPORTED_MODULE_4__["W2mButtonModule"]] }); })();


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

/***/ "WBgv":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/w2m-subtitle/w2m-subtitle.component.ts ***!
  \**************************************************************************/
/*! exports provided: W2mSubtitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mSubtitleComponent", function() { return W2mSubtitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function W2mSubtitleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "title-content", ""]], [["", "subtitle-content", ""]]];
const _c1 = ["[title-content]", "[subtitle-content]"];
class W2mSubtitleComponent {
}
W2mSubtitleComponent.ɵfac = function W2mSubtitleComponent_Factory(t) { return new (t || W2mSubtitleComponent)(); };
W2mSubtitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: W2mSubtitleComponent, selectors: [["w2m-subtitle"]], inputs: { w2mSubtitle: "w2mSubtitle" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "w2m-title", 4, "ngIf"], [1, "w2m-title"]], template: function W2mSubtitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, W2mSubtitleComponent_div_0_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.w2mSubtitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });


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

/***/ "etB0":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/w2m-image/w2m-image.component.ts ***!
  \********************************************************************/
/*! exports provided: W2mImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mImageComponent", function() { return W2mImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");



function W2mImageComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.image.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.image.altText);
} }
function W2mImageComponent_div_0_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "w2mSafeToHtml");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.image.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function W2mImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, W2mImageComponent_div_0_img_1_Template, 1, 2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, W2mImageComponent_div_0_h2_2_Template, 2, 3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image.title);
} }
class W2mImageComponent {
}
W2mImageComponent.ɵfac = function W2mImageComponent_Factory(t) { return new (t || W2mImageComponent)(); };
W2mImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: W2mImageComponent, selectors: [["w2m-image"]], inputs: { image: "image" }, decls: 1, vars: 1, consts: [["class", "w2m-image", 4, "ngIf"], [1, "w2m-image"], ["class", "w2m-image--image", 3, "src", "alt", 4, "ngIf"], ["class", "w2m-image--title", 3, "innerHtml", 4, "ngIf"], [1, "w2m-image--image", 3, "src", "alt"], [1, "w2m-image--title", 3, "innerHtml"]], template: function W2mImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, W2mImageComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_2__["W2mSafeHtmlPipe"]], styles: [".w2m-image--image[_ngcontent-%COMP%] {\n  filter: brightness(0.8);\n  height: 100vh;\n  max-width: 100vw;\n  object-fit: cover;\n  position: relative;\n  width: 100vw;\n}\n.w2m-image--title[_ngcontent-%COMP%] {\n  bottom: 7.5rem;\n  color: #FFFFFF !important;\n  left: 0;\n  margin-block-end: 0;\n  position: absolute;\n  text-shadow: 0 0.1875rem 0.375rem #00000042;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3cybS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQUhKIiwiZmlsZSI6IncybS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby92YXJpYWJsZXNcIjtcblxuLncybS1pbWFnZSB7XG4gICYtLWltYWdlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gICYtLXRpdGxlIHtcbiAgICBib3R0b206IDcuNXJlbTtcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4zNzVyZW0gIzAwMDAwMDQyO1xuICB9XG59XG4iXX0= */"] });


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
//# sourceMappingURL=section-hero-section-hero-module.js.map