import { Component } from '@angular/core'
import { SectionCommon } from '../section-common'
import { Icon, Item } from './model/fotter-dto'

@Component({
  selector: 'section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss'],
})
export class SectionFooterComponent extends SectionCommon {
  public getItemIcons(items: Item[]): Icon[] {
    return items
      .map(item => item.icons)
      .reduce((acc, val) => acc.concat(val), [])
  }
}
