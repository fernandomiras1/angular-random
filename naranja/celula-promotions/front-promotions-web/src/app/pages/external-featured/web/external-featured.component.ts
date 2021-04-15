import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ExternalFeaturedComponentBase } from '../common/base';
import { IFeaturedPromotion } from '../../../features/promotions/store/featured-promotion.reducer';
import { PromotionRulesService } from '../../../features/promotions/services/promotion-rules.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-external-featured',
  templateUrl: './external-featured.component.html',
  styleUrls: ['./external-featured.component.scss'],
})
export class ExternalFeaturedComponent extends ExternalFeaturedComponentBase implements OnInit, OnDestroy {

  constructor(
    protected route: ActivatedRoute,
    protected store: Store<IFeaturedPromotion>,
    protected featuredStore: Store<IFeaturedPromotion>,
    protected promotionRulesService: PromotionRulesService,
    protected router: Router,
    protected navigationService: NavigationService,
  ) {
    super(route, store, featuredStore, promotionRulesService, router, navigationService);
  }

  setUrlImage() {
    if (!this.selectedFeaturePromo.mainImageName.includes('http')) {
      const mainImage = this.selectedFeaturePromo.mainImageName.split('.webp');
      const backImage = this.selectedFeaturePromo.backImageName.split('.webp');

      this.selectedFeaturePromo.mainImageName =
        `${environment.endpoints.BASE_URL_LOGO_FEATURED}/${mainImage[0]}_dsk.webp`;
      this.selectedFeaturePromo.backImageName =
        `${environment.endpoints.BASE_URL_LOGO_FEATURED}/${backImage[0]}_dsk.webp`;
    }
  }
}
