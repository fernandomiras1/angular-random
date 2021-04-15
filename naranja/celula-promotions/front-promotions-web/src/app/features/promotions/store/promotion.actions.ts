import { Action } from '@ngrx/store';

export enum PromotionActionsTypes {
  FETCH_PENDING = '[PROMOTION: PENDING]',
  FETCH_FULFILLED = '[PROMOTION: FULFILLED] Last',
  FETCH_ERROR = '[PROMOTION: ERROR] Last',
  CLEAR_DATA = '[PROMOTION] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = PromotionActionsTypes.FETCH_PENDING;
  constructor(public payload: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = PromotionActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = PromotionActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = PromotionActionsTypes.CLEAR_DATA;
}

export type PromotionActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
