export interface IFeaturedPromo {
  id: string;
  description: string;
  alt: string;
  type: {
    description: slideType;
  };
  name: string;
  payload: any[];
  mainImageName: string;
  backImageName: string;
  dateFrom: string;
  dateTo: string;
  order: number;
  rules: string[];
}

export enum slideType {
  ARRAY = 'array',
  DETAIL = 'detail',
  PRODUCT = 'product',
}

export interface IFeaturedDomain {
  domain: IFeaturedDomainValue;
}

export interface IFeaturedDomainValue {
  province: string;
  categories: string[];
}
