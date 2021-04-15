import { HttpInterceptor } from '@angular/common/http';

export function getInterceptorInstance<T extends HttpInterceptor>(interceptors: HttpInterceptor[], type: any): HttpInterceptor {
  let searchedInterceptor: HttpInterceptor = null;
  interceptors.forEach((interceptor: HttpInterceptor) => {
    if (interceptor instanceof type) {
      searchedInterceptor = interceptor;
    }
  });
  return searchedInterceptor;
}
