import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { DirectivesModule } from '../../core/directives/directives.module'
import { W2flyAlertCommonComponent } from './w2fly-alert-common.component'
import { PipesModule } from '../../core/pipes/pipes.module'

const MATERIAL_MODULES = [
  MatButtonModule,
]

@NgModule({
  declarations: [
    W2flyAlertCommonComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    DirectivesModule,
    PipesModule,
  ],
  exports: [W2flyAlertCommonComponent],
})
export class W2flyAlertCommonModule {
  static entry = W2flyAlertCommonComponent
}
