import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { TranslateModule } from '@ngx-translate/core'
import { AppFormContactComponent } from './app-form-contact.component'

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
]
@NgModule({
  declarations: [
    AppFormContactComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    PipesModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [AppFormContactComponent],
})
export class AppFormContactModule { }
