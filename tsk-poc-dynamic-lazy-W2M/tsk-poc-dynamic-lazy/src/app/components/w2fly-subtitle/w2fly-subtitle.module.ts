import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipesModule } from '../../core/pipes/pipes.module'
import { W2flySubtitleComponent } from './w2fly-subtitle.component'

@NgModule({
  declarations: [
    W2flySubtitleComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [W2flySubtitleComponent],
})
export class W2flySubtitleModule {
  static entry = W2flySubtitleComponent
}
