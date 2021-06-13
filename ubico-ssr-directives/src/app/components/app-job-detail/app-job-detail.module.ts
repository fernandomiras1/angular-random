import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mLinkModule } from '../../shared/components/w2m-link/w2m-link.module'
import { W2mSubtitleModule } from '../../shared/components/w2m-subtitle/w2m-subtitle.module'
import { AppJobDetailComponent } from './app-job-detail.component'

@NgModule({
  declarations: [
    AppJobDetailComponent,
  ],
  imports: [
    CommonModule,
    W2mSubtitleModule,
    PipesModule,
    W2mLinkModule,
  ],
  exports: [
    AppJobDetailComponent,
  ],
})
export class AppJobDetailModule { }
