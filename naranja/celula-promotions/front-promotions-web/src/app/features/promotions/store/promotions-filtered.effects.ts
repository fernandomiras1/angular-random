import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PromotionsFilteredActionsTypes } from './promotions-filtered.actions';
import { PromotionsService } from '../services/promotions.service';

@Injectable()
export class PromotionsFilteredEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotions$ = this.actions$
    .pipe(ofType(PromotionsFilteredActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getFiltered(payload.data, payload.page, payload.size).pipe(
          map((response: any) => ({ type: PromotionsFilteredActionsTypes.FETCH_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: PromotionsFilteredActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
