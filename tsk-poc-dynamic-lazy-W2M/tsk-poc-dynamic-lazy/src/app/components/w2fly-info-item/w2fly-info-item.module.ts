import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2flyInfoItemComponent } from './w2fly-info-item.component'
import { PipesModule } from '../../core/pipes/pipes.module'

@NgModule({
  declarations: [
    W2flyInfoItemComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [W2flyInfoItemComponent],
})
export class W2flyInfoItemModule {
  static entry = W2flyInfoItemComponent
}
