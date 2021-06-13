import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InfoCovidComponent } from './info-covid.component'
import { InfoCovidRoutingModule } from './info-covid.routing'
import { WidgetModule } from '../../core/widgets/widget.module'

@NgModule({
  imports: [
    CommonModule,
    InfoCovidRoutingModule,
    WidgetModule,
  ],
  declarations: [InfoCovidComponent],
})
export class InfoCovidModule { }
