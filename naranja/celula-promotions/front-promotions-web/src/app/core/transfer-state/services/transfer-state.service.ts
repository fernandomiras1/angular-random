import { Injectable, NgZone } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import * as cache from 'memory-cache';
import { NavigatorService } from '@core/utils/services/navigator.service';

@Injectable()
export class TransferStateService {
  device = 'desktop';
  constructor(private transferState: TransferState,
              private navigatorService: NavigatorService,
              private ngZone: NgZone) {
    this.device = this.navigatorService.isMobile() ? 'mobile' : 'desktop';
  }

  add(key: string, value: any): void {
    this.transferState.set(makeStateKey(`${this.device}-${key}`), value);
  }

  addWithCache(key: string, value: any): void {
    this.transferState.set(makeStateKey(`${this.device}-${key}`), value);
    this.ngZone.runOutsideAngular(() => {
      cache.put(`${this.device}-${key}`, value, 1000 * 30 * 10);
    });
  }

  getCache(key: string) {
    return cache.get(`${this.device}-${key}`);
  }

  get(key: string) {
    return this.transferState.get(makeStateKey(`${this.device}-${key}`), null);
  }
}
