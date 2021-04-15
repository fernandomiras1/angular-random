import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, Subject, throwError } from 'rxjs';
import { PromotionsService } from '../services/promotions.service';
import { FeaturedPromotionActionsTypes } from './featured-promotion.actions';
import { FeaturedPromotionEffects } from './featured-promotion.effects';

describe('Featured Promotion Effects', () => {
  let actions$: Subject<any>;
  let _effects: FeaturedPromotionEffects;
  let _promotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeaturedPromotionEffects,
        provideMockActions(() => actions$),
        {
          provide: PromotionsService,
          useValue: jasmine.createSpyObj('promotionsService', ['getFeaturedPromotions']),
        },
      ],
    });

    _effects = TestBed.get(FeaturedPromotionEffects);
    _promotionsService = TestBed.get(PromotionsService);
  });

  it('should dispatch FETCH_ERROR when request fail', () => {
    actions$ = new ReplaySubject(1);
    _promotionsService.getFeaturedPromotions.and.returnValue(throwError('error'));

    const action = {
      type: FeaturedPromotionActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: FeaturedPromotionActionsTypes.FETCH_ERROR,
      payload: 'error',
    };

    actions$.next(action);
    _effects.getFeaturedPromotions$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });

  it('should dispatch FETCH_FULLFILLED when request is correct', () => {
    const fakeRequestResponse = 'something';
    actions$ = new ReplaySubject(1);
    _promotionsService.getFeaturedPromotions.and.returnValue(of(fakeRequestResponse));

    const action = {
      type: FeaturedPromotionActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: FeaturedPromotionActionsTypes.FETCH_FULFILLED,
      payload: fakeRequestResponse,
    };

    actions$.next(action);
    _effects.getFeaturedPromotions$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });
});
