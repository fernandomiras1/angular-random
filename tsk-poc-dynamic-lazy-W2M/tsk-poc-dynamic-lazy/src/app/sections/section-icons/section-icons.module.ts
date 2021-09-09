import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SkeletonBoxModule } from 'src/app/components/skeleton-box/skeleton-box.module'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { DirectivesModule } from '../../core/directives/directives.module'
import { SectionIconsComponent } from './section-icons.component'
import { W2flyButtonModule } from '../../components/w2fly-button/w2fly-button.module'

@NgModule({
  declarations: [
    SectionIconsComponent,
  ],
  imports: [
    CommonModule,
    W2flyButtonModule,
    DirectivesModule,
    SkeletonBoxModule,
    PipesModule,
  ],
  exports: [SectionIconsComponent],
})
export class SectionIconsModule {
  static entry = SectionIconsComponent
}
