import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonBoxModule } from 'src/app/components/skeleton-box/skeleton-box.module'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { SliderModule } from 'src/app/components/w2m-slider/slider.module'
import { W2mImageModule } from 'src/app/components/w2m-image/w2m-image.module'
import { DirectivesModule } from '../../core/directives/directives.module'
import { SectionHeroComponent } from './section-hero.component'

@NgModule({
  declarations: [
    SectionHeroComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    SkeletonBoxModule,
    PipesModule,
    SliderModule,
    W2mImageModule,
  ],
  exports: [SectionHeroComponent],
})
export class SectionHeroModule {
  static entry = SectionHeroComponent
}
