import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SectionTeamComponent } from './section-team.component'

const routes: Routes = [
  {
    path: '',
    component: SectionTeamComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionTeamRoutingModule { }
