(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sections-section-team-section-team-module"],{

/***/ "RUvV":
/*!***************************************************************!*\
  !*** ./src/app/sections/section-team/section-team.routing.ts ***!
  \***************************************************************/
/*! exports provided: SectionTeamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTeamRoutingModule", function() { return SectionTeamRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _section_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-team.component */ "utkF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _section_team_component__WEBPACK_IMPORTED_MODULE_1__["SectionTeamComponent"],
    },
];
class SectionTeamRoutingModule {
}
SectionTeamRoutingModule.ɵfac = function SectionTeamRoutingModule_Factory(t) { return new (t || SectionTeamRoutingModule)(); };
SectionTeamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SectionTeamRoutingModule });
SectionTeamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SectionTeamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Zl5o":
/*!**************************************************************!*\
  !*** ./src/app/sections/section-team/section-team.module.ts ***!
  \**************************************************************/
/*! exports provided: SectionTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTeamModule", function() { return SectionTeamModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _section_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-team.component */ "utkF");
/* harmony import */ var _section_team_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-team.routing */ "RUvV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SectionTeamModule {
}
SectionTeamModule.ɵfac = function SectionTeamModule_Factory(t) { return new (t || SectionTeamModule)(); };
SectionTeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SectionTeamModule });
SectionTeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _section_team_routing__WEBPACK_IMPORTED_MODULE_2__["SectionTeamRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SectionTeamModule, { declarations: [_section_team_component__WEBPACK_IMPORTED_MODULE_1__["SectionTeamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _section_team_routing__WEBPACK_IMPORTED_MODULE_2__["SectionTeamRoutingModule"]] }); })();


/***/ }),

/***/ "utkF":
/*!*****************************************************************!*\
  !*** ./src/app/sections/section-team/section-team.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTeamComponent", function() { return SectionTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SectionTeamComponent {
}
SectionTeamComponent.ɵfac = function SectionTeamComponent_Factory(t) { return new (t || SectionTeamComponent)(); };
SectionTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTeamComponent, selectors: [["section-team"]], decls: 101, vars: 0, consts: [[1, "section-cards", "section"], [1, "container"], [1, "columns", "is-variable", "is-multiline", "is-centered", "is-8"], [1, "column", "is-12"], [1, "section-cards__title"], [1, "column", "is-6-tablet", "is-4-desktop"], [1, "team-card"], [1, "team-card__img"], ["src", "https://images.unsplash.com/photo-1614805380833-62f701bb74ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "alt", "team member"], [1, "team-card__border--top"], [1, "team-card__border--bottom"], [1, "team-card__border-links"], ["href", "mailto:elcorreoquequieres@correo.com"], [1, "far", "fa-envelope"], ["href", "https://es.linkedin.com/"], [1, "fab", "fa-linkedin-in"], [1, "team-card__text"], [1, "team-card__text-name"], [1, "team-card__text-description"], ["src", "https://images.unsplash.com/photo-1544053287-37b042a45a17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "alt", "team member"], ["src", "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "alt", "team member"], ["src", "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "alt", "team member"], ["src", "https://images.unsplash.com/photo-1614440546103-edcb1439cad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80", "alt", "team member"]], template: function SectionTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nuestro equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "em", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Marta Cerd\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Eligendi, placeat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "em", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Basil Poledouris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem, ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "em", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Will Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Voluptate ullam molestias maxime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "em", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Dami\u00E0 Rotger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Enim atque quae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "em", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Laura Messeguer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.section-cards__title[_ngcontent-%COMP%] {\n  margin-top: 6.375rem;\n}\n\n.team-card[_ngcontent-%COMP%] {\n  background: #003E72;\n  border: 0 1.875rem 1.875rem 0 solid #FFFFFF;\n  display: inline-block;\n  margin-bottom: 9rem;\n  padding-bottom: 2.1875rem;\n  padding-right: 2.1875rem;\n  position: relative;\n  width: 100%;\n}\n\n@media (max-width: 64rem) {\n  .team-card[_ngcontent-%COMP%] {\n    width: 92%;\n  }\n}\n\n.team-card__img[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 27.625rem;\n  justify-content: center;\n  margin: 0;\n  overflow: hidden;\n}\n\n@media (min-width: 48.0625rem) {\n  .team-card__img[_ngcontent-%COMP%] {\n    height: 20.1875rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .team-card__img[_ngcontent-%COMP%] {\n    height: 17.5rem;\n  }\n}\n\n@media (min-width: 88rem) {\n  .team-card__img[_ngcontent-%COMP%] {\n    height: 20.1875rem;\n  }\n}\n\n.team-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  transition: 0.3s;\n  width: 100%;\n}\n\n.team-card__border--top[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  bottom: 0;\n  height: 4.375rem;\n  position: absolute;\n  right: -1.875rem;\n  top: 0;\n  transition: 0.3s;\n  width: 1.875rem;\n}\n\n.team-card__border--bottom[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  bottom: -1.875rem;\n  height: 1.875rem;\n  position: absolute;\n  transition: 0.3s;\n  width: 6.25rem;\n}\n\n.team-card__border-links[_ngcontent-%COMP%] {\n  bottom: -1.875rem;\n  position: absolute;\n  right: 0;\n}\n\n.team-card__border-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0;\n}\n\n.team-card__border-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-left: 1.25rem;\n}\n\n.team-card__border-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n\n.team-card__text[_ngcontent-%COMP%] {\n  bottom: -12.625rem;\n  left: 0;\n  position: absolute;\n}\n\n.team-card__text-name[_ngcontent-%COMP%] {\n  color: #003E72;\n  font-size: 1.25rem;\n  font-weight: bold;\n  margin-bottom: 0.5625rem;\n  margin-top: 1.3125rem;\n}\n\n.team-card__text-description[_ngcontent-%COMP%] {\n  color: #909090;\n  font-size: 0.875rem;\n  margin-bottom: 6.25rem;\n}\n\n.team-card[_ngcontent-%COMP%]:hover   .team-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n\n.team-card[_ngcontent-%COMP%]:hover   .team-card__border--top[_ngcontent-%COMP%] {\n  height: 2.5rem;\n}\n\n.team-card[_ngcontent-%COMP%]:hover   .team-card__border--bottom[_ngcontent-%COMP%] {\n  width: 8.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2VjdGlvbi10ZWFtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7Ozs7RUFLRSxjQ0xTO0FDQ1g7O0FGT0E7Ozs7O0VBS0UsY0NJSztBQ1JQOztBRk9BO0VBQ0UsY0NHYTtFREZiLGdCQUFBO0FFSkY7O0FGS0U7RUFDRSx5QkNsQkk7RURtQkosWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRUhKOztBRk9BO0VBQ0UsY0M1Qk07RUQ2Qk4sMEJBQUE7RUFDQSxnQkFBQTtBRUpGOztBRk1FO0VBQ0UsY0NuQ087RURvQ1AsZ0JBQUE7QUVKSjs7QUZZTTs7RUFFRSx5QkN0QlU7QUNhbEI7O0FGYUk7RUFDRSxtQkMzQlk7QUNnQmxCOztBRmlCTTs7RUFFRSx5QkNsQ0k7QUNtQlo7O0FGbUJJO0VBQ0UsbUJDdkNNO0FDc0JaOztBRm9CSTtFQUNFLHlCQzNDTTtBQ3lCWjs7QUZ3QkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUVyQkY7O0FGdUJFO0VBTEY7SUFNSSxpQkFBQTtJQUNBLGlCQUFBO0VFcEJGO0FBQ0Y7O0FGeUJFO0VBQ0U7SUFDRSwyQkMzQ1E7RUNxQlo7RUZ5QkU7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VFdkJKO0FBQ0Y7O0FGOEJFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRTNCSjs7QUY2Qkk7RUFDRSxjQ3pGRTtFRDBGRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBRTNCTjs7QUY2Qk07RUFWRjtJQVdJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VFMUJOO0FBQ0Y7O0FGNEJNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUUxQlI7O0FGNEJRO0VBSkY7SUFLSSxnQkFBQTtJQUNBLGVBQUE7RUV6QlI7QUFDRjs7QUZnQ0E7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FFN0JBOztBRitCRTtFQUpGO0lHL0lFLHNCRjBEZ0I7SUV6RGhCLG1CRnlEZ0I7RUMrRGhCO0FBQ0Y7O0FGZ0NBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkMzSlM7RUQ0SlQsY0N0SU07RUR1SU4sZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRTdCRjs7QUYrQkU7O0VBRUUsdUJBQUE7QUU3Qko7O0FGa0NDO0VBQ0MsbUJDektNO0FDMElSOztBRmlDRTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7QUUvQko7O0FGb0NBO0VBQ0UsZ0JBQUE7RUFDQSx1Q0FBQTtBRWpDRjs7QUZtQ0U7RUFDRSx1Q0FBQTtBRWpDSjs7QUF4SkU7RUFDRSxvQkFBQTtBQTJKSjs7QUF2SkE7RUFDRSxtQkROUztFQ09ULDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUEwSkY7O0FBeEpFO0VBVkY7SUFXSSxVQUFBO0VBMkpGO0FBQ0Y7O0FBekpFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQTJKSjs7QUF6Skk7RUFSRjtJQVNJLGtCQUFBO0VBNEpKO0FBQ0Y7O0FBMUpJO0VBWkY7SUFhSSxlQUFBO0VBNkpKO0FBQ0Y7O0FBM0pJO0VBaEJGO0lBaUJJLGtCQUFBO0VBOEpKO0FBQ0Y7O0FBNUpJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUE4Sk47O0FBMUpFO0VBQ0UseUJEN0NJO0VDOENKLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBNEpKOztBQXpKRTtFQUNFLHlCRHhESTtFQ3lESixpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUEySko7O0FBeEpFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUEwSko7O0FBeEpJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQTBKTjs7QUF4Sk07RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBMEpSOztBQXhKUTtFQUNFLFNBQUE7QUEwSlY7O0FBcEpFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFzSko7O0FBcEpJO0VBQ0UsY0Q3Rks7RUM4Rkwsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFzSk47O0FBbkpJO0VBQ0UsY0RsRlM7RUNtRlQsbUJBQUE7RUFDQSxzQkFBQTtBQXFKTjs7QUEvSU07RUFDRSxxQkFBQTtBQWlKUjs7QUE3SUk7RUFDRSxjQUFBO0FBK0lOOztBQTVJSTtFQUNFLGVBQUE7QUE4SU4iLCJmaWxlIjoic2VjdGlvbi10ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi9taXhpbnNcIjtcblxuLy9UeXBvZ3JhcGh5XG5oMSxcbmgyLFxuLm1hdC1kaXNwbGF5LTEsXG4ubWF0LWRpc3BsYXktMlxuIHtcbiAgY29sb3I6ICRwcmltYXJ5O1xufVxuXG5oMyxcbmg0LFxuaDUsXG5oNixcbnN0cm9uZyB7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuaDMge1xuICBjb2xvcjogJGRhcmtncmF5LTkwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjMxMjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4zNzVyZW07XG4gICAgd2lkdGg6IDMuNzVyZW07XG4gIH1cbn1cblxuYSB7XG4gIGNvbG9yOiAkZ3JlZW47XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkZGFya2JsdWU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxufVxuXG4vLyBzZWN0aW9uIGJ5IGNvbG9yc1xuLmJyYW5kLWNvbG9yIHtcbiAgJi5pYmVyb3N0YXIge1xuICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGliZXJvc3Rhci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbWctZmxvYXQtdGV4dCBoMjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkaWJlcm9zdGFyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICYudzJtIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSAge1xuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLWxlZnQsXG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tcmlnaHQgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHcybS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbWctZmxvYXQtdGV4dCBoMjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkdzJtLWNvbG9yO1xuICAgIH1cblxuICAgIC5iYW5uZXItZGF0YV9fc3RhdC1udW1iZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkdzJtLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEaXNwbGEtMSBSZXNwb25zaXZlXG4ubWF0LWRpc3BsYXktMSwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgbWFyZ2luOiAwIDAgMS43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWZ1bGxoZCkge1xuICAgIGZvbnQtc2l6ZTogNi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5cbi8vIFJvdyBSZXZlcnNlXG4ucm93LXJldmVyc2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0e1xuICAgICAgZmxleC1kaXJlY3Rpb246ICRyZXZlcnNlLWJveDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1jb250YWluZXItaW1hZ2UtLWNvbnRhaW5lciB7XG4gICAgICBsZWZ0OmF1dG8gIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4vLyBQb3JxdWUgYXF1aSBlbiBlbCBiYXNlID8/IFxuXG5cbi5ib3gtaW1hZ2UtdGV4dC1mdWxsIHtcbiAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICBcbiAgICBoMiB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDMuNzVyZW0gIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogNy41cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUGFkZGluZyBzZWN0aW9uXG4udWJpLXBhZGRpbmctc2VjdGlvbiB7XG5wYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbnBhZGRpbmctdG9wOiAzLjc1cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgIEBpbmNsdWRlIHViaS1wYWRkaW5nLXNlY3Rpb247XG4gIH1cbn1cblxuLy8gVWJpY28gQnV0dG9uIFxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm94LXNoYWRvdzogMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgXG4gIGVtLFxuICBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNDM3NXJlbTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeTtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRwcmltYXJ5O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbiB9XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHNlY29uZGFyeTtcblxuICAmLmJ0bi1zZWNvbmRhcnktb3V0bGluZSB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgfVxufVxuIiwiLy8gT3ZlcnJpZGluZyBnbG9iYWwgdmFyaWFibGVzXG5cbi8vIENPTE9SU1xuXG4kZGFya2JsdWU6ICMwMDNFNzI7XG5cbiRncmVlbjogIzcyQkY0NDtcblxuJHNvZnRibHVlOiAjMDBBN0UxO1xuJHNvZnRibHVlLTEwMDogI0IzRTVGNjtcblxuJHR1cnF1b2lzZTogIzFFQ0FEMztcblxuJHBpbms6ICNERjE2ODM7XG5cbiRwdXJwbGU6ICM2MDI2OUU7XG5cbiRyZWQ6ICNGRjBBMEE7XG5cbiRvcmFuZ2U6ICNGNEI2M0U7XG5cbiRncmF5OiAjNjE2MTYxO1xuJHNvZnRncmF5LTEwMDogI0QwRDBEMDtcbiRzb2Z0Z3JheS0zMDA6ICM5MDkwOTA7XG4kZGFya2dyYXktOTAwOiAjMzMzMzMzO1xuXG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRpYmVyb3N0YXItY29sb3I6ICM2N0JBQUY7XG4kdzJtLWNvbG9yOiAjQzRENjAwO1xuXG4kdGl0bGVzLWNvbG9yOiAkZGFya2JsdWU7XG4kYm9keS1jb2xvcjogJGdyYXk7XG4kc29mdC10ZXh0OiAkc29mdGdyYXktMzAwO1xuXG4kcHJpbWFyeTogJGRhcmtibHVlO1xuJHNlY29uZGFyeTogJGdyZWVuO1xuJHRlcnRpYXJ5OiAkc29mdGJsdWU7XG4kcXVhdGVybmFyeTogJHR1cnF1b2lzZTtcbiRxdWluYXJ5OiAkcGluaztcbiRzZXh0YXJ5OiAkcHVycGxlO1xuXG4kaW5mbzogJHNvZnRibHVlLTEwMDtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogJG9yYW5nZTtcbiRkYW5nZXI6ICRyZWQ7XG5cbiRoZWFkaW5ncy1jb2xvcjogJHByaW1hcnk7XG5cbi8vIEJPWCBDT01QT05FTlRTXG4kcmV2ZXJzZS1ib3g6IHJvdy1yZXZlcnNlO1xuXG4vL0JyZWFrcG9pbnRzXG4kbWVkaWEtdGFibGV0OiA0OC4wNjI1cmVtO1xuJG1lZGlhLWRlc2t0b3A6IDY0cmVtO1xuJG1lZGlhLXdpZGVzY3JlZW46IDc2cmVtO1xuJG1lZGlhLWZ1bGxoZDogODhyZW07XG5cbi8vIFNlY3Rpb25zXG4kc2VjdGlvbi1wYWRkaW5nOiA3LjVyZW07XG4iLCJAaW1wb3J0IFwic3JjL3Njc3MvdWJpY28vdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwic3JjL3Njc3MvdWJpY28vYmFzZVwiO1xuXG4uc2VjdGlvbi1jYXJkcyB7XG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA2LjM3NXJlbTtcbiAgfVxufVxuXG4udGVhbS1jYXJkIHtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGJvcmRlcjogMCAxLjg3NXJlbSAxLjg3NXJlbSAwIHNvbGlkICR3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA5cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMi4xODc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjE4NzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgd2lkdGg6IDkyJTtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjcuNjI1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgIGhlaWdodDogMjAuMTg3NXJlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgIGhlaWdodDogMTcuNXJlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWZ1bGxoZCkge1xuICAgICAgaGVpZ2h0OiAyMC4xODc1cmVtO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19ib3JkZXItLXRvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDQuMzc1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTEuODc1cmVtO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgfVxuXG4gICZfX2JvcmRlci0tYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgYm90dG9tOiAtMS44NzVyZW07XG4gICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB3aWR0aDogNi4yNXJlbTtcbiAgfVxuXG4gICZfX2JvcmRlci1saW5rcyB7XG4gICAgYm90dG9tOiAtMS44NzVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgdWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBib3R0b206IC0xMi42MjVyZW07XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmLW5hbWUge1xuICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjU2MjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxLjMxMjVyZW07XG4gICAgfVxuXG4gICAgJi1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogJHNvZnRncmF5LTMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA2LjI1cmVtO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC50ZWFtLWNhcmRfX2ltZyB7XG4gICAgICBpbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRlYW0tY2FyZF9fYm9yZGVyLS10b3Age1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgfVxuXG4gICAgLnRlYW0tY2FyZF9fYm9yZGVyLS1ib3R0b20ge1xuICAgICAgd2lkdGg6IDguMTI1cmVtO1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHViaS1wYWRkaW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogJHNlY3Rpb24tcGFkZGluZztcbiAgcGFkZGluZy10b3A6ICRzZWN0aW9uLXBhZGRpbmc7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=sections-section-team-section-team-module.js.map