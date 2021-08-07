import { Component, Input } from '@angular/core'
import { Tag } from '../../model/cards/tag'

@Component({
  selector: 'w2fly-tag',
  templateUrl: './w2fly-tag.component.html',
  styleUrls: ['./w2fly-tag.component.scss'],
})
export class W2flyTagComponent {
  @Input() tags: Tag[]
}
