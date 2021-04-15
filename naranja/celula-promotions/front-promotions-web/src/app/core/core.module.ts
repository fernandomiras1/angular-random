import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsumerInterceptor } from '@core/http/consumer-interceptor.service';
import { TransferStateModule } from '@core/transfer-state/transfer-state.module';
import { environment } from '@environments/environment';

import { GeocodingCacheInterceptor } from './geocoding/geocoding-cache.interceptor';
import { ErrorInterceptor } from './http/error.interceptor';
import { HttpService } from './http/http.service';
import { TimingInterceptor } from './http/timing.interceptor';
import { SessionService } from './session/session.service';
import { CoreUtilModule } from './utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CoreUtilModule,
    TransferStateModule.forRoot({
      watchdogTimer: environment.watchdogTimer,
    }),
  ],
  providers: [
    {
      provide: HttpClient,
      useClass: HttpService,
    },
    ErrorInterceptor,
    TimingInterceptor,
    ConsumerInterceptor,
    SessionService,
    GeocodingCacheInterceptor,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
