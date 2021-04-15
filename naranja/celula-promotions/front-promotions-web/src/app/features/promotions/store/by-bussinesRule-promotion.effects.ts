import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';

import { PromotionsService } from '../services/promotions.service';
import { ByBussinesRulePromotionsActionsTypes } from './by-bussinesRule-promotion.actions';

@Injectable()
export class ByBussinesRulePromotionsEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getPromotionsByBussinesRule$ = this.actions$
    .pipe(ofType(ByBussinesRulePromotionsActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      mergeMap((payload: any) => {
        const code = payload.aspect.code;
        return this.promotionsService.getPromotionsByRule(payload).pipe(
          // tslint:disable-next-line: max-line-length
          map((response: any) => ({ type: ByBussinesRulePromotionsActionsTypes.FETCH_FULFILLED, payload: { code, data: response.data , info: response.info } })),
          catchError((err: HttpErrorResponse) => of({ type: ByBussinesRulePromotionsActionsTypes.FETCH_ERROR, payload: { err , code } })),
        );
      }),
    );
}
