import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeStructureComponent } from './home-structure.component'

const routes: Routes = [
  {
    path: '',
    component: HomeStructureComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeStructureRoutingModule { }
