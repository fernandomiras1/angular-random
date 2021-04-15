import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from '../../shared/services/window.service';
import promosJson from './promos.json';
import { IPromo } from '../../core/models/promo.model';
@Component({
  selector: 'app-integration-map',
  templateUrl: './app-integration-map.component.html',
  styleUrls: ['./app-integration-map.component.scss'],
})
export class AppIntegrationMapComponent implements OnInit {
  oWebViewInterface: any;
  promos: IPromo[] = [];
  initialPoint = { lat: 0, lng: 0 };

  constructor(@Inject(WINDOW) private window: Window) { }

  ngOnInit() {
    this.oWebViewInterface = this.window['nsWebViewInterface'];
    this.oWebViewInterface.emit('loadWebViewFinishFromWeb');
    this.oWebViewInterface.on('setDataMap', (config) => {
      this.promos = config.promos;
      this.initialPoint = config.coordinates;
    });
  }

  onZoomChange(zoom) {
    this.oWebViewInterface.emit('zoomChanged', zoom);
  }

  onPromoClick(promoId) {
    this.oWebViewInterface.emit('promoClicked', promoId);
  }
}
