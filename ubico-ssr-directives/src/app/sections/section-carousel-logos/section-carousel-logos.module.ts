import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionCarouselLogosComponent } from './section-carousel-logos.component'
import { SectionCarouselLogosRoutingModule } from './section-carousel-logos.routing'

@NgModule({
  imports: [
    CommonModule,
    SectionCarouselLogosRoutingModule,
  ],
  declarations: [SectionCarouselLogosComponent],
})
export class SectionCarouselLogosModule { }
