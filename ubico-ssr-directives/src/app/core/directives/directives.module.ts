import { NgModule } from '@angular/core'
import { AnimatedCounterDirective } from './animated-counter.directive'
import { DynamicDirective } from './dynamic.directive'
import { LazysizesDirective } from './lazysizes.directive'
import { AppearDirective } from './appear.directive'

const DIRECTIVES = [
  DynamicDirective,
  LazysizesDirective,
  AnimatedCounterDirective,
  AppearDirective,
]

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
