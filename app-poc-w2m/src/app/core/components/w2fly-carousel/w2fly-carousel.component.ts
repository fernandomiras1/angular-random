import {
  AfterViewInit, Component, Input, NgZone, OnDestroy, OnInit,
} from '@angular/core'
import {
  interval, Subscription,
} from 'rxjs'
import { Carousel } from '../../model/cards/carousel'

@Component({
  selector: 'w2fly-carousel',
  templateUrl: './w2fly-carousel.component.html',
  styleUrls: ['./w2fly-carousel.component.scss'],
})
export class W2flyCarouselComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() carousel: Carousel

  public currentSlide: number

  public totalSlides: number

  public slides: number[]

  public startSlide: number

  public endSlide: number

  private timer$ = new Subscription()

  private readonly defaultTime: number = 10000

  constructor(private ngZone: NgZone) { }

  ngOnDestroy(): void {
    this.timer$.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.changeSlide()
  }

  ngOnInit(): void {
    this.initCarousel()
  }

  public getCurrentSlides(indexSlides: number): void {
    this.currentSlide = indexSlides
    this.startSlide = indexSlides * this.carousel.displayLength
    this.endSlide = this.startSlide + this.carousel.displayLength
  }

  public displayCard(indexCard: number): string {
    return indexCard >= this.startSlide && indexCard < this.endSlide ? 'block' : 'none'
  }

  private initCarousel(): void {
    this.currentSlide = 0
    this.getCurrentSlides(this.currentSlide)
    this.totalSlides = Math.ceil(this.carousel.listCard.length / this.carousel.displayLength)
    this.slides = new Array(this.totalSlides)
      .fill(null)
      .map((_, index) => index)
  }

  private getNextSlide(): void {
    if (this.currentSlide < (this.totalSlides - 1)) {
      this.currentSlide += 1
    } else {
      this.currentSlide = 0
    }
    this.getCurrentSlides(this.currentSlide)
  }

  private changeSlide(): void {
    this.timer$.unsubscribe()
    const time: number = this.carousel.timeSlide && this.carousel.timeSlide > 0
      ? this.carousel.timeSlide
      : this.defaultTime
    this.ngZone.runOutsideAngular(() => {
      this.timer$ = interval(time)
        .subscribe(() => {
          this.ngZone.run(() => this.getNextSlide())
        })
    })
  }
}
