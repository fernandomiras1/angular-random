import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppTopButtonModule } from 'src/app/components/app-top-button/app-top-button.module'
import { DirectivesModule } from '../../core/directives/directives.module'

import { PageDynamicComponent } from './page-dynamic.component'
import { PageDynamicRoutingModule } from './page-dynamic.routing'

@NgModule({
  declarations: [PageDynamicComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    PageDynamicRoutingModule,
    AppTopButtonModule,
  ],
})

export class PageDynamicModule {
  static entry = PageDynamicComponent
}
