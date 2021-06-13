import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mSafeHtmlPipe } from './w2m-safe-to-html.pipe'

const PIPES = [
  W2mSafeHtmlPipe,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PIPES],
  exports: [PIPES],
})
export class PipesModule { }
