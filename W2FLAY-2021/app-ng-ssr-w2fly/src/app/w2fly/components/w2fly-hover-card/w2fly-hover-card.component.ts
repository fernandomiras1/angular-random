import { Component, Input } from '@angular/core'
import { Card } from '../../model/cards/card'

@Component({
  selector: 'w2fly-hover-card',
  templateUrl: './w2fly-hover-card.component.html',
  styleUrls: ['../../../../scss/brands/w2fly/components/w2fly-hover-card.scss'],
})
export class W2flyHoverCardComponent {
  public hidden=false

  @Input() card: Card
}
