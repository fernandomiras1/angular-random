import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutStructureComponent } from './about-structure.component'

const routes: Routes = [
  {
    path: '',
    component: AboutStructureComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutStructureRoutingModule { }
