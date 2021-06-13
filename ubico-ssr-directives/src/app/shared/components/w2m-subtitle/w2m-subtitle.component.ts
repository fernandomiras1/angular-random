import { Component, Input } from '@angular/core'
import { W2mSubtitleDto } from './model/w2m-subtitle-dto'

@Component({
  selector: 'w2m-subtitle',
  templateUrl: './w2m-subtitle.component.html',
})
export class W2mSubtitleComponent {
  @Input() w2mSubtitle: W2mSubtitleDto
}
