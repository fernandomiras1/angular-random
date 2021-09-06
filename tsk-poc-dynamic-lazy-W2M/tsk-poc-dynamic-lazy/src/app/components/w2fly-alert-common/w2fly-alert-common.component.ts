import { Component, Input } from '@angular/core'
import { AlertCommonDto } from '../../core/model/alert/alert-common-dto'
import { AlertTypeEnum } from '../../core/enum/alert-type-enum'
import { ColorsEnum } from '../../core/enum/colors-enum'

@Component({
  selector: 'w2fly-alert-common',
  templateUrl: './w2fly-alert-common.component.html',
  styleUrls: ['./w2fly-alert-common.component.scss'],
})
export class W2flyAlertCommonComponent {
  @Input() alert: AlertCommonDto

  private alertType: typeof AlertTypeEnum = AlertTypeEnum

  private colorType: typeof ColorsEnum = ColorsEnum

  public getTypeAlert({ alertType }: AlertCommonDto): string {
    return alertType
      ? `w2f-alert-common--${alertType}`
      : `w2f-alert-common--${this.alertType.DEFAULT}`
  }

  public getDotColor({ dotColor }: AlertCommonDto): string {
    return dotColor
      ? `w2f-dot--${dotColor}`
      : `w2f-dot--${this.colorType.WHITE}`
  }
}
