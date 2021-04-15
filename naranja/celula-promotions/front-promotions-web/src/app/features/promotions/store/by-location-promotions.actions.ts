import { Action } from '@ngrx/store';

export enum ByLocationPromotionsActionsTypes {
  FETCH_PENDING = '[BY_LOCATION_PROMOTIONS: PENDING]',
  FETCH_FULFILLED = '[BY_LOCATION_PROMOTIONS: FULFILLED] Last',
  FETCH_ERROR = '[BY_LOCATION_PROMOTIONS: ERROR] Last',
  CLEAR_DATA = '[BY_LOCATION_PROMOTIONS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = ByLocationPromotionsActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = ByLocationPromotionsActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = ByLocationPromotionsActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = ByLocationPromotionsActionsTypes.CLEAR_DATA;
}

export type ByLocationPromotionsActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
