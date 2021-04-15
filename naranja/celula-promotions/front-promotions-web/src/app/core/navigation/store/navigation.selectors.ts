import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNavigation from './navigation.reducer';

export const selectNavigationState = createFeatureSelector<fromNavigation.NavigationState>('navigation');
export const selectData = createSelector(selectNavigationState, (state: fromNavigation.NavigationState) => {
  return state;
});
