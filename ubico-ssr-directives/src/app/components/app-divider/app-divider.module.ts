import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppDividerComponent } from './app-divider.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AppDividerComponent],
  exports: [AppDividerComponent],
})
export class AppDividerModule { }
