import { Action } from '@ngrx/store';

export enum BussinesRulesActionsTypes {
  FETCH_PENDING = '[BUSSINES_RULES: PENDING]',
  FETCH_FULFILLED = '[BUSSINES_RULES: FULFILLED] Last',
  FETCH_ERROR = '[BUSSINES_RULES: ERROR] Last',
  CLEAR_DATA = '[BUSSINES_RULES] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = BussinesRulesActionsTypes.FETCH_PENDING;
  constructor(public payload?: any) { }
}

export class FetchFulfilled implements Action {
  readonly type = BussinesRulesActionsTypes.FETCH_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = BussinesRulesActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = BussinesRulesActionsTypes.CLEAR_DATA;
}

export type BussinesRulesActions =
  FetchPending |
  FetchFulfilled |
  FetchError |
  ClearData;
