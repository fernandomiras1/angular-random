import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionContainerImageComponent } from './section-container-image.component'
import { W2MInfoTextModule } from '../../components/w2m-info-text/w2m-info-text.module'
import { BoxImageTextModule } from '../../components/box-image-text/box-image-text.module'

@NgModule({
  imports: [
    CommonModule,
    W2MInfoTextModule,
    BoxImageTextModule,
  ],
  declarations: [SectionContainerImageComponent],
})
export class SectionContainerImageModule {
  static entry = SectionContainerImageComponent
}
