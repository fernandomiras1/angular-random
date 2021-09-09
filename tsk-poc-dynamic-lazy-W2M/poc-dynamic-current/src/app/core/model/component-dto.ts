import { ColorsClassEnum } from '../enum/colors-enum'
import { FieldsComponent } from './dynamic-page/dynamic-data-dto'
import { BorderRadiusStyle } from './styles/border-radius-style'

export class ComponentDto extends BorderRadiusStyle {
  private static SET_COLORS = {
    white: ColorsClassEnum.CLASS_WHITE,
    blue: ColorsClassEnum.CLASS_BLUE,
    turquoise: ColorsClassEnum.CLASS_TURQUOISE,
    red: ColorsClassEnum.CLASS_RED,
  }

  public getDataComponent(typeComponent: string, fields: FieldsComponent[]): FieldsComponent {
    return fields.find((field: FieldsComponent) => field.typeComponent === typeComponent)
  }

  public setColor(color: string): ColorsClassEnum {
    return ComponentDto.SET_COLORS[color]
  }
}
