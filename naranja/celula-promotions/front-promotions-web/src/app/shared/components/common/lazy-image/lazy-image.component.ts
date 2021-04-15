import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
  animations: [
    trigger('imageAnimation', [
      state('show-image', style({
        opacity: '1',
      })),
      state('hide-image', style({
        opacity: '0',
      })),
      transition('show-image <=> hide-image', animate('1000ms ease-in')),
    ]),
    trigger('emptyImageAnimation', [
      state('show-emptyImage', style({
        opacity: '1',
      })),
      state('hide-emptyImage', style({
        opacity: '0',
      })),
      transition('show-emptyImage <=> hide-emptyImage', animate('1000ms ease-in')),
    ]),
  ],
})
export class LazyImageComponent implements OnInit {

  @Input() image: string;
  @Input() emptyImage: string;
  @Input() classImage: string;
  @Input() animationDisabled = false;
  @Input() alt: string;
  @ViewChild('container') container: ElementRef;
  @ViewChild('empty') empty: ElementRef;

  public showEmptyImage = false;
  public fallbackImage: string;
  public imageCtrl = 'hide-image';
  public emptyImageCtrl = 'hide-emptyImage';

  constructor() { }

  ngOnInit() {
    if (this.image) {
      this.fallbackImage = this.image.replace('webp', 'png');
    }

    if (!this.emptyImage) {
      this.emptyImage = `${environment.endpoints.BASE_URL_LOGO}/empty_logo.png`;
    }
  }

  onLoad() {
    this.imageCtrl = 'show-image';

    if (this.container.nativeElement.naturalWidth === 1
      && this.container.nativeElement.naturalWidth === 1) {
      this.showEmptyImage = true;
    }
  }

  onLoadEmpty() {
    this.emptyImageCtrl = 'show-emptyImage';
  }
}
