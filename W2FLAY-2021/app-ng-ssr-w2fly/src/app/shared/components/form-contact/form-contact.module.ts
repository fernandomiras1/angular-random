import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { TranslateModule } from '@ngx-translate/core'
import { FormContactComponent } from './form-contact.component'

const MATERIAL_MODULE = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
]
@NgModule({
  declarations: [FormContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    MATERIAL_MODULE,
  ],
  exports: [FormContactComponent, TranslateModule],
})
export class FormContactModule { }
