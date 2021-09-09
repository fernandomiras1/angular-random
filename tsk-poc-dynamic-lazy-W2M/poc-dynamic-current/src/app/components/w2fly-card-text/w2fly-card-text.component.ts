import { Component, Input, OnInit } from '@angular/core'
import { AlertCommonDto } from '../../core/model/alert/alert-common-dto'

@Component({
  selector: 'w2fly-card-text',
  templateUrl: './w2fly-card-text.component.html',
  styleUrls: ['./w2fly-card-text.component.scss'],
})
export class W2flyCardTextComponent implements OnInit {
  @Input() data: any

  public alertText: AlertCommonDto

  ngOnInit(): void {
    if (this.data?.alertType && this.data?.alertTitle && this.data?.alertDescription) {
      this.alertText = {
        alertType: this.data.alertType,
        text: this.data.alertDescription,
        title: this.data.alertTitle,
        dotColor: this.data.alertDotColor || null,
        externalLinkIcon: this.data.externalLinkIcon,
      }
    }
  }
}
