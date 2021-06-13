import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { W2mLinkModule } from 'src/app/shared/components/w2m-link/w2m-link.module'
import { W2MLanguagePickerModule } from 'src/app/components/w2m-language-picker/w2m-language-picker.module'
import { TranslateModule } from '@ngx-translate/core'
import { SectionHeaderComponent } from './section-header.component'

const MATERIAL_MODULES = [
  MatSidenavModule,
]
@NgModule({
  declarations: [
    SectionHeaderComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    W2mLinkModule,
    MATERIAL_MODULES,
    W2MLanguagePickerModule,
    TranslateModule,
  ],
  exports: [SectionHeaderComponent],
})
export class SectionHeaderModule {
  static entry=SectionHeaderComponent
}
