import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipesModule } from '../../core/pipes/pipes.module'
import { W2mInfoTextComponent } from './w2m-info-text.component'
import { AppDividerModule } from '../app-divider/app-divider.module'

@NgModule({
  declarations: [
    W2mInfoTextComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    AppDividerModule,
  ],
  exports: [
    W2mInfoTextComponent,
  ],
})
export class W2MInfoTextModule { }
