import { RouterModule } from '@angular/router'
import { MatSidenavModule } from '@angular/material/sidenav'
import { DirectivesModule } from 'src/app/core/directives/directives.module'
import { W2mSubtitleModule } from 'src/app/shared/components/w2m-subtitle/w2m-subtitle.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipesModule } from '../../core/pipes/pipes.module'
import { AppJobDetailModule } from '../../components/app-job-detail/app-job-detail.module'
import { W2mCardModule } from '../../shared/components/w2m-card/w2m-card.module'
import { SectionJobsComponent } from './section-jobs.component'

const MATERIAL_MODULES = [
  MatSidenavModule,
]

@NgModule({
  declarations: [
    SectionJobsComponent,
  ],
  imports: [
    CommonModule,
    W2mSubtitleModule,
    W2mCardModule,
    AppJobDetailModule,
    PipesModule,
    RouterModule,
    DirectivesModule,
    MATERIAL_MODULES,
  ],
  exports: [
    SectionJobsComponent,
  ],
})
export class SectionJobsModule {
  static entry = SectionJobsComponent
}
