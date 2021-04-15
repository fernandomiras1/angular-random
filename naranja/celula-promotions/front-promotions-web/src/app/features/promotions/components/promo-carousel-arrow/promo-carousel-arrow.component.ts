import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-promo-carousel-arrow',
  templateUrl: './promo-carousel-arrow.component.html',
  styleUrls: ['./promo-carousel-arrow.component.scss'],
})
export class PromoCarouselArrowComponent {
  @Input() dir: string;
  @Input() disabled = true;
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
