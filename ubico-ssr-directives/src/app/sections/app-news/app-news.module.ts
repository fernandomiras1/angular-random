import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { appNewsComponent } from './app-news.component'
import { appNewsRoutingModule } from './app-news.routing'

@NgModule({
  imports: [
    CommonModule,
    appNewsRoutingModule,
  ],
  declarations: [appNewsComponent],
})
export class appNewsModule { }
