import { Component } from '@angular/core'
import { ComponentsEnum } from '../../core/enum/components-enum'
import { SectionsDynamic } from '../../core/model/dynamic-page/dynamic-data-dto'

@Component({
  selector: 'section-info-image-cards',
  templateUrl: './section-info-image-cards.component.html',
  styleUrls: ['./section-info-image-cards.component.scss'],
})
export class SectionInfoImageCardsComponent {
  public ComponentType: typeof ComponentsEnum = ComponentsEnum

  public data: SectionsDynamic
}
