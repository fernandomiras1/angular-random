exports.ids = ["pages-info-covid-info-covid-module"];
exports.modules = {

/***/ "1AOW":
/*!**********************************************************!*\
  !*** ./src/app/pages/info-covid/info-covid.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoCovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCovidComponent", function() { return InfoCovidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_widgets_widget_smartvel_seach_widget_smartvel_seach_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/widgets/widget-smartvel-seach/widget-smartvel-seach.component */ "UNgC");
/* harmony import */ var _core_widgets_widget_smartvel_map_widget_smartvel_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/widgets/widget-smartvel-map/widget-smartvel-map.component */ "ihmH");




class InfoCovidComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.queryParamsSubscription = this.route.queryParams
            .subscribe((params) => {
            this.params = this.filterParams(params);
        });
    }
    filterParams(params) {
        return {
            or: params.or || '',
            dt: params.dt || '',
            iata: params.iata || '',
        };
    }
    ngOnDestroy() {
        this.queryParamsSubscription.unsubscribe();
    }
}
InfoCovidComponent.ɵfac = function InfoCovidComponent_Factory(t) { return new (t || InfoCovidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
InfoCovidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoCovidComponent, selectors: [["app-info-covid"]], decls: 32, vars: 3, consts: [[1, "section-hero"], ["src", "../../../assets/img/ubico/home-4.jpg", "alt", "Hero picture"], [1, "container"], [1, "section-hero__title"], [1, "small-line"], [1, "section-hero__title-description"], [1, "ubi-padding-section"], [1, "columns"], [1, "column", "widget-container"], [3, "origin", "destination"], [3, "iata"], [1, "footer"], [1, "column", "is-12"], ["src", "../../../assets/img/ubico/logo-ubico-dark.svg", "alt", "Logo \u00DAbico"], [1, "column", "is-4"]], template: function InfoCovidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Info Covid-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Debido a la situaci\u00F3n sanitaria, los pa\u00EDses han impuesto diferentes medidas de entrada a los viajeros. Te recomendamos que verifiques los requisitos del pa\u00EDs al que vayas a viajar en el siguiente mapa interactivo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "widget-smartvel-seach", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "widget-smartvel-map", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "C/ General Riera, 154, 07010 Palma, Illes Balears. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A92021 \u00DAbico | All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("origin", ctx.params.or)("destination", ctx.params.dt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iata", ctx.params.iata);
    } }, directives: [_core_widgets_widget_smartvel_seach_widget_smartvel_seach_component__WEBPACK_IMPORTED_MODULE_2__["WidgetSmartvelSeachComponent"], _core_widgets_widget_smartvel_map_widget_smartvel_map_component__WEBPACK_IMPORTED_MODULE_3__["WidgetSmartvelMapComponent"]], styles: [".section-hero[_ngcontent-%COMP%] {\n  height: 60vh;\n  position: relative;\n  width: 100%;\n}\n@media (min-width: 64rem) {\n  .section-hero[_ngcontent-%COMP%] {\n    height: 50vh;\n  }\n}\n.section-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0.6);\n  height: 100%;\n  position: relative;\n  max-width: 100%;\n  object-fit: cover;\n  position: relative;\n  width: 100%;\n}\n.section-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.section-hero__title[_ngcontent-%COMP%] {\n  bottom: 1.25rem;\n  left: 1.25rem;\n  position: absolute;\n}\n@media (min-width: 64rem) {\n  .section-hero__title[_ngcontent-%COMP%] {\n    bottom: 3.75rem;\n    left: 0;\n  }\n}\n.section-hero__title-description[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  max-width: 31.25rem;\n}\n.section-hero__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin-block-end: 0;\n  text-shadow: 0 0.1875rem 0.375rem #00000042;\n}\n.section-hero__title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  text-shadow: 0 0.1875rem 0.375rem #00000042;\n}\n.section-hero__title[_ngcontent-%COMP%]   .small-line[_ngcontent-%COMP%] {\n  background: #72BF44;\n  height: 0.3125rem;\n  width: 3.75rem;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n@media (min-width: 64rem) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.widget-container[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n.footer[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n@media (min-width: 64rem) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 7.5rem;\n  }\n}\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-top: 3.75rem;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZm8tY292aWQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFERDtBQUdDO0VBTEQ7SUFNRSxZQUFBO0VBQUE7QUFDRjtBQUVDO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUxGO0lBTUksZUFBQTtJQUNBLE9BQUE7RUFESjtBQUNGO0FBR0k7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFJSTtFQUNFLGNDZkU7RURnQkYsbUJBQUE7RUFDQSwyQ0FBQTtBQUZOO0FBS0k7RUFDRSxjQ3JCRTtFRHNCRiwyQ0FBQTtBQUhOO0FBTUk7RUFDRSxtQkM5Q0U7RUQrQ0YsaUJBQUE7RUFDQSxjQUFBO0FBSk47QUFTQTtFQUNFLGdCQUFBO0FBTkY7QUFRRTtFQUhGO0lBSUksVUFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNDLFVBQUE7QUFMRDtBQU9BO0VBQ0UsZ0JBQUE7QUFKRjtBQU1DO0VBSEQ7SUFJRSxlQUFBO0VBSEE7QUFDRjtBQU9BO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQUpGIiwiZmlsZSI6ImluZm8tY292aWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Njc3MvdWJpY28vdmFyaWFibGVzXCI7XG5cbi5zZWN0aW9uLWhlcm8ge1xuXHRoZWlnaHQ6IDYwdmg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cblx0QG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG5cdFx0aGVpZ2h0OiA1MHZoO1xuXHR9XG5cblx0aW1nIHtcblx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoLjYpO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgYm90dG9tOiAxLjI1cmVtO1xuICAgIGxlZnQ6IDEuMjVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICBib3R0b206IDMuNzVyZW07XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgIG1heC13aWR0aDogMzEuMjVyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4zNzVyZW0gIzAwMDAwMDQyO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4zNzVyZW0gIzAwMDAwMDQyO1xuICAgIH1cblxuICAgIC5zbWFsbC1saW5lIHtcbiAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgICAgd2lkdGg6IDMuNzVyZW07XG4gICAgfVxuICB9XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLndpZGdldC1jb250YWluZXIge1xuXHR6LWluZGV4OiAwO1xufVxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG5cblx0QG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG5cdFx0cGFkZGluZzogNy41cmVtO1xuXG5cdH1cbn1cblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMy43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIl19 */"] });


/***/ }),

/***/ "2DJy":
/*!*******************************************************!*\
  !*** ./src/app/pages/info-covid/info-covid.module.ts ***!
  \*******************************************************/
/*! exports provided: InfoCovidModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCovidModule", function() { return InfoCovidModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _info_covid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-covid.component */ "1AOW");
/* harmony import */ var _info_covid_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-covid.routing */ "nq31");
/* harmony import */ var _core_widgets_widget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/widgets/widget.module */ "XzD+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class InfoCovidModule {
}
InfoCovidModule.ɵfac = function InfoCovidModule_Factory(t) { return new (t || InfoCovidModule)(); };
InfoCovidModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InfoCovidModule });
InfoCovidModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _info_covid_routing__WEBPACK_IMPORTED_MODULE_2__["InfoCovidRoutingModule"],
            _core_widgets_widget_module__WEBPACK_IMPORTED_MODULE_3__["WidgetModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InfoCovidModule, { declarations: [_info_covid_component__WEBPACK_IMPORTED_MODULE_1__["InfoCovidComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _info_covid_routing__WEBPACK_IMPORTED_MODULE_2__["InfoCovidRoutingModule"],
        _core_widgets_widget_module__WEBPACK_IMPORTED_MODULE_3__["WidgetModule"]] }); })();


/***/ }),

/***/ "3nc+":
/*!***********************************************************!*\
  !*** ./src/app/core/widgets/services/smartvel.service.ts ***!
  \***********************************************************/
/*! exports provided: SmartvelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartvelService", function() { return SmartvelService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/script.service */ "kSjj");



class SmartvelService {
    constructor(scriptService) {
        this.scriptService = scriptService;
        this.CONFIG_WIDGET_SEARCH = {
            apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIKEY_SMARTVEL,
            withdisclaimer: 'enabled',
            lang: 'es',
            destination: '',
            origin: '15',
            world: true,
            version: '1.4.4',
            cdnWidget: 'https://cdn.smartvel.com/scripts/swidget/boot.min.js',
        };
        this.CONFIG_WIDGET_MAP = {
            apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIKEY_SMARTVEL,
            lang: 'es',
            iata: '',
            zoom: 3,
            cdnWidget: 'https://cdn.smartvel.com/scripts/cwidget/boot.min.js',
        };
    }
    get configSearchSmartvel() {
        return this.CONFIG_WIDGET_SEARCH;
    }
    get configMapSmartvel() {
        return this.CONFIG_WIDGET_MAP;
    }
    getSeatsWidget() {
        const script = {
            src: 'https://w2fly.3dseatmapvr.com/lopa/LopaViewer.min.js',
        };
        this.scriptService.addScript(script);
    }
    getSeatsMapWidget() {
        const script = {
            src: 'https://dnce566tx3ijn.cloudfront.net/lopa/dev/SeatMapVR3D.min.js',
        };
        this.scriptService.addScript(script);
    }
    loadMapCDN() {
        const script = {
            src: 'https://cdn.smartvel.com/scripts/swidget/boot.min.js',
        };
        this.scriptService.addScript(script);
    }
    loadSearchCDN() {
        const script = {
            src: 'https://cdn.smartvel.com/scripts/cwidget/boot.min.js',
        };
        this.scriptService.addScript(script);
    }
}
SmartvelService.ɵfac = function SmartvelService_Factory(t) { return new (t || SmartvelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"])); };
SmartvelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SmartvelService, factory: SmartvelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UNgC":
/*!***************************************************************************************!*\
  !*** ./src/app/core/widgets/widget-smartvel-seach/widget-smartvel-seach.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WidgetSmartvelSeachComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSmartvelSeachComponent", function() { return WidgetSmartvelSeachComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_smartvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/smartvel.service */ "3nc+");


const _c0 = ["smtWidget"];
class WidgetSmartvelSeachComponent {
    constructor(renderer, smartvelService) {
        this.renderer = renderer;
        this.smartvelService = smartvelService;
        this.origin = '';
        this.destination = '';
    }
    ngAfterViewInit() {
        this.createSmartvelWidget(this.smartvelService.configSearchSmartvel);
    }
    createSmartvelWidget(configSearch) {
        const smtvel = this.smtWidget.nativeElement;
        this.renderer.setAttribute(smtvel, 'origin', this.origin);
        this.renderer.setAttribute(smtvel, 'destination', this.destination);
        this.renderer.setAttribute(smtvel, 'apikey', configSearch.apiKey);
        this.renderer.setAttribute(smtvel, 'lang', configSearch.lang);
        this.renderer.setAttribute(smtvel, 'withdisclaimer', configSearch.withdisclaimer);
        this.smartvelService.loadSearchCDN();
    }
}
WidgetSmartvelSeachComponent.ɵfac = function WidgetSmartvelSeachComponent_Factory(t) { return new (t || WidgetSmartvelSeachComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_smartvel_service__WEBPACK_IMPORTED_MODULE_1__["SmartvelService"])); };
WidgetSmartvelSeachComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetSmartvelSeachComponent, selectors: [["widget-smartvel-seach"]], viewQuery: function WidgetSmartvelSeachComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.smtWidget = _t.first);
    } }, inputs: { origin: "origin", destination: "destination" }, decls: 2, vars: 0, consts: [["smtWidget", ""]], template: function WidgetSmartvelSeachComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "smt-flyto", null, 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "XzD+":
/*!***********************************************!*\
  !*** ./src/app/core/widgets/widget.module.ts ***!
  \***********************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widget_smartvel_seach_widget_smartvel_seach_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-smartvel-seach/widget-smartvel-seach.component */ "UNgC");
/* harmony import */ var _widget_smartvel_map_widget_smartvel_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget-smartvel-map/widget-smartvel-map.component */ "ihmH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




const WIDGET_COMPONENTS = [
    _widget_smartvel_seach_widget_smartvel_seach_component__WEBPACK_IMPORTED_MODULE_1__["WidgetSmartvelSeachComponent"],
    _widget_smartvel_map_widget_smartvel_map_component__WEBPACK_IMPORTED_MODULE_2__["WidgetSmartvelMapComponent"],
];
class WidgetModule {
}
WidgetModule.ɵfac = function WidgetModule_Factory(t) { return new (t || WidgetModule)(); };
WidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WidgetModule });
WidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WidgetModule, { declarations: [_widget_smartvel_seach_widget_smartvel_seach_component__WEBPACK_IMPORTED_MODULE_1__["WidgetSmartvelSeachComponent"],
        _widget_smartvel_map_widget_smartvel_map_component__WEBPACK_IMPORTED_MODULE_2__["WidgetSmartvelMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_widget_smartvel_seach_widget_smartvel_seach_component__WEBPACK_IMPORTED_MODULE_1__["WidgetSmartvelSeachComponent"],
        _widget_smartvel_map_widget_smartvel_map_component__WEBPACK_IMPORTED_MODULE_2__["WidgetSmartvelMapComponent"]] }); })();


/***/ }),

/***/ "ihmH":
/*!***********************************************************************************!*\
  !*** ./src/app/core/widgets/widget-smartvel-map/widget-smartvel-map.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetSmartvelMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSmartvelMapComponent", function() { return WidgetSmartvelMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_smartvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/smartvel.service */ "3nc+");


const _c0 = ["smtWidget"];
class WidgetSmartvelMapComponent {
    constructor(renderer, smartvelService) {
        this.renderer = renderer;
        this.smartvelService = smartvelService;
        this.iata = '';
    }
    ngAfterViewInit() {
        this.createSmartvelWidget(this.smartvelService.configMapSmartvel);
    }
    createSmartvelWidget(configMap) {
        const smtvel = this.smtWidget.nativeElement;
        this.renderer.setAttribute(smtvel, 'apikey', configMap.apiKey);
        this.renderer.setAttribute(smtvel, 'lang', configMap.lang);
        this.renderer.setAttribute(smtvel, 'iata', this.iata);
        this.smartvelService.loadMapCDN();
    }
}
WidgetSmartvelMapComponent.ɵfac = function WidgetSmartvelMapComponent_Factory(t) { return new (t || WidgetSmartvelMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_smartvel_service__WEBPACK_IMPORTED_MODULE_1__["SmartvelService"])); };
WidgetSmartvelMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetSmartvelMapComponent, selectors: [["widget-smartvel-map"]], viewQuery: function WidgetSmartvelMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.smtWidget = _t.first);
    } }, inputs: { iata: "iata" }, decls: 2, vars: 0, consts: [["smtWidget", ""]], template: function WidgetSmartvelMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "smt-swidget", null, 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "nq31":
/*!********************************************************!*\
  !*** ./src/app/pages/info-covid/info-covid.routing.ts ***!
  \********************************************************/
/*! exports provided: InfoCovidRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCovidRoutingModule", function() { return InfoCovidRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _info_covid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-covid.component */ "1AOW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _info_covid_component__WEBPACK_IMPORTED_MODULE_1__["InfoCovidComponent"],
    },
];
class InfoCovidRoutingModule {
}
InfoCovidRoutingModule.ɵfac = function InfoCovidRoutingModule_Factory(t) { return new (t || InfoCovidRoutingModule)(); };
InfoCovidRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InfoCovidRoutingModule });
InfoCovidRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InfoCovidRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

};;
//# sourceMappingURL=pages-info-covid-info-covid-module.js.map