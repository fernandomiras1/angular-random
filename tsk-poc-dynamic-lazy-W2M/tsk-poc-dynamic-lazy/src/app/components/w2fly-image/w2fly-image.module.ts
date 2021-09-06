import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2flyImageComponent } from './w2fly-image.component'

@NgModule({
  declarations: [
    W2flyImageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [W2flyImageComponent],
})
export class W2flyImageModule {
  static entry = W2flyImageComponent
}
