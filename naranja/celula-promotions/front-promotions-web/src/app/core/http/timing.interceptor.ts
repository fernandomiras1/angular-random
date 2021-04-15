import { tap, map } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from '../utils/services/logger.service';

export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          // tslint:disable-next-line:max-line-length
          LoggerService.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
        return event;
      }),
      tap((event) => {}, (error) => {
        if (error instanceof HttpErrorResponse) {
          const endTime = Date.now();
          const diff = endTime - started;
          // tslint:disable-next-line:max-line-length
          LoggerService.log(`Request for ${error.url} failed in  ${diff} ms.`);
        }
      }),
    );
  }
}
