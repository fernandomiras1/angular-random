import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { AlertHomeComponent } from './alert-home.component'
import { DirectivesModule } from '../../core/directives/directives.module'

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
]

@NgModule({
  declarations: [
    AlertHomeComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    DirectivesModule,
  ],
  exports: [AlertHomeComponent],
})
export class AlertHomeModule {
  static entry = AlertHomeComponent
}
