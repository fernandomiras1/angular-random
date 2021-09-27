import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ComponentDto } from '../../core/model/component-dto'
import { SectionsDynamic, FieldsComponent } from '../../core/model/dynamic-page/dynamic-data-dto'
import { ColorsEnum } from '../../core/enum/colors-enum'
import { ComponentsEnum } from '../../core/enum/components-enum'
import { sliderConfig } from './slider-ubico-config'

@Component({
  selector: 'section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionHeroComponent implements OnInit {
  public ComponentType: typeof ComponentsEnum = ComponentsEnum

  public sliderConfig =sliderConfig

  public data: SectionsDynamic

  public subtitle: FieldsComponent

  public alert: FieldsComponent

  public colors: typeof ColorsEnum = ColorsEnum

  ngOnInit(): void {
  }
}
