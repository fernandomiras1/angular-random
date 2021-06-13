import { Component, Input } from '@angular/core'

@Component({
  selector: 'w2m-link',
  templateUrl: './w2m-link.component.html',
  styleUrls: ['./w2m-link.component.scss'],
})
export class W2mLinkComponent {
  @Input() urlLink: string

  get isInternalLink(): boolean {
    this.urlLink = this.urlLink.trim()
    return !this.urlLink.startsWith('http')
  }
}
