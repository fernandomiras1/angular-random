import { Subject, throwError, ReplaySubject, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { PromotionsService } from '../services/promotions.service';
import { PromotionsFilteredEffects } from './promotions-filtered.effects';
import { PromotionsFilteredActionsTypes } from './promotions-filtered.actions';

describe('PromotionsFiltered Effects', () => {
  let actions$: Subject<any>;
  let _effects: PromotionsFilteredEffects;
  let _promotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PromotionsFilteredEffects,
        provideMockActions(() => actions$),
        {
          provide: PromotionsService,
          useValue: jasmine.createSpyObj('promotionsService', ['getFiltered']),
        },
      ],
    });

    _effects = TestBed.get(PromotionsFilteredEffects);
    _promotionsService = TestBed.get(PromotionsService);
  });

  it('should dispatch FETCH_ERROR when request fail', () => {
    actions$ = new ReplaySubject(1);
    _promotionsService.getFiltered.and.returnValue(throwError('error'));

    const action = {
      type: PromotionsFilteredActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: PromotionsFilteredActionsTypes.FETCH_ERROR,
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
    _promotionsService.getFiltered.and.returnValue(of(fakeRequestResponse));

    const action = {
      type: PromotionsFilteredActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: PromotionsFilteredActionsTypes.FETCH_FULFILLED,
      payload: fakeRequestResponse,
    };

    actions$.next(action);
    _effects.getPromotions$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });
});
