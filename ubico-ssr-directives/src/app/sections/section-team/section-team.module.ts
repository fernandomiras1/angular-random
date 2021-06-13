import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SectionTeamComponent } from './section-team.component'
import { SectionTeamRoutingModule } from './section-team.routing'

@NgModule({
  imports: [
    CommonModule,
    SectionTeamRoutingModule,
  ],
  declarations: [SectionTeamComponent],
})
export class SectionTeamModule { }
