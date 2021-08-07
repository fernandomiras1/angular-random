import { Component, Input } from '@angular/core'
import { W2flyTitle } from '../../model/titles/w2fly-title'

@Component({
  selector: 'w2fly-subtitle',
  templateUrl: './w2fly-subtitle.component.html',
  styleUrls: ['./w2fly-subtitle.component.scss'],
})
export class W2flySubtitleComponent {
  @Input() public w2flyTitle: W2flyTitle
}
