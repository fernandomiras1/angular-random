import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from '@core/core.module';
import { RootStoreModule } from '@root-store/root-store.module';
import { I18nService } from '@shared/i18n/i18n.service';
import { I18nBrowserModule } from '@shared/i18n/i18n-browser.module';
import { SharedModule } from '@shared/shared.module';
import { StylesAppModule } from '@app/shell/styles/styles-app/styles-app.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    CoreModule,
    SharedModule,
    RootStoreModule,
    AppRoutingModule,
    I18nBrowserModule,
    StylesAppModule,
              // StoreDevtoolsModule.instrument({
              //   maxAge: 25,
              //   logOnly: environment.production,
              // }),
  ],
  providers: [
    I18nService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
