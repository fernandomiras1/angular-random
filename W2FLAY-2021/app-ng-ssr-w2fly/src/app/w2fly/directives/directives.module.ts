import { NgModule } from '@angular/core'
import { AnimatedCounterDirective } from './animated-counter.directive'
import { AppearDirective } from './appear.directive'
import { ClickStopPropagationDirective } from './click-stop-propagation.directive'

const DIRECTIVES = [
  AnimatedCounterDirective,
  AppearDirective,
  ClickStopPropagationDirective,
]

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
