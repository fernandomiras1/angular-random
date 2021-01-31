import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule } from '@ngx-translate/core'
import { LanguagePickerComponent } from './language-picker.component'

const MATERIAL_MODULES = [
  MatButtonModule,
  MatMenuModule,
]
@NgModule({
  declarations: [LanguagePickerComponent],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    TranslateModule,
  ],
  exports: [
    LanguagePickerComponent,
    TranslateModule,
  ],
})
export class LanguagePickerModule { }
