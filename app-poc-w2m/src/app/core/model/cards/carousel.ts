import { Card } from './card'

export interface Carousel {
  displayLength: number;
  timeSlide?: number;
  listCard: Card[];
}
