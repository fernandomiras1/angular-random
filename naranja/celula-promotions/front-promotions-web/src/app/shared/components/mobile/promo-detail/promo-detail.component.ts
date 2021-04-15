import { registerLocaleData } from '@angular/common';
import esAR from '@angular/common/locales/es-AR';
import { Component } from '@angular/core';
import { PromotionsService } from '@promotions/services/promotions.service';
import { AddressesService } from '@shared/services/addresses.service';
import { CommonService } from '@shared/services/common.service';

import { PromoDetailComponentBase } from '../../common/promo-detail/base';

@Component({
  selector: 'app-promo-detail-mobile',
  templateUrl: './promo-detail.component.html',
  styleUrls: ['./promo-detail.component.scss'],
})
export class PromoDetailMobileComponent extends PromoDetailComponentBase {
  constructor(
    protected promoService: PromotionsService,
    protected addressesService: AddressesService,
    protected commonService: CommonService,
  ) {
    super(promoService, addressesService, commonService);
    registerLocaleData(esAR, 'es-AR');
  }
}
