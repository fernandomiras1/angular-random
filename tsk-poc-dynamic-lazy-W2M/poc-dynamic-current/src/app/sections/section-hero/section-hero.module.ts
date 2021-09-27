import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mImageModule } from 'src/app/components/w2m-image/w2m-image.module'
import { SliderModule } from '../../components/w2m-slider/slider.module'
import { DirectivesModule } from '../../core/directives/directives.module'
import { SectionHeroComponent } from './section-hero.component'
import { W2flySubtitleModule } from '../../components/w2fly-subtitle/w2fly-subtitle.module'
import { AlertHomeModule } from '../../components/alert-home/alert-home.module'

@NgModule({
  declarations: [
    SectionHeroComponent,
  ],
  imports: [
    CommonModule,
    W2flySubtitleModule,
    AlertHomeModule,
    DirectivesModule,
    SliderModule,
    W2mImageModule,
  ],
  exports: [SectionHeroComponent],
})
export class SectionHeroModule {
  static entry = SectionHeroComponent
}
