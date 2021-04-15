import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromoDetailComponentBase } from '../../common/promo-detail/base';
import { PromotionsService } from '../../../../features/promotions/services/promotions.service';
import { GeocodingService } from '../../../services/geocoding.service';
import { AddressesService } from '../../../services/addresses.service';
import { WindowService } from '../../../../core/utils/services/window.service';
import { CommonService } from '../../../services/common.service';
import { NavigationService } from '../../../services/navigation.service';
import { slideType } from '../../../../core/models/featured-promotion.model';

@Component({
  selector: 'app-promo-detail-web',
  templateUrl: './promo-detail.component.html',
  styleUrls: ['./promo-detail.component.scss'],
})
export class PromoDetailWebComponent extends PromoDetailComponentBase implements OnInit {

  constructor(
    protected promoService: PromotionsService,
    protected router: Router,
    protected addressesService: AddressesService,
    protected geocodingService: GeocodingService,
    protected windowService: WindowService,
    protected commonService: CommonService,
    private navigationService: NavigationService,
  ) {
    super(promoService, addressesService, commonService);
    this.isMobile = false;
  }

  ngOnInit() {
    super.ngOnInit();
  }

  goBack() {
    this.navigationService.goBack();
  }

  getBreadcrumbTitle() {
    if (this.featuredPromo && this.featuredPromo.description && this.featuredPromo.type.description === slideType.ARRAY) {
      return `Promociones > ${this.featuredPromo.description}`;
    }
    return 'Promociones > Detalle';
  }

  getCounterData() {
    this.counterData = this.promoService.getDaysCounter(this.promo);
  }

  printWeb() {
    window.print();
  }
}
