import { Subject, throwError, ReplaySubject, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { PromotionEffects } from './promotion.effects';
import { PromotionsService } from '../services/promotions.service';
import { PromotionActionsTypes } from './promotion.actions';

describe('Promotion Effects', () => {
  let actions$: Subject<any>;
  let _effects: PromotionEffects;
  let _promotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PromotionEffects,
        provideMockActions(() => actions$),
        {
          provide: PromotionsService,
          useValue: jasmine.createSpyObj('promotionsService', ['getOneById']),
        },
      ],
    });

    _effects = TestBed.get(PromotionEffects);
    _promotionsService = TestBed.get(PromotionsService);
  });

  it('should dispatch FETCH_ERROR when request fail', () => {
    actions$ = new ReplaySubject(1);
    _promotionsService.getOneById.and.returnValue(throwError('error'));

    const action = {
      type: PromotionActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: PromotionActionsTypes.FETCH_ERROR,
      payload: 'error',
    };

    actions$.next(action);
    _effects.getPromotions$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });

  it('should dispatch FETCH_FULLFILLED when request is correct', () => {
    const fakeRequestResponse = 'something';
    actions$ = new ReplaySubject(1);
    _promotionsService.getOneById.and.returnValue(of(fakeRequestResponse));

    const action = {
      type: PromotionActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: PromotionActionsTypes.FETCH_FULFILLED,
      payload: fakeRequestResponse,
    };

    actions$.next(action);
    _effects.getPromotions$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });
});
