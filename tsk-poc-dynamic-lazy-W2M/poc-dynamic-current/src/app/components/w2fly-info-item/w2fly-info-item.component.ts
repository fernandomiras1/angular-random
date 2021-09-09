import { Component, Input } from '@angular/core'
import { Info } from '../../core/model/info/info'

@Component({
  selector: 'w2fly-info-item',
  templateUrl: './w2fly-info-item.component.html',
  styleUrls: ['./w2fly-info-item.component.scss'],
})
export class W2flyInfoItemComponent {
  @Input() info: Info
}
