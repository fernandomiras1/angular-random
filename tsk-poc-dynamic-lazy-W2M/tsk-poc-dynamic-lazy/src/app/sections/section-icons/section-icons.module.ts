import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DirectivesModule } from '../../core/directives/directives.module'
import { SectionIconsComponent } from './section-icons.component'
import { W2flyInfoItemModule } from '../../components/w2fly-info-item/w2fly-info-item.module'
import { W2flyButtonModule } from '../../components/w2fly-button/w2fly-button.module'

@NgModule({
  declarations: [
    SectionIconsComponent,
  ],
  imports: [
    CommonModule,
    W2flyButtonModule,
    W2flyInfoItemModule,
    DirectivesModule,
  ],
  exports: [SectionIconsComponent],
})
export class SectionIconsModule {
  static entry = SectionIconsComponent
}
