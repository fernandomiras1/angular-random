import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionBannerDataComponent } from './section-banner-data.component'
import { SectionBannerDataRoutingModule } from './section-banner-data.routing'
import { DirectivesModule } from '../../core/directives/directives.module'

@NgModule({
  imports: [
    CommonModule,
    SectionBannerDataRoutingModule,
    DirectivesModule,
  ],
  declarations: [SectionBannerDataComponent],
})
export class SectionBannerDataModule {
}
