import { IPromo } from './promo.model';
import { IPaginationInfo } from './pagination-info.model';

export interface IBussinesRule {
  _id: string;
  code: string;
  description: string;
  class: any;
  dispatchRule: boolean;
  dispatched: {
    data: IPromo[];
    info: IPaginationInfo;
  };
  order: number;
  enabled: boolean;
  payload: any[];
  rules: any;
  type: string;
  __v: number;
  promos?: IPromo[];
  total?: Number;
  err?: boolean;
}
