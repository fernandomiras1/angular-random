import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SectionInfoTextComponent } from './section-info-text.component'

const routes: Routes = [
  {
    path: '',
    component: SectionInfoTextComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionInfoTextRoutingModule { }
