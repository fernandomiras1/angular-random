import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SectionCarouselLogosComponent } from './section-carousel-logos.component'

const routes: Routes = [
  {
    path: '',
    component: SectionCarouselLogosComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionCarouselLogosRoutingModule { }
