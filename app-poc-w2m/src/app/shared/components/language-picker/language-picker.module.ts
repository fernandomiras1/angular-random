import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule } from '@ngx-translate/core'
import { LanguagePickerComponent } from './language-picker.component'
import { I18nService } from '../../i18n/i18n.service'

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
export class LanguagePickerModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.init()
  }
}
