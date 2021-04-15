import { Action } from '@ngrx/store';

export enum FeaturedPromotionActionsTypes {
  FETCH_PENDING = '[FEATURED_PROMOTION: PENDING]',
  FETCH_FULFILLED = '[FEATURED_PROMOTION: FULFILLED] Last',
  FETCH_ERROR = '[FEATURED_PROMOTION: ERROR] Last',
  CLEAR_DATA = '[FEATURED_PROMOTION] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = FeaturedPromotionActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = FeaturedPromotionActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = FeaturedPromotionActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = FeaturedPromotionActionsTypes.CLEAR_DATA;
}

export type FeaturedPromotionActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
