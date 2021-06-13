import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { appBoxImageTextComponent } from './app-box-image-text.component'

const routes: Routes = [
  {
    path: '',
    component: appBoxImageTextComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [appBoxImageTextComponent],
})
export class AppBoxImageTextModule {
  static entry = appBoxImageTextComponent
}
