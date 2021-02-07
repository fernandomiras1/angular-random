import { Component, Input } from '@angular/core'
import { HeaderDto } from '../../../model/header/header-dto'
import { FloatMenuType } from '../../../enum/common-enum'

@Component({
  selector: 'w2fly-float-menu',
  templateUrl: './w2fly-float-menu.component.html',
  styleUrls: ['./w2fly-float-menu.component.scss'],
})
export class W2flyFloatMenuComponent {
  public menuType: typeof FloatMenuType = FloatMenuType

  @Input() menu: HeaderDto
}
