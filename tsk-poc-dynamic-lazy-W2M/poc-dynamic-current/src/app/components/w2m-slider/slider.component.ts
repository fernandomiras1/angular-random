import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef, Input, Renderer2, ViewEncapsulation,
} from '@angular/core'
import { SliderConfig } from './model/slider-config'

@Component({
  selector: 'w2m-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements AfterViewInit {
  @Input()
  get sliderConfig(): SliderConfig {
    return this.sliderConfiguration
  }

  set sliderConfig(sliderConfig: SliderConfig) {
    this.sliderConfiguration = {
      ...this.DEFAULT_CONFIG,
      ...sliderConfig,
    }
  }

  private sliderConfiguration: SliderConfig

  private DEFAULT_CONFIG: SliderConfig = {
    type: 'carousel',
    direction: 'ltr',
    perView: 3,
    showCustomArrows: false,
    showArrows: true,
    showBullets: true,
    arrowLeftLabel: '',
    arrowRightLabel: '',
    startAt: 0,
    isCenter: true,
    focusAt: 0.5,
    gap: 5,
    isAutoplay: true,
    autoplay: 5000,
    hoverPause: true,
    keyboard: true,
    bound: false,
    touchRatio: 0.5,
    isSwipeThreshold: true,
    swipeThreshold: 80,
    isDragThreshold: true,
    dragThreshold: 120,
    isPerTouch: false,
    perTouch: 3,
    touchAngle: 45,
    animationDuration: 600,
    rewind: false,
    rewindDuration: 5000,
    animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    listenToEvents: false,
  }

  constructor(private slider: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setBullets()
    this.setImages()
  }

  private setBullets(): void {
    Array.from(this.slider.nativeElement.children).map((child: Element) => {
      const childModified = child
      childModified.classList.add('slide')
      return childModified
    })

    const bulletContainer = (<HTMLElement> this.slider.nativeElement)
      .querySelector('.glide__bullets')
    if (this.sliderConfig.alignBullets) {
      this.renderer.addClass(bulletContainer, this.sliderConfig.alignBullets)
    }
    if (this.sliderConfig.positionBullets) {
      this.renderer.addClass(bulletContainer, this.sliderConfig.positionBullets)
    }
    if (this.sliderConfig.customBulletHTML) {
      const bullets = Array.from(bulletContainer.querySelectorAll('.glide__bullet'))
      bullets.forEach((bullet: Element) => {
        const bulletModified = bullet
        this.renderer.addClass(bulletModified, 'custom-bullet')
        this.renderer.setProperty(bulletModified, 'innerHTML', this.sliderConfig.customBulletHTML)
        return bulletModified
      })
    }
  }

  // FIX: remove when update version
  private setImages(): void {
    Array.from(this.slider.nativeElement.children).map((child: Element) => {
      const images: NodeList = child.querySelectorAll('.slide:not(.glide__slide--clone) .w2m-image')
      Array.from(child.querySelectorAll('.glide__slide--clone .w2m-image') as NodeList)
        .map((clone: HTMLImageElement, index: number) => {
          const image = images[index] as HTMLImageElement
          const clonModified: HTMLImageElement = clone
          this.renderer.setProperty(clonModified, 'src', image?.getAttribute('data-src'))
          this.renderer.removeClass(clonModified, 'ng-lazyloading')
          this.renderer.addClass(clonModified, 'ng-lazyloaded')
          return clonModified
        })
      return child
    })
  }
}
