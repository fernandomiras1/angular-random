import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-divider',
  templateUrl: './app-divider.component.html',
  styleUrls: ['./app-divider.component.scss'],
})
export class AppDividerComponent {
  @Input() isBigLine = true
}
