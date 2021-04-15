import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromHistoryNavigationReducer from './store/history-navigation/history-navigation.reducer';
import * as fromNavigationReducer from './store/navigation.reducer';

// Reducers
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('navigation', fromNavigationReducer.reducer),
    StoreModule.forFeature('history-navigation', fromHistoryNavigationReducer.reducer),
  ],
})
export class NavigationModule { }
