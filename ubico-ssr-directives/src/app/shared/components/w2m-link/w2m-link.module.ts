import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mLinkComponent } from './w2m-link.component'

@NgModule({
  declarations: [
    W2mLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    W2mLinkComponent,
  ],
})
export class W2mLinkModule { }
