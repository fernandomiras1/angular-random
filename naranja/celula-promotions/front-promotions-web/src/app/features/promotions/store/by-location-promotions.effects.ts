import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PromotionsService } from '../services/promotions.service';
import { ByLocationPromotionsActionsTypes } from './by-location-promotions.actions';

@Injectable()
export class ByLocationPromotionsEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotionsByLocation$ = this.actions$
    .pipe(ofType(ByLocationPromotionsActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getByGeolocation(payload).pipe(
          map((response: any) => ({ type: ByLocationPromotionsActionsTypes.FETCH_FULFILLED, payload: response.data })),
          catchError((err: HttpErrorResponse) => of({ type: ByLocationPromotionsActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
