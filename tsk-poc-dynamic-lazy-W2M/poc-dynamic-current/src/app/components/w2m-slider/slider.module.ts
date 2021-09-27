import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxGlideModule } from 'ngx-glide'
import { MatButtonModule } from '@angular/material/button'
import { SlideArrowComponent } from './w2m-slide-arrow/slide-arrow.component'
import { SliderComponent } from './slider.component'

@NgModule({
  declarations: [
    SlideArrowComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    NgxGlideModule,
    MatButtonModule,
  ],
  exports: [
    SliderComponent,
    SlideArrowComponent,
  ],
})
export class SliderModule { }
