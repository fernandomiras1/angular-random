import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PromotionsService } from '../../services/promotions.service';
import { PromotionsCountActionsTypes } from './promotions-count.actions';

@Injectable()
export class PromotionsCountEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotionsByLocation$ = this.actions$
    .pipe(ofType(PromotionsCountActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getPromotionsCount().pipe(
          map(response => ({ type: PromotionsCountActionsTypes.FETCH_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: PromotionsCountActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
