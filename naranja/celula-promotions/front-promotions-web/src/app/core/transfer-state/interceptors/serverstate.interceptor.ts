import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { of } from 'rxjs';
import { TransferStateService } from '@core/transfer-state/services/transfer-state.service';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferStateService,
              private navigatorService: NavigatorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.navigatorService.isServer || req.method !== 'GET') {
      return next.handle(req);
    }
    const key = req.url;
    const cachedData = this.transferState.getCache(key);

    if (cachedData) {
      this.transferState.add(key, cachedData);
      return of(new HttpResponse({ body: cachedData, status: 200 }));
    }
    return next.handle(req).pipe(
        tap((event) => {
          if (event instanceof HttpResponse && event.status === 200) {
            this.transferState.addWithCache(key, event.body);
          }
        }),
      );
  }
}
