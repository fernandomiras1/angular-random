import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionBannerDataComponent } from './section-banner-data.component'
import { DirectivesModule } from '../../directives/directives.module'

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
  ],
  declarations: [SectionBannerDataComponent],
  exports: [SectionBannerDataComponent]
})
export class SectionBannerDataModule {
  static entry = SectionBannerDataComponent
}
