import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { DocumentService } from '../../../core/utils/services/document.service';
import { PromotionsService } from '../../../features/promotions/services/promotions.service';
import { IPromotion } from '../../../features/promotions/store/promotion.reducer';
import { PromoDetailComponentBase } from '../common/base';
import { AddressesService } from '../../../shared/services/addresses.service';
import { GeocodingService } from '../../../shared/services/geocoding.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { IErrorStateData } from '../../../shared/components/web/error-state/error-state.model';

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
    protected translate: TranslateService,
    protected geocodingService: GeocodingService,
    protected navigationService: NavigationService) {
    super(route, store, navigationService);
    this.isMobile = false;
  }

  public errorData: IErrorStateData = {
    errorBtn: this.translate.instant('SHARED_COMPONENTS.ERROR_STATE.BTN'),
    errorSubtitle: this.translate.instant('SHARED_COMPONENTS.ERROR_STATE.SUBTITLE'),
    errorTitle: this.translate.instant('SHARED_COMPONENTS.ERROR_STATE.TITLE'),
    errorIcon: 'EMPTY_ICON_URL',
  };
}
