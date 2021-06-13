import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mCardComponent } from './w2m-card.component'
import { W2mLinkModule } from '../w2m-link/w2m-link.module'

@NgModule({
  declarations: [W2mCardComponent],
  imports: [
    CommonModule,
    W2mLinkModule,
  ],
  exports: [W2mCardComponent],
})
export class W2mCardModule { }
