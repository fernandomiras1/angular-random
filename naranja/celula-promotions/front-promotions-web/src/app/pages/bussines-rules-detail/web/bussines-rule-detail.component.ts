import { Component, OnInit } from '@angular/core';
import { BussinesRulesDetailBase } from '../common/base';
import { IPromo } from '@core/models/promo.model';
import { Store } from '@ngrx/store';
import { IPromotions } from '@promotions/store/promotions.reducer';
import { NavigationState } from '@core/navigation/store/navigation.reducer';
import { Router } from '@angular/router';
import { IPromotions as IPromotionsFiltered } from '@promotions/store/promotions-filtered.reducer';
import { IByBussinesRulePromotions } from '@app/features/promotions/store/by-bussinesRule-promotion.reducer';
import { NavigationService } from '@app/shared/services/navigation.service';
import { NavigatorService } from '@app/core/utils/services/navigator.service';

@Component({
  selector: 'app-bussines-rule-detail',
  templateUrl: './bussines-rule-detail.component.html',
  styleUrls: ['./bussines-rule-detail.component.scss'],
})
export class BussinesRuleDetailWebComponent extends BussinesRulesDetailBase {

  constructor(
    protected store: Store<IPromotions>,
    protected filterStore: Store<IPromotionsFiltered>,
    protected navigationStore: Store<NavigationState>,
    protected byBussinesRuleStore: Store<IByBussinesRulePromotions>,
    protected router: Router,
    protected navigationService: NavigationService,
    protected navigatorService: NavigatorService,
  ) {
    super(
      store,
      filterStore,
      navigationStore,
      byBussinesRuleStore,
      router,
      navigationService,
      navigatorService,
    );
  }

  getPaginatedPromos(promotionsPage: IPromo[]) {
    this.promosRendered = [
      ...promotionsPage,
    ];
    this.loading = false;
    this.loadingPage = false;
    document.documentElement.scrollTop = 0;
  }
}
