import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
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
  ],
  exports: [SectionHeroComponent],
})
export class SectionHeroModule {
  static entry = SectionHeroComponent
}
