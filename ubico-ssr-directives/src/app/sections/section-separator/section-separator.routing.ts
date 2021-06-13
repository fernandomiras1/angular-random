import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SectionSeparatorComponent } from './section-separator.component'

const routes: Routes = [
  {
    path: '',
    component: SectionSeparatorComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionSeparatorRoutingModule { }
