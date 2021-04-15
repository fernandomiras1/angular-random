import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-web',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
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
  ],
})

export class MapWebComponent implements OnChanges {
  @Input() promoMap;
  @Input() addresses;
  @Output() clickMap: EventEmitter<any> = new EventEmitter();
  @ViewChild('lImage') lImage: ElementRef;

  imageCtrl = 'hide-image';
  public loadingImage = false;
  private lastImage;

  ngOnChanges() {
    this.initialState();
    if (this.lImage) {
      this.lImage.nativeElement.onload = () => {
        setTimeout(() => {
          this.imageCtrl = 'show-image';
          this.loadingImage = true;
        },         1500);
      };
    }
  }

  initialState() {
    this.imageCtrl = 'hide-image';
    this.loadingImage = false;
  }

  onMapClick() {
    this.clickMap.emit();
  }
}
