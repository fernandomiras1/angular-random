import {
  Component, OnInit,
} from '@angular/core'

@Component({
  selector: 'section-banner-data',
  templateUrl: './section-banner-data.component.html',
  styleUrls: ['./section-banner-data.component.scss'],
})
export class SectionBannerDataComponent implements OnInit {
  hasAppeared = false

  ngOnInit(): void {

  }

  onAppear() {
    this.hasAppeared = true
    console.log('onAppear ========= APARECE ')
  }
}
