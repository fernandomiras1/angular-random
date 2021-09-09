import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { W2flyCardTextComponent } from './w2fly-card-text.component'
import { PipesModule } from '../../core/pipes/pipes.module'

const MATERIAL_MODULES = [
  MatCardModule,
]

@NgModule({
  declarations: [
    W2flyCardTextComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    PipesModule,
  ],
  exports: [W2flyCardTextComponent],
})
export class W2flyCardTextModule {
  static entry = W2flyCardTextComponent
}
