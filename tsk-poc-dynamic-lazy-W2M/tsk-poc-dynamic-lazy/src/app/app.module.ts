import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { lazyArrayComponent } from 'src/app/components/lazy-components'
import { LazyLoaderService } from 'src/app/core/services/lazy-loader.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LAZY_COMPONENT } from './core/tokens'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LazyLoaderService, { provide: LAZY_COMPONENT, useFactory: lazyArrayComponent },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
