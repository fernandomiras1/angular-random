import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, Subject, throwError } from 'rxjs';
import { PromotionsService } from '../services/promotions.service';
import { FeaturedPromotionRuleActionsTypes } from './featured-promotion-rule.actions';
import { FeaturedPromotionRuleEffects } from './featured-promotion-rule.effects';

describe('Featured Promotion Rule Effects', () => {
  let actions$: Subject<any>;
  let _effects: FeaturedPromotionRuleEffects;
  let _promotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeaturedPromotionRuleEffects,
        provideMockActions(() => actions$),
        {
          provide: PromotionsService,
          useValue: jasmine.createSpyObj('promotionsService', ['getPromotionsByRule']),
        },
      ],
    });

    _effects = TestBed.get(FeaturedPromotionRuleEffects);
    _promotionsService = TestBed.get(PromotionsService);
  });

  it('should dispatch FETCH_ERROR when request fail', () => {
    actions$ = new ReplaySubject(1);
    _promotionsService.getPromotionsByRule.and.returnValue(throwError('error'));

    const action = {
      type: FeaturedPromotionRuleActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: FeaturedPromotionRuleActionsTypes.FETCH_ERROR,
      payload: 'error',
    };

    actions$.next(action);
    _effects.getPromotionsByRule$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });

  xit('should dispatch FETCH_FULLFILLED when request is correct', () => {
    const fakeRequestResponse = 'something';
    actions$ = new ReplaySubject(1);
    _promotionsService.getPromotionsByRule.and.returnValue(of(fakeRequestResponse));

    const action = {
      type: FeaturedPromotionRuleActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: FeaturedPromotionRuleActionsTypes.FETCH_FULFILLED,
      payload: fakeRequestResponse,
    };

    actions$.next(action);
    _effects.getPromotionsByRule$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });
});
