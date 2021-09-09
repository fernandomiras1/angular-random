import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { DirectivesModule } from '../../core/directives/directives.module'
import { W2flyButtonComponent } from './w2fly-button.component'

const MATERIAL_MODULES = [
  MatButtonModule,
]

@NgModule({
  declarations: [
    W2flyButtonComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    DirectivesModule,
  ],
  exports: [W2flyButtonComponent],
})
export class W2flyButtonModule {
  static entry = W2flyButtonComponent
}
