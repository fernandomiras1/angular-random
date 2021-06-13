import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SectionBannerDataComponent } from './section-banner-data.component'

const routes: Routes = [
  {
    path: '',
    component: SectionBannerDataComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionBannerDataRoutingModule { }
