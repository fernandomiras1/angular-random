import { DOCUMENT, ViewportScroller } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { SliderConfig } from '@w2m/ngx-components/w2m-slider'
import { sliderConfig } from 'src/app/shared/models/constants/slider-ubico-config'
import { SectionCommon } from '../section-common'
import { HeroType } from './model/hero-type'

@Component({
  selector: 'section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent extends SectionCommon {
  public sliderConfig: SliderConfig=sliderConfig

  public heroType: typeof HeroType= HeroType

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private viewportScroller: ViewportScroller,
  ) {
    super()
  }

  public scrollDown(): void{
    const idsElements = this.document.querySelectorAll('section[id]:not([id=""])')
    const id = Array.from(idsElements).map(el => el.id).shift()
    this.viewportScroller.scrollToAnchor(id)
  }
}
