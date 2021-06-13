import { isPlatformBrowser } from '@angular/common'
import {
  Component, HostListener, Inject, Input, PLATFORM_ID,
} from '@angular/core'
import { HeaderDto, ItemHeader, SubMenuHeader } from 'src/app/sections/section-header/model/header-dto'
import { SectionCommon } from '../section-common'

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent extends SectionCommon {
  @Input() header: HeaderDto

  public headerScrolled = false

  public headerTransparent = true

  public headerHeight = 85

  constructor(@Inject(PLATFORM_ID) private platform: string) {
    super()
  }

  public getSubItems(items: ItemHeader[]): SubMenuHeader[] {
    return items
      .map(item => item.subMenu)
      .reduce((acc, val) => acc.concat(val), [])
  }

  @HostListener('window:scroll')
  private handleScroll() {
    if (this.headerTransparent) {
      if (isPlatformBrowser(this.platform)) {
        this.headerScrolled = window.scrollY > this.headerHeight
      }
    }
  }
}
