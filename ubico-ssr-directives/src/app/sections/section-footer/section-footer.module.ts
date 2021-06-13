import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { W2mLinkModule } from 'src/app/shared/components/w2m-link/w2m-link.module'
import { AppFormContactModule } from 'src/app/components/app-form-contact/app-form-contact.module'
import { SectionFooterComponent } from './section-footer.component'

@NgModule({
  declarations: [
    SectionFooterComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    W2mLinkModule,
    AppFormContactModule,
  ],
  exports: [SectionFooterComponent],
})
export class SectionFooterModule {
  static entry=SectionFooterComponent
}
