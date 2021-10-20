import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipesModule } from 'src/app/core/pipes/pipes.module'
import { ReactiveFormsModule } from '@angular/forms'
import { DirectivesModule } from '../../core/directives/directives.module'
import { SectionInfoImageCardsComponent } from './section-info-image-cards.component'

@NgModule({
  declarations: [
    SectionInfoImageCardsComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  exports: [SectionInfoImageCardsComponent],
})
export class SectionInfoImageCardsModule {
  static entry = SectionInfoImageCardsComponent
}
