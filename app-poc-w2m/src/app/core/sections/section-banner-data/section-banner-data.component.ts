import { Component } from '@angular/core'

@Component({
  selector: 'section-banner-data',
  templateUrl: './section-banner-data.component.html',
  styleUrls: ['./section-banner-data.component.scss'],
})
export class SectionBannerDataComponent {
  public hasAppeared = false

  public onAppear(): void {
    console.log('-----------onAppear----------');
    this.hasAppeared = true
  }

  public parseInt(value: string): number {
    return Number(value)
  }
}
