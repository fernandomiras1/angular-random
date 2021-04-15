import { Action } from '@ngrx/store';

export enum PromotionsActionsTypes {
  FETCH_PENDING = '[PROMOTIONS: PENDING]',
  FETCH_FULFILLED = '[PROMOTIONS:  FULFILLED] Last',
  FETCH_ERROR = '[PROMOTIONS: ERROR]  Last',
  CLEAR_DATA = '[PROMOTIONS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = PromotionsActionsTypes.FETCH_PENDING;
  constructor(public payload: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = PromotionsActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = PromotionsActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = PromotionsActionsTypes.CLEAR_DATA;
}

export type PromotionsActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
