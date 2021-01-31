import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core'

import { Carousel } from '../../model/cards/carousel'

@Component({
  selector: 'w2fly-carousel-v2',
  templateUrl: './w2fly-carousel-v2.component.html',
  styleUrls: ['./w2fly-carousel-v2.component.scss'],
})
export class W2flyCarouselv2Component implements OnInit, OnDestroy {
  @Input() carousel: Carousel

  slideIndex = 1

  myTimer: number

  myImages = [
    { text: 'Primera Imagen', img: 'assets/1.jpg' },
    { text: 'Segunda Imagen', img: 'assets/2.jpg' },
    { text: 'Tercera Imagen', img: 'assets/3.jpg' },
  ]

  ngOnDestroy(): void {
    this.clearTimeout()
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex)
    this.myTimer = setInterval(() => this.plusSlides(1), 4000)
  }

  plusSlides(index: number) {
    clearInterval(this.myTimer)
    if (index < 0) {
      this.showSlides(this.slideIndex -= 1)
    } else {
      this.showSlides(this.slideIndex += 1)
    }

    if (index === -1) {
      this.myTimer = setInterval(() => this.plusSlides(index + 2), 4000)
    } else {
      this.myTimer = setInterval(() => this.plusSlides(index + 1), 4000)
    }
  }

  currentSlide(index: number) {
    clearInterval(this.myTimer)
    this.myTimer = setInterval(() => this.plusSlides(index + 1), 4000)
    this.showSlides(this.slideIndex = index)
  }

  showSlides(index: number) {
    if (index > this.myImages.length) { this.slideIndex = 1 }
    if (index < 1) { this.slideIndex = this.myImages.length }
  }

  clearTimeout() {
    if (this.myTimer) {
      clearInterval(this.myTimer)
    }
  }
}
