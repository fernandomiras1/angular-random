import { ComponentsEnum } from '../core/enum/components-enum'
import { SectionsDynamic } from '../core/model/dynamic-page/dynamic-data-dto'

export class SectionCommon {
  public readonly data: SectionsDynamic

  public ComponentType: typeof ComponentsEnum = ComponentsEnum
}
