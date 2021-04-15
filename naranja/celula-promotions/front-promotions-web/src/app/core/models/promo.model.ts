import { IAddress } from './address.model';
import { IDays } from './days.model';
import { IDisscountApplication } from './disscount-application.model';
import { IGiftDiscount } from './gift-discount.model';
import { IOrigin } from './origin.model';
import { IPlanType } from './plan-type.model';
import { Iplan } from './plan.model';
import { ISector } from './sector.model';
import { ISpecification } from './specification.model';
import { ITag } from './tag.model';

export interface IPromo {
  id: string;
  commerceName: string;
  sector: ISector;
  webPage: string;
  address: IAddress[];
  plan: Iplan;
  cft: number;
  tea: number;
  tna: number;
  giftDiscount: IGiftDiscount;
  discountApplication: IDisscountApplication;
  legal: string;
  days: IDays;
  caNumber: string[];
  reimbursementCap: number;
  specification: ISpecification;
  planType: IPlanType;
  tags: ITag[];
  logo: string;
  score: number;
  origin: IOrigin;
}
