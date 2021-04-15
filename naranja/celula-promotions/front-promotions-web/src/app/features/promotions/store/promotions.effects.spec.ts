import { Subject, throwError, ReplaySubject, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { PromotionsEffects } from './promotions.effects';
import { PromotionsService } from '../services/promotions.service';
import { PromotionsActionsTypes } from './promotions.actions';

describe('Promotions Effects', () => {
  let actions$: Subject<any>;
  let _effects: PromotionsEffects;
  let _promotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PromotionsEffects,
        provideMockActions(() => actions$),
        {
          provide: PromotionsService,
          useValue: jasmine.createSpyObj('promotionsService', ['getSuggested']),
        },
      ],
    });

    _effects = TestBed.get(PromotionsEffects);
    _promotionsService = TestBed.get(PromotionsService);
  });

  it('should dispatch FETCH_ERROR when request fail', () => {
    actions$ = new ReplaySubject(1);
    _promotionsService.getSuggested.and.returnValue(throwError('error'));

    const action = {
      type: PromotionsActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: PromotionsActionsTypes.FETCH_ERROR,
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
    _promotionsService.getSuggested.and.returnValue(of(fakeRequestResponse));

    const action = {
      type: PromotionsActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: PromotionsActionsTypes.FETCH_FULFILLED,
      payload: fakeRequestResponse,
    };

    actions$.next(action);
    _effects.getPromotions$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });
});
