import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule } from '@ngx-translate/core'
import { W2MLanguagePickerComponent } from './w2m-language-picker.component'

const MATERIAL_MODULES = [
  MatButtonModule,
  MatMenuModule,
]

@NgModule({
  declarations: [W2MLanguagePickerComponent],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    TranslateModule,
  ],
  exports: [
    W2MLanguagePickerComponent,
    TranslateModule,
  ],
})
export class W2MLanguagePickerModule {}
