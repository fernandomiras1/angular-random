import { Component, Input, ViewEncapsulation } from '@angular/core'
import { SlideArrow } from '../model/slide-arrows'

@Component({
  selector: 'w2m-slide-arrow',
  templateUrl: './slide-arrow.component.html',
  styleUrls: ['./slide-arrow.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideArrowComponent {
  @Input() slideArrow: SlideArrow

  @Input() right: boolean
}
