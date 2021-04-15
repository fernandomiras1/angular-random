import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BussinesRulesActionsTypes } from './bussines-rules-actions';
import { PromotionsService } from '../services/promotions.service';

@Injectable()
export class BussinesRulesEffects {
  constructor(
    private actions$: Actions,
    private promotionsService: PromotionsService,
  ) { }

  @Effect() getBussinesRules$ = this.actions$
    .pipe(ofType(BussinesRulesActionsTypes.FETCH_PENDING))
    .pipe(
      map((action: any) => action.payload),
      switchMap((payload: any) => {
        const body = payload.body;
        return this.promotionsService.getBussinesRules(body).pipe(
          map((response: any) => ({
            type: BussinesRulesActionsTypes.FETCH_FULFILLED,
            payload: response,
          })),
          catchError((err: HttpErrorResponse) => of({ type: BussinesRulesActionsTypes.FETCH_ERROR, payload: err })),
        );
      }),
    );
}
