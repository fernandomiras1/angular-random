import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { W2mImageComponent } from './w2m-image.component'

@NgModule({
  declarations: [
    W2mImageComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [W2mImageComponent],
})
export class W2mImageModule { }
