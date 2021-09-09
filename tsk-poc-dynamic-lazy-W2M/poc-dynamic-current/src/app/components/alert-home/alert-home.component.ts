import { Component, Input } from '@angular/core'
import { AlertDto } from '../../core/model/alert/alert-dto'

@Component({
  selector: 'w2fly-alert-home',
  templateUrl: './alert-home.component.html',
  styleUrls: ['./alert-home.component.scss'],
})
export class AlertHomeComponent {
  @Input() listAlert: AlertDto[]

  public slideIndex = 1

  public changeSlide(index: number): void{
    const totalIndex = index + this.slideIndex
    switch (totalIndex) {
      case this.listAlert.length + 1:
        this.slideIndex = 1
        break
      case 0:
        this.slideIndex = this.listAlert.length
        break
      default:
        this.slideIndex = totalIndex
        break
    }
  }

  public displaySlide(indexAlert: number): string {
    return this.slideIndex === indexAlert + 1 ? 'flex' : 'none'
  }
}
