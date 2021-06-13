(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["section-jobs-section-jobs-module"],{

/***/ "0LHR":
/*!*****************************************************************************!*\
  !*** ./src/app/components/app-job-detail/enum/job-detail-subtitles-enum.ts ***!
  \*****************************************************************************/
/*! exports provided: JobDetailSubtitlesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailSubtitlesEnum", function() { return JobDetailSubtitlesEnum; });
var JobDetailSubtitlesEnum;
(function (JobDetailSubtitlesEnum) {
    JobDetailSubtitlesEnum["TITLE_DETAIL"] = "titleDetail";
    JobDetailSubtitlesEnum["ADDRESS"] = "address";
    JobDetailSubtitlesEnum["RESUME"] = "resume";
    JobDetailSubtitlesEnum["FUNCTIONS"] = "functions";
    JobDetailSubtitlesEnum["REQUISITES"] = "requisites";
    JobDetailSubtitlesEnum["INSCRIPTION"] = "inscription";
})(JobDetailSubtitlesEnum || (JobDetailSubtitlesEnum = {}));


/***/ }),

/***/ "6EGw":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/w2m-card/w2m-card.component.ts ***!
  \******************************************************************/
/*! exports provided: W2mCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mCardComponent", function() { return W2mCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../w2m-link/w2m-link.component */ "rR0t");




function W2mCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function W2mCardComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.clickedCard.emit(ctx_r1.card); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "w2m-link", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlLink", ctx_r0.urlLink);
} }
const _c0 = [[["", "header-content", ""]], [["", "title-content", ""]], [["", "body-content", ""]]];
const _c1 = ["[header-content]", "[title-content]", "[body-content]"];
class W2mCardComponent {
    constructor() {
        this.clickedCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
W2mCardComponent.ɵfac = function W2mCardComponent_Factory(t) { return new (t || W2mCardComponent)(); };
W2mCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: W2mCardComponent, selectors: [["w2m-card"]], inputs: { card: "card", urlLink: "urlLink" }, outputs: { clickedCard: "clickedCard" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "w2m-card", 3, "click", 4, "ngIf"], [1, "w2m-card", 3, "click"], [1, "w2m-card__link", 3, "urlLink"], [1, "w2m-card__container"]], template: function W2mCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, W2mCardComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_2__["W2mLinkComponent"]], encapsulation: 2 });


/***/ }),

/***/ "JRGd":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/magnolia-apis/jobs.service.ts ***!
  \***************************************************************/
/*! exports provided: JobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsService", function() { return JobsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cms_content_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cms/content-app.service */ "z4vs");



class JobsService {
    constructor(contentAppService) {
        this.contentAppService = contentAppService;
        this.URL_CMS = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].URL_API}/cms/api/v1`;
        this.ENDPOINT_JOBS = 'jobs-endpoint';
        this.contentAppService.urlCms = this.URL_CMS;
    }
    // eslint-disable-next-line max-len
    getJobs(path, size, page, categories) {
        const body = {
            path,
            lang: 'es',
            imagingVariation: 'is6',
            categories: [],
        };
        return this.contentAppService.getContents(this.ENDPOINT_JOBS, body);
    }
    getJobById(jobId) {
        return this.contentAppService.getContentById(this.ENDPOINT_JOBS, jobId);
    }
}
JobsService.ɵfac = function JobsService_Factory(t) { return new (t || JobsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_content_app_service__WEBPACK_IMPORTED_MODULE_2__["ContentAppService"])); };
JobsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JobsService, factory: JobsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "P3nL":
/*!********************************************************************!*\
  !*** ./src/app/components/app-job-detail/app-job-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: AppJobDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppJobDetailModule", function() { return AppJobDetailModule; });
/* harmony import */ var src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/w2m-link/w2m-link.module */ "RLeD");
/* harmony import */ var _shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/w2m-subtitle/w2m-subtitle.module */ "QDaJ");
/* harmony import */ var _app_job_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-job-detail.component */ "e9Wf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppJobDetailModule {
}
AppJobDetailModule.ɵfac = function AppJobDetailModule_Factory(t) { return new (t || AppJobDetailModule)(); };
AppJobDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppJobDetailModule });
AppJobDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_3__["W2mSubtitleModule"],
            src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__["PipesModule"],
            _shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppJobDetailModule, { declarations: [_app_job_detail_component__WEBPACK_IMPORTED_MODULE_4__["AppJobDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_3__["W2mSubtitleModule"],
        src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__["PipesModule"],
        _shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"]], exports: [_app_job_detail_component__WEBPACK_IMPORTED_MODULE_4__["AppJobDetailComponent"]] }); })();


/***/ }),

/***/ "cFe4":
/*!**************************************************************!*\
  !*** ./src/app/sections/section-jobs/section-jobs.module.ts ***!
  \**************************************************************/
/*! exports provided: SectionJobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionJobsModule", function() { return SectionJobsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var src_app_core_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/directives/directives.module */ "2oKa");
/* harmony import */ var src_app_shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/w2m-subtitle/w2m-subtitle.module */ "QDaJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _components_app_job_detail_app_job_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/app-job-detail/app-job-detail.module */ "P3nL");
/* harmony import */ var _shared_components_w2m_card_w2m_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/w2m-card/w2m-card.module */ "k1SU");
/* harmony import */ var _section_jobs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section-jobs.component */ "t9/6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










const MATERIAL_MODULES = [
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
];
class SectionJobsModule {
}
SectionJobsModule.entry = _section_jobs_component__WEBPACK_IMPORTED_MODULE_8__["SectionJobsComponent"];
SectionJobsModule.ɵfac = function SectionJobsModule_Factory(t) { return new (t || SectionJobsModule)(); };
SectionJobsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SectionJobsModule });
SectionJobsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            src_app_shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_3__["W2mSubtitleModule"],
            _shared_components_w2m_card_w2m_card_module__WEBPACK_IMPORTED_MODULE_7__["W2mCardModule"],
            _components_app_job_detail_app_job_detail_module__WEBPACK_IMPORTED_MODULE_6__["AppJobDetailModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            src_app_core_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesModule"],
            MATERIAL_MODULES,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SectionJobsModule, { declarations: [_section_jobs_component__WEBPACK_IMPORTED_MODULE_8__["SectionJobsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        src_app_shared_components_w2m_subtitle_w2m_subtitle_module__WEBPACK_IMPORTED_MODULE_3__["W2mSubtitleModule"],
        _shared_components_w2m_card_w2m_card_module__WEBPACK_IMPORTED_MODULE_7__["W2mCardModule"],
        _components_app_job_detail_app_job_detail_module__WEBPACK_IMPORTED_MODULE_6__["AppJobDetailModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        src_app_core_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"]], exports: [_section_jobs_component__WEBPACK_IMPORTED_MODULE_8__["SectionJobsComponent"]] }); })();


/***/ }),

/***/ "e9Wf":
/*!***********************************************************************!*\
  !*** ./src/app/components/app-job-detail/app-job-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppJobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppJobDetailComponent", function() { return AppJobDetailComponent; });
/* harmony import */ var _enum_job_detail_subtitles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum/job-detail-subtitles-enum */ "0LHR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_w2m_subtitle_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/w2m-subtitle/w2m-subtitle.component */ "WBgv");
/* harmony import */ var _shared_components_w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/w2m-link/w2m-link.component */ "rR0t");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");






function AppJobDetailComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-subtitle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "w2mSafeToHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r4 = ctx.property;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.getClass(property_r4))("w2mSubtitle", ctx_r2.getSubtitle(ctx_r2.job[property_r4]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx_r2.job[property_r4]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function AppJobDetailComponent_div_0_w2m_link_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-link", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", ctx_r3.job.urlJob);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.job.textButton);
} }
const _c0 = function (a0) { return { property: a0 }; };
function AppJobDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppJobDetailComponent_div_0_ng_template_1_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](5, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](8, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](9, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](10, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppJobDetailComponent_div_0_w2m_link_11_Template, 3, 2, "w2m-link", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx_r0.JobDetailSubtitles.TITLE_DETAIL));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx_r0.JobDetailSubtitles.ADDRESS));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx_r0.JobDetailSubtitles.RESUME));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx_r0.JobDetailSubtitles.FUNCTIONS));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx_r0.JobDetailSubtitles.REQUISITES));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx_r0.JobDetailSubtitles.INSCRIPTION));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.job.urlJob);
} }
class AppJobDetailComponent {
    constructor() {
        this.JobDetailSubtitles = _enum_job_detail_subtitles_enum__WEBPACK_IMPORTED_MODULE_0__["JobDetailSubtitlesEnum"];
    }
    getSubtitle(title) {
        return { title };
    }
    getClass(property) {
        return `app-job-detail-subtitle-${property}`;
    }
}
AppJobDetailComponent.ɵfac = function AppJobDetailComponent_Factory(t) { return new (t || AppJobDetailComponent)(); };
AppJobDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppJobDetailComponent, selectors: [["app-job-detail"]], inputs: { job: "job" }, decls: 1, vars: 1, consts: [["class", "app-job-detail", 4, "ngIf"], [1, "app-job-detail"], ["subtitleTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "small-line"], [1, "app-job-detail__columns"], [3, "urlLink", 4, "ngIf"], [3, "ngClass", "w2mSubtitle"], ["title-content", "", 3, "innerHTML"], [3, "urlLink"]], template: function AppJobDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppJobDetailComponent_div_0_Template, 12, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.job);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _shared_components_w2m_subtitle_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_3__["W2mSubtitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shared_components_w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_4__["W2mLinkComponent"]], pipes: [_core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__["W2mSafeHtmlPipe"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.app-job-detail__columns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-job-detail[_ngcontent-%COMP%]   .small-line[_ngcontent-%COMP%] {\n  background: #72BF44;\n  height: 0.3125rem;\n  width: 3.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXBwLWpvYi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7OztFQUtFLGNDTFM7QUNDWDs7QUZPQTs7Ozs7RUFLRSxjQ0lLO0FDUlA7O0FGT0E7RUFDRSxjQ0dhO0VERmIsZ0JBQUE7QUVKRjs7QUZLRTtFQUNFLHlCQ2xCSTtFRG1CSixZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FFSEo7O0FGT0E7RUFDRSxjQzVCTTtFRDZCTiwwQkFBQTtFQUNBLGdCQUFBO0FFSkY7O0FGTUU7RUFDRSxjQ25DTztFRG9DUCxnQkFBQTtBRUpKOztBRllNOztFQUVFLHlCQ3RCVTtBQ2FsQjs7QUZhSTtFQUNFLG1CQzNCWTtBQ2dCbEI7O0FGaUJNOztFQUVFLHlCQ2xDSTtBQ21CWjs7QUZtQkk7RUFDRSxtQkN2Q007QUNzQlo7O0FGb0JJO0VBQ0UseUJDM0NNO0FDeUJaOztBRndCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRXJCRjs7QUZ1QkU7RUFMRjtJQU1JLGlCQUFBO0lBQ0EsaUJBQUE7RUVwQkY7QUFDRjs7QUZ5QkU7RUFDRTtJQUNFLDJCQzNDUTtFQ3FCWjtFRnlCRTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7RUV2Qko7QUFDRjs7QUY4QkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FFM0JKOztBRjZCSTtFQUNFLGNDekZFO0VEMEZGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FFM0JOOztBRjZCTTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUUxQk47QUFDRjs7QUY0Qk07RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRTFCUjs7QUY0QlE7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsZUFBQTtFRXpCUjtBQUNGOztBRmdDQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUU3QkE7O0FGK0JFO0VBSkY7SUcvSUUsc0JGMERnQjtJRXpEaEIsbUJGeURnQjtFQytEaEI7QUFDRjs7QUZnQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQzNKUztFRDRKVCxjQ3RJTTtFRHVJTixnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFN0JGOztBRitCRTs7RUFFRSx1QkFBQTtBRTdCSjs7QUZrQ0M7RUFDQyxtQkN6S007QUMwSVI7O0FGaUNFO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtBRS9CSjs7QUZvQ0E7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0FFakNGOztBRm1DRTtFQUNFLHVDQUFBO0FFakNKOztBQXhKRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQTJKSjs7QUF4SkU7RUFDRSxtQkRKSTtFQ0tKLGlCQUFBO0VBQ0EsY0FBQTtBQTBKSiIsImZpbGUiOiJhcHAtam9iLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL2Jhc2VcIjtcblxuLmFwcC1qb2ItZGV0YWlsIHtcbiAgJl9fY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuc21hbGwtbGluZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG4iLCJAbWl4aW4gdWJpLXBhZGRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAkc2VjdGlvbi1wYWRkaW5nO1xuICBwYWRkaW5nLXRvcDogJHNlY3Rpb24tcGFkZGluZztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "k1SU":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/w2m-card/w2m-card.module.ts ***!
  \***************************************************************/
/*! exports provided: W2mCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mCardModule", function() { return W2mCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _w2m_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w2m-card.component */ "6EGw");
/* harmony import */ var _w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../w2m-link/w2m-link.module */ "RLeD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class W2mCardModule {
}
W2mCardModule.ɵfac = function W2mCardModule_Factory(t) { return new (t || W2mCardModule)(); };
W2mCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: W2mCardModule });
W2mCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](W2mCardModule, { declarations: [_w2m_card_component__WEBPACK_IMPORTED_MODULE_1__["W2mCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"]], exports: [_w2m_card_component__WEBPACK_IMPORTED_MODULE_1__["W2mCardComponent"]] }); })();


/***/ }),

/***/ "t9/6":
/*!*****************************************************************!*\
  !*** ./src/app/sections/section-jobs/section-jobs.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionJobsComponent", function() { return SectionJobsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _section_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section-common */ "0D8H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_magnolia_apis_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/magnolia-apis/jobs.service */ "JRGd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _components_app_job_detail_app_job_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/app-job-detail/app-job-detail.component */ "e9Wf");
/* harmony import */ var _shared_components_w2m_subtitle_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/w2m-subtitle/w2m-subtitle.component */ "WBgv");
/* harmony import */ var _shared_components_w2m_card_w2m_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/w2m-card/w2m-card.component */ "6EGw");
/* harmony import */ var _core_directives_lazysizes_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/directives/lazysizes.directive */ "zTNx");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");












const _c0 = ["drawer"];
function SectionJobsComponent_ng_container_5_ng_container_1_w2m_subtitle_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtitle_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subtitle_r6.title, " ");
} }
function SectionJobsComponent_ng_container_5_ng_container_1_w2m_subtitle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "w2m-subtitle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SectionJobsComponent_ng_container_5_ng_container_1_w2m_subtitle_2_p_1_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtitle_r6 = ctx.ngIf;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("w2mSubtitle", item_r3.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subtitle_r6.title);
} }
function SectionJobsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SectionJobsComponent_ng_container_5_ng_container_1_w2m_subtitle_2_Template, 2, 2, "w2m-subtitle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.field);
} }
function SectionJobsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SectionJobsComponent_ng_container_5_ng_container_1_Template, 4, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", item_r3.typeComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ComponentType.ComponentSubtitle);
} }
function SectionJobsComponent_div_6_div_10_h5_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectionJobsComponent_div_6_div_10_h5_1_Template_h5_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const category_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r16.navigateToCategoryPage($event, category_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "em", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r15);
} }
function SectionJobsComponent_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SectionJobsComponent_div_6_div_10_h5_1_Template, 4, 1, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.getJobCategories(job_r11));
} }
function SectionJobsComponent_div_6_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, job_r11.date, "fullDate"));
} }
function SectionJobsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "w2m-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SectionJobsComponent_div_6_Template_w2m_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const job_r11 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.showJobDetail(job_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "w2mSafeToHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SectionJobsComponent_div_6_div_10_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SectionJobsComponent_div_6_p_11_Template, 3, 4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("card", job_r11)("urlLink", job_r11.urlLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appDatasrc", job_r11.image)("alt", job_r11.altText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, job_r11.introduction), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r11.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r11.date);
} }
class SectionJobsComponent extends _section_common__WEBPACK_IMPORTED_MODULE_1__["SectionCommon"] {
    constructor(jobsService, router) {
        super();
        this.jobsService = jobsService;
        this.router = router;
    }
    ngOnInit() {
        if (this.data) {
            const { path, size } = this.data;
            this.jobs$ = this.jobsService.getJobs(path, size).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => data.jobs));
        }
    }
    getJobCategories(job) {
        return job.categories
            .map(category => category.name)
            .reduce((acc, val) => acc.concat(val), []);
    }
    showJobDetail(jobId) {
        this.jobsService.getJobById(jobId).subscribe((job) => {
            this.selectedJob = job;
            this.drawer.toggle();
        });
    }
    navigateToCategoryPage(event, category) {
        event.stopPropagation();
    }
}
SectionJobsComponent.ɵfac = function SectionJobsComponent_Factory(t) { return new (t || SectionJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_magnolia_apis_jobs_service__WEBPACK_IMPORTED_MODULE_3__["JobsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SectionJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SectionJobsComponent, selectors: [["app-section-jobs"]], viewQuery: function SectionJobsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 5, consts: [[1, "section"], [1, "container", "section-jobs"], [1, "columns", "is-multiline", "is-variable"], [1, "column", "is-12-tablet", "is-8-widescreen"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], ["class", "column is-4", 4, "ngFor", "ngForOf"], [1, "w2m-sidenav-menu"], ["position", "end", "mode", "over", 1, "w2m-sidenav-menu__container"], ["drawer", ""], [3, "job"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "column", "is-12", "section-jobs-subtitle"], ["class", "section-jobs-subtitle", 3, "w2mSubtitle", 4, "ngIf"], [1, "small-line"], [1, "section-jobs-subtitle", 3, "w2mSubtitle"], ["title-content", "", 4, "ngIf"], ["title-content", ""], [1, "column", "is-4"], [1, "w2m-card", 3, "card", "urlLink", "click"], ["header-content", "", 1, "w2m-card__image"], [1, "w2m-card__card-image-img", 3, "appDatasrc", "alt"], ["title-content", "", 1, "w2m-card__content-title"], ["body-content", "", 1, "w2m-card__content"], [1, "w2m-card__content-paragraph", 3, "innerHTML"], [1, "w2m-card__detail"], ["class", "w2m-card__category", 4, "ngIf"], [4, "ngIf"], [1, "w2m-card__category"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "far", "fa-tags"]], template: function SectionJobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SectionJobsComponent_ng_container_5_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SectionJobsComponent_div_6_Template, 12, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-drawer-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-drawer", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-job-detail", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, ctx.jobs$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("job", ctx.selectedJob);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"], _components_app_job_detail_app_job_detail_component__WEBPACK_IMPORTED_MODULE_7__["AppJobDetailComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_w2m_subtitle_w2m_subtitle_component__WEBPACK_IMPORTED_MODULE_8__["W2mSubtitleComponent"], _shared_components_w2m_card_w2m_card_component__WEBPACK_IMPORTED_MODULE_9__["W2mCardComponent"], _core_directives_lazysizes_directive__WEBPACK_IMPORTED_MODULE_10__["LazysizesDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_11__["W2mSafeHtmlPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.section-jobs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n\n.section-jobs-subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n\n.section-jobs-subtitle[_ngcontent-%COMP%]   .small-line[_ngcontent-%COMP%] {\n  background: #72BF44;\n  height: 0.3125rem;\n  width: 3.75rem;\n}\n\n.section-jobs-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 26.5rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n\n@media (min-width: 64rem) {\n  .section-jobs[_ngcontent-%COMP%]   .w2m-card[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card__image[_ngcontent-%COMP%] {\n  height: 12rem;\n  overflow: hidden;\n  width: 100%;\n}\n\n@media (min-width: 64rem) {\n  .section-jobs[_ngcontent-%COMP%]   .w2m-card__image[_ngcontent-%COMP%] {\n    height: 11.75rem;\n  }\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n  transition: 0.3s ease;\n  width: 100%;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card__content-title[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  height: 2.8125rem;\n  -webkit-line-clamp: 2;\n  margin-top: 1.25rem;\n  overflow: hidden;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card-description[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  height: 4.375rem;\n  -webkit-line-clamp: 3;\n  margin-top: 1.25rem;\n  overflow: hidden;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card__category[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: absolute;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card__category[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-block-end: 0;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card__category[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72BF44;\n}\n\n.section-jobs[_ngcontent-%COMP%]   .w2m-card[_ngcontent-%COMP%]:hover   .w2m-card__card-image-img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.w2m-sidenav-menu__container[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  height: 100vh;\n  padding: 1.25rem;\n  position: fixed;\n  width: 18.75rem;\n  z-index: 3;\n}\n\n@media (min-width: 48.0625rem) {\n  .w2m-sidenav-menu__container[_ngcontent-%COMP%] {\n    padding: 1.25rem 0.625rem 1.875rem 3.75rem;\n    width: 50vw;\n  }\n}\n\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-bottom: solid 0.0625rem #D0D0D0;\n}\n\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 1.25rem 0;\n}\n\n.w2m-sidenav-menu__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\n.w2m-sidenav-menu__container-rrss[_ngcontent-%COMP%] {\n  margin-top: 3.75rem;\n  width: 100%;\n}\n\n.w2m-sidenav-menu__container-rrss-icons[_ngcontent-%COMP%] {\n  color: #72BF44;\n  display: flex;\n  gap: 1.25rem;\n  margin-bottom: 1.25rem;\n  transition: 0.3 ease;\n}\n\n.w2m-sidenav-menu__container-rrss-icons[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  transition: 0.1s ease;\n}\n\n.w2m-sidenav-menu__container-rrss-icons[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n}\n\n  .mat-drawer-backdrop.mat-drawer-shown {\n  position: fixed;\n}\n\n  .mat-drawer {\n  color: #616161;\n}\n\n  .mat-drawer-container {\n  z-index: 3 !important;\n}\n\n  .mat-drawer-inner-container {\n  padding-right: 1.25rem;\n  scrollbar-width: thin;\n}\n\n  .mat-drawer-inner-container a:focus-visible {\n  outline: none;\n}\n\n@media (min-width: 64rem) {\n    .mat-drawer-inner-container {\n    padding-right: 3.125rem;\n  }\n}\n\n  .mat-drawer-inner-container::-webkit-scrollbar {\n  width: 0.375rem;\n}\n\n  .mat-drawer-inner-container::-webkit-scrollbar-thumb {\n  background: #D0D0D0;\n  border-radius: 0.625rem;\n  margin: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2VjdGlvbi1qb2JzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7Ozs7RUFLRSxjQ0xTO0FDQ1g7O0FGT0E7Ozs7O0VBS0UsY0NJSztBQ1JQOztBRk9BO0VBQ0UsY0NHYTtFREZiLGdCQUFBO0FFSkY7O0FGS0U7RUFDRSx5QkNsQkk7RURtQkosWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRUhKOztBRk9BO0VBQ0UsY0M1Qk07RUQ2Qk4sMEJBQUE7RUFDQSxnQkFBQTtBRUpGOztBRk1FO0VBQ0UsY0NuQ087RURvQ1AsZ0JBQUE7QUVKSjs7QUZZTTs7RUFFRSx5QkN0QlU7QUNhbEI7O0FGYUk7RUFDRSxtQkMzQlk7QUNnQmxCOztBRmlCTTs7RUFFRSx5QkNsQ0k7QUNtQlo7O0FGbUJJO0VBQ0UsbUJDdkNNO0FDc0JaOztBRm9CSTtFQUNFLHlCQzNDTTtBQ3lCWjs7QUZ3QkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUVyQkY7O0FGdUJFO0VBTEY7SUFNSSxpQkFBQTtJQUNBLGlCQUFBO0VFcEJGO0FBQ0Y7O0FGeUJFO0VBQ0U7SUFDRSwyQkMzQ1E7RUNxQlo7RUZ5QkU7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VFdkJKO0FBQ0Y7O0FGOEJFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRTNCSjs7QUY2Qkk7RUFDRSxjQ3pGRTtFRDBGRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBRTNCTjs7QUY2Qk07RUFWRjtJQVdJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VFMUJOO0FBQ0Y7O0FGNEJNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUUxQlI7O0FGNEJRO0VBSkY7SUFLSSxnQkFBQTtJQUNBLGVBQUE7RUV6QlI7QUFDRjs7QUZnQ0E7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FFN0JBOztBRitCRTtFQUpGO0lHL0lFLHNCRjBEZ0I7SUV6RGhCLG1CRnlEZ0I7RUMrRGhCO0FBQ0Y7O0FGZ0NBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkMzSlM7RUQ0SlQsY0N0SU07RUR1SU4sZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRTdCRjs7QUYrQkU7O0VBRUUsdUJBQUE7QUU3Qko7O0FGa0NDO0VBQ0MsbUJDektNO0FDMElSOztBRmlDRTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7QUUvQko7O0FGb0NBO0VBQ0UsZ0JBQUE7RUFDQSx1Q0FBQTtBRWpDRjs7QUZtQ0U7RUFDRSx1Q0FBQTtBRWpDSjs7QUF4SkU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUEySko7O0FBdkpJO0VBQ0Usd0JBQUE7QUF5Sk47O0FBdEpJO0VBQ0UsbUJEVEU7RUNVRixpQkFBQTtFQUNBLGNBQUE7QUF3Sk47O0FBckpJO0VBQ0UsY0RHUztBQ29KZjs7QUFuSkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFxSko7O0FBbkpJO0VBTkY7SUFPSSxnQkFBQTtFQXNKSjtBQUNGOztBQXBKSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFzSk47O0FBcEpNO0VBTEY7SUFNSSxnQkFBQTtFQXVKTjtBQUNGOztBQXJKTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQXVKUjs7QUFuSkk7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFxSk47O0FBbEpJO0VBQ0UsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBb0pOOztBQWpKSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQW1KTjs7QUFqSk07RUFDRSxtQkFBQTtBQW1KUjs7QUFoSk07RUFDRSxjRHpFQTtBQzJOUjs7QUE3SU07RUFDRSxxQkFBQTtBQStJUjs7QUF4SUU7RUFDRSx5QkRuRUk7RUNvRUosYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBMklKOztBQXpJSTtFQVJGO0lBU0ksMENBQUE7SUFDQSxXQUFBO0VBNElKO0FBQ0Y7O0FBMUlJO0VBQ0Usc0NBQUE7QUE0SU47O0FBMUlNOztFQUVFLFNBQUE7QUE0SVI7O0FBeklNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBMklSOztBQXpJUTtFQUNFLGNEbEhDO0FDNlBYOztBQXRJSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQXdJTjs7QUF0SU07RUFDRSxjRDFIQTtFQzJIQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUF3SVI7O0FBdElRO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQXdJVjs7QUF0SVU7RUFDRSxjRHZJRDtBQytRWDs7QUFoSUE7RUFDRSxlQUFBO0FBbUlGOztBQWhJQTtFQUNFLGNEbklLO0FDc1FQOztBQWhJQTtFQUNFLHFCQUFBO0FBbUlGOztBQWhJQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUFtSUY7O0FBaElJO0VBQ0UsYUFBQTtBQWtJTjs7QUE5SEU7RUFWRjtJQVdJLHVCQUFBO0VBaUlGO0FBQ0Y7O0FBL0hFO0VBQ0UsZUFBQTtBQWlJSjs7QUE5SEU7RUFDRSxtQkQ1Slc7RUM2SlgsdUJBQUE7RUFDQSxlQUFBO0FBZ0lKIiwiZmlsZSI6InNlY3Rpb24tam9icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL2Jhc2VcIjtcblxuLnNlY3Rpb24tam9icyB7XG4gIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICYtc3VidGl0bGUge1xuICAgIHAge1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMC41cmVtO1xuICAgIH1cblxuICAgIC5zbWFsbC1saW5lIHtcbiAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgICAgd2lkdGg6IDMuNzVyZW07XG4gICAgfVxuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyYXktOTAwO1xuICAgIH1cbiAgfVxuXG4gIC53Mm0tY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMjYuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgaGVpZ2h0OiAxMS43NXJlbTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50LXRpdGxlIHtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGhlaWdodDogMi44MTI1cmVtO1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJi1kZXNjcmlwdGlvbiB7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBoZWlnaHQ6IDQuMzc1cmVtO1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJl9fY2F0ZWdvcnkge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGVtIHtcbiAgICAgICAgY29sb3I6ICRncmVlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC53Mm0tY2FyZF9fY2FyZC1pbWFnZS1pbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi53Mm0tc2lkZW5hdi1tZW51IHtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTguNzVyZW07XG4gICAgei1pbmRleDogMztcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtdGFibGV0KSB7XG4gICAgICBwYWRkaW5nOiAxLjI1cmVtIDAuNjI1cmVtIDEuODc1cmVtIDMuNzVyZW07XG4gICAgICB3aWR0aDogNTB2dztcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjA2MjVyZW0gJHNvZnRncmF5LTEwMDtcblxuICAgICAgaDMsXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxLjI1cmVtIDA7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1ycnNzIHtcbiAgICAgIG1hcmdpbi10b3A6IDMuNzVyZW07XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJi1pY29ucyB7XG4gICAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zIGVhc2U7XG5cbiAgICAgICAgZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRyYXdlciB7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDMgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcblxuICBhIHtcbiAgICAmOmZvY3VzLXZpc2libGUge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMC4zNzVyZW07XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJHNvZnRncmF5LTEwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgICBtYXJnaW46IDEuMjVyZW07XG4gIH1cbn1cbiIsIkBtaXhpbiB1YmktcGFkZGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206ICRzZWN0aW9uLXBhZGRpbmc7XG4gIHBhZGRpbmctdG9wOiAkc2VjdGlvbi1wYWRkaW5nO1xufVxuIl19 */"] });


/***/ }),

/***/ "z4vs":
/*!************************************************************!*\
  !*** ./src/app/shared/services/cms/content-app.service.ts ***!
  \************************************************************/
/*! exports provided: ContentAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAppService", function() { return ContentAppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms.service */ "Y+X5");


class ContentAppService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    set urlCms(value) {
        this.cmsService.urlCms = value;
    }
    getContents(endpoint, body) {
        return this.cmsService.post(endpoint, body);
    }
    getContentById(endpoint, id) {
        return this.cmsService.get(`${endpoint}/${id}`);
    }
}
ContentAppService.ɵfac = function ContentAppService_Factory(t) { return new (t || ContentAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__["CmsService"])); };
ContentAppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentAppService, factory: ContentAppService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=section-jobs-section-jobs-module.js.map