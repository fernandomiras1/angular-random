import { BrowserModule, TransferState } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { TransferHttpCacheModule } from '@nguniversal/common'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { LanguagePickerModule } from './shared/components/language-picker/language-picker.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { translateBrowserLoaderFactory } from './shared/i18n/translate-browser.loader'

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient)
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    HttpClientModule,
    LanguagePickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
  ],
  exports: [TranslateModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
