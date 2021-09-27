import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { DirectivesModule } from '../../core/directives/directives.module'

import { PageDynamicComponent } from './page-dynamic.component'
import { PageDynamicRoutingModule } from './page-dynamic-routing.module'

@NgModule({
  declarations: [PageDynamicComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    PageDynamicRoutingModule,
    ReactiveFormsModule,
  ],
})

export class PageDynamicModule {
  static entry = PageDynamicComponent
}
