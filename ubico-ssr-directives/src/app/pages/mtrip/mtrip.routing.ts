import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MtripComponent } from './mtrip.component'

const routes: Routes = [
  {
    path: '',
    component: MtripComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtripRoutingModule { }
