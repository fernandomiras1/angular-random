import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionInfoTextComponent } from './section-info-text.component'
import { SectionInfoTextRoutingModule } from './section-info-text.routing'

@NgModule({
  imports: [
    CommonModule,
    SectionInfoTextRoutingModule,
  ],
  declarations: [SectionInfoTextComponent],
})
export class SectionInfoTextModule { }
