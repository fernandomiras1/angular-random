import { WATCHDOG_TIMER } from '@core/transfer-state/tokens/watchdog-timer.token';

export function excludeToTrue() {
  return {
    add: () => {},
    isExclude: (key) => {
      return true;
    },
  };
}

export function excludeToFalse() {
  return {
    add: () => {},
    isExclude: (key) => {
      return false;
    },
  };
}

export function transferStateMock() {
  let data = null;
  return {
    set: (key, value) => {
      data = value;
    },
    get: (key, defaultValue) => {
      return data;
    },
    remove: (key) => {},
  };
}

export const WATCHDOG_TIMER_1000 = [{ provide: WATCHDOG_TIMER, useValue: 1000 }];
