import { TestingModule } from './../../../../../../../test/utils/utils';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDialogCategoryListComponent } from './filter-dialog-category-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { ZumoComponentesModule } from '@app/shared/zumo-componentes.module';
import { ImagesUtils } from '@app/shared/utils/images.utils';

describe('FilterDialogCategoryListComponent', () => {
  let component: FilterDialogCategoryListComponent;
  let fixture: ComponentFixture<FilterDialogCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(),
        ZumoComponentesModule,
        TestingModule],
      declarations: [FilterDialogCategoryListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDialogCategoryListComponent);
    component = fixture.componentInstance;
    component.categories = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addCheckAllOption should add check all option', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: true, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: true, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      }],
      isCheckEverythingOption: false,
    }];
    component.showCheckAllOptions = true;
    // @ts-ignore
    component.addCheckAllOption();
    expect(component.categories[0].subcategories.length).toEqual(2);
  });

  it('onCategorySelected should set selected to true', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: false, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: false, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      }],
      isCheckEverythingOption: false,
    }];
    component.onCategorySelected([0]);
    expect(component.categories[0].checkbox.selected).toBeTruthy();
  });

  it('onSubcategorySelected should set selected to true', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: false, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: false, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      },
      {
        text: 'test subcategory 2',
        checkbox: { selected: false, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      },
      ],
      isCheckEverythingOption: false,
    }];
    component.onSubcategorySelected([0], 0);
    expect(component.categories[0].subcategories[0].checkbox.selected).toBeTruthy();
  });

  it('onSubcategoryCheckAllOptionSelected should call markAllSubcategoriesAsChecked', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: false, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: false, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      }],
      isCheckEverythingOption: false,
    }];
    const spy = spyOn(component, 'markAllSubcategoriesAsChecked');
    component.onSubcategoryCheckAllOptionSelected(0, 0);
    expect(spy).toHaveBeenCalled();
  });

  it('markAllSubcategoriesAsChecked should set new state to  all subcategories', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: false, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: false, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      }],
      isCheckEverythingOption: false,
    }];
    component.markAllSubcategoriesAsChecked(component.categories[0], true);
    expect(component.categories[0].subcategories[0].checkbox.selected).toBeTruthy();
  });

  it('getCurrentSelectedSubcategoriesInCategoryCounter should return (1)', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: false, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: true, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      }],
      isCheckEverythingOption: false,
    }];
    const res = component.getCurrentSelectedSubcategoriesInCategoryCounter(component.categories[0]);
    expect(res).toEqual('(1)');
  });

  it('getCurrentSelectedSubcategoriesInCategoryCounter should return empty string', () => {
    component.categories = [{
      text: 'test category',
      checkbox: { selected: false, disabled: false },
      subcategories: [{
        text: 'test subcategory',
        checkbox: { selected: false, disabled: false },
        subcategories: [],
        isCheckEverythingOption: false,
      }],
      isCheckEverythingOption: false,
    }];
    const res = component.getCurrentSelectedSubcategoriesInCategoryCounter(component.categories[0]);
    expect(res).toEqual('');
  });

  it('getCategoryIcon should call ImagesUtils.generateName', () => {
    const spy = spyOn(ImagesUtils, 'generateName');
    component.getCategoryIcon('test');
    expect(spy).toHaveBeenCalled();
  });

  it('getEmptyIcon should call ImagesUtils.generateName', () => {
    const spy = spyOn(ImagesUtils, 'generateName');
    component.getEmptyIcon('test');
    expect(spy).toHaveBeenCalled();
  });

});
