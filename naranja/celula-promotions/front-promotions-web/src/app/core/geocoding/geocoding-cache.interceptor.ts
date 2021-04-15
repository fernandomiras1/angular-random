import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NavigatorService } from '../utils/services/navigator.service';

@Injectable()
export class GeocodingCacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  constructor(private navigatorService: NavigatorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.navigatorService.isServer) {
      return of(new HttpResponse({ body: null, status: 200 }));
    }

    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const key = request.url;
    const cachedResponse = this.cache.get(key);

    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && event.status === 200) {
          this.cache.set(key, event);
        }
      }));
  }
}
