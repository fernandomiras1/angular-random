import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-carousel-dot',
  templateUrl: './promo-carousel-dot.component.html',
  styleUrls: ['./promo-carousel-dot.component.scss'],
})
export class PromoCarouselDotComponent implements OnInit {
  numbers: number[];

  @Input() activeDot = 0;
  @Input() dotsCount: number;
  @Input() enableDotClick = false;
  @Output() selectDot = new EventEmitter<number>();

  @HostBinding('class')
  @Input() position = 'left';

  constructor() {
  }

  ngOnInit() {
    this.numbers = Array(this.dotsCount).fill(0).map((x, i) => i);
  }

  onClick(index: number) {
    if (this.enableDotClick) {
      this.selectDot.emit(index);
    }
  }
}
