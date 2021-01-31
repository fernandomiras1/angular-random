import { Component, Input } from '@angular/core'
import { HeaderDto } from '../../../model/header/header-dto'

@Component({
  selector: 'w2fly-float-menu',
  templateUrl: './w2fly-float-menu.component.html',
  styleUrls: ['../../../../../scss/brands/w2fly/layout/header/w2fly-float-menu.scss'],
})
export class W2flyFloatMenuComponent {
  @Input() menu: HeaderDto
}
