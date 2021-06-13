import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { W2mButtonModule } from '../../shared/components/w2m-button/w2m-button.module'
import { AppTopButtonComponent } from './app-top-button.component'

@NgModule({
  declarations: [AppTopButtonComponent],
  imports: [
    CommonModule,
    W2mButtonModule,
  ],
  exports: [AppTopButtonComponent],
})
export class AppTopButtonModule { }
