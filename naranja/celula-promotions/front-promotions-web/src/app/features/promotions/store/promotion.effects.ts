import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PromotionsService } from '../services/promotions.service';
import { PromotionActionsTypes } from './promotion.actions';

@Injectable()
export class PromotionEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotions$ = this.actions$
    .pipe(ofType(PromotionActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getOneById(payload.id).pipe(
          map((response: any) => (
            {
              type: PromotionActionsTypes.FETCH_FULFILLED,
              payload: response,
            })),
          catchError((err: HttpErrorResponse) => of({ type: PromotionActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
