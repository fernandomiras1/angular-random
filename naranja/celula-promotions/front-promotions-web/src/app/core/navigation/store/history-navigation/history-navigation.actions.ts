import { Action } from '@ngrx/store';

export enum HistoryNavigationActionsTypes {
  SAVE_DATA = '[HISTORY_NAVIGATION] SAVE DATA',
  CLEAR_DATA = '[HISTORY_NAVIGATION] CLEAR DATA',
  SAVE_PREVIOUS_LINK = '[HISTORY_NAVIGATION] SAVE PREVIOUS LINK',
}

export class SaveData implements Action {
  readonly type = HistoryNavigationActionsTypes.SAVE_DATA;
  constructor(public payload: string) { }
}

export class SavePreviousLink implements Action {
  readonly type = HistoryNavigationActionsTypes.SAVE_PREVIOUS_LINK;
  constructor(public payload: string) { }
}

export class ClearData implements Action {
  readonly type = HistoryNavigationActionsTypes.CLEAR_DATA;
}

export type HistoryNavigationActions =
  SaveData |
  ClearData |
  SavePreviousLink;
