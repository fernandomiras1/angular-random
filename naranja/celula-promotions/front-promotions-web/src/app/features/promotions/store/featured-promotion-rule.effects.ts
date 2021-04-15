import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PromotionsService } from '../services/promotions.service';
import { FeaturedPromotionRuleActionsTypes } from './featured-promotion-rule.actions';

@Injectable()
export class FeaturedPromotionRuleEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotionsByRule$ = this.actions$
    .pipe(ofType(FeaturedPromotionRuleActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        return this.promotionsService.getPromotionsByRule(payload).pipe(
          map((response: any) => ({ type: FeaturedPromotionRuleActionsTypes.FETCH_FULFILLED, payload: response.data })),
          catchError((err: HttpErrorResponse) => of({ type: FeaturedPromotionRuleActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
