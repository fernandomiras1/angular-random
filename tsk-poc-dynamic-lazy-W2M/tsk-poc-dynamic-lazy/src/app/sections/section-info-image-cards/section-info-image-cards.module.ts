import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DirectivesModule } from '../../core/directives/directives.module'
import { SectionInfoImageCardsComponent } from './section-info-image-cards.component'
import { W2flyImageModule } from '../../components/w2fly-image/w2fly-image.module'
import { W2flySubtitleModule } from '../../components/w2fly-subtitle/w2fly-subtitle.module'
import { W2flyCardTextModule } from '../../components/w2fly-card-text/w2fly-card-text.module'
import { PipesModule } from '../../core/pipes/pipes.module'

@NgModule({
  declarations: [
    SectionInfoImageCardsComponent,
  ],
  imports: [
    CommonModule,
    W2flySubtitleModule,
    W2flyImageModule,
    W2flyCardTextModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [SectionInfoImageCardsComponent],
})
export class SectionInfoImageCardsModule {
  static entry = SectionInfoImageCardsComponent
}
