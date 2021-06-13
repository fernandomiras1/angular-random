import { Component, OnInit } from '@angular/core'
import { FontawesomeService } from './shared/services/fontawesome.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-ng-ssr-ubico'

  constructor(private fontawesome: FontawesomeService) {}

  ngOnInit(): void {
    this.fontawesome.load()
  }
}
