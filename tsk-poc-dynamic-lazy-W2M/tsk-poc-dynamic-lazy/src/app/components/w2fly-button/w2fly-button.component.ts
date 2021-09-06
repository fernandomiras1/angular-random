import { Component, Input, OnInit } from '@angular/core'
import { ButtonSize } from '../../core/enum/button-enums'
import { ButtonDto } from '../../core/model/button/button-dto'
import { ButtonConfig } from '../../core/model/button/button-config'

@Component({
  selector: 'w2fly-button',
  templateUrl: './w2fly-button.component.html',
  styleUrls: ['./w2fly-button.component.scss'],
})
export class W2flyButtonComponent implements OnInit {
  public readonly DEFAULT_CONFIG_BUTTON: ButtonConfig= {
    color: 'primary',
    size: ButtonSize.LARGE,
  }

  @Input() buttonDto: ButtonDto

  @Input() configButtonInput: ButtonConfig

  ngOnInit(): void {
    this.configButtonInput = {
      ...this.DEFAULT_CONFIG_BUTTON,
      ...this.configButtonInput,
    }
  }
}
