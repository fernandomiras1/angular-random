// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
// import { Store } from '@ngrx/store';
// import { TranslateModule } from '@ngx-translate/core';
// import { PromotionsService } from '@promotions/services/promotions.service';
// import { ZumoModule } from 'zumo';
//
// import { FilterDialogComponent } from './filter-dialog.component';
// import { AppState } from '@root-store/root-store.reducer';
// import { MockStore, TestingModule } from '../../../../../../test/utils/utils';
//
// const mockState = require('test/utils/promotions.json');
// describe('FilterDialogComponent', () => {
//   let component: FilterDialogComponent;
//   let fixture: ComponentFixture<FilterDialogComponent>;
//   let store: MockStore<AppState>;
//   const promoServiceSpy = jasmine.createSpyObj('PromotionsService', ['getDaysCounter']);
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [FilterDialogComponent],
//       imports: [
//         TranslateModule.forRoot(),
//         ZumoModule,
//         TestingModule,
//       ],
//       providers: [
//         { provide: Store, useClass: MockStore },
//         { provide: PromotionsService, useValue: promoServiceSpy },
//       ],
//       schemas: [NO_ERRORS_SCHEMA],
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(inject([Store], (testStore: MockStore<AppState>) => {
//     store = testStore;
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(FilterDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   // it('should call checkNavigationData', () => {
//   //   const spy = spyOn(component, 'checkNavigationData');
//   //   component.ngOnInit();
//   //   expect(spy).toHaveBeenCalled();
//   // });
//
//   it('should call mapProvinces, mapLocalities and mapCategories', () => {
//     const spyProvinces = spyOn(component, 'mapProvinces');
//     const spyLocalities = spyOn(component, 'mapLocalities');
//     const spyCategories = spyOn(component, 'mapCategories');
//
//     component.processFilterData({ provinces: [], localities: [], categories: [] });
//     expect(spyProvinces).toHaveBeenCalled();
//     expect(spyLocalities).toHaveBeenCalled();
//     expect(spyCategories).toHaveBeenCalled();
//   });
//
//   it('should call mapProvinces, mapLocalities and mapCategories', () => {
//     const spyProvinces = spyOn(component, 'mapProvinces');
//     const spyLocalities = spyOn(component, 'mapLocalities');
//     const spyCategories = spyOn(component, 'mapCategories');
//
//     component.processFilterData({ provinces: [], localities: [], categories: [] });
//     expect(spyProvinces).toHaveBeenCalled();
//     expect(spyLocalities).toHaveBeenCalled();
//     expect(spyCategories).toHaveBeenCalled();
//   });
//
//   it('should map provinces', () => {
//     const provinces = [
//       {
//         province: 'PROVINCE1',
//         coordinates: '1,2',
//       },
//       {
//         province: 'PROVINCE2',
//         coordinates: '1,2',
//       },
//     ];
//
//     const processedProvinces = [
//       { id: 0, text: 'PROVINCE1', coordinates: { lat: 1, lng: 2 }, disabled: false },
//       { id: 1, text: 'PROVINCE2', coordinates: { lat: 1, lng: 2 }, disabled: false },
//     ];
//     const res = component.mapProvinces(provinces);
//
//     expect(res).toEqual(processedProvinces);
//   });
//
//   it('should map localities', () => {
//     const localities = [{ locality: 'LOCALITY1', province: 'PROVINCE1', coordinates: '1,2' }];
//     const processedLocalities = [
//       { province: 'PROVINCE1', id: 0, text: 'LOCALITY1', coordinates: { lat: 1, lng: 2 }, disabled: false },
//     ];
//     const res = component.mapLocalities(localities);
//
//     expect(res).toEqual(processedLocalities);
//   });
//
//   it('should map categories', () => {
//     const categories = ['CATEGORY1', 'CATEGORY2'];
//     const processedCategories = [
//       { checkbox: { selected: false, disabled: false }, text: 'Category1' },
//       { checkbox: { selected: false, disabled: false }, text: 'Category2' },
//     ];
//     const res = component.mapCategories(categories);
//
//     expect(res).toEqual(processedCategories);
//   });
//
//   it('should map categories filtered', () => {
//     const categories = ['CATEGORY1', 'CATEGORY2'];
//     component.mapCategoriesFiltered(categories);
//
//     expect(component.categoriesFiltered).toEqual(categories);
//
//   });
//
//   it('should emit true to close dialog', () => {
//     component.closeDialog();
//     component.close.subscribe(emmitted => expect(emmitted).toBeTruthy());
//   });
//
//   it('should set province selected', () => {
//     const province = 'Córdoba';
//
//     component.onProvinceSelected(province);
//     expect(component.provinceSelected).toBe(province);
//   });
//
//   it('should set locality selected', () => {
//     const locality = 'Capital';
//
//     component.onLocalitySelected(locality);
//     expect(component.localitySelected).toBe(locality);
//   });
//
//   it('should change the value of the checkbox selected to true', () => {
//     const categoriesMock = [{ checkbox: { selected: false, disabled: false }, text: 'category' }];
//
//     component.categories = categoriesMock;
//
//     component.checkSelected(0);
//     expect(component.categories[0].checkbox.selected).toBeTruthy();
//
//     component.checkSelected(0);
//     expect(component.categories[0].checkbox.selected).toBeFalsy();
//   });
//
//   it('should call sendFilterBody method', () => {
//     const spy = spyOn(component, 'sendFilterBody').and.returnValue(null);
//
//     component.onApplyFilters();
//
//     expect(spy).toHaveBeenCalled();
//   });
//
//   it('should reset filter variables', () => {
//     const categoriesMock = [{ checkbox: { selected: true, disabled: false }, text: 'category' }];
//
//     component.categories = categoriesMock;
//
//     component.onRestoreFilters();
//
//     expect(component.provinceSelected).toEqual({});
//     expect(component.localitySelected).toEqual({});
//     expect(component.categories[0].checkbox.selected).toBeFalsy();
//   });
//
//   it('should emit the object with selected filters', () => {
//     const categoriesMock = [{ checkbox: { selected: true, disabled: false }, text: 'category' }];
//     const provinceMock = 'Córdoba';
//     const localityMock = 'Capital';
//
//     component.provinceSelected = provinceMock;
//     component.localitySelected = localityMock;
//     component.categories = categoriesMock;
//
//     component.sendFilterBody();
//     component.filterApply.subscribe((emmitted) => {
//       expect(emmitted).toEqual({
//         provincia: provinceMock,
//         localidad: localityMock,
//         categoria: [categoriesMock[0].text.toUpperCase()],
//       });
//     });
//   });
// });
