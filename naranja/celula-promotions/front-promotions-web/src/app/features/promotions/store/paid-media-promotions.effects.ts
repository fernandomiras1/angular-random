import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PromotionsService } from '../services/promotions.service';
import { PaidMediaPromotionsActionsTypes } from './paid-media-promotions.actions';

@Injectable()
export class PaidMediaPromotionsEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotionsPaidMedia$ = this.actions$
    .pipe(ofType(PaidMediaPromotionsActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getPromotionsByRule(payload).pipe(
          map((response: any) => ({ type: PaidMediaPromotionsActionsTypes.FETCH_FULFILLED, payload: response.data })),
          catchError((err: HttpErrorResponse) => of({ type: PaidMediaPromotionsActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
