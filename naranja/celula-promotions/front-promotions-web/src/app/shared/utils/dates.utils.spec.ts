import { DatesUtils } from './dates.utils';

describe('DatesUtils', () => {
  let datesUtils: DatesUtils;

  beforeEach(() => {

    datesUtils = new DatesUtils();
  });

  it('should be created', () => {
    expect(datesUtils).toBeTruthy();
  });

  it('remainingDays() should return valid res', () => {
    const res = DatesUtils.remainingDays('01/01/2050');
    expect(res).toBeTruthy();
  });

  it('uniqueDay() should return valid res', () => {
    const res = DatesUtils.uniqueDay('01/01/2050');
    expect(res).toBeFalsy();
  });

  it('isPromoInForce() should return false', () => {
    const res = DatesUtils.isPromoInForce('01/01/2050');
    expect(res).toBeFalsy();
  });

});
