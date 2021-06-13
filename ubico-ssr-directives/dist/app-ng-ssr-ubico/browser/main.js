(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+s3q":
/*!**************************************!*\
  !*** ./src/app/core/model/tokens.ts ***!
  \**************************************/
/*! exports provided: LAZY_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_COMPONENT", function() { return LAZY_COMPONENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const LAZY_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LAZY_COMPONENT');


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fernando/repos/w2fly/app-ng-ssr-ubico/src/main.ts */"zUnb");


/***/ }),

/***/ "2SE/":
/*!**************************************************!*\
  !*** ./src/app/core/services/dynamic.service.ts ***!
  \**************************************************/
/*! exports provided: DynamicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicService", function() { return DynamicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _model_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/tokens */ "+s3q");





class DynamicService {
    constructor(compiler, lazyArraySection, componentFactory) {
        this.compiler = compiler;
        this.lazyArraySection = lazyArraySection;
        this.componentFactory = componentFactory;
    }
    processModules(fields) {
        const observableBatch = [];
        fields.filter(item => this.lazyArraySection[item.typeSection]).forEach(item => {
            observableBatch.push(this.lazyArraySection[item.typeSection]());
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(observableBatch);
    }
    hasModuleActive(typeSection) {
        return !!this.lazyArraySection[typeSection];
    }
    loadComponent(tempModulos, type, data, host) {
        if (!tempModulos && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            throw new Error(`Component "${type}" not defined in dynamic service.`);
        }
        else if (!tempModulos && !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            return null;
        }
        let moduleFactory;
        if (tempModulos instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactory"]) {
            // For AOT
            moduleFactory = tempModulos;
        }
        else {
            // For JIT
            moduleFactory = this.compiler.compileModuleSync(tempModulos);
        }
        const entryComponent = moduleFactory.moduleType.entry;
        const compFactory = this.componentFactory.resolveComponentFactory(entryComponent);
        const componentRef = host.viewContainerRef.createComponent(compFactory);
        componentRef.instance.data = data;
        return componentRef;
    }
}
DynamicService.ɵfac = function DynamicService_Factory(t) { return new (t || DynamicService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_model_tokens__WEBPACK_IMPORTED_MODULE_3__["LAZY_COMPONENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
DynamicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicService, factory: DynamicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3H5g":
/*!*******************************************!*\
  !*** ./src/app/sections/lazy-sections.ts ***!
  \*******************************************/
/*! exports provided: lazySections, lazyArraySection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazySections", function() { return lazySections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyArraySection", function() { return lazyArraySection; });
const lazySections = [
    {
        path: 'section-hero',
        loadChildren: () => Promise.all(/*! import() | section-hero-section-hero-module */[__webpack_require__.e("default~section-header-section-header-module~section-hero-section-hero-module"), __webpack_require__.e("common"), __webpack_require__.e("section-hero-section-hero-module")]).then(__webpack_require__.bind(null, /*! ./section-hero/section-hero.module */ "REWH"))
            .then(m => m.SectionHeroModule),
    },
    {
        path: 'section-jobs',
        loadChildren: () => Promise.all(/*! import() | section-jobs-section-jobs-module */[__webpack_require__.e("default~section-header-section-header-module~section-jobs-section-jobs-module"), __webpack_require__.e("common"), __webpack_require__.e("section-jobs-section-jobs-module")]).then(__webpack_require__.bind(null, /*! ./section-jobs/section-jobs.module */ "cFe4"))
            .then(m => m.SectionJobsModule),
    },
    {
        path: 'section-container-image',
        loadChildren: () => __webpack_require__.e(/*! import() | section-container-image-section-container-image-module */ "section-container-image-section-container-image-module").then(__webpack_require__.bind(null, /*! ./section-container-image/section-container-image.module */ "jVFg"))
            .then(m => m.SectionContainerImageModule),
    },
    {
        path: 'section-footer',
        loadChildren: () => __webpack_require__.e(/*! import() | section-footer-section-footer-module */ "section-footer-section-footer-module").then(__webpack_require__.bind(null, /*! ./section-footer/section-footer.module */ "Y87h"))
            .then(m => m.SectionFooterModule),
    },
    {
        path: 'section-header',
        loadChildren: () => Promise.all(/*! import() | section-header-section-header-module */[__webpack_require__.e("default~section-header-section-header-module~section-jobs-section-jobs-module"), __webpack_require__.e("default~section-header-section-header-module~section-hero-section-hero-module"), __webpack_require__.e("common"), __webpack_require__.e("section-header-section-header-module")]).then(__webpack_require__.bind(null, /*! ./section-header/section-header.module */ "8u+L"))
            .then(m => m.SectionHeaderModule),
    },
];
function lazyArraySection() {
    const result = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const w of lazySections) {
        result[w.path] = w.loadChildren;
    }
    return result;
}


/***/ }),

/***/ "AytR":
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
    production: false,
    APIKEY_SMARTVEL: '53681ec4-7139-47d2-85b9-2ce760aaff3a',
    URL_API: 'https://prepublic.w2m.com',
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_fontawesome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/fontawesome.service */ "mdvN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(fontawesome) {
        this.fontawesome = fontawesome;
        this.title = 'app-ng-ssr-ubico';
    }
    ngOnInit() {
        this.fontawesome.load();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_fontawesome_service__WEBPACK_IMPORTED_MODULE_1__["FontawesomeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TLch":
/*!*********************************************************!*\
  !*** ./src/app/shared/i18n/translate-browser.loader.ts ***!
  \*********************************************************/
/*! exports provided: TranslateBrowserLoader, translateBrowserLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateBrowserLoader", function() { return TranslateBrowserLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateBrowserLoaderFactory", function() { return translateBrowserLoaderFactory; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");



/**
  To take advantage of loading the translation files on the server-side,
  I created another loader, translate-browser.loader.ts, to fetch the previously loaded data from TransferState.
  If it does not find the translations in the cache, it uses the HTTP loader to get them.
 */
class TranslateBrowserLoader {
    constructor(http, transferState, prefix = './assets/i18n/', suffix = '.json') {
        this.http = http;
        this.transferState = transferState;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    getTranslation(navigatorLang) {
        const lang = navigatorLang.substring(0, 2);
        const key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])(`transfer-translate-${lang}`);
        const data = this.transferState.get(key, null);
        // First we are looking for the translations in transfer-state,
        // if none found, http load as fallback
        if (data) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
                observer.next(data);
                observer.complete();
            });
        }
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](this.http, this.prefix, this.suffix).getTranslation(lang);
    }
}
function translateBrowserLoaderFactory(httpClient, transferState) {
    return new TranslateBrowserLoader(httpClient, transferState);
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nguniversal/common */ "rsbC");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_model_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/model/tokens */ "+s3q");
/* harmony import */ var _core_services_dynamic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/dynamic.service */ "2SE/");
/* harmony import */ var _sections_lazy_sections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/lazy-sections */ "3H5g");
/* harmony import */ var _shared_i18n_translate_browser_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/i18n/translate-browser.loader */ "TLch");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");





// eslint-disable-next-line import/no-extraneous-dependencies











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _core_services_dynamic_service__WEBPACK_IMPORTED_MODULE_10__["DynamicService"], { provide: _core_model_tokens__WEBPACK_IMPORTED_MODULE_9__["LAZY_COMPONENT"], useFactory: _sections_lazy_sections__WEBPACK_IMPORTED_MODULE_11__["lazyArraySection"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_5__["TransferHttpCacheModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: _shared_i18n_translate_browser_loader__WEBPACK_IMPORTED_MODULE_12__["translateBrowserLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]],
                },
            }),
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _nguniversal_common__WEBPACK_IMPORTED_MODULE_5__["TransferHttpCacheModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "kSjj":
/*!***************************************************!*\
  !*** ./src/app/shared/services/script.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ScriptService {
    constructor(platform, document) {
        this.platform = platform;
        this.document = document;
    }
    addScript(scriptEstructure) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platform)) {
            const script = this.document.createElement('script');
            const append = scriptEstructure.append || 'head';
            script.defer = true;
            script.type = 'text/javascript';
            script.crossOrigin = 'anonymous';
            if (scriptEstructure.src)
                script.src = scriptEstructure.src;
            if (scriptEstructure.body)
                script.text = scriptEstructure.body;
            if (scriptEstructure.setAttribute) {
                script.setAttribute(scriptEstructure.setAttribute.name, scriptEstructure.setAttribute.value);
            }
            this.document.getElementsByTagName(append)[0].appendChild(script);
        }
    }
    removeScript(fileName, typeFile) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platform)) {
            const tags = document.getElementsByTagName('script');
            for (let i = tags.length; i >= 0; i -= 1) {
                if (tags[i] && tags[i].getAttribute(typeFile) != null
                    && tags[i].getAttribute(typeFile).indexOf(fileName) !== -1) {
                    tags[i].parentNode.removeChild(tags[i]);
                }
            }
        }
    }
    addNoScriptChild(child, append = 'body') {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platform)) {
            const noScript = this.document.createElement('noscript');
            noScript.appendChild(child);
            this.document.getElementsByTagName(append)[0].prepend(noScript);
        }
    }
}
ScriptService.ɵfac = function ScriptService_Factory(t) { return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
ScriptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScriptService, factory: ScriptService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mdvN":
/*!********************************************************!*\
  !*** ./src/app/shared/services/fontawesome.service.ts ***!
  \********************************************************/
/*! exports provided: FontawesomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontawesomeService", function() { return FontawesomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.service */ "kSjj");


class FontawesomeService {
    constructor(scriptService) {
        this.scriptService = scriptService;
    }
    load() {
        const script = {
            src: 'https://kit.fontawesome.com/f8f81c8ec2.js',
        };
        this.scriptService.addScript(script);
    }
}
FontawesomeService.ɵfac = function FontawesomeService_Factory(t) { return new (t || FontawesomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_script_service__WEBPACK_IMPORTED_MODULE_1__["ScriptService"])); };
FontawesomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FontawesomeService, factory: FontawesomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'info-covid',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-info-covid-info-covid-module */ "pages-info-covid-info-covid-module").then(__webpack_require__.bind(null, /*! ./pages/info-covid/info-covid.module */ "2DJy")).then(m => m.InfoCovidModule),
    },
    {
        path: 'app',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-mtrip-mtrip-module */ "pages-mtrip-mtrip-module").then(__webpack_require__.bind(null, /*! ./pages/mtrip/mtrip.module */ "d6jA")).then(m => m.MtripModule),
    },
    {
        path: 'section-team',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-section-team-section-team-module */ "sections-section-team-section-team-module").then(__webpack_require__.bind(null, /*! ./sections/section-team/section-team.module */ "Zl5o")).then(m => m.SectionTeamModule),
    },
    {
        path: 'section-detail-news',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-section-detail-news-section-detail-news-module */ "sections-section-detail-news-section-detail-news-module").then(__webpack_require__.bind(null, /*! ./sections/section-detail-news/section-detail-news.module */ "K01s"))
            .then(m => m.SectionDetailNewsModule),
    },
    {
        path: 'section-separator',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-section-separator-section-separator-module */ "sections-section-separator-section-separator-module").then(__webpack_require__.bind(null, /*! ./sections/section-separator/section-separator.module */ "AeZj"))
            .then(m => m.SectionSeparatorModule),
    },
    {
        path: 'section-banner-data',
        loadChildren: () => Promise.all(/*! import() | sections-section-banner-data-section-banner-data-module */[__webpack_require__.e("common"), __webpack_require__.e("sections-section-banner-data-section-banner-data-module")]).then(__webpack_require__.bind(null, /*! ./sections/section-banner-data/section-banner-data.module */ "+fkp"))
            .then(m => m.SectionBannerDataModule),
    },
    {
        path: 'app-section',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-app-box-image-text-app-box-image-text-module */ "sections-app-box-image-text-app-box-image-text-module").then(__webpack_require__.bind(null, /*! ./sections/app-box-image-text/app-box-image-text.module */ "rjqe"))
            .then(m => m.AppBoxImageTextModule),
    },
    {
        path: 'app-news',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-app-news-app-news-module */ "sections-app-news-app-news-module").then(__webpack_require__.bind(null, /*! ./sections/app-news/app-news.module */ "ehfI"))
            .then(m => m.appNewsModule),
    },
    {
        path: 'section-banner-logos',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-section-carousel-logos-section-carousel-logos-module */ "sections-section-carousel-logos-section-carousel-logos-module").then(__webpack_require__.bind(null, /*! ./sections/section-carousel-logos/section-carousel-logos.module */ "bPxf"))
            .then(m => m.SectionCarouselLogosModule),
    },
    {
        path: 'section-info-text',
        loadChildren: () => __webpack_require__.e(/*! import() | sections-section-info-text-section-info-text-module */ "sections-section-info-text-section-info-text-module").then(__webpack_require__.bind(null, /*! ./sections/section-info-text/section-info-text.module */ "rROb"))
            .then(m => m.SectionInfoTextModule),
    },
    {
        path: 'es',
        data: { lng: 'es' },
        loadChildren: () => Promise.all(/*! import() | pages-page-dynamic-page-dynamic-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-page-dynamic-page-dynamic-module")]).then(__webpack_require__.bind(null, /*! ./pages/page-dynamic/page-dynamic.module */ "MbDa"))
            .then(m => m.PageDynamicModule),
    },
    {
        path: 'en',
        data: { lng: 'en' },
        loadChildren: () => Promise.all(/*! import() | pages-page-dynamic-page-dynamic-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-page-dynamic-page-dynamic-module")]).then(__webpack_require__.bind(null, /*! ./pages/page-dynamic/page-dynamic.module */ "MbDa"))
            .then(m => m.PageDynamicModule),
    },
    {
        path: '**',
        redirectTo: 'es',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map