import { AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
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

export class FeaturedComponentBase implements OnDestroy, AfterViewInit {
  protected subscriptions: Subscription[] = [];
  public promos: IPromo[] = [];
  public promosRendered: IPromo[] = [];
  public selectedFeaturePromo: IFeaturedPromo;
  public loading = true;
  public error = false;
  public payload = null;
  public analyticsClass = 'destacadas-agrupadas';
  private scrollPosition = 0;

  constructor(
    protected store: Store<IFeaturedPromotion>,
    protected navigationStore: Store<NavigationState>,
    protected promotionRulesService: PromotionRulesService,
    protected router: Router,
    protected navigationService: NavigationService,
  ) {
    this.checkNavigationData();
  }

  ngAfterViewInit(): void {
    document.documentElement.scrollTop = this.scrollPosition;
  }

  checkNavigationData() {
    this.storeSelectors();

    this.subscriptions.push(this.navigationStore
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
        }));
  }

  storeSelectors() {
    this.subscriptions.push(this.store
      .pipe(select(fromSelectorFeaturedPromotionRule.selectFeaturedPromotionData))
      .pipe(filter(val => !!val))
      .subscribe(
        (promos) => {
          if (promos.data) {
            this.promos = promos.data;
            this.getPaginatedPromos(8);
          }
          if (promos.error) {
            this.loading = false;
            this.error = true;
          }
        }));
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

  onScroll() {
    this.loading = true;
    this.getPaginatedPromos(8);
  }

  getHeaderImage() {
    return this.selectedFeaturePromo ? this.selectedFeaturePromo.backImageName : '';
  }

  retry() {
    this.error = false;
    this.loading = true;
    this.dispatchActions();
  }

  getPaginatedPromos(size: number) {
    this.promosRendered = [
      ...this.promosRendered,
      ...this.promos.splice(0, size),
    ];
    this.loading = false;
  }

  goBack() {
    this.navigationService.goBack();
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
