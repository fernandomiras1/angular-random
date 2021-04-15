import { Action } from '@ngrx/store';

export enum NavigationActionsTypes {
  SAVE_DATA = '[NAVIGATION] SAVE DATA',
  CLEAR_DATA = '[NAVIGATION] CLEAR DATA',
}

export class SaveData implements Action {
  readonly type = NavigationActionsTypes.SAVE_DATA;
  constructor(public payload?: any) { }
}

export class ClearData implements Action {
  readonly type = NavigationActionsTypes.CLEAR_DATA;
}

export type NavigationActions =
    SaveData |
    ClearData;
