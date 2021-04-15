import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PromotionsService } from '../services/promotions.service';
import { FeaturedPromotionActionsTypes } from './featured-promotion.actions';

@Injectable()
export class FeaturedPromotionEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getFeaturedPromotions$ = this.actions$
    .pipe(ofType(FeaturedPromotionActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getFeaturedPromotions(payload).pipe(
          map(response => ({ type: FeaturedPromotionActionsTypes.FETCH_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: FeaturedPromotionActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
