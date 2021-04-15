import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

// case insensitive check against config and value
const startsWithAny = (arr: string[] = []) => (value = '') => {
  return arr.some(test => value.toLowerCase().startsWith(test.toLowerCase()));
};

// https, protocol relative
const isAbsoluteURL = startsWithAny(['https', '//']);

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {
  constructor(
    @Optional() @Inject(REQUEST) protected request: Request,
    @Optional() @Inject('serverUrl') protected serverUrl: string,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.request && !isAbsoluteURL(req.url)) {
      const protocolHost = (this.serverUrl) ? this.serverUrl : `${this.request.protocol}://${this.request.get('host')}`;
      const pathSeparator = !req.url.startsWith('/') ? '/' : '';
      const url = protocolHost + pathSeparator + req.url;
      const serverRequest = req.clone({ url });

      return next.handle(serverRequest);
    }
    return next.handle(req);
  }
}
