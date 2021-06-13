import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule, TransferState } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
// eslint-disable-next-line import/no-extraneous-dependencies
import { TransferHttpCacheModule } from '@nguniversal/common'
import { MatMenuModule } from '@angular/material/menu'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LAZY_COMPONENT } from './core/model/tokens'
import { DynamicService } from './core/services/dynamic.service'
import { lazyArraySection } from './sections/lazy-sections'
import { translateBrowserLoaderFactory } from './shared/i18n/translate-browser.loader'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
  ],
  providers: [
    DynamicService, { provide: LAZY_COMPONENT, useFactory: lazyArraySection },
  ],
  exports: [TranslateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
