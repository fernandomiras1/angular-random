import { TestBed } from '@angular/core/testing';
import { FilterService } from '@filter/services/filter.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, Subject, throwError } from 'rxjs';

import { FilterDataActionsTypes } from './filter-data.actions';
import { FilterDataEffects } from './filter-data.effects';

describe('FilterData Effects', () => {
  let actions$: Subject<any>;
  let _effects: FilterDataEffects;
  let _filterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterDataEffects,
        provideMockActions(() => actions$),
        {
          provide: FilterService,
          useValue: jasmine.createSpyObj('filterService', ['getFilterData']),
        },
      ],
    });

    _effects = TestBed.get(FilterDataEffects);
    _filterService = TestBed.get(FilterService);
  });

  it('should dispatch FETCH_ERROR when request fail', () => {
    actions$ = new ReplaySubject(1);
    _filterService.getFilterData.and.returnValue(throwError('error'));

    const action = {
      type: FilterDataActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: FilterDataActionsTypes.FETCH_ERROR,
      payload: 'error',
    };

    actions$.next(action);
    _effects.getFilterData$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });

  it('should dispatch FETCH_FULLFILLED when request is correct', () => {
    const fakeRequestResponse = 'something';
    actions$ = new ReplaySubject(1);
    _filterService.getFilterData.and.returnValue(of(fakeRequestResponse));

    const action = {
      type: FilterDataActionsTypes.FETCH_PENDING,
      payload: '123',
    };

    const expected: any = {
      type: FilterDataActionsTypes.FETCH_FULFILLED,
      payload: fakeRequestResponse,
    };

    actions$.next(action);
    _effects.getFilterData$.subscribe((result) => {
      expect({ ...result }).toEqual(expected);
    });
  });
});
