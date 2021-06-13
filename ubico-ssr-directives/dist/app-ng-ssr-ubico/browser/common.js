(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2oKa":
/*!******************************************************!*\
  !*** ./src/app/core/directives/directives.module.ts ***!
  \******************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _animated_counter_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animated-counter.directive */ "l819");
/* harmony import */ var _dynamic_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic.directive */ "cu0m");
/* harmony import */ var _lazysizes_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazysizes.directive */ "zTNx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




const DIRECTIVES = [
    _dynamic_directive__WEBPACK_IMPORTED_MODULE_1__["DynamicDirective"],
    _lazysizes_directive__WEBPACK_IMPORTED_MODULE_2__["LazysizesDirective"],
    _animated_counter_directive__WEBPACK_IMPORTED_MODULE_0__["AnimatedCounterDirective"],
];
class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_dynamic_directive__WEBPACK_IMPORTED_MODULE_1__["DynamicDirective"],
        _lazysizes_directive__WEBPACK_IMPORTED_MODULE_2__["LazysizesDirective"],
        _animated_counter_directive__WEBPACK_IMPORTED_MODULE_0__["AnimatedCounterDirective"]], exports: [_dynamic_directive__WEBPACK_IMPORTED_MODULE_1__["DynamicDirective"],
        _lazysizes_directive__WEBPACK_IMPORTED_MODULE_2__["LazysizesDirective"],
        _animated_counter_directive__WEBPACK_IMPORTED_MODULE_0__["AnimatedCounterDirective"]] }); })();


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

/***/ "Y+X5":
/*!****************************************************!*\
  !*** ./src/app/shared/services/cms/cms.service.ts ***!
  \****************************************************/
/*! exports provided: CmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsService", function() { return CmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CmsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    set urlCms(value) {
        this.URL_CMS = value;
    }
    get(endpoint, options) {
        this.verifyUrl();
        const url = `${this.URL_CMS}/${endpoint}`;
        return this.httpClient.get(url, options);
    }
    post(endpoint, body, options) {
        this.verifyUrl();
        const url = `${this.URL_CMS}/${endpoint}`;
        return this.httpClient.post(url, body, options);
    }
    verifyUrl() {
        if (!this.URL_CMS) {
            throw new Error('URL_CMS is empty');
        }
    }
}
CmsService.ɵfac = function CmsService_Factory(t) { return new (t || CmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CmsService, factory: CmsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "a4Kx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nguniversal/express-engine/__ivy_ngcc__/fesm2015/tokens.js ***!
  \**********************************************************************************/
/*! exports provided: REQUEST, RESPONSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST", function() { return REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE", function() { return RESPONSE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const REQUEST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('REQUEST');
const RESPONSE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('RESPONSE');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tokens.js.map

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

/***/ "cu0m":
/*!******************************************************!*\
  !*** ./src/app/core/directives/dynamic.directive.ts ***!
  \******************************************************/
/*! exports provided: DynamicDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDirective", function() { return DynamicDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DynamicDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
DynamicDirective.ɵfac = function DynamicDirective_Factory(t) { return new (t || DynamicDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
DynamicDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicDirective, selectors: [["", "appDynamicHost", ""]] });


/***/ }),

/***/ "l819":
/*!***************************************************************!*\
  !*** ./src/app/core/directives/animated-counter.directive.ts ***!
  \***************************************************************/
/*! exports provided: AnimatedCounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedCounterDirective", function() { return AnimatedCounterDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const DEFAULT_ANIMATION_SPEED = 8;
/*

USAGE:

<div
  [appAnimatedCounter]="yourDynamicNumber"
  [delay]="delayInMiliseconds">
  any static text that will be appended next to number
</div>

*/
class AnimatedCounterDirective {
    constructor(el, platform, render) {
        this.el = el;
        this.platform = platform;
        this.render = render;
        this.delay = 0;
        this.speed = DEFAULT_ANIMATION_SPEED;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startingValue = 0;
        this.positionInitial = 0;
        this.startingValueDecimal = 0;
    }
    ngOnInit() {
        if (this.el.nativeElement.textContent) {
            this.staticText = this.el.nativeElement.textContent;
        }
        if (this.delay > 0) {
            this.render.setProperty(this.el.nativeElement, 'textContent', this.startingValue);
        }
        this.positionInitial = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platform) ? window.innerHeight : 0;
        // this.render.
        console.log('position Directiva ==> INICIAL', this.positionInitial);
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    handleScroll() {
        console.log('Scroll', window.scrollY);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platform) && window.scrollY > this.positionInitial) {
            console.log('INGRESA A QUI');
            this.startTimer();
        }
    }
    startTimer() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.delay || 0)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(_ => this.animate());
    }
    get hasDecimal() {
        const decimalPortion = this.getDecimalValuePortion(1);
        if (decimalPortion !== undefined) {
            return true;
        }
        return false;
    }
    getDecimalValuePortion(indexPosition) {
        const decimalPortion = this.value.toString().split('.')[indexPosition];
        return parseFloat(decimalPortion);
    }
    animate() {
        if (this.value && this.safeValidate(this.value)) {
            const start = () => {
                if (this.startingValue < this.value) {
                    this.startingValue += 1;
                    this.render.setProperty(this.el.nativeElement, 'textContent', `${this.startingValue}${this.staticText ? this.staticText : ''}`);
                    setTimeout(start, this.speed);
                }
                else if (this.hasDecimal) {
                    // continue animating if number is decimal
                    if (this.startingValueDecimal < this.getDecimalValuePortion(1)) {
                        this.startingValueDecimal += 1;
                        this.render.setProperty(this.el.nativeElement, 'textContent', `${this.getDecimalValuePortion(0)}.${this.startingValueDecimal}${this.staticText ? this.staticText : ''}`);
                        setTimeout(start, this.speed);
                    }
                }
            };
            start();
        }
    }
    safeValidate(value) {
        return typeof value === 'number';
    }
}
AnimatedCounterDirective.ɵfac = function AnimatedCounterDirective_Factory(t) { return new (t || AnimatedCounterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
AnimatedCounterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AnimatedCounterDirective, selectors: [["", "appAnimatedCounter", ""]], hostBindings: function AnimatedCounterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AnimatedCounterDirective_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { value: ["appAnimatedCounter", "value"], delay: "delay", speed: "speed" } });


/***/ }),

/***/ "zTNx":
/*!********************************************************!*\
  !*** ./src/app/core/directives/lazysizes.directive.ts ***!
  \********************************************************/
/*! exports provided: LazysizesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazysizesDirective", function() { return LazysizesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LazysizesDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-src', this.appDatasrc);
        this.renderer.addClass(this.elementRef.nativeElement, 'lazyload');
    }
}
LazysizesDirective.ɵfac = function LazysizesDirective_Factory(t) { return new (t || LazysizesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
LazysizesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazysizesDirective, selectors: [["", "appDatasrc", ""]], inputs: { appDatasrc: "appDatasrc" } });


/***/ })

}]);
//# sourceMappingURL=common.js.map