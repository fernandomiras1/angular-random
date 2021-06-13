import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SectionDetailNewsComponent } from './section-detail-news.component'

const routes: Routes = [
  {
    path: '',
    component: SectionDetailNewsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionDetailNewsRoutingModule { }
