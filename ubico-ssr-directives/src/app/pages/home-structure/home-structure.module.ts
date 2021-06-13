import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2MDividerModule } from '../../components/w2m-divider/w2m-divider.module'
import { W2MInfoTextModule } from '../../components/w2m-info-text/w2m-info-text.module'
import { HomeStructureComponent } from './home-structure.component'
import { HomeStructureRoutingModule } from './home-structure.routing'

@NgModule({
  imports: [
    CommonModule,
    W2MInfoTextModule,
    W2MDividerModule,
    HomeStructureRoutingModule,
  ],
  declarations: [HomeStructureComponent],
})
export class HomeStructureModule { }
