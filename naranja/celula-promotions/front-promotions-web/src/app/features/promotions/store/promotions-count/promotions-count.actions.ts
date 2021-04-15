import { Action } from '@ngrx/store';

export enum PromotionsCountActionsTypes {
  FETCH_PENDING = '[PROMOTIONS_COUNT: PENDING]',
  FETCH_FULFILLED = '[PROMOTIONS_COUNT: FULFILLED] Last',
  FETCH_ERROR = '[PROMOTIONS_COUNT: ERROR] Last',
  CLEAR_DATA = '[PROMOTIONS_COUNT] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = PromotionsCountActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = PromotionsCountActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = PromotionsCountActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = PromotionsCountActionsTypes.CLEAR_DATA;
}

export type PromotionsCountActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
