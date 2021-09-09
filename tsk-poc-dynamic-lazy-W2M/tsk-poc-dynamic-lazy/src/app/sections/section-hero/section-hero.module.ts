import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonBoxModule } from 'src/app/components/skeleton-box/skeleton-box.module'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
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
  ],
  exports: [SectionHeroComponent],
})
export class SectionHeroModule {
  static entry = SectionHeroComponent
}
