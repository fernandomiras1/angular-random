import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { appNewsComponent } from './app-news.component'

const routes: Routes = [
  {
    path: '',
    component: appNewsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class appNewsRoutingModule { }
