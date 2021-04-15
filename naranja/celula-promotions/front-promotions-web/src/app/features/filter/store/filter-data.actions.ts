import { Action } from '@ngrx/store';

export enum FilterDataActionsTypes {
  FETCH_PENDING = '[FILTER-DATA: PENDING]',
  FETCH_FULFILLED = '[FILTER-DATA:  FULFILLED] Last',
  FETCH_ERROR = '[FILTER-DATA: ERROR]  Last',
  CLEAR_DATA = '[FILTER-DATA] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = FilterDataActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = FilterDataActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = FilterDataActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = FilterDataActionsTypes.CLEAR_DATA;
}

export type FilterDataActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
