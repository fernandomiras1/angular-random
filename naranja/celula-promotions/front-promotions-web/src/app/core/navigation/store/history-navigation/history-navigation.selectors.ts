import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHistoryNavigation from './history-navigation.reducer';

export const selectHistoryNavigationState = createFeatureSelector<fromHistoryNavigation.HistoryNavigationState>('history-navigation');
export const selectData = createSelector(selectHistoryNavigationState, (state: fromHistoryNavigation.HistoryNavigationState) => {
  return state;
});
