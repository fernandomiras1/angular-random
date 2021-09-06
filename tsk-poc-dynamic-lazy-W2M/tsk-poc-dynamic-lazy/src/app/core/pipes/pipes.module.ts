import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2flySafeHtmlPipe } from './w2fly-safe-to-html.pipe'
import { W2flyCommonFieldPipe } from './w2fly-common-field.pipe'

const PIPES = [
  W2flySafeHtmlPipe,
  W2flyCommonFieldPipe,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PIPES],
  exports: [PIPES],
})
export class PipesModule { }
