import { Action } from '@ngrx/store';

export enum PaidMediaPromotionsActionsTypes {
  FETCH_PENDING = '[PAID_MEDIA_PROMOTIONS: PENDING]',
  FETCH_FULFILLED = '[PAID_MEDIA_PROMOTIONS: FULFILLED] Last',
  FETCH_ERROR = '[PAID_MEDIA_PROMOTIONS: ERROR] Last',
  CLEAR_DATA = '[PAID_MEDIA_PROMOTIONS] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = PaidMediaPromotionsActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = PaidMediaPromotionsActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = PaidMediaPromotionsActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = PaidMediaPromotionsActionsTypes.CLEAR_DATA;
}

export type PaidMediaPromotionsActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
