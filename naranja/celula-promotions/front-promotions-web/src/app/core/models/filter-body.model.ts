export interface IFilterBody {
  province?: any;
  locality?: any;
  categories?: IFilterBodyCategoryItem[];
  commerceName?: string;
}

export interface IFilterBodyCategoryItem {
  category: string;
  subcategories: string[];
}
