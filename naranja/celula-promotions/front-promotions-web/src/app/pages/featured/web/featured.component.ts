import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FeaturedComponentBase } from '../common/base';
import { IFeaturedPromotion } from '../../../features/promotions/store/featured-promotion.reducer';
import { NavigationState } from '../../../core/navigation/store/navigation.reducer';
import { PromotionRulesService } from '../../../features/promotions/services/promotion-rules.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { IErrorStateData } from '@shared/components/web/error-state/error-state.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})

export class FeaturedComponent extends FeaturedComponentBase {
  constructor(
    protected store: Store<IFeaturedPromotion>,
    protected navigationStore: Store<NavigationState>,
    protected promotionRulesService: PromotionRulesService,
    protected router: Router,
    protected navigationService: NavigationService,
    protected translate: TranslateService,
  ) {
    super(store, navigationStore, promotionRulesService, router, navigationService);
  }

  public emptyStateData: IErrorStateData = {
    errorBtn: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.BTN'),
    errorSubtitle: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.SUBTITLE'),
    errorTitle: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.TITLE'),
    errorIcon: 'UNAVAILABLE_ICON_URL',
  };

}
