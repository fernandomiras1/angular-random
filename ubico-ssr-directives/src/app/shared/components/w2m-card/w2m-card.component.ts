import {
  Component, EventEmitter, Input, Output,
} from '@angular/core'

@Component({
  selector: 'w2m-card',
  templateUrl: './w2m-card.component.html',
})
export class W2mCardComponent<T> {
  @Input() card: T

  @Input() urlLink: string

  @Output() clickedCard: EventEmitter<T> = new EventEmitter<T>()
}
