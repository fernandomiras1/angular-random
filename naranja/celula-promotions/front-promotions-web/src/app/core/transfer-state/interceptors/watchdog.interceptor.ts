import { takeUntil } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { WATCHDOG_TIMER } from '@core/transfer-state/tokens/watchdog-timer.token';
import { NavigatorService } from '@core/utils/services/navigator.service';

@Injectable()
export class WatchdogInterceptor implements HttpInterceptor {

  constructor(@Inject(WATCHDOG_TIMER) private watchDogTimer: number,
              private navigatorService: NavigatorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.navigatorService.isServer || req.method !== 'GET') {
      return next.handle(req);
    }

    const watchdog: Observable<number> = timer(this.watchDogTimer);
    return next.handle(req).pipe(
      takeUntil(watchdog),
    );
  }
}
