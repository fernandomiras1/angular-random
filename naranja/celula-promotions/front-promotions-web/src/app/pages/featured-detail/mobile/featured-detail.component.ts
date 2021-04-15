import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FeaturedDetailComponentBase } from '../common/base';
import { IFeaturedPromotion } from '../../../features/promotions/store/featured-promotion.reducer';
import { NavigationState } from '../../../core/navigation/store/navigation.reducer';
import { PromotionRulesService } from '../../../features/promotions/services/promotion-rules.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-detail',
  templateUrl: './featured-detail.component.html',
  styleUrls: ['./featured-detail.component.scss'],
})
export class FeaturedDetailComponent extends FeaturedDetailComponentBase {

  constructor(
    protected store: Store<IFeaturedPromotion>,
    protected navigationStore: Store<NavigationState>,
    protected promotionRulesService: PromotionRulesService,
    protected router: Router,
    protected navigationService: NavigationService,
    protected translate: TranslateService,
  ) {
    super(store, navigationStore, promotionRulesService, router, navigationService, translate);
  }
}
