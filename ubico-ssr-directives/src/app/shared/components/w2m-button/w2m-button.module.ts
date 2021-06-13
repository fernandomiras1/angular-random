import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mButtonComponent } from './w2m-button.component'
import { W2mLinkModule } from '../w2m-link/w2m-link.module'

@NgModule({
  declarations: [
    W2mButtonComponent,
  ],
  imports: [
    CommonModule,
    W2mLinkModule,
  ],
  exports: [W2mButtonComponent],
})
export class W2mButtonModule { }
