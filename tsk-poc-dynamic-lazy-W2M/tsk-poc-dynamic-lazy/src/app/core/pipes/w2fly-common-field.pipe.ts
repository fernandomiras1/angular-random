import { Pipe, PipeTransform } from '@angular/core'
import { FieldsComponent } from '../model/dynamic-page/dynamic-data-dto'
import { BorderRadiusStyle } from '../model/styles/border-radius-style'

@Pipe({
  name: 'w2flyCommonField',
})
export class W2flyCommonFieldPipe extends BorderRadiusStyle implements PipeTransform {
  transform(item: FieldsComponent, radius: number): FieldsComponent {
    return {
      ...item,
      borderRadiusStyle: this.setBorderRadiusStyle(item.borderRadius, radius),
    }
  }
}
