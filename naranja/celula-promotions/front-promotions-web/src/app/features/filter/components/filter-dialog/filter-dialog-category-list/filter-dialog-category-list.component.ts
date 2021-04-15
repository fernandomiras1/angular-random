import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { IFilterDialogCategoryListItem } from './model/filter-dialog-category-list-item.model';
import { ImagesUtils } from '@shared/utils/images.utils';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-filter-dialog-category-list',
  templateUrl: './filter-dialog-category-list.component.html',
  styleUrls: ['./filter-dialog-category-list.component.scss'],
})
export class FilterDialogCategoryListComponent implements OnInit {

  @Input() categories: IFilterDialogCategoryListItem[];
  @Input() showCheckAllOptions = true;

  @Output() selectedItemsChanged: EventEmitter<any[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.addCheckAllOption();
  }

  private addCheckAllOption() {
    if (this.showCheckAllOptions) {
      this.categories.forEach((category) => {
        if (category && category.subcategories && category.subcategories.length > 0) {
          const firstItem = category.subcategories[0];
          if (firstItem && !firstItem.isCheckEverythingOption) {
            const checkAllOption = {
              text: `Todo ${category.text.toLowerCase()}`,
              checkbox: { selected: false, disabled: false },
              subcategories: [],
              isCheckEverythingOption: true,
            };
            category.subcategories.unshift(checkAllOption);
          }

        }
      });

    }

  }

  @HostListener('click', ['$event'])
  onCategorySelected(index: any) {
    // $event.preventDefault();
    if (index.type && index.type === 'click') {
      return false;
    }
    const indexItem = Array.isArray(index) ? index[0] : index;
    const actualState = this.categories[indexItem].checkbox.selected;

    const selectedCategory = this.categories[indexItem];

    selectedCategory.checkbox.selected = !actualState;

    this.updateAndEmitSelectedItemsList();
  }

  @HostListener('click', ['$event'])
  onSubcategoryCheckAllOptionSelected(subCategoryIndex: any, categoryIndex: any) {
    // $event.preventDefault();
    if (subCategoryIndex.type && subCategoryIndex.type === 'click') {
      return false;
    }

    const checkAllItemIndex = Array.isArray(subCategoryIndex) ? subCategoryIndex[0] : subCategoryIndex;

    // get parent of subcategory
    const parentCategory = this.categories[categoryIndex];

    // get selected category
    const checkAllOption = parentCategory.subcategories[checkAllItemIndex];

    // mark all subcategories as selected
    this.markAllSubcategoriesAsChecked(parentCategory, !checkAllOption.checkbox.selected);

    this.updateAndEmitSelectedItemsList();
  }

  @HostListener('click', ['$event'])
  onSubcategorySelected(subCategoryIndex: any, categoryIndex: any) {
    // $event.preventDefault();
    if (subCategoryIndex.type && subCategoryIndex.type === 'click') {
      return false;
    }
    const subCategoryIndexItem = Array.isArray(subCategoryIndex) ? subCategoryIndex[0] : subCategoryIndex;

    // get parent of subcategory
    const parentCategory = this.categories[categoryIndex];

    // get selected category

    const selectedSubcategory = parentCategory.subcategories[subCategoryIndexItem];
    const selectedSubcategoryActualState = parentCategory.subcategories[subCategoryIndexItem].checkbox.selected;

    // update check selected status of subcategory
    selectedSubcategory.checkbox.selected = !selectedSubcategoryActualState;

    this.updateEverythingOptionSelectedStatus(parentCategory);
    this.updateAndEmitSelectedItemsList();
  }

  updateEverythingOptionSelectedStatus(category) {
    const hasEveryCategoryChecked = this.categoryHasEverySubcategoryChecked(category);
    if (hasEveryCategoryChecked) {
      this.markEverythingOptionAsChecked(category, true);
    } else {
      this.markEverythingOptionAsChecked(category, false);
    }
  }

  markEverythingOptionAsChecked(category, newState: boolean) {
    const everythingItem = category.subcategories.find(el => !!el.isCheckEverythingOption);
    if (everythingItem) {
      everythingItem.checkbox.selected = newState;
    }
  }

  categoryHasEverySubcategoryChecked(category): boolean {
    if (category && category.subcategories) {
      const checkedItems = category.subcategories
        .filter(el => !el.isCheckEverythingOption)
        .filter(el => !!el.checkbox.selected);
      return checkedItems.length === category.subcategories.length - 1;
    }
    return false;
  }

  markAllSubcategoriesAsChecked(category, newState: boolean) {
    if (category && category.subcategories) {
      category.subcategories.forEach((subcategory) => {
        subcategory.checkbox.selected = newState;
      });
    }
  }

  updateAndEmitSelectedItemsList() {

    this.selectedItemsChanged.next(this.categories);
  }

  getCurrentSelectedSubcategoriesInCategoryCounter(category): string {
    let res = 0;
    if (category && category.subcategories) {
      res = category.subcategories.filter(subcategory => !subcategory.isCheckEverythingOption)
        .filter(subcategory => !!subcategory.checkbox.selected).length;

    }
    return res === 0 ? '' : `(${res})`;
  }

  getCategoryIcon(category: string) {
    const iconName = ImagesUtils.generateName(category, '-');
    return `assets/images/icons/categories/${iconName}.svg`;
  }

  getEmptyIcon(category: string) {
    const iconName = ImagesUtils.generateName(category, '-');
    return `assets/images/icons/categories/${iconName}-empty.svg`;
  }
}
