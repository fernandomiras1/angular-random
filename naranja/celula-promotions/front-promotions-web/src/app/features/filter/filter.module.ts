import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import {
  FilterDialogCategoryListComponent,
} from './components/filter-dialog/filter-dialog-category-list/filter-dialog-category-list.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { FilterWebComponent } from './components/filter-web/filter-web.component';
import { AutocompleteOffDirective } from './directives/autocomplete-off.directive';
import { RemoveDomElementDirective } from './directives/remove-dom-element.directive';
import { FilterDataEffects } from './store/filter-data.effects';
import * as fromFilterDataReducer from './store/filter-data.reducer';

// tslint:disable-next-line: max-line-length
@NgModule({
  declarations: [
    FilterDialogComponent,
    FilterWebComponent,
    AutocompleteOffDirective,
    RemoveDomElementDirective,
    FilterDialogCategoryListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('filter-data', fromFilterDataReducer.reducer),
    EffectsModule.forFeature([FilterDataEffects]),
    SharedModule,
  ],
  exports: [
    FilterDialogComponent,
    FilterWebComponent,
  ],
})
export class FilterModule { }
