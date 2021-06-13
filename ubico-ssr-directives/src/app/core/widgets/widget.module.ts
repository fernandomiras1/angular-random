import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WidgetSmartvelSeachComponent } from './widget-smartvel-seach/widget-smartvel-seach.component'
import { WidgetSmartvelMapComponent } from './widget-smartvel-map/widget-smartvel-map.component'

const WIDGET_COMPONENTS = [
  WidgetSmartvelSeachComponent,
  WidgetSmartvelMapComponent,
]

@NgModule({
  declarations: [
    WIDGET_COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    WIDGET_COMPONENTS,
  ],
})
export class WidgetModule { }
