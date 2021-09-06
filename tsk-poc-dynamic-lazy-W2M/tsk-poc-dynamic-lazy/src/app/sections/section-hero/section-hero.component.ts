import { Component, OnInit } from '@angular/core'
import { ComponentDto } from '../../core/model/component-dto'
import { SectionsDynamic, FieldsComponent } from '../../core/model/dynamic-page/dynamic-data-dto'
import { ColorsEnum } from '../../core/enum/colors-enum'
import { ComponentsEnum } from '../../core/enum/components-enum'

@Component({
  selector: 'section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent extends ComponentDto implements OnInit {
  public data: SectionsDynamic

  public subtitle: FieldsComponent

  public alert: FieldsComponent

  public colors: typeof ColorsEnum = ColorsEnum

  ngOnInit(): void {
    this.subtitle = this.getDataComponent(ComponentsEnum.ComponentSubtitle, this.data.fields)
    this.alert = this.getDataComponent(ComponentsEnum.ComponentAlert, this.data.fields)
  }
}
