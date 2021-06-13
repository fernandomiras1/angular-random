import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionDetailNewsComponent } from './section-detail-news.component'
import { SectionDetailNewsRoutingModule } from './section-detail-news.routing'

@NgModule({
  imports: [
    CommonModule,
    SectionDetailNewsRoutingModule,
  ],
  declarations: [SectionDetailNewsComponent],
})
export class SectionDetailNewsModule { }
