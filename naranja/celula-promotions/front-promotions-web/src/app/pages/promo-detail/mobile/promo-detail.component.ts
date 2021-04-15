import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PromoDetailComponentBase } from '../common/base';
import { DocumentService } from '../../../core/utils/services/document.service';
import { IPromotion } from '../../../features/promotions/store/promotion.reducer';
import { AddressesService } from '../../../shared/services/addresses.service';
import { PromotionsService } from '../../../features/promotions/services/promotions.service';
import { GeocodingService } from '../../../shared/services/geocoding.service';
import { NavigationService } from '../../../shared/services/navigation.service';

@Component({
  selector: 'app-promo-detail',
  templateUrl: './promo-detail.component.html',
  styleUrls: ['./promo-detail.component.scss'],
})
export class PromoDetailComponent extends PromoDetailComponentBase {

  constructor(
    protected documentService: DocumentService,
    protected route: ActivatedRoute,
    protected store: Store<IPromotion>,
    protected addressesService: AddressesService,
    protected promoService: PromotionsService,
    protected geocodingService: GeocodingService,
    protected navigationService: NavigationService) {
    super(route, store, navigationService);
  }

}
