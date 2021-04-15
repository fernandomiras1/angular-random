import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterService } from '../../../features/filter/services/filter.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FilterDataActionsTypes } from './filter-data.actions';

@Injectable()
export class FilterDataEffects {
  constructor(
    private actions$: Actions,
    private filterService: FilterService,
  ) { }

  @Effect() getFilterData$ = this.actions$
    .pipe(ofType(FilterDataActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.filterService.getFilterData().pipe(
          map((response: any) => ({ type: FilterDataActionsTypes.FETCH_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: FilterDataActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
