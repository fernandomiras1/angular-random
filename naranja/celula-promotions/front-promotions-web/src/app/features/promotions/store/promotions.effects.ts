import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PromotionsActionsTypes } from './promotions.actions';
import { PromotionsService } from '../services/promotions.service';

@Injectable()
export class PromotionsEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotions$ = this.actions$
    .pipe(ofType(PromotionsActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getSuggested(payload.pageNumber, payload.size , payload.location).pipe(
          map((response: any) => ({
            type: PromotionsActionsTypes.FETCH_FULFILLED,
            payload: response,
          })),
          catchError((err: HttpErrorResponse) => of({ type: PromotionsActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
