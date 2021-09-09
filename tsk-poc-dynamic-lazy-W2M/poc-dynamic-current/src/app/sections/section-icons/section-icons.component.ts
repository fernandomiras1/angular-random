import { Component } from '@angular/core'
import { ComponentsEnum } from '../../core/enum/components-enum'
import { SectionsDynamic } from '../../core/model/dynamic-page/dynamic-data-dto'
@Component({
  selector: 'section-icons',
  templateUrl: './section-icons.component.html',
  styleUrls: ['./section-icons.component.scss'],
})
export class SectionIconsComponent {
  public ComponentType: typeof ComponentsEnum = ComponentsEnum

  public data: SectionsDynamic
}
