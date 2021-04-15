import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { IPromo } from '../../../../core/models/promo.model';
import { NavigatorService } from '../../../../core/utils/services/navigator.service';
import { ImagesUtils } from '../../../utils/images.utils';

@Component({
  selector: 'app-map-info-window',
  templateUrl: './map-info-window.component.html',
  styleUrls: ['./map-info-window.component.scss'],
})
export class MapInfoWindowComponent {

  @Input() platform = 'web';
  @Input() data;
  @Output() promoClick = new EventEmitter<string>();
  isMobile = false;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private navigatorService: NavigatorService) {
    this.isMobile = navigatorService.isMobile();
  }

  getEmptyIcon(promo) {
    const iconName = ImagesUtils.generateName(promo.categoria, '-');
    return `assets/images/icons/categories/${iconName}-empty.svg`;
  }

  onPromoSelected(promo: IPromo) {
    if (this.platform === 'app') {
      return this.promoClick.emit(promo.id);
    }
    this.router.navigate(['promo', promo.id,
      this.navigatorService.gtmUrlResolve(promo)]);
  }
}
