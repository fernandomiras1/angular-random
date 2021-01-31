import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2flyTruncatePipe } from './w2fly-truncate.pipe'
import { W2flyTimeAgoPipe } from './w2fly-time-ago.pipe'
import { W2flyTimeAgoCountPipe } from './w2fly-time-ago-count.pipe'
import { W2flyImgCdnPipe } from './w2fly-img-cdn.pipe'
import { W2flyDateFormatPipe } from './w2fly-date-format.pipe'

const PIPES = [
  W2flyTruncatePipe,
  W2flyTimeAgoPipe,
  W2flyTimeAgoCountPipe,
  W2flyImgCdnPipe,
  W2flyDateFormatPipe,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PIPES],
  exports: [PIPES],
})
export class PipesModule { }
