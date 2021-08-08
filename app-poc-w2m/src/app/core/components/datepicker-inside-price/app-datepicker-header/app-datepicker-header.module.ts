import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'

import { MatButtonModule } from '@angular/material/button'
import { AppDatepickerHeaderComponent } from './app-datepicker-header.component'

const MATERIAL_MODULE = [
  MatIconModule,
  MatButtonModule,
]

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULE,
  ],
  declarations: [AppDatepickerHeaderComponent],
  exports: [AppDatepickerHeaderComponent],
})
export class APPDatepickerHeaderModule { }
