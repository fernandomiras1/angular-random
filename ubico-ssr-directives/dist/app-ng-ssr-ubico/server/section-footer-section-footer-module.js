exports.ids = ["section-footer-section-footer-module"];
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

/***/ "4uAo":
/*!*********************************************************************!*\
  !*** ./src/app/sections/section-footer/section-footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionFooterComponent", function() { return SectionFooterComponent; });
/* harmony import */ var _section_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../section-common */ "0D8H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_app_form_contact_app_form_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/app-form-contact/app-form-contact.component */ "Exzc");
/* harmony import */ var _shared_components_w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/w2m-link/w2m-link.component */ "rR0t");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");






function SectionFooterComponent_footer_0_ng_container_5_div_1_w2m_link_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-link", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", subItem_r9.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subItem_r9.name, " ");
} }
function SectionFooterComponent_footer_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SectionFooterComponent_footer_0_ng_container_5_div_1_w2m_link_5_Template, 2, 2, "w2m-link", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r6.subItems);
} }
function SectionFooterComponent_footer_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SectionFooterComponent_footer_0_ng_container_5_div_1_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r6.subItems.length);
} }
function SectionFooterComponent_footer_0_w2m_link_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-link", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "em", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", icon_r11.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("fa-" + icon_r11.icon);
} }
function SectionFooterComponent_footer_0_div_10_w2m_link_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "w2m-link", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const legal_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlLink", legal_r13.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", legal_r13.title, " ");
} }
function SectionFooterComponent_footer_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SectionFooterComponent_footer_0_div_10_w2m_link_1_Template, 2, 2, "w2m-link", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const footer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", footer_r1.legal);
} }
function SectionFooterComponent_footer_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "w2mSafeToHtml");
} if (rf & 2) {
    const footer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, footer_r1.copyright), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function SectionFooterComponent_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SectionFooterComponent_footer_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-form-contact", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SectionFooterComponent_footer_0_w2m_link_9_Template, 2, 3, "w2m-link", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SectionFooterComponent_footer_0_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SectionFooterComponent_footer_0_div_11_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const footer_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", footer_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formConfig", footer_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getItemIcons(footer_r1.items));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", footer_r1.legal.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", footer_r1.copyright);
} }
class SectionFooterComponent extends _section_common__WEBPACK_IMPORTED_MODULE_0__["SectionCommon"] {
    getItemIcons(items) {
        return items
            .map(item => item.icons)
            .reduce((acc, val) => acc.concat(val), []);
    }
}
SectionFooterComponent.ɵfac = function SectionFooterComponent_Factory(t) { return ɵSectionFooterComponent_BaseFactory(t || SectionFooterComponent); };
SectionFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SectionFooterComponent, selectors: [["section-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "section w2m-footer", 4, "ngIf"], [1, "section", "w2m-footer"], [1, "container"], [1, "w2m-footer__image"], ["src", "assets/img/logo-ubico-dark.svg", "alt", "", 1, "w2m-footer__logo"], [1, "w2m-footer__container", "columns", "is-multiline", "is-variable"], [4, "ngFor", "ngForOf"], [1, "column", "is-12-tablet", "is-3-desktop", "is-4-widescreen", "is-3-fullhd", "is-offset-2-widescreen", "is-offset-3-fullhd", "w2m-footer__form"], [3, "formConfig"], [1, "w2m-footer__social"], ["class", "w2m-footer__social--link", 3, "urlLink", 4, "ngFor", "ngForOf"], ["class", "w2m-footer__politicas", 4, "ngIf"], ["class", "w2m-footer__copyright", 3, "innerHTML", 4, "ngIf"], ["class", "column is-4-tablet is-3-desktop is-2-widescreen", 4, "ngIf"], [1, "column", "is-4-tablet", "is-3-desktop", "is-2-widescreen"], [1, "w2m-footer__title"], [1, "w2m-footer__border"], [1, "w2m-footer__links"], ["class", "w2m-footer__links--link", 3, "urlLink", 4, "ngFor", "ngForOf"], [1, "w2m-footer__links--link", 3, "urlLink"], [1, "w2m-footer__social--link", 3, "urlLink"], [1, "fab"], [1, "w2m-footer__politicas"], ["class", "w2m-footer__politicas-link", 3, "urlLink", 4, "ngFor", "ngForOf"], [1, "w2m-footer__politicas-link", 3, "urlLink"], [1, "w2m-footer__copyright", 3, "innerHTML"]], template: function SectionFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SectionFooterComponent_footer_0_Template, 12, 5, "footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.fields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_app_form_contact_app_form_contact_component__WEBPACK_IMPORTED_MODULE_3__["AppFormContactComponent"], _shared_components_w2m_link_w2m_link_component__WEBPACK_IMPORTED_MODULE_4__["W2mLinkComponent"]], pipes: [_core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_5__["W2mSafeHtmlPipe"]], styles: [".w2m-footer[_ngcontent-%COMP%] {\n  padding-top: 6.25rem;\n}\n.w2m-footer__image[_ngcontent-%COMP%] {\n  padding-bottom: 4.375rem;\n}\n.w2m-footer__title[_ngcontent-%COMP%] {\n  color: #003E72;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n}\n.w2m-footer__border[_ngcontent-%COMP%] {\n  background-color: #72BF44;\n  background-repeat: no-repeat;\n  padding-bottom: 0.3125rem;\n  width: 3.75rem;\n}\n.w2m-footer__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.w2m-footer__links--link[_ngcontent-%COMP%] {\n  color: #616161;\n  margin-bottom: 0.75rem;\n}\n.w2m-footer__links--link[_ngcontent-%COMP%]:hover {\n  color: #72BF44;\n}\n.w2m-footer__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.w2m-footer__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  margin-top: 1.25rem;\n}\n.w2m-footer__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  margin-top: 1.375rem;\n}\n.w2m-footer__social[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n  margin-top: 0;\n}\n.w2m-footer__social[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-left: 1.125rem;\n}\n@media (min-width: 64rem) {\n  .w2m-footer__social[_ngcontent-%COMP%] {\n    margin-top: -6.25rem;\n  }\n}\n.w2m-footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1)   em[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.w2m-footer__politicas[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1.5rem;\n}\n@media (min-width: 48.0625rem) {\n  .w2m-footer__politicas[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.w2m-footer__politicas-link[_ngcontent-%COMP%] {\n  color: #616161;\n  font-size: 0.875rem;\n  margin-left: 0.3125rem;\n}\n.w2m-footer__politicas-link[_ngcontent-%COMP%]:hover {\n  color: #72BF44;\n  transition: ease 0.3s;\n}\n@media (min-width: 48.0625rem) {\n  .w2m-footer__politicas-link[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.w2m-footer__politicas[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 0;\n}\n.w2m-footer__copyright[_ngcontent-%COMP%] {\n  display: flex;\n}\n.w2m-footer__copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #616161;\n  font-size: 0.875rem;\n  margin-left: 0.3125rem;\n}\n.w2m-footer__copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3Rpb24tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy91Ymljby9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtBQURGO0FBR0U7RUFDRSx3QkFBQTtBQURKO0FBSUU7RUFDRSxjQ05PO0VET1AsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZKO0FBS0U7RUFDRSx5QkNYSTtFRFlKLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUpKO0FBTUk7RUFDRSxjQ1BDO0VEUUQsc0JBQUE7QUFKTjtBQU1NO0VBQ0UsY0MxQkE7QURzQlI7QUFRSTtFQUNFLGdCQUFBO0FBTk47QUFVRTtFQUNFLG1CQUFBO0FBUko7QUFXRTtFQUNFLG9CQUFBO0FBVEo7QUFZRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQVZKO0FBWUk7RUFDRSxxQkFBQTtBQVZOO0FBYUk7RUFSRjtJQVNJLG9CQUFBO0VBVko7QUFDRjtBQWNJO0VBQ0UseUJBQUE7QUFaTjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQWRKO0FBZ0JJO0VBSkY7SUFLSSxhQUFBO0VBYko7QUFDRjtBQWVJO0VBQ0UsY0N4REM7RUR5REQsbUJBQUE7RUFDQSxzQkFBQTtBQWJOO0FBZU07RUFDRSxjQzVFQTtFRDZFQSxxQkFBQTtBQWJSO0FBZ0JNO0VBVkY7SUFXSSxjQUFBO0VBYk47QUFDRjtBQWlCRTtFQUNFLGNBQUE7QUFmSjtBQWtCRTtFQUNFLGFBQUE7QUFoQko7QUFrQkk7RUFDRSxjQy9FQztFRGdGRCxtQkFBQTtFQUNBLHNCQUFBO0FBaEJOO0FBb0JFO0VBQ0UsY0FBQTtBQWxCSiIsImZpbGUiOiJzZWN0aW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy91Ymljby92YXJpYWJsZXNcIjtcblxuLncybS1mb290ZXIge1xuICBwYWRkaW5nLXRvcDogNi4yNXJlbTtcblxuICAmX19pbWFnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICZfX2JvcmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XG4gICAgd2lkdGg6IDMuNzVyZW07XG4gIH1cblxuICAmX19saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJi0tbGluayB7XG4gICAgICBjb2xvcjogJGdyYXk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gICZfX2xpbmtzIHA6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICB9XG5cbiAgJl9fbGlua3MgYTpudGgtY2hpbGQoMSkge1xuICAgIG1hcmdpbi10b3A6IDEuMzc1cmVtO1xuICB9XG5cbiAgJl9fc29jaWFsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgZW0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEuMTI1cmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaWEtZGVza3RvcCkge1xuICAgICAgbWFyZ2luLXRvcDogLTYuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fc29jaWFsIGE6bnRoLWNoaWxkKDEpIHtcbiAgICBlbSB7XG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICZfX3BvbGl0aWNhcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgIGNvbG9yOiAkZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMC4zMTI1cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZWRpYS10YWJsZXQpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fcG9saXRpY2FzIGE6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICZfX2NvcHlyaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIHAge1xuICAgICAgY29sb3I6ICRncmF5O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjMxMjVyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY29weXJpZ2h0IHA6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuIiwiLy8gT3ZlcnJpZGluZyBnbG9iYWwgdmFyaWFibGVzXG5cbi8vIENPTE9SU1xuXG4kZGFya2JsdWU6ICMwMDNFNzI7XG5cbiRncmVlbjogIzcyQkY0NDtcblxuJHNvZnRibHVlOiAjMDBBN0UxO1xuJHNvZnRibHVlLTEwMDogI0IzRTVGNjtcblxuJHR1cnF1b2lzZTogIzFFQ0FEMztcblxuJHBpbms6ICNERjE2ODM7XG5cbiRwdXJwbGU6ICM2MDI2OUU7XG5cbiRyZWQ6ICNGRjBBMEE7XG5cbiRvcmFuZ2U6ICNGNEI2M0U7XG5cbiRncmF5OiAjNjE2MTYxO1xuJHNvZnRncmF5LTEwMDogI0QwRDBEMDtcbiRzb2Z0Z3JheS0zMDA6ICM5MDkwOTA7XG4kZGFya2dyYXktOTAwOiAjMzMzMzMzO1xuXG4kd2hpdGU6ICNGRkZGRkY7XG5cbiRpYmVyb3N0YXItY29sb3I6ICM2N0JBQUY7XG4kdzJtLWNvbG9yOiAjQzRENjAwO1xuXG4kdGl0bGVzLWNvbG9yOiAkZGFya2JsdWU7XG4kYm9keS1jb2xvcjogJGdyYXk7XG4kc29mdC10ZXh0OiAkc29mdGdyYXktMzAwO1xuXG4kcHJpbWFyeTogJGRhcmtibHVlO1xuJHNlY29uZGFyeTogJGdyZWVuO1xuJHRlcnRpYXJ5OiAkc29mdGJsdWU7XG4kcXVhdGVybmFyeTogJHR1cnF1b2lzZTtcbiRxdWluYXJ5OiAkcGluaztcbiRzZXh0YXJ5OiAkcHVycGxlO1xuXG4kaW5mbzogJHNvZnRibHVlLTEwMDtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogJG9yYW5nZTtcbiRkYW5nZXI6ICRyZWQ7XG5cbiRoZWFkaW5ncy1jb2xvcjogJHByaW1hcnk7XG5cbi8vIEJPWCBDT01QT05FTlRTXG4kcmV2ZXJzZS1ib3g6IHJvdy1yZXZlcnNlO1xuXG4vL0JyZWFrcG9pbnRzXG4kbWVkaWEtdGFibGV0OiA0OC4wNjI1cmVtO1xuJG1lZGlhLWRlc2t0b3A6IDY0cmVtO1xuJG1lZGlhLXdpZGVzY3JlZW46IDc2cmVtO1xuJG1lZGlhLWZ1bGxoZDogODhyZW07XG5cbi8vIFNlY3Rpb25zXG4kc2VjdGlvbi1wYWRkaW5nOiA3LjVyZW07XG4iXX0= */"] });
const ɵSectionFooterComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SectionFooterComponent);


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

/***/ "Exzc":
/*!***************************************************************************!*\
  !*** ./src/app/components/app-form-contact/app-form-contact.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppFormContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormContactComponent", function() { return AppFormContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/w2m-safe-to-html.pipe */ "ZDRU");









function AppFormContactComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "w2mSafeToHtml");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.formConfig.textGDPR), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AppFormContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.PATTERN_EMAIL = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    }
    ngOnInit() {
        this.formContact = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.PATTERN_EMAIL)]],
            doubts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            acceptedPolicy: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue],
        });
    }
    submit(formData) {
    }
}
AppFormContactComponent.ɵfac = function AppFormContactComponent_Factory(t) { return new (t || AppFormContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AppFormContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppFormContactComponent, selectors: [["app-form-contact"]], inputs: { formConfig: "formConfig" }, decls: 32, vars: 25, consts: [[1, "app-form-contact__title"], [1, "app-form-contact", 3, "formGroup"], ["appearance", "legacy"], ["formControlName", "name", "autocomplete", "off", "matInput", "", 3, "placeholder"], ["matPrefix", ""], [1, "far", "fa-user"], ["formControlName", "email", "autocomplete", "off", "matInput", "", 3, "placeholder"], [1, "far", "fa-envelope-open"], ["formControlName", "doubts", "autocomplete", "off", "matInput", "", 3, "placeholder"], [1, "far", "fa-pencil"], ["type", "button", 1, "app-form-contact__button", 3, "disabled", "click"], ["formControlName", "acceptedPolicy", 1, "app-form-contact__checkbox"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]], template: function AppFormContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "em", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "em", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppFormContactComponent_Template_button_click_27_listener() { return ctx.submit(ctx.formContact.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AppFormContactComponent_p_31_Template, 2, 3, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formConfig.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, "FORMS.CONTACT.NAME"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 13, "FORMS.CONTACT.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 15, "FORMS.CONTACT.EMAIL"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 17, "FORMS.CONTACT.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 19, "FORMS.CONTACT.DOUBTS"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 21, "FORMS.CONTACT.DOUBTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formContact.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 23, "FORMS.CONTACT.SUBSCRIBE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formConfig.textGDPR);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPrefix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _core_pipes_w2m_safe_to_html_pipe__WEBPACK_IMPORTED_MODULE_7__["W2mSafeHtmlPipe"]], styles: [".app-form-contact__title[_ngcontent-%COMP%] {\n  color: #003E72;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n}\n.app-form-contact[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.app-form-contact[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n.app-form-contact[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #72BF44;\n  margin-right: 0.625rem;\n}\n.app-form-contact__checkbox[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n  margin-top: 2.625rem;\n}\n.app-form-contact[_ngcontent-%COMP%]    .mat-form-field.mat-focused .mat-form-field-label {\n  margin-top: 0.3125rem;\n}\n.app-form-contact__button[_ngcontent-%COMP%] {\n  background: #72BF44;\n  border: none;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  height: 2.5rem;\n  position: relative;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1mb3JtLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ViaWNvL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7QUFISjtBQU1FO0VBQ0UscUJBQUE7QUFKSjtBQU9FO0VBQ0UsY0NiSTtFRGNKLHNCQUFBO0FBTEo7QUFRRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVNFO0VBQ0UscUJBQUE7QUFQSjtBQVVFO0VBQ0UsbUJDM0JJO0VENEJKLFlBQUE7RUFDQSxjQ1RJO0VEVUosZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFSSiIsImZpbGUiOiJhcHAtZm9ybS1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ViaWNvL3ZhcmlhYmxlc1wiO1xuXG4uYXBwLWZvcm0tY29udGFjdCB7XG4gICZfX3RpdGxlIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xuICB9XG5cbiAgLm1hdC1pY29uIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgbWFyZ2luLXRvcDogMi42MjVyZW07XG4gIH1cblxuICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi8vIE92ZXJyaWRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xuXG4vLyBDT0xPUlNcblxuJGRhcmtibHVlOiAjMDAzRTcyO1xuXG4kZ3JlZW46ICM3MkJGNDQ7XG5cbiRzb2Z0Ymx1ZTogIzAwQTdFMTtcbiRzb2Z0Ymx1ZS0xMDA6ICNCM0U1RjY7XG5cbiR0dXJxdW9pc2U6ICMxRUNBRDM7XG5cbiRwaW5rOiAjREYxNjgzO1xuXG4kcHVycGxlOiAjNjAyNjlFO1xuXG4kcmVkOiAjRkYwQTBBO1xuXG4kb3JhbmdlOiAjRjRCNjNFO1xuXG4kZ3JheTogIzYxNjE2MTtcbiRzb2Z0Z3JheS0xMDA6ICNEMEQwRDA7XG4kc29mdGdyYXktMzAwOiAjOTA5MDkwO1xuJGRhcmtncmF5LTkwMDogIzMzMzMzMztcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4kaWJlcm9zdGFyLWNvbG9yOiAjNjdCQUFGO1xuJHcybS1jb2xvcjogI0M0RDYwMDtcblxuJHRpdGxlcy1jb2xvcjogJGRhcmtibHVlO1xuJGJvZHktY29sb3I6ICRncmF5O1xuJHNvZnQtdGV4dDogJHNvZnRncmF5LTMwMDtcblxuJHByaW1hcnk6ICRkYXJrYmx1ZTtcbiRzZWNvbmRhcnk6ICRncmVlbjtcbiR0ZXJ0aWFyeTogJHNvZnRibHVlO1xuJHF1YXRlcm5hcnk6ICR0dXJxdW9pc2U7XG4kcXVpbmFyeTogJHBpbms7XG4kc2V4dGFyeTogJHB1cnBsZTtcblxuJGluZm86ICRzb2Z0Ymx1ZS0xMDA7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICRvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuXG4kaGVhZGluZ3MtY29sb3I6ICRwcmltYXJ5O1xuXG4vLyBCT1ggQ09NUE9ORU5UU1xuJHJldmVyc2UtYm94OiByb3ctcmV2ZXJzZTtcblxuLy9CcmVha3BvaW50c1xuJG1lZGlhLXRhYmxldDogNDguMDYyNXJlbTtcbiRtZWRpYS1kZXNrdG9wOiA2NHJlbTtcbiRtZWRpYS13aWRlc2NyZWVuOiA3NnJlbTtcbiRtZWRpYS1mdWxsaGQ6IDg4cmVtO1xuXG4vLyBTZWN0aW9uc1xuJHNlY3Rpb24tcGFkZGluZzogNy41cmVtO1xuIl19 */"] });


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

/***/ "WP68":
/*!************************************************************************!*\
  !*** ./src/app/components/app-form-contact/app-form-contact.module.ts ***!
  \************************************************************************/
/*! exports provided: AppFormContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormContactModule", function() { return AppFormContactModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_form_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-form-contact.component */ "Exzc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









const MATERIAL_MODULES = [
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
];
class AppFormContactModule {
}
AppFormContactModule.ɵfac = function AppFormContactModule_Factory(t) { return new (t || AppFormContactModule)(); };
AppFormContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppFormContactModule });
AppFormContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            MATERIAL_MODULES,
            src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppFormContactModule, { declarations: [_app_form_contact_component__WEBPACK_IMPORTED_MODULE_7__["AppFormContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]], exports: [_app_form_contact_component__WEBPACK_IMPORTED_MODULE_7__["AppFormContactComponent"]] }); })();


/***/ }),

/***/ "Y87h":
/*!******************************************************************!*\
  !*** ./src/app/sections/section-footer/section-footer.module.ts ***!
  \******************************************************************/
/*! exports provided: SectionFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionFooterModule", function() { return SectionFooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var src_app_shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/w2m-link/w2m-link.module */ "RLeD");
/* harmony import */ var src_app_components_app_form_contact_app_form_contact_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/app-form-contact/app-form-contact.module */ "WP68");
/* harmony import */ var _section_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section-footer.component */ "4uAo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SectionFooterModule {
}
SectionFooterModule.entry = _section_footer_component__WEBPACK_IMPORTED_MODULE_4__["SectionFooterComponent"];
SectionFooterModule.ɵfac = function SectionFooterModule_Factory(t) { return new (t || SectionFooterModule)(); };
SectionFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SectionFooterModule });
SectionFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
            src_app_shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"],
            src_app_components_app_form_contact_app_form_contact_module__WEBPACK_IMPORTED_MODULE_3__["AppFormContactModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SectionFooterModule, { declarations: [_section_footer_component__WEBPACK_IMPORTED_MODULE_4__["SectionFooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
        src_app_shared_components_w2m_link_w2m_link_module__WEBPACK_IMPORTED_MODULE_2__["W2mLinkModule"],
        src_app_components_app_form_contact_app_form_contact_module__WEBPACK_IMPORTED_MODULE_3__["AppFormContactModule"]], exports: [_section_footer_component__WEBPACK_IMPORTED_MODULE_4__["SectionFooterComponent"]] }); })();


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
//# sourceMappingURL=section-footer-section-footer-module.js.map