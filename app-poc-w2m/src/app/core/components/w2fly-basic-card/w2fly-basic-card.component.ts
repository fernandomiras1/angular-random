import { Component, Input, OnInit } from '@angular/core'
import { Card } from '../../model/cards/card'

@Component({
  selector: 'w2fly-basic-card',
  templateUrl: './w2fly-basic-card.component.html',
  styleUrls: ['./w2fly-basic-card.component.scss'],
})
export class W2flyBasicCardComponent implements OnInit {
  @Input() card: Card

  public imageIsBackground: boolean

  ngOnInit(): void {
    this.imageIsBackground = (this.card?.content.length === 0 && this.card?.titleImage.length > 0)
  }
}
