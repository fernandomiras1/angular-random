import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutStructureComponent } from './about-structure.component'
import { AboutStructureRoutingModule } from './about-structure.routing'

@NgModule({
  imports: [
    CommonModule,
    AboutStructureRoutingModule,
  ],
  declarations: [AboutStructureComponent],
})
export class AboutStructureModule { }
