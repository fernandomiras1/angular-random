import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionSeparatorComponent } from './section-separator.component'
import { SectionSeparatorRoutingModule } from './section-separator.routing'

@NgModule({
  imports: [
    CommonModule,
    SectionSeparatorRoutingModule,
  ],
  declarations: [SectionSeparatorComponent],
})
export class SectionSeparatorModule { }
