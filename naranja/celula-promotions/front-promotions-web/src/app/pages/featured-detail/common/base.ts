import { AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { IEmptyStateData } from '@shared/components/common/empty-state-grid/empty-state.model';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { IFeaturedDomain, IFeaturedPromo } from '../../../core/models/featured-promotion.model';
import { IPromo } from '../../../core/models/promo.model';
import { NavigationState } from '../../../core/navigation/store/navigation.reducer';
import * as fromSelectorNavigation from '../../../core/navigation/store/navigation.selectors';
import { PromotionRulesService } from '../../../features/promotions/services/promotion-rules.service';
import * as fromActionsFeaturedPromotionRule from '../../../features/promotions/store/featured-promotion-rule.actions';
import * as fromSelectorFeaturedPromotionRule from '../../../features/promotions/store/featured-promotion-rule.selectors';
import { IFeaturedPromotion } from '../../../features/promotions/store/featured-promotion.reducer';
import { NavigationService } from '../../../shared/services/navigation.service';

export class FeaturedDetailComponentBase implements OnDestroy, AfterViewInit {
  protected subscriptions: Subscription[] = [];

  public promo: IPromo = null;
  public selectedFeaturePromo: IFeaturedPromo;
  public loading = true;
  public error = false;
  public payload = null;

  constructor(
    protected store: Store<IFeaturedPromotion>,
    protected navigationStore: Store<NavigationState>,
    protected promotionRulesService: PromotionRulesService,
    protected router: Router,
    protected navigationService: NavigationService,
    protected translate: TranslateService,
  ) {
    this.checkNavigationData();
  }

  public emptyStateData: IEmptyStateData = {
    emptyBtn: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.BTN'),
    emptySubtitle: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.SUBTITLE'),
    emptyTitle: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.TITLE'),
    emptyIcon: 'UNAVAILABLE_ICON_URL',
  };

  ngAfterViewInit(): void {
    document.documentElement.scrollTop = 0;
  }

  checkNavigationData() {
    this.storeSelectors();

    this.subscriptions.push(
      this.navigationStore
        .pipe(select(fromSelectorNavigation.selectData))
        .pipe(filter(val => !!val))
        .pipe(take(1))
        .subscribe(
          (data) => {
            if (data.history['BussinesRulesComponent']) {
              const bussinesRulesNavData: any = data.history['BussinesRulesComponent'].componentData;
              this.selectedFeaturePromo = bussinesRulesNavData.selectedFeaturedPromo;
            }
            this.dispatchActions();
          }),
    );
  }

  storeSelectors() {
    this.subscriptions.push(
      this.store
        .pipe(select(fromSelectorFeaturedPromotionRule.selectFeaturedPromotionData))
        .pipe(filter(val => !!val))
        .subscribe(
          (promo) => {
            if (promo.data && promo.data.length) {
              this.promo = promo.data[0];
            }
            if (promo.error) {
              this.error = true;
            }
            this.loading = false;
          },
        ),
    );
  }

  dispatchActions() {
    if (!!this.selectedFeaturePromo) {
      const body = this.getfullPayload(this.selectedFeaturePromo);
      this.store.dispatch(new fromActionsFeaturedPromotionRule.FetchPending(body));
    } else {
      return this.router.navigate(['']);
    }
  }

  getfullPayload(fetureSelected: IFeaturedPromo): any {
    const domainValues: IFeaturedDomain = {
      domain: {
        province: '',
        categories: [],
      },
    };
    return this.promotionRulesService.getFullPayload(fetureSelected, domainValues);
  }

  retry() {
    this.error = false;
    this.loading = true;
    this.dispatchActions();
  }

  ngOnDestroy() {
    this.store.dispatch(new fromActionsFeaturedPromotionRule.ClearData());
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  onErrorStateButtonPressed(): void {
    this.router.navigate(['']);
  }
}
