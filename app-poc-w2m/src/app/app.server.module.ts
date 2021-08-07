import { NgModule } from '@angular/core'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TransferState } from '@angular/platform-browser'
import { translateServerLoaderFactory } from './shared/i18n/translate-server.loader'

import { AppModule } from './app.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
