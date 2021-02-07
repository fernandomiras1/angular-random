import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorStateMatcher } from '@angular/material/core'
import { LanguagePickerModule } from './components/language-picker/language-picker.module'
import { FormContactModule } from './components/form-contact/form-contact.module'
import { ErrorMatcher } from './model/error-matcher'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguagePickerModule,
    FormContactModule,
  ],
  exports: [
    LanguagePickerModule,
    FormContactModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ErrorMatcher },
  ],
})
export class SharedModule { }
