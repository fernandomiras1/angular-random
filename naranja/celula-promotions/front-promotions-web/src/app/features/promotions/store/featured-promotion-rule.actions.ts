import { Action } from '@ngrx/store';

export enum FeaturedPromotionRuleActionsTypes {
  FETCH_PENDING = '[FEATURED_PROMOTION_RULE: PENDING]',
  FETCH_FULFILLED = '[FEATURED_PROMOTION_RULE: FULFILLED] Last',
  FETCH_ERROR = '[FEATURED_PROMOTION_RULE: ERROR] Last',
  CLEAR_DATA = '[FEATURED_PROMOTION_RULE] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = FeaturedPromotionRuleActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = FeaturedPromotionRuleActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = FeaturedPromotionRuleActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = FeaturedPromotionRuleActionsTypes.CLEAR_DATA;
}

export type FeaturedPromotionRuleActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
