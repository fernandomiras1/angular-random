import { NgModule } from '@angular/core';
import { BrowserStateInterceptor } from '@core/transfer-state/interceptors/browserstate.interceptor';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ServerStateInterceptor } from '@core/transfer-state/interceptors/serverstate.interceptor';
import { WatchdogInterceptor } from '@core/transfer-state/interceptors/watchdog.interceptor';
import { WATCHDOG_TIMER } from '@core/transfer-state/tokens/watchdog-timer.token';
import { ITransferStateModule } from '@core/transfer-state/config';
import { TransferStateService } from '@core/transfer-state/services/transfer-state.service';

@NgModule({
  providers: [
    BrowserStateInterceptor,
    ServerStateInterceptor,
    WatchdogInterceptor,
    {
      provide: WATCHDOG_TIMER,
      useValue: 1000,
    },
    TransferStateService,
  ],
})
export class TransferStateModule {
  static forRoot(config: ITransferStateModule): ModuleWithProviders {
    return {
      ngModule: TransferStateModule,
      providers: [
        {
          provide: WATCHDOG_TIMER,
          useValue: config.watchdogTimer,
        },
        TransferStateService,
      ],
    };
  }
}
