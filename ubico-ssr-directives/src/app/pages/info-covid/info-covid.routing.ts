import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InfoCovidComponent } from './info-covid.component'

const routes: Routes = [
  {
    path: '',
    component: InfoCovidComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCovidRoutingModule { }
