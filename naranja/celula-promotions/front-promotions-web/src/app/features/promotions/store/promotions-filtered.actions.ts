import { Action } from '@ngrx/store';

export enum PromotionsFilteredActionsTypes {
  FETCH_PENDING = '[PROMOTIONS_FILTERED: PENDING]',
  FETCH_FULFILLED = '[PROMOTIONS_FILTERED: FULFILLED]',
  FETCH_ERROR = '[PROMOTIONS_FILTERED: ERROR] ',
  CLEAR_DATA = '[PROMOTIONS_FILTERED: CLEAR DATA]',
}

export class FetchPending implements Action {
  readonly type = PromotionsFilteredActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = PromotionsFilteredActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = PromotionsFilteredActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = PromotionsFilteredActionsTypes.CLEAR_DATA;
}

export type PromotionsFilteredActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
