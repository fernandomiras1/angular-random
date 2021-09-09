import { NgModule } from '@angular/core'
import { LazyCompDirective } from './lazy-comp.directive'
import { AnchorDirective } from './anchor.directive'
import { DynamicDirective } from './dynamic.directive'

const DIRECTIVES = [
  DynamicDirective,
  AnchorDirective,
  LazyCompDirective,
]

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
