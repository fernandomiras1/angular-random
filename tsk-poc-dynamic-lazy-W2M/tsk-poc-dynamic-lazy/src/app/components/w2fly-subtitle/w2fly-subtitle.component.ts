import { Component, Input } from '@angular/core'
import { ComponentDto } from '../../core/model/component-dto'
import { W2flyTitle } from '../../core/model/titles/w2fly-title'

@Component({
  selector: 'w2fly-subtitle',
  templateUrl: './w2fly-subtitle.component.html',
  styleUrls: ['./w2fly-subtitle.component.scss'],
})
export class W2flySubtitleComponent extends ComponentDto {
  @Input() public w2flyTitle: W2flyTitle
}
