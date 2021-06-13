exports.ids = ["section-container-image-section-container-image-module"];
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

/***/ "84W3":
/*!*********************************************************************!*\
  !*** ./src/app/components/w2m-info-text/w2m-info-text.component.ts ***!
  \*********************************************************************/
/*! exports provided: W2mInfoTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2mInfoTextComponent", function() { return W2mInfoTextComponent; });
/* harmony import */ var _core_enum_orientation_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/enum/orientation-enum */ "Ph+I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_divider_app_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-divider/app-divider.component */ "PQDd");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");





function W2mInfoTextComponent_ng_container_0_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.textInfo.smallTitle);
} }
function W2mInfoTextComponent_ng_container_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.textInfo.title);
} }
function W2mInfoTextComponent_ng_container_0_app_divider_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-divider", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isBigLine", !!!ctx_r3.textInfo.smallTitle);
} }
function W2mInfoTextComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, W2mInfoTextComponent_ng_container_0_h2_3_Template, 2, 1, "h2", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, W2mInfoTextComponent_ng_container_0_p_4_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, W2mInfoTextComponent_ng_container_0_app_divider_5_Template, 1, 1, "app-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "w2mSafeToHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.textInfo.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("columns", ctx_r0.getOrientation(ctx_r0.textInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.textInfo.smallTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.textInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.textInfo.hasSeparator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, ctx_r0.textInfo.subtitle), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class W2mInfoTextComponent {
    constructor() {
        this.orientationType = _core_enum_orientation_enum__WEBPACK_IMPORTED_MODULE_0__["OrientationEnum"];
    }
    getOrientation({ orientation }) {
        return orientation === this.orientationType.HORIZONTAL;
    }
    ngOnInit() {
        console.log('textInfo', this.textInfo);
    }
}
W2mInfoTextComponent.ɵfac = function W2mInfoTextComponent_Factory(t) { return new (t || W2mInfoTextComponent)(); };
W2mInfoTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: W2mInfoTextComponent, selectors: [["w2m-info-text"]], inputs: { textInfo: "textInfo" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "app-box-image-text__info"], [1, "app-box-image-text__info-container"], ["class", "mat-display-1", 4, "ngIf"], [3, "isBigLine", 4, "ngIf"], [1, "app-box-image-text__info-container-description"], [3, "innerHTML"], [1, "mat-display-1"], [3, "isBigLine"]], template: function W2mInfoTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, W2mInfoTextComponent_ng_container_0_Template, 9, 10, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.textInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _app_divider_app_divider_component__WEBPACK_IMPORTED_MODULE_3__["AppDividerComponent"]], pipes: [_core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_4__["W2mSafeHtmlPipe"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.app-box-image-text__info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-box-image-text__info-container[_ngcontent-%COMP%] {\n  max-width: 50rem;\n  padding: 1.875rem;\n}\n\n@media (min-width: 64rem) {\n  .app-box-image-text__info-container[_ngcontent-%COMP%] {\n    padding: 7.5rem;\n  }\n}\n\n.app-box-image-text__info-container-big-line[_ngcontent-%COMP%] {\n  height: 0.9375rem;\n  margin: 1.875rem 0;\n  position: relative;\n  width: 8.75rem;\n}\n\n.app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 6.875rem;\n}\n\n.app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0.9375rem;\n}\n\n.app-box-image-text__info-container-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #003E72;\n  margin-block-end: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vdzJtLWluZm8tdGV4dC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7O0VBS0UsY0NMUztBQ0NYOztBRk9BOzs7OztFQUtFLGNDSUs7QUNSUDs7QUZPQTtFQUNFLGNDR2E7RURGYixnQkFBQTtBRUpGOztBRktFO0VBQ0UseUJDbEJJO0VEbUJKLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUVISjs7QUZPQTtFQUNFLGNDNUJNO0VENkJOLDBCQUFBO0VBQ0EsZ0JBQUE7QUVKRjs7QUZNRTtFQUNFLGNDbkNPO0VEb0NQLGdCQUFBO0FFSko7O0FGWU07O0VBRUUseUJDdEJVO0FDYWxCOztBRmFJO0VBQ0UsbUJDM0JZO0FDZ0JsQjs7QUZpQk07O0VBRUUseUJDbENJO0FDbUJaOztBRm1CSTtFQUNFLG1CQ3ZDTTtBQ3NCWjs7QUZvQkk7RUFDRSx5QkMzQ007QUN5Qlo7O0FGd0JBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FFckJGOztBRnVCRTtFQUxGO0lBTUksaUJBQUE7SUFDQSxpQkFBQTtFRXBCRjtBQUNGOztBRnlCRTtFQUNFO0lBQ0UsMkJDM0NRO0VDcUJaO0VGeUJFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtFRXZCSjtBQUNGOztBRjhCRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUUzQko7O0FGNkJJO0VBQ0UsY0N6RkU7RUQwRkYsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUUzQk47O0FGNkJNO0VBVkY7SUFXSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFRTFCTjtBQUNGOztBRjRCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FFMUJSOztBRjRCUTtFQUpGO0lBS0ksZ0JBQUE7SUFDQSxlQUFBO0VFekJSO0FBQ0Y7O0FGZ0NBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBRTdCQTs7QUYrQkU7RUFKRjtJRy9JRSxzQkYwRGdCO0lFekRoQixtQkZ5RGdCO0VDK0RoQjtBQUNGOztBRmdDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJDM0pTO0VENEpULGNDdElNO0VEdUlOLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUU3QkY7O0FGK0JFOztFQUVFLHVCQUFBO0FFN0JKOztBRmtDQztFQUNDLG1CQ3pLTTtBQzBJUjs7QUZpQ0U7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0FFL0JKOztBRm9DQTtFQUNFLGdCQUFBO0VBQ0EsdUNBQUE7QUVqQ0Y7O0FGbUNFO0VBQ0UsdUNBQUE7QUVqQ0o7O0FBeEpFO0VBQ0UsV0FBQTtBQTJKSjs7QUF6Skk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBMkpOOztBQXpKTTtFQUpGO0lBS0ksZUFBQTtFQTRKTjtBQUNGOztBQTFKTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE0SlI7O0FBMUpRO0VBQ0UseUJEaEJGO0VDaUJFLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQTRKVjs7QUF6SlE7RUFDRSx5QkR6QkY7RUMwQkUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQTJKVjs7QUF0SlE7RUFDRSxjRHRDQztFQ3VDRCx3QkFBQTtBQXdKViIsImZpbGUiOiJ3Mm0taW5mby10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi9taXhpbnNcIjtcblxuLy9UeXBvZ3JhcGh5XG5oMSxcbmgyLFxuLm1hdC1kaXNwbGF5LTEsXG4ubWF0LWRpc3BsYXktMlxuIHtcbiAgY29sb3I6ICRwcmltYXJ5O1xufVxuXG5oMyxcbmg0LFxuaDUsXG5oNixcbnN0cm9uZyB7XG4gIGNvbG9yOiAkZ3JheTtcbn1cblxuaDMge1xuICBjb2xvcjogJGRhcmtncmF5LTkwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjMxMjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4zNzVyZW07XG4gICAgd2lkdGg6IDMuNzVyZW07XG4gIH1cbn1cblxuYSB7XG4gIGNvbG9yOiAkZ3JlZW47XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkZGFya2JsdWU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxufVxuXG4vLyBzZWN0aW9uIGJ5IGNvbG9yc1xuLmJyYW5kLWNvbG9yIHtcbiAgJi5pYmVyb3N0YXIge1xuICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGliZXJvc3Rhci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbWctZmxvYXQtdGV4dCBoMjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkaWJlcm9zdGFyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICYudzJtIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSAge1xuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLWxlZnQsXG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tcmlnaHQgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHcybS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbWctZmxvYXQtdGV4dCBoMjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkdzJtLWNvbG9yO1xuICAgIH1cblxuICAgIC5iYW5uZXItZGF0YV9fc3RhdC1udW1iZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkdzJtLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEaXNwbGEtMSBSZXNwb25zaXZlXG4ubWF0LWRpc3BsYXktMSwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgbWFyZ2luOiAwIDAgMS43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWZ1bGxoZCkge1xuICAgIGZvbnQtc2l6ZTogNi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5cbi8vIFJvdyBSZXZlcnNlXG4ucm93LXJldmVyc2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0e1xuICAgICAgZmxleC1kaXJlY3Rpb246ICRyZXZlcnNlLWJveDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1jb250YWluZXItaW1hZ2UtLWNvbnRhaW5lciB7XG4gICAgICBsZWZ0OmF1dG8gIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4vLyBQb3JxdWUgYXF1aSBlbiBlbCBiYXNlID8/IFxuXG5cbi5ib3gtaW1hZ2UtdGV4dC1mdWxsIHtcbiAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICBcbiAgICBoMiB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDMuNzVyZW0gIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogNy41cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUGFkZGluZyBzZWN0aW9uXG4udWJpLXBhZGRpbmctc2VjdGlvbiB7XG5wYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbnBhZGRpbmctdG9wOiAzLjc1cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgIEBpbmNsdWRlIHViaS1wYWRkaW5nLXNlY3Rpb247XG4gIH1cbn1cblxuLy8gVWJpY28gQnV0dG9uIFxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm94LXNoYWRvdzogMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgXG4gIGVtLFxuICBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNDM3NXJlbTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeTtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRwcmltYXJ5O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbiB9XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHNlY29uZGFyeTtcblxuICAmLmJ0bi1zZWNvbmRhcnktb3V0bGluZSB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgfVxufVxuIiwiLy8gT3ZlcnJpZGluZyBnbG9iYWwgdmFyaWFibGVzXG5cbi8vIENPTE9SU1xuXG4kZGFya2JsdWU6ICMwMDNFNzI7XG5cbiRncmVlbjogIzcyQkY0NDtcblxuJHNvZnRibHVlOiAjMDBBN0UxO1xuJHNvZnRibHVlLTEwMDogI0IzRTVGNjtcblxuJHR1cnF1b2lzZTogIzFFQ0FEMztcblxuJHBpbms6ICNERjE2ODM7XG5cbiRwdXJwbGU6ICM2MDI2OUU7XG5cbiRyZWQ6ICNGRjBBMEE7XG5cbiRvcmFuZ2U6ICNGNEI2M0U7XG5cbiRncmF5OiAjNjE2MTYxO1xuJHNvZnRncmF5LTEwMDogI0QwRDBEMDtcbiRzb2Z0Z3JheS0zMDA6ICM5MDkwOTA7XG4kZGFya2dyYXktOTAwOiAjMzMzMzMzO1xuXG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRpYmVyb3N0YXItY29sb3I6ICM2N0JBQUY7XG4kdzJtLWNvbG9yOiAjQzRENjAwO1xuXG4kdGl0bGVzLWNvbG9yOiAkZGFya2JsdWU7XG4kYm9keS1jb2xvcjogJGdyYXk7XG4kc29mdC10ZXh0OiAkc29mdGdyYXktMzAwO1xuXG4kcHJpbWFyeTogJGRhcmtibHVlO1xuJHNlY29uZGFyeTogJGdyZWVuO1xuJHRlcnRpYXJ5OiAkc29mdGJsdWU7XG4kcXVhdGVybmFyeTogJHR1cnF1b2lzZTtcbiRxdWluYXJ5OiAkcGluaztcbiRzZXh0YXJ5OiAkcHVycGxlO1xuXG4kaW5mbzogJHNvZnRibHVlLTEwMDtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogJG9yYW5nZTtcbiRkYW5nZXI6ICRyZWQ7XG5cbiRoZWFkaW5ncy1jb2xvcjogJHByaW1hcnk7XG5cbi8vIEJPWCBDT01QT05FTlRTXG4kcmV2ZXJzZS1ib3g6IHJvdy1yZXZlcnNlO1xuXG4vL0JyZWFrcG9pbnRzXG4kbWVkaWEtdGFibGV0OiA0OC4wNjI1cmVtO1xuJG1lZGlhLWRlc2t0b3A6IDY0cmVtO1xuJG1lZGlhLXdpZGVzY3JlZW46IDc2cmVtO1xuJG1lZGlhLWZ1bGxoZDogODhyZW07XG5cbi8vIFNlY3Rpb25zXG4kc2VjdGlvbi1wYWRkaW5nOiA3LjVyZW07XG4iLCJAaW1wb3J0IFwic3JjL3Njc3MvdWJpY28vdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwic3JjL3Njc3MvdWJpY28vYmFzZVwiO1xuXG4uYXBwLWJveC1pbWFnZS10ZXh0IHtcbiAgJl9faW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgICAgcGFkZGluZzogMS44NzVyZW07XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICBwYWRkaW5nOiA3LjVyZW07XG4gICAgICB9XG5cbiAgICAgICYtYmlnLWxpbmUge1xuICAgICAgICBoZWlnaHQ6IDAuOTM3NXJlbTtcbiAgICAgICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA4Ljc1cmVtO1xuXG4gICAgICAgICYtLWxlZnQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiA2Ljg3NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLXJpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDAuOTM3NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiAkZGFya2JsdWU7XG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gdWJpLXBhZGRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAkc2VjdGlvbi1wYWRkaW5nO1xuICBwYWRkaW5nLXRvcDogJHNlY3Rpb24tcGFkZGluZztcbn1cbiJdfQ== */"] });


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

/***/ "DOtV":
/*!******************************************************************!*\
  !*** ./src/app/components/w2m-info-text/w2m-info-text.module.ts ***!
  \******************************************************************/
/*! exports provided: W2MInfoTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2MInfoTextModule", function() { return W2MInfoTextModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _w2m_info_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./w2m-info-text.component */ "84W3");
/* harmony import */ var _app_divider_app_divider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-divider/app-divider.module */ "Gk+0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class W2MInfoTextModule {
}
W2MInfoTextModule.ɵfac = function W2MInfoTextModule_Factory(t) { return new (t || W2MInfoTextModule)(); };
W2MInfoTextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: W2MInfoTextModule });
W2MInfoTextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
            _app_divider_app_divider_module__WEBPACK_IMPORTED_MODULE_3__["AppDividerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](W2MInfoTextModule, { declarations: [_w2m_info_text_component__WEBPACK_IMPORTED_MODULE_2__["W2mInfoTextComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
        _app_divider_app_divider_module__WEBPACK_IMPORTED_MODULE_3__["AppDividerModule"]], exports: [_w2m_info_text_component__WEBPACK_IMPORTED_MODULE_2__["W2mInfoTextComponent"]] }); })();


/***/ }),

/***/ "Gk+0":
/*!**************************************************************!*\
  !*** ./src/app/components/app-divider/app-divider.module.ts ***!
  \**************************************************************/
/*! exports provided: AppDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDividerModule", function() { return AppDividerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_divider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-divider.component */ "PQDd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppDividerModule {
}
AppDividerModule.ɵfac = function AppDividerModule_Factory(t) { return new (t || AppDividerModule)(); };
AppDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppDividerModule });
AppDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppDividerModule, { declarations: [_app_divider_component__WEBPACK_IMPORTED_MODULE_1__["AppDividerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_app_divider_component__WEBPACK_IMPORTED_MODULE_1__["AppDividerComponent"]] }); })();


/***/ }),

/***/ "PQDd":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-divider/app-divider.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDividerComponent", function() { return AppDividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AppDividerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppDividerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} }
class AppDividerComponent {
    constructor() {
        this.isBigLine = true;
    }
}
AppDividerComponent.ɵfac = function AppDividerComponent_Factory(t) { return new (t || AppDividerComponent)(); };
AppDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppDividerComponent, selectors: [["app-divider"]], inputs: { isBigLine: "isBigLine" }, decls: 2, vars: 2, consts: [["class", "app-divider-container__big-line", 4, "ngIf"], ["class", "app-divider-container__small-line", 4, "ngIf"], [1, "app-divider-container__big-line"], [1, "app-divider-container__big-line--left"], [1, "app-divider-container__big-line--right"], [1, "app-divider-container__small-line"]], template: function AppDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppDividerComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppDividerComponent_div_1_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBigLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBigLine);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".app-divider-container__big-line[_ngcontent-%COMP%] {\n  height: 0.9375rem;\n  margin: 1.875rem 0;\n  position: relative;\n  width: 8.75rem;\n}\n.app-divider-container__big-line--left[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 6.875rem;\n}\n.app-divider-container__big-line--right[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0.9375rem;\n}\n.app-divider-container__small-line[_ngcontent-%COMP%] {\n  background: #72BF44;\n  height: 0.3125rem;\n  margin-bottom: 0.9375rem;\n  width: 3.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1kaXZpZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7QUFJSTtFQUNFLHlCQ0pFO0VES0YsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLHlCQ2JFO0VEY0YsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQUhOO0FBT0U7RUFDRSxtQkN2Qkk7RUR3QkosaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFMSiIsImZpbGUiOiJhcHAtZGl2aWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby92YXJpYWJsZXNcIjtcblxuLmFwcC1kaXZpZGVyLWNvbnRhaW5lciB7XG4gICZfX2JpZy1saW5lIHtcbiAgICBoZWlnaHQ6IDAuOTM3NXJlbTtcbiAgICBtYXJnaW46IDEuODc1cmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4Ljc1cmVtO1xuXG4gICAgJi0tbGVmdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDYuODc1cmVtO1xuICAgIH1cblxuICAgICYtLXJpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDAuOTM3NXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19zbWFsbC1saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XG4gICAgaGVpZ2h0OiAwLjMxMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG4iLCIvLyBPdmVycmlkaW5nIGdsb2JhbCB2YXJpYWJsZXNcblxuLy8gQ09MT1JTXG5cbiRkYXJrYmx1ZTogIzAwM0U3MjtcblxuJGdyZWVuOiAjNzJCRjQ0O1xuXG4kc29mdGJsdWU6ICMwMEE3RTE7XG4kc29mdGJsdWUtMTAwOiAjQjNFNUY2O1xuXG4kdHVycXVvaXNlOiAjMUVDQUQzO1xuXG4kcGluazogI0RGMTY4MztcblxuJHB1cnBsZTogIzYwMjY5RTtcblxuJHJlZDogI0ZGMEEwQTtcblxuJG9yYW5nZTogI0Y0QjYzRTtcblxuJGdyYXk6ICM2MTYxNjE7XG4kc29mdGdyYXktMTAwOiAjRDBEMEQwO1xuJHNvZnRncmF5LTMwMDogIzkwOTA5MDtcbiRkYXJrZ3JheS05MDA6ICMzMzMzMzM7XG5cbiR3aGl0ZTogI0ZGRkZGRjtcblxuJGliZXJvc3Rhci1jb2xvcjogIzY3QkFBRjtcbiR3Mm0tY29sb3I6ICNDNEQ2MDA7XG5cbiR0aXRsZXMtY29sb3I6ICRkYXJrYmx1ZTtcbiRib2R5LWNvbG9yOiAkZ3JheTtcbiRzb2Z0LXRleHQ6ICRzb2Z0Z3JheS0zMDA7XG5cbiRwcmltYXJ5OiAkZGFya2JsdWU7XG4kc2Vjb25kYXJ5OiAkZ3JlZW47XG4kdGVydGlhcnk6ICRzb2Z0Ymx1ZTtcbiRxdWF0ZXJuYXJ5OiAkdHVycXVvaXNlO1xuJHF1aW5hcnk6ICRwaW5rO1xuJHNleHRhcnk6ICRwdXJwbGU7XG5cbiRpbmZvOiAkc29mdGJsdWUtMTAwO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAkb3JhbmdlO1xuJGRhbmdlcjogJHJlZDtcblxuJGhlYWRpbmdzLWNvbG9yOiAkcHJpbWFyeTtcblxuLy8gQk9YIENPTVBPTkVOVFNcbiRyZXZlcnNlLWJveDogcm93LXJldmVyc2U7XG5cbi8vQnJlYWtwb2ludHNcbiRtZWRpYS10YWJsZXQ6IDQ4LjA2MjVyZW07XG4kbWVkaWEtZGVza3RvcDogNjRyZW07XG4kbWVkaWEtd2lkZXNjcmVlbjogNzZyZW07XG4kbWVkaWEtZnVsbGhkOiA4OHJlbTtcblxuLy8gU2VjdGlvbnNcbiRzZWN0aW9uLXBhZGRpbmc6IDcuNXJlbTtcbiJdfQ== */"] });


/***/ }),

/***/ "Ph+I":
/*!***********************************************!*\
  !*** ./src/app/core/enum/orientation-enum.ts ***!
  \***********************************************/
/*! exports provided: OrientationEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientationEnum", function() { return OrientationEnum; });
// eslint-disable-next-line no-shadow
var OrientationEnum;
(function (OrientationEnum) {
    OrientationEnum["VERTICAL"] = "vertical";
    OrientationEnum["HORIZONTAL"] = "horizontal";
})(OrientationEnum || (OrientationEnum = {}));


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

/***/ "cO5Z":
/*!***************************************************************************************!*\
  !*** ./src/app/sections/section-container-image/section-container-image.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SectionContainerImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContainerImageComponent", function() { return SectionContainerImageComponent; });
/* harmony import */ var _section_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../section-common */ "0D8H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_box_image_text_box_image_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/box-image-text/box-image-text.component */ "dSpT");
/* harmony import */ var _components_w2m_info_text_w2m_info_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/w2m-info-text/w2m-info-text.component */ "84W3");





function SectionContainerImageComponent_section_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-box-image-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r2.field);
} }
function SectionContainerImageComponent_section_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "w2m-info-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textInfo", item_r2.field);
} }
function SectionContainerImageComponent_section_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SectionContainerImageComponent_section_0_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SectionContainerImageComponent_section_0_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", item_r2.typeComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.ComponentType.ComponentImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r1.ComponentType.ComponentInfoText);
} }
function SectionContainerImageComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SectionContainerImageComponent_section_0_ng_container_2_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("row-reverse", ctx_r0.data.containerPosition === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r0.data.anchor || "")("ngClass", ctx_r0.data.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.data.fields);
} }
class SectionContainerImageComponent extends _section_common__WEBPACK_IMPORTED_MODULE_0__["SectionCommon"] {
    ngOnInit() {
        console.log('data', this.data);
    }
    // TODO: ELIMINAR HABLARA CON LA GENTE DE MAGNOLIA.
    get isFullText() {
        const comImage = this.data.fields.find(item => item.typeComponent === 'component-image');
        const AVer = comImage.field.textBox;
        return AVer ? AVer.fullText : false;
    }
}
SectionContainerImageComponent.ɵfac = function SectionContainerImageComponent_Factory(t) { return ɵSectionContainerImageComponent_BaseFactory(t || SectionContainerImageComponent); };
SectionContainerImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionContainerImageComponent, selectors: [["section-container-image"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "section-container section-container-image brand-color", 3, "id", "row-reverse", "ngClass", 4, "ngIf"], [1, "section-container", "section-container-image", "brand-color", 3, "id", "ngClass"], [1, "section-container-image--container"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "section-container-image--box-image-text", 3, "data"], [1, "section-container-image--info-text", 3, "textInfo"]], template: function SectionContainerImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SectionContainerImageComponent_section_0_Template, 3, 5, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _components_box_image_text_box_image_text_component__WEBPACK_IMPORTED_MODULE_3__["BoxImageTextComponent"], _components_w2m_info_text_w2m_info_text_component__WEBPACK_IMPORTED_MODULE_4__["W2mInfoTextComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n\n.section-container-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.section-container-image--container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: unset;\n}\n\n.section-container-image--box-image-text[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 50%;\n  min-width: 50%;\n}\n\n.section-container-image--info-text[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 50%;\n  min-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX2Jhc2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvdWJpY28vX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2VjdGlvbi1jb250YWluZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7OztFQUtFLGNDTFM7QUNDWDs7QUZPQTs7Ozs7RUFLRSxjQ0lLO0FDUlA7O0FGT0E7RUFDRSxjQ0dhO0VERmIsZ0JBQUE7QUVKRjs7QUZLRTtFQUNFLHlCQ2xCSTtFRG1CSixZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FFSEo7O0FGT0E7RUFDRSxjQzVCTTtFRDZCTiwwQkFBQTtFQUNBLGdCQUFBO0FFSkY7O0FGTUU7RUFDRSxjQ25DTztFRG9DUCxnQkFBQTtBRUpKOztBRllNOztFQUVFLHlCQ3RCVTtBQ2FsQjs7QUZhSTtFQUNFLG1CQzNCWTtBQ2dCbEI7O0FGaUJNOztFQUVFLHlCQ2xDSTtBQ21CWjs7QUZtQkk7RUFDRSxtQkN2Q007QUNzQlo7O0FGb0JJO0VBQ0UseUJDM0NNO0FDeUJaOztBRndCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRXJCRjs7QUZ1QkU7RUFMRjtJQU1JLGlCQUFBO0lBQ0EsaUJBQUE7RUVwQkY7QUFDRjs7QUZ5QkU7RUFDRTtJQUNFLDJCQzNDUTtFQ3FCWjtFRnlCRTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7RUV2Qko7QUFDRjs7QUY4QkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FFM0JKOztBRjZCSTtFQUNFLGNDekZFO0VEMEZGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FFM0JOOztBRjZCTTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUUxQk47QUFDRjs7QUY0Qk07RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRTFCUjs7QUY0QlE7RUFKRjtJQUtJLGdCQUFBO0lBQ0EsZUFBQTtFRXpCUjtBQUNGOztBRmdDQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUU3QkE7O0FGK0JFO0VBSkY7SUcvSUUsc0JGMERnQjtJRXpEaEIsbUJGeURnQjtFQytEaEI7QUFDRjs7QUZnQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQzNKUztFRDRKVCxjQ3RJTTtFRHVJTixnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFN0JGOztBRitCRTs7RUFFRSx1QkFBQTtBRTdCSjs7QUZrQ0M7RUFDQyxtQkN6S007QUMwSVI7O0FGaUNFO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtBRS9CSjs7QUZvQ0E7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0FFakNGOztBRm1DRTtFQUNFLHVDQUFBO0FFakNKOztBQXpKQTtFQUNFLFdBQUE7QUE0SkY7O0FBMUpFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUE0Sko7O0FBekpFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBMkpKOztBQXhKRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQTBKSiIsImZpbGUiOiJzZWN0aW9uLWNvbnRhaW5lci1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL2Jhc2VcIjtcblxuLnNlY3Rpb24tY29udGFpbmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJi0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IHVuc2V0O1xuICB9XG5cbiAgJi0tYm94LWltYWdlLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gIH1cblxuICAmLS1pbmZvLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gIH1cbn1cbiIsIkBtaXhpbiB1YmktcGFkZGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206ICRzZWN0aW9uLXBhZGRpbmc7XG4gIHBhZGRpbmctdG9wOiAkc2VjdGlvbi1wYWRkaW5nO1xufVxuIl19 */"] });
const ɵSectionContainerImageComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SectionContainerImageComponent);


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

/***/ "dSpT":
/*!***********************************************************************!*\
  !*** ./src/app/components/box-image-text/box-image-text.component.ts ***!
  \***********************************************************************/
/*! exports provided: BoxImageTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxImageTextComponent", function() { return BoxImageTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function BoxImageTextComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.getClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.textBox.textBox);
} }
class BoxImageTextComponent {
    ngOnInit() {
        console.log('BoxImageTextComponent', this.data);
    }
    getClass() {
        var _a;
        return ((_a = this.data.textBox) === null || _a === void 0 ? void 0 : _a.fullText) ? 'app-box-image-text__img-float-text-full'
            : 'app-box-image-text__img-float-text';
    }
}
BoxImageTextComponent.ɵfac = function BoxImageTextComponent_Factory(t) { return new (t || BoxImageTextComponent)(); };
BoxImageTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoxImageTextComponent, selectors: [["app-box-image-text"]], inputs: { data: "data" }, decls: 4, vars: 3, consts: [[1, "app-box-image-text"], [1, "app-box-image-text__img"], [3, "ngClass", 4, "ngIf"], [3, "src", "alt"], [3, "ngClass"], [1, "app-box-image-text__img-float-text--background"]], template: function BoxImageTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoxImageTextComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.textBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.data.altText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@charset \"UTF-8\";\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .mat-display-1[_ngcontent-%COMP%], .mat-display-2[_ngcontent-%COMP%] {\n  color: #003E72;\n}\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  color: #616161;\n}\nh3[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%]::after {\n  background-color: #72BF44;\n  content: \" \";\n  display: block;\n  height: 0.3125rem;\n  margin-top: 0.375rem;\n  width: 3.75rem;\n}\na[_ngcontent-%COMP%] {\n  color: #72BF44;\n  text-decoration: underline;\n  transition: 0.2s;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #003E72;\n  transition: 0.2s;\n}\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #67BAAF;\n}\n.brand-color.iberostar[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #67BAAF;\n}\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--left[_ngcontent-%COMP%], .brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line[_ngcontent-%COMP%]   .app-box-image-text__info-container-big-line--right[_ngcontent-%COMP%] {\n  background-color: #C4D600;\n}\n.brand-color.w2m[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  background: #C4D600;\n}\n.brand-color.w2m[_ngcontent-%COMP%]   .banner-data__stat-number[_ngcontent-%COMP%]::after {\n  background-color: #C4D600;\n}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  line-height: 3.2rem;\n  margin: 0 0 1.75rem;\n}\n@media (min-width: 88rem) {\n  .mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n    font-size: 6.5rem;\n    line-height: 6rem;\n  }\n}\n@media (min-width: 64rem) {\n  .row-reverse[_ngcontent-%COMP%]   .app-box-image-text[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .row-reverse[_ngcontent-%COMP%]   .section-container-image--container[_ngcontent-%COMP%] {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n.box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n@media (min-width: 64rem) {\n  .box-image-text-full[_ngcontent-%COMP%]   .app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n.ubi-padding-section[_ngcontent-%COMP%] {\n  padding-bottom: 3.75rem;\n  padding-top: 3.75rem;\n}\n@media (min-width: 64rem) {\n  .ubi-padding-section[_ngcontent-%COMP%] {\n    padding-bottom: 7.5rem;\n    padding-top: 7.5rem;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  padding: 0.75rem 1.5rem;\n  background: #003E72;\n  color: #FFFFFF;\n  transition: 0.2s;\n  box-shadow: 0 0;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n}\nbutton[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.4375rem;\n}\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #72BF44;\n}\n.btn-secondary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n  transition: 0.2s;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  box-shadow: 0.4375rem 0.4375rem #72BF44;\n}\nbutton[_ngcontent-%COMP%]:hover.btn-secondary-outline {\n  box-shadow: 0.4375rem 0.4375rem #003E72;\n}\n.app-box-image-text[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 64rem) {\n  .app-box-image-text[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.app-box-image-text__img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n@media (min-width: 64rem) {\n  .app-box-image-text__img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 64rem) {\n  .app-box-image-text__img-float-text[_ngcontent-%COMP%] {\n    bottom: 0;\n    display: block;\n    left: 0;\n    margin: 3.75rem;\n    max-width: 42.5rem;\n    padding: 3.75rem;\n    position: absolute;\n  }\n}\n.app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n.app-box-image-text__img-float-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  color: #72BF44;\n  content: \" \u2B24\";\n  font-size: 2.1875rem;\n  margin-left: 0.625rem;\n}\n.app-box-image-text__img-float-text--background[_ngcontent-%COMP%] {\n  background: #003E72;\n  height: 100%;\n  left: 0;\n  mix-blend-mode: multiply;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.app-box-image-text__img-float-text-full[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n  min-width: 100%;\n  padding: 0;\n}\n.app-box-image-text__img-float-text-full[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 2rem;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 3.75rem !important;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 2;\n}\n@media (min-width: 64rem) {\n  .app-box-image-text__img-float-text-full[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n    line-height: 4rem;\n    padding: 7.5rem;\n  }\n}\n.app-box-image-text__img-float-text-full[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n@media (min-width: 64rem) {\n  .app-box-image-text__img-float-text-full[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n    height: 1.875rem;\n    width: 1.875rem;\n  }\n}\n.app-box-image-text__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 17.5rem;\n  object-fit: cover;\n  width: 100%;\n}\n@media (min-width: 48.0625rem) {\n  .app-box-image-text__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 25rem;\n    object-fit: cover;\n    width: 100%;\n  }\n}\n@media (min-width: 64rem) {\n  .app-box-image-text__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100%;\n    object-fit: cover;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JveC1pbWFnZS10ZXh0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fYmFzZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJaEI7Ozs7RUFLRSxjQ0xTO0FGRVg7QUNNQTs7Ozs7RUFLRSxjQ0lLO0FGUFA7QUNNQTtFQUNFLGNDR2E7RURGYixnQkFBQTtBREhGO0FDSUU7RUFDRSx5QkNsQkk7RURtQkosWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBREZKO0FDTUE7RUFDRSxjQzVCTTtFRDZCTiwwQkFBQTtFQUNBLGdCQUFBO0FESEY7QUNLRTtFQUNFLGNDbkNPO0VEb0NQLGdCQUFBO0FESEo7QUNXTTs7RUFFRSx5QkN0QlU7QUZjbEI7QUNZSTtFQUNFLG1CQzNCWTtBRmlCbEI7QUNnQk07O0VBRUUseUJDbENJO0FGb0JaO0FDa0JJO0VBQ0UsbUJDdkNNO0FGdUJaO0FDbUJJO0VBQ0UseUJDM0NNO0FGMEJaO0FDdUJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEcEJGO0FDc0JFO0VBTEY7SUFNSSxpQkFBQTtJQUNBLGlCQUFBO0VEbkJGO0FBQ0Y7QUN3QkU7RUFDRTtJQUNFLDJCQzNDUTtFRnNCWjtFQ3dCRTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7RUR0Qko7QUFDRjtBQzZCRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUQxQko7QUM0Qkk7RUFDRSxjQ3pGRTtFRDBGRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBRDFCTjtBQzRCTTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUR6Qk47QUFDRjtBQzJCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FEekJSO0FDMkJRO0VBSkY7SUFLSSxnQkFBQTtJQUNBLGVBQUE7RUR4QlI7QUFDRjtBQytCQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUQ1QkE7QUM4QkU7RUFKRjtJRS9JRSxzQkQwRGdCO0lDekRoQixtQkR5RGdCO0VGZ0VoQjtBQUNGO0FDK0JBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkMzSlM7RUQ0SlQsY0N0SU07RUR1SU4sZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRDVCRjtBQzhCRTs7RUFFRSx1QkFBQTtBRDVCSjtBQ2lDQztFQUNDLG1CQ3pLTTtBRjJJUjtBQ2dDRTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7QUQ5Qko7QUNtQ0E7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0FEaENGO0FDa0NFO0VBQ0UsdUNBQUE7QURoQ0o7QUExSkE7RUFDRSxjQUFBO0FBNkpGO0FBM0pFO0VBSEY7SUFJSSxhQUFBO0VBOEpGO0FBQ0Y7QUE1SkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUE4Sko7QUE1Skk7RUFKRjtJQUtJLFdBQUE7RUErSko7QUFDRjtBQTdKSTtFQUNFLGFBQUE7QUErSk47QUE3Sk07RUFIRjtJQUlJLFNBQUE7SUFDQSxjQUFBO0lBQ0EsT0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFnS047QUFDRjtBQTlKTTtFQUNFLGNFTkE7RUZPQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFnS1I7QUE3Sk07RUFDRSxjRWxDQTtFRm1DQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQStKUjtBQTVKTTtFQUNFLG1CRTNDRztFRjRDSCxZQUFBO0VBQ0EsT0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUE4SlI7QUExSkk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBNEpOO0FBMUpNO0VBQ0UsY0V6Q0E7RUYwQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUE0SlI7QUExSlE7RUFWRjtJQVdJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBNkpSO0FBQ0Y7QUEzSlE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQTZKVjtBQTNKVTtFQUpGO0lBS0ksZ0JBQUE7SUFDQSxlQUFBO0VBOEpWO0FBQ0Y7QUF6Skk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBMkpOO0FBekpNO0VBTEY7SUFNSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBNEpOO0FBQ0Y7QUExSk07RUFYRjtJQVlJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUE2Sk47QUFDRiIsImZpbGUiOiJib3gtaW1hZ2UtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby9iYXNlXCI7XG5cbi5hcHAtYm94LWltYWdlLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJl9faW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYtZmxvYXQtdGV4dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiAzLjc1cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDQyLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDMuNzVyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cblxuICAgICAgaDI6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6ICRncmVlbjtcbiAgICAgICAgY29udGVudDogXCIg4qykXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xODc1cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC42MjVyZW07XG4gICAgICB9XG5cbiAgICAgICYtLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya2JsdWU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1mbG9hdC10ZXh0LWZ1bGwge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuNzVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgICAgcGFkZGluZzogNy41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTcuNXJlbTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtdGFibGV0KSB7XG4gICAgICAgIGhlaWdodDogMjVyZW07XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICZfX2luZm8ge1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuXG4gIC8vICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gIC8vICAgICB3aWR0aDogNTAlO1xuICAvLyAgIH1cblxuICAvLyAgICYtY29udGFpbmVyIHtcbiAgLy8gICAgIG1heC13aWR0aDogNTByZW07XG4gIC8vICAgICBwYWRkaW5nOiAxLjg3NXJlbTtcblxuICAvLyAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gIC8vICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgJi1iaWctbGluZSB7XG4gIC8vICAgICAgIGhlaWdodDogMC45Mzc1cmVtO1xuICAvLyAgICAgICBtYXJnaW46IDEuODc1cmVtIDA7XG4gIC8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gICAgICAgd2lkdGg6IDguNzVyZW07XG5cbiAgLy8gICAgICAgJi0tbGVmdCB7XG4gIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICAvLyAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgLy8gICAgICAgICBsZWZ0OiAwO1xuICAvLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgICAgICB0b3A6IDA7XG4gIC8vICAgICAgICAgd2lkdGg6IDYuODc1cmVtO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgJi0tcmlnaHQge1xuICAvLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIC8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgICAgICAgIHJpZ2h0OiAwO1xuICAvLyAgICAgICAgIHRvcDogMDtcbiAgLy8gICAgICAgICB3aWR0aDogMC45Mzc1cmVtO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgICYtZGVzY3JpcHRpb24ge1xuICAvLyAgICAgICBoMyB7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrYmx1ZTtcbiAgLy8gICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwLjVyZW07XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbn1cbiIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbi8vVHlwb2dyYXBoeVxuaDEsXG5oMixcbi5tYXQtZGlzcGxheS0xLFxuLm1hdC1kaXNwbGF5LTJcbiB7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuaDMsXG5oNCxcbmg1LFxuaDYsXG5zdHJvbmcge1xuICBjb2xvcjogJGdyYXk7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRkYXJrZ3JheS05MDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC4zMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICB9XG59XG5cbmEge1xuICBjb2xvcjogJGdyZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGRhcmtibHVlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cbn1cblxuLy8gc2VjdGlvbiBieSBjb2xvcnNcbi5icmFuZC1jb2xvciB7XG4gICYuaWJlcm9zdGFyIHtcbiAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZSB7XG4gICAgICAuYXBwLWJveC1pbWFnZS10ZXh0X19pbmZvLWNvbnRhaW5lci1iaWctbGluZS0tbGVmdCxcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1yaWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpYmVyb3N0YXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGliZXJvc3Rhci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLncybSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUgIHtcbiAgICAgIC5hcHAtYm94LWltYWdlLXRleHRfX2luZm8tY29udGFpbmVyLWJpZy1saW5lLS1sZWZ0LFxuICAgICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW5mby1jb250YWluZXItYmlnLWxpbmUtLXJpZ2h0ICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3Mm0tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dF9faW1nLWZsb2F0LXRleHQgaDI6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHcybS1jb2xvcjtcbiAgICB9XG5cbiAgICAuYmFubmVyLWRhdGFfX3N0YXQtbnVtYmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJHcybS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxhLTEgUmVzcG9uc2l2ZVxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIG1hcmdpbjogMCAwIDEuNzVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1mdWxsaGQpIHtcbiAgICBmb250LXNpemU6IDYuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgfVxufVxuXG4vLyBSb3cgUmV2ZXJzZVxuLnJvdy1yZXZlcnNlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgLmFwcC1ib3gtaW1hZ2UtdGV4dHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAkcmV2ZXJzZS1ib3g7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGFpbmVyLWltYWdlLS1jb250YWluZXIge1xuICAgICAgbGVmdDphdXRvICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLy8gUG9ycXVlIGFxdWkgZW4gZWwgYmFzZSA/PyBcblxuXG4uYm94LWltYWdlLXRleHQtZnVsbCB7XG4gIC5hcHAtYm94LWltYWdlLXRleHRfX2ltZy1mbG9hdC10ZXh0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS1kZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDcuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZGRpbmcgc2VjdGlvblxuLnViaS1wYWRkaW5nLXNlY3Rpb24ge1xucGFkZGluZy1ib3R0b206IDMuNzVyZW07XG5wYWRkaW5nLXRvcDogMy43NXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLWRlc2t0b3ApIHtcbiAgICBAaW5jbHVkZSB1YmktcGFkZGluZy1zZWN0aW9uO1xuICB9XG59XG5cbi8vIFViaWNvIEJ1dHRvbiBcblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuICBlbSxcbiAgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQzNzVyZW07XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMC40Mzc1cmVtIDAuNDM3NXJlbSAkcHJpbWFyeTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gfVxufVxuXG5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwLjQzNzVyZW0gMC40Mzc1cmVtICRzZWNvbmRhcnk7XG5cbiAgJi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICAgIGJveC1zaGFkb3c6IDAuNDM3NXJlbSAwLjQzNzVyZW0gJHByaW1hcnk7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIiwiQG1peGluIHViaS1wYWRkaW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogJHNlY3Rpb24tcGFkZGluZztcbiAgcGFkZGluZy10b3A6ICRzZWN0aW9uLXBhZGRpbmc7XG59XG4iXX0= */"] });


/***/ }),

/***/ "fTXl":
/*!********************************************************************!*\
  !*** ./src/app/components/box-image-text/box-image-text.module.ts ***!
  \********************************************************************/
/*! exports provided: BoxImageTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxImageTextModule", function() { return BoxImageTextModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _box_image_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box-image-text.component */ "dSpT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BoxImageTextModule {
}
BoxImageTextModule.ɵfac = function BoxImageTextModule_Factory(t) { return new (t || BoxImageTextModule)(); };
BoxImageTextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BoxImageTextModule });
BoxImageTextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BoxImageTextModule, { declarations: [_box_image_text_component__WEBPACK_IMPORTED_MODULE_1__["BoxImageTextComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_box_image_text_component__WEBPACK_IMPORTED_MODULE_1__["BoxImageTextComponent"]] }); })();


/***/ }),

/***/ "jVFg":
/*!************************************************************************************!*\
  !*** ./src/app/sections/section-container-image/section-container-image.module.ts ***!
  \************************************************************************************/
/*! exports provided: SectionContainerImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContainerImageModule", function() { return SectionContainerImageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _section_container_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-container-image.component */ "cO5Z");
/* harmony import */ var _components_w2m_info_text_w2m_info_text_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/w2m-info-text/w2m-info-text.module */ "DOtV");
/* harmony import */ var _components_box_image_text_box_image_text_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/box-image-text/box-image-text.module */ "fTXl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SectionContainerImageModule {
}
SectionContainerImageModule.entry = _section_container_image_component__WEBPACK_IMPORTED_MODULE_1__["SectionContainerImageComponent"];
SectionContainerImageModule.ɵfac = function SectionContainerImageModule_Factory(t) { return new (t || SectionContainerImageModule)(); };
SectionContainerImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SectionContainerImageModule });
SectionContainerImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_w2m_info_text_w2m_info_text_module__WEBPACK_IMPORTED_MODULE_2__["W2MInfoTextModule"],
            _components_box_image_text_box_image_text_module__WEBPACK_IMPORTED_MODULE_3__["BoxImageTextModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SectionContainerImageModule, { declarations: [_section_container_image_component__WEBPACK_IMPORTED_MODULE_1__["SectionContainerImageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_w2m_info_text_w2m_info_text_module__WEBPACK_IMPORTED_MODULE_2__["W2MInfoTextModule"],
        _components_box_image_text_box_image_text_module__WEBPACK_IMPORTED_MODULE_3__["BoxImageTextModule"]] }); })();


/***/ })

};;
//# sourceMappingURL=section-container-image-section-container-image-module.js.map