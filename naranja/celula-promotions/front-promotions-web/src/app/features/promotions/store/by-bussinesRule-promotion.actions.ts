import { Action } from '@ngrx/store';

export enum ByBussinesRulePromotionsActionsTypes {
  FETCH_PENDING = '[BY_BUSSINESRULE_PROMOTIONS: PENDING]',
  FETCH_FULFILLED = '[BY_BUSSINESRULE_PROMOTIONS: FULFILLED] Last',
  FETCH_ERROR = '[BY_BUSSINESRULE_PROMOTIONS: ERROR] Last',
  CLEAR_DATA = '[BY_BUSSINESRULE_PROMOTIONS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = ByBussinesRulePromotionsActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = ByBussinesRulePromotionsActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = ByBussinesRulePromotionsActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = ByBussinesRulePromotionsActionsTypes.CLEAR_DATA;
}

export type ByBussinesRulePromotionsActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
