import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mSubtitleModule } from 'src/app/shared/components/w2m-subtitle/w2m-subtitle.module'
import { SliderModule } from '@w2m/ngx-components/w2m-slider'
import { W2mImageModule } from 'src/app/shared/components/w2m-image/w2m-image.module'
import { W2mButtonModule } from 'src/app/shared/components/w2m-button/w2m-button.module'
import { SectionHeroComponent } from './section-hero.component'

@NgModule({
  imports: [
    CommonModule,
    W2mSubtitleModule,
    SliderModule,
    W2mImageModule,
    W2mButtonModule,
  ],
  declarations: [SectionHeroComponent],
})
export class SectionHeroModule {
  static entry = SectionHeroComponent
}
