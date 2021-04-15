import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { IFeaturedDomain, IFeaturedPromo } from '../../../core/models/featured-promotion.model';
import { IPromo } from '../../../core/models/promo.model';
import { IFeaturedPromotion } from '../../../features/promotions/store/featured-promotion.reducer';
import { PromotionRulesService } from '../../../features/promotions/services/promotion-rules.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import * as fromActionsFeaturedPromotionRule from '../../../features/promotions/store/featured-promotion-rule.actions';
import * as fromSelectorFeaturedPromotionRule from '../../../features/promotions/store/featured-promotion-rule.selectors';
import * as fromActionsFeaturedPromotion from '../../../features/promotions/store/featured-promotion.actions';
import * as fromSelectorFeaturedPromotion from '../../../features/promotions/store/featured-promotion.selectors';

export abstract class ExternalFeaturedComponentBase implements OnInit, OnDestroy {

  public featureName: string = null;
  public featuredPromotions: IFeaturedPromo[] = [];
  protected selectedFeaturePromo: IFeaturedPromo;
  protected subscriptions: Subscription[] = [];
  public promos: IPromo[] = [];
  public promosRendered: IPromo[] = [];
  public loading = true;
  public error = false;
  public analyticsClass = 'destacadas-agrupadas';

  constructor(
    protected route: ActivatedRoute,
    protected store: Store<IFeaturedPromotion>,
    protected featuredStore: Store<IFeaturedPromotion>,
    protected promotionRulesService: PromotionRulesService,
    protected router: Router,
    protected navigationService: NavigationService,
  ) {
  }

  ngOnInit() {
    this.featureName = this.route.snapshot.params.featureName;
    this.mapState();
  }

  mapState() {
    this.dispatchActions();

    this.featuredStore
      .pipe(select(fromSelectorFeaturedPromotion.selectFeaturedPromotionData))
      .pipe(filter(val => !!val))
      .pipe(take(1))
      .subscribe(
        (featured) => {
          if (featured.data) {
            const featuredPromotionsFiltered = featured.data.find((x) => {
              return x.feature === this.featureName;
            });

            if (featuredPromotionsFiltered) {
              this.selectedFeaturePromo = featuredPromotionsFiltered;
              this.setUrlImage();
              this.mapStatePromos();
            }
          }
          if (featured.error) {
            this.loading = false;
            this.error = true;
          }
        });
  }

  mapStatePromos() {
    this.dispatchActionsPromos();
    this.subscriptions.push(
      this.store
        .pipe(select(fromSelectorFeaturedPromotionRule.selectFeaturedPromotionData))
        .pipe(
          filter(val => !!val),
        ).subscribe(
          (promos) => {
            if (promos.data) {
              this.promos = promos.data;
              this.getPaginatedPromos(8);
            }
            if (promos.error) {
              this.loading = false;
              this.error = true;
            }
          }),
    );
  }

  getPaginatedPromos(size: number) {
    this.promosRendered = [
      ...this.promosRendered,
      ...this.promos.splice(0, size),
    ];
    this.loading = false;
  }

  abstract setUrlImage();

  onScroll() {
    this.loading = true;
    this.getPaginatedPromos(8);
  }

  getHeaderImage() {
    return this.selectedFeaturePromo ? this.selectedFeaturePromo.backImageName : '';
  }

  dispatchActions() {
    this.featuredStore.dispatch(new fromActionsFeaturedPromotion.FetchPending({ code: 'FEATURED' }));
  }

  dispatchActionsPromos() {
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

  ngOnDestroy() {
    this.store.dispatch(new fromActionsFeaturedPromotionRule.ClearData());
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  retry() {
    this.error = false;
    this.loading = true;
    this.mapState();
  }
}
