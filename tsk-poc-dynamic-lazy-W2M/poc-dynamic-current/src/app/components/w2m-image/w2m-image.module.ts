import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mImageComponent } from './w2m-image.component'

@NgModule({
  declarations: [
    W2mImageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [W2mImageComponent],
})
export class W2mImageModule { }
