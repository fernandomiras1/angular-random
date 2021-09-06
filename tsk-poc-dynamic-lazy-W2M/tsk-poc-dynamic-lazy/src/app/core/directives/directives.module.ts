import { NgModule } from '@angular/core'
import { AnchorDirective } from './anchor.directive'
import { DynamicDirective } from './dynamic.directive'

const DIRECTIVES = [
  DynamicDirective,
  AnchorDirective,
]

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
