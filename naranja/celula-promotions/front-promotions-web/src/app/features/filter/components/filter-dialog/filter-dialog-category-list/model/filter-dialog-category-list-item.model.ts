export interface IFilterDialogCategoryListItem {
  text: string;
  checkbox: { selected: boolean, disabled: boolean };
  subcategories: any[];
  isCheckEverythingOption?: boolean;
}
