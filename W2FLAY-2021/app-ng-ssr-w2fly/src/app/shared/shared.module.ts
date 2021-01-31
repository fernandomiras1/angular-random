import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LanguagePickerModule } from './components/language-picker/language-picker.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguagePickerModule,
  ],
  exports: [
    LanguagePickerModule,
  ],
})
export class SharedModule { }
