import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { TransferStateService } from '@core/transfer-state/services/transfer-state.service';

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferStateService,
              private navigatorService: NavigatorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.navigatorService.isBrowser || req.method !== 'GET') {
      return next.handle(req);
    }
    const storedResponse = this.transferState.get(req.url);
    if (storedResponse) {
      const response = new HttpResponse({ body: storedResponse, status: 200 });
      // this.transferState.remove(makeStateKey(req.url)); // todo habilitar origen para apic contentful y descomentar
      return of(response);
    }

    return next.handle(req);
  }

}
