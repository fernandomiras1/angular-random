import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MtripComponent } from './mtrip.component'
import { MtripRoutingModule } from './mtrip.routing'

@NgModule({
  imports: [
    CommonModule,
    MtripRoutingModule,
  ],
  declarations: [MtripComponent],
})
export class MtripModule { }
