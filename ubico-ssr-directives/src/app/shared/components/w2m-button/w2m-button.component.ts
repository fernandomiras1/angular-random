import {
  Component, EventEmitter, Input, Output,
} from '@angular/core'
import { ButtonDto } from './model/button-dto'

@Component({
  selector: 'w2m-button',
  templateUrl: './w2m-button.component.html',
  styleUrls: ['./w2m-button.component.scss'],
})
export class W2mButtonComponent {
  @Input() buttonData: ButtonDto

  @Input() disabled = false

  @Input() color = 'accent'

  @Output() clicked: EventEmitter<void> = new EventEmitter()
}
