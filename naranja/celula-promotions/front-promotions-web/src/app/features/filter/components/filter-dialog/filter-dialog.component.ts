import { environment } from '@environments/environment';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromActionsFilterData from '../../../../features/filter/store/filter-data.actions';
import { IFilterData } from '../../../../features/filter/store/filter-data.reducer';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { IFilterBody, IFilterBodyCategoryItem } from '../../../../core/models/filter-body.model';
import { NavigationState } from '../../../../core/navigation/store/navigation.reducer';
import { NavigationMetaData } from '../../../../core/navigation/models/navigation.model';
import { FilterNavigationData } from '../../../../core/navigation/models/filter-dialog.model';
import * as fromSelectorFilterData from '../../../../features/filter/store/filter-data.selectors';
import * as fromActionsNavigation from '../../../../core/navigation/store/navigation.actions';
import * as fromSelectorNavigation from '../../../../core/navigation/store/navigation.selectors';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
})
export class FilterDialogComponent implements OnInit, OnDestroy {

  private readonly ALWAYS_VISIBLE_CATEGORIES = environment.filterAlwaysVisibleCategories;

  private subscriptions: Subscription[] = [];
  public loading = true;
  public moreCategoriesisOpen = false;

  public provinces: any[] = [];
  public localities: any[] = [];
  public localitiesFiltered: any[] = [];
  public categories: any[] = [];
  public alwaysVisibleCategories: any[] = [];

  public provinceSelected: any = {};
  public localitySelected: any = {};
  public categorySelected = 0;

  public commerceNameTextFieldControl: FormControl;

  @Input() type: string;
  @Input() categoriesFiltered: string[];
  @Input() provinceFiltered: string;
  @Input() localityFiltered: string;
  @Input() commerceNameFiltered: string;

  @Output() close = new EventEmitter<boolean>();
  @Output() currentLocality = new EventEmitter<any>();
  @Output() filterApply = new EventEmitter<IFilterBody>();

  public cardStyles = {
    padding: '14px',
    height: '64px',
    'box-sizing': 'border-box',
  };

  constructor(
    private store: Store<IFilterData>,
    private navigationStore: Store<NavigationState>,
  ) {
    this.commerceNameTextFieldControl = new FormControl('', Validators.maxLength(50));
  }

  ngOnInit(): void {
    this.checkNavigationData();
  }

  getCollapseButtonTextTranslateKey(): string {
    return this.moreCategoriesisOpen ? 'SHARED_COMPONENTS.FILTER_DIALOG.VIEW_LESS_CATEGORIES' :
      'SHARED_COMPONENTS.FILTER_DIALOG.VIEW_MORE_CATEGORIES';
  }

  onCollapseCategoriesButtonClicked(evt) {
    this.moreCategoriesisOpen = !this.moreCategoriesisOpen;
  }

  mapState() {
    this.subscriptions.push(
      this.store
        .pipe(select(fromSelectorFilterData.selectData))
        .subscribe(
          (data) => {
            if (data) {
              this.processFilterData(data);
              this.loading = false;
            } else {
              this.store.dispatch(new fromActionsFilterData.FetchPending());
            }
          }),
    );
  }

  processFilterData({ provinces, localities, categories }) {
    this.provinces = this.mapProvinces(provinces);
    this.provinces = this.provinces.sort((a: any , b: any) => {
      return a.text.localeCompare(b.text);
    });
    this.localities = this.mapLocalities(localities);
    this.localities = this.localities.sort((a: any , b: any) => {
      return a.text.localeCompare(b.text);
    });
    // tuple
    [this.alwaysVisibleCategories, this.categories] = this.mapCategories(categories);

  }

  mapProvinces(provinces) {
    return provinces.map(({ province, coordinates }, index: number) => {
      const coords = coordinates.split(',');

      const formatted = {
        id: index,
        text: province,
        coordinates: {
          lat: parseFloat(coords[0]) || '',
          lng: parseFloat(coords[1]) || '',
        },
        disabled: false,
      };

      return formatted;
    });
  }

  mapLocalities(localities) {
    return localities.map(({ locality, province, coordinates }, index: number) => {
      const coords = coordinates.split(',');

      const formatted = {
        province,
        id: index,
        text: locality,
        coordinates: {
          lat: parseFloat(coords[0]) || '',
          lng: parseFloat(coords[1]) || '',
        },
        disabled: false,
      };

      return formatted;
    });
  }

  mapCategories(categories): [any, any] {
    const alwaysVisibleCategoriesList = [];
    const categoriesList = [];
    categories.forEach(({ category, subcategories }, index: number) => {
      const lower = category.toLowerCase();

      const capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);
      const subcategoriesFormatted = this.mapSubcategories(subcategories);

      const categoryMapped = { subcategories: subcategoriesFormatted, checkbox: { selected: false, disabled: false }, text: capitalized };

      // check if category should be in always visible array or in collapsiple array
      if (category && this.ALWAYS_VISIBLE_CATEGORIES.includes(category)) {
        alwaysVisibleCategoriesList.push(categoryMapped);
      } else {
        categoriesList.push(categoryMapped);
      }
    });

    return [alwaysVisibleCategoriesList, categoriesList];
  }

  mapSubcategories(subcategories: string[]): string[] {
    let subcategoriesFormatted = [];
    if (subcategories && Array.isArray(subcategories)) {
      subcategoriesFormatted = subcategories.filter(subcategory => !!subcategory)
        .map((subcategory) => {
          const lowerSubcategory = subcategory.toLowerCase();
          const capitalizedSubcategory = lowerSubcategory.charAt(0).toUpperCase() + lowerSubcategory.slice(1);
          return { checkbox: { selected: false, disabled: false }, text: capitalizedSubcategory };
        });
    }

    return subcategoriesFormatted;

  }

  checkNavigationData() {
    this.subscriptions.push(
      this.navigationStore
        .pipe(select(fromSelectorNavigation.selectData))
        .pipe(filter(val => !!val))
        .pipe(take(1))
        .subscribe(
          (data) => {
            const componentData = data.history['FilterComponent'];

            if (componentData) {
              this.provinces = componentData.componentData.provinces;
              this.localities = componentData.componentData.localities;
              this.localitiesFiltered = componentData.componentData.localitiesFiltered;
              this.categories = componentData.componentData.categories;
              this.alwaysVisibleCategories = componentData.componentData.alwaysVisibleCategories;
              this.mapCommerceFiltered(this.commerceNameFiltered);
              this.mapCategoriesFiltered(this.categoriesFiltered);
              this.mapProvinceFiltered(this.provinceFiltered);
              this.mapLocalityFiltered(this.localityFiltered);
              this.loading = false;
            } else {
              this.mapState();
            }
          }),
    );
  }

  closeDialog() {
    this.close.emit(true);
  }

  mapCategoriesFiltered(categoriesFiltered) {
    this.categoriesFiltered = categoriesFiltered;
    if (categoriesFiltered && categoriesFiltered.length === 0) {
      this.alwaysVisibleCategories = this.alwaysVisibleCategories.map((category) => {
        category.checkbox.selected = false;
        category.subcategories.forEach(subcategory => subcategory.checkbox.selected = false);
        return category;
      });

      this.categories = this.categories.map((category) => {
        category.checkbox.selected = false;
        category.subcategories.forEach(subcategory => subcategory.checkbox.selected = false);
        return category;
      });
    }

    this.updateCategoriesAndSubcategoriesCounter();
  }

  mapProvinceFiltered(province: string) {
    if (province) {
      this.provinceSelected = this.provinces.find(p => p.text === province);
    } else {
      this.provinceSelected = {};
    }
  }

  mapLocalityFiltered(locality: string) {
    if (locality) {
      this.localitySelected = this.localitiesFiltered.find(l => l.text === locality);
    } else {
      this.localitySelected = {};
    }
  }

  mapCommerceFiltered(commerceName: string) {
    if (commerceName) {
      this.commerceNameTextFieldControl.setValue(commerceName);
    } else {
      this.commerceNameTextFieldControl.setValue('');
    }
    this.commerceNameTextFieldControl.updateValueAndValidity();
  }

  onProvinceSelected(province) {
    this.localitySelected = {};
    const fullyLocalitiesFiltered = this.localities.filter(locality => locality.province === province.text);
    const step = 100;
    let stepArray = fullyLocalitiesFiltered.slice(0, step);
    fullyLocalitiesFiltered.splice(0, step);
    this.localitiesFiltered = [...stepArray];
    const idInterval = setInterval(
      () => {
        if (fullyLocalitiesFiltered.length) {
          stepArray = fullyLocalitiesFiltered.slice(0, step);
          this.localitiesFiltered = [...this.localitiesFiltered, ...stepArray];
          fullyLocalitiesFiltered.splice(0, step);
        } else {
          clearInterval(idInterval);
        }
      },
      50);

    this.provinceSelected = province;
  }

  onLocalitySelected(locality) {
    this.currentLocality.emit({ province: this.provinceSelected.text, locality: locality.text });
    this.localitySelected = locality;
  }

  onAlwaysVisibleCategoriesSelectedItemsChanged(event) {

    this.updateCategoriesAndSubcategoriesCounter();
  }

  onCollapsibleCategoriesSelectedItemsChanged(event) {

    this.updateCategoriesAndSubcategoriesCounter();
  }

  updateCategoriesAndSubcategoriesCounter() {
    const alwaysVisible = this.countCategoriesAndSubcategoriesInArray(this.alwaysVisibleCategories);
    const otherCategories = this.countCategoriesAndSubcategoriesInArray(this.categories);
    this.categorySelected = alwaysVisible + otherCategories;

  }

  countCategoriesAndSubcategoriesInArray(selectedItems) {
    let categoriesCounter = 0;
    let subcategoriesCounter = 0;
    if (selectedItems && Array.isArray(selectedItems)) {
      for (const item of selectedItems) {
        if (item && item.checkbox.selected) {
          categoriesCounter = categoriesCounter + 1;
        } else {
          subcategoriesCounter = subcategoriesCounter + item.subcategories
            .filter(subcategory => !subcategory.isCheckEverythingOption)
            .filter(subcategory => !!subcategory.checkbox.selected).length;
        }

      }
    }
    return categoriesCounter + subcategoriesCounter;
  }

  onApplyFilters() {
    this.sendFilterBody();
  }

  showRestoreButton() {
    return this.categorySelected || this.provinceSelected.text || this.localitySelected.text || this.commerceNameTextFieldControl.value;
  }

  onRestoreFilters() {
    this.provinceSelected = {};
    this.localitySelected = {};

    this.categories = this.categories.map((category) => {
      category.checkbox.selected = false;
      category.subcategories = category.subcategories.map((subcategory) => {
        subcategory.checkbox.selected = false;
        return subcategory;
      });
      return category;
    });

    this.alwaysVisibleCategories = this.alwaysVisibleCategories.map((category) => {
      category.checkbox.selected = false;
      category.subcategories = category.subcategories.map((subcategory) => {
        subcategory.checkbox.selected = false;
        return subcategory;
      });
      return category;
    });

    this.categorySelected = 0;
    this.commerceNameTextFieldControl.setValue('');
    this.commerceNameTextFieldControl.updateValueAndValidity();
  }

  sendFilterBody() {
    const filterBody: IFilterBody = {};

    filterBody.province = this.provinceSelected || null;
    filterBody.locality = this.localitySelected || null;

    const alwaysVisibleSelectedCategories = this.prepareCategoriesBody(this.alwaysVisibleCategories);
    const otherCategories = this.prepareCategoriesBody(this.categories);

    filterBody.categories = alwaysVisibleSelectedCategories.concat(otherCategories);
    filterBody.commerceName = this.commerceNameTextFieldControl.value || null;
    this.saveNavigationData();

    this.filterApply.emit(filterBody);
  }

  prepareCategoriesBody(categoriesList): IFilterBodyCategoryItem[] {
    const result: IFilterBodyCategoryItem[] = [];
    if (categoriesList && Array.isArray(categoriesList)) {
      for (const item of categoriesList) {
        if (item && item.checkbox.selected) {
          result.push({ category: item.text.toUpperCase(), subcategories: [] });
        } else {
          const selectedCategories = item.subcategories
            // remove check everything option
            .filter(subcategory => !subcategory.isCheckEverythingOption)
            // remove unselected subcategories
            .filter(subcategory => !!subcategory.checkbox.selected)
            .map(subcategory => subcategory.text.toUpperCase());
          if (selectedCategories.length > 0) {
            result.push({ category: item.text.toUpperCase(), subcategories: selectedCategories });
          }

        }

      }
    }
    return result;

  }
  saveNavigationData() {
    const componentData: FilterNavigationData = {
      provinces: this.provinces,
      localities: this.localities,
      localitiesFiltered: this.localitiesFiltered,
      categories: this.categories,
      alwaysVisibleCategories: this.alwaysVisibleCategories,
      provinceSelected: this.provinceSelected,
      localitySelected: this.localitySelected,
      categorySelected: this.categorySelected,
      commerceNameSelected: this.commerceNameTextFieldControl.value,
    };

    const pageData: NavigationMetaData<FilterNavigationData> = {
      componentData,
      scrollPosition: 0,
      componentName: 'FilterComponent',
    };

    this.store.dispatch(new fromActionsNavigation.SaveData(pageData));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
