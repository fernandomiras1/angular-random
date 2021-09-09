import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DynamicService } from './core/services/dynamic.service'
import { LAZY_COMPONENT } from './core/tokens'
import { lazyArraySection } from './sections/lazy-sections'

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
    DynamicService, { provide: LAZY_COMPONENT, useFactory: lazyArraySection },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
