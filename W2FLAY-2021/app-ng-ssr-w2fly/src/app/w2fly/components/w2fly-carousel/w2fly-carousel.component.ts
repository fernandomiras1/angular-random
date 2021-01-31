import { Component, Input, OnInit } from '@angular/core'
import { Card } from '../../model/cards/card'
import { Carousel } from '../../model/cards/carousel'

@Component({
  selector: 'w2fly-carousel',
  templateUrl: './w2fly-carousel.component.html',
  styleUrls: ['./w2fly-carousel.component.scss'],
})
export class W2flyCarouselComponent implements OnInit {
  @Input() carousel: Carousel

  public currentSlide: number

  public totalSlides: number

  public displayedCards: Card[]

  public slides: number[]

  private readonly defaultTime: number = 10000

  ngOnInit(): void {
    this.initCarousel()
    this.changeSlide()
  }

  public getCurrentSlides(indexSlides: number): void{
    this.currentSlide = indexSlides
    const start = indexSlides * this.carousel.displayLength
    const end = start + this.carousel.displayLength
    this.displayedCards = this.carousel.listCard.slice(start, end)
  }

  private initCarousel(): void{
    this.currentSlide = 0
    this.getCurrentSlides(this.currentSlide)
    this.totalSlides = Math.ceil(this.carousel.listCard.length / this.carousel.displayLength)
    this.slides = new Array(this.totalSlides)
      .fill(null)
      .map((_, index) => index)
  }

  private getNextSlide(): void{
    if (this.currentSlide < (this.totalSlides - 1)) {
      this.currentSlide += 1
    } else {
      this.currentSlide = 0
    }
    this.getCurrentSlides(this.currentSlide)
  }

  private changeSlide(): void{
    const time: number = this.carousel.timeSlide && this.carousel.timeSlide > 0
      ? this.carousel.timeSlide : this.defaultTime
    setInterval(() => {
      this.getNextSlide()
    }, time)
  }
}
