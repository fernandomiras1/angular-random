import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPromotions } from '@promotions/store/promotions.reducer';
import { NavigationState } from '@core/navigation/store/navigation.reducer';
import { Router } from '@angular/router';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { PromotionsService } from '@promotions/services/promotions.service';
import { BussinesRulesBase } from '../common/base';
import { IFeaturedPromotion } from '@promotions/store/featured-promotion.reducer';
import { IFeaturedPromo } from '@core/models/featured-promotion.model';
import { environment } from '@environments/environment';
import { IBussinesRules } from '@app/features/promotions/store/bussines-rules-reducer';
import { IByBussinesRulePromotions } from '@app/features/promotions/store/by-bussinesRule-promotion.reducer';
import { IPromotions as IPromotionsFiltered } from '@promotions/store/promotions-filtered.reducer';
import { IPromo } from '@app/core/models/promo.model';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '@app/shared/services/common.service';

@Component({
  selector: 'app-bussines-rules',
  templateUrl: './bussines-rules.component.html',
  styleUrls: ['./bussines-rules.component.scss'],
})
export class BussinesRulesWebComponent extends BussinesRulesBase implements OnInit {
  public showFiltersMenu = false;
  switch = { text: 'Vista en mapa', selected: false, disabled: false };
  constructor(
    protected store: Store<IPromotions>,
    protected navigationStore: Store<NavigationState>,
    protected featuredStore: Store<IFeaturedPromotion>,
    protected bussinesRulesStore: Store<IBussinesRules>,
    protected byBussinesRuleStore: Store<IByBussinesRulePromotions>,
    protected filterStore: Store<IPromotionsFiltered>,
    protected router: Router,
    protected navigatorService: NavigatorService,
    protected promotionsService: PromotionsService,
    protected translate: TranslateService,
    protected commonService: CommonService,
  ) {
    super(
      store,
      navigationStore,
      featuredStore,
      bussinesRulesStore,
      byBussinesRuleStore,
      filterStore,
      router,
      navigatorService,
      promotionsService,
      translate,
    );
  }

  ngOnInit() {
  }

  setUrlImage(features: IFeaturedPromo[]) {
    features.forEach((item: IFeaturedPromo) => {
      if (item && item.mainImageName && !item.mainImageName.includes('http')) {
        const mainImage = item.mainImageName.split('.webp');
        const backImage = item.backImageName.split('.webp');

        item.mainImageName = `${environment.endpoints.BASE_URL_LOGO_FEATURED}/${mainImage[0]}_dsk.webp`;
        item.backImageName = `${environment.endpoints.BASE_URL_LOGO_FEATURED}/${backImage[0]}_dsk.webp`;
      }
    });
  }

  redirectToMap() {
    localStorage.removeItem('NfromDetailToMap');
    setTimeout(
      () => {
        this.router.navigate(['/cerca-tuyo']);
      },
      500);
  }

  setFiltersValue(value: boolean) {
    this.showFiltersMenu = value;
    this.commonService.changeStyleBodyFixed('remove');
  }

  applyFilters(event) {
    this.onFilterApplied(event);
    this.showFiltersMenu = false;
    this.commonService.changeStyleBodyFixed('remove');
  }

  showFilters() {
    this.showFiltersMenu = true;
    this.commonService.changeStyleBodyFixed('add');
  }

  getPaginatedPromos(promotionsPage: IPromo[]) {
    this.promosRendered = [
      ...promotionsPage,
    ];
    this.loading = false;
    this.loadingPage = false;
    this.scrollPosition = document.documentElement.scrollTop = 0;
  }
}
