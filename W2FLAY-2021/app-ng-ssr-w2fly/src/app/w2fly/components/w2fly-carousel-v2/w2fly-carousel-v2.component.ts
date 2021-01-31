import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core'
import {
  interval, Subscription,
} from 'rxjs'

@Component({
  selector: 'w2fly-carousel-v2',
  templateUrl: './w2fly-carousel-v2.component.html',
  styleUrls: ['./w2fly-carousel-v2.component.scss'],
})
export class W2flyCarouselv2Component implements OnInit, OnDestroy {
  @Input() defaultTime = 4000

  slideIndex = 1

  timer$ = new Subscription()

  myTimer: number

  myImages = [
    { text: 'Primera Imagen', img: 'assets/1.jpg' },
    { text: 'Segunda Imagen', img: 'assets/2.jpg' },
    { text: 'Tercera Imagen', img: 'assets/3.jpg' },
  ]

  ngOnDestroy(): void {
    this.timer$.unsubscribe()
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex)
    this.changeSlide(1)
  }

  plusSlides(index: number) {
    if (index < 0) {
      this.showSlides(this.slideIndex -= 1)
    } else {
      this.showSlides(this.slideIndex += 1)
    }

    if (index === -1) {
      this.changeSlide(index + 2)
    } else {
      this.changeSlide(index + 1)
    }
  }

  currentSlide(index: number) {
    this.changeSlide(index + 1)
    this.showSlides(this.slideIndex = index)
  }

  showSlides(index: number) {
    if (index > this.myImages.length) { this.slideIndex = 1 }
    if (index < 1) { this.slideIndex = this.myImages.length }
  }

  private changeSlide(index: number): void {
    this.timer$.unsubscribe()
    this.timer$ = interval(this.defaultTime)
      .subscribe(() => {
        this.plusSlides(index)
      })
  }
}
