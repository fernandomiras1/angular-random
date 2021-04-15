import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { NavigationState } from '@core/navigation/store/navigation.reducer';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { IBussinesRule } from '@core/models/bussines-rules.model';
import * as fromActionsByBussinesRules from '@promotions/store/by-bussinesRule-promotion.actions';
import * as fromSelectorByBussinesRules from '@promotions/store/by-bussinesRule-promotion.selectors';
import { IByBussinesRulePromotions } from '@promotions/store/by-bussinesRule-promotion.reducer';
import { NavigationMetaData } from '@core/navigation/models/navigation.model';
import * as fromSelectorNavigation from '@core/navigation/store/navigation.selectors';
import * as fromActionsNavigation from '@core/navigation/store/navigation.actions';
import { IPromo } from '@core/models/promo.model';
import { defaults } from '@constants/default-elements';
import { IPromotions as IPromotionsFiltered } from '@promotions/store/promotions-filtered.reducer';
import { IPaginationInfo } from '@core/models/pagination-info.model';
import { NavigationService } from '@shared/services/navigation.service';
import { IPromotions } from '@promotions/store/promotions.reducer';
import { NavigatorService } from '@app/core/utils/services/navigator.service';
import { provinceMap } from '@app/constants/maps.constants';

export abstract class BussinesRulesDetailBase implements OnDestroy {
  protected subscriptions: Subscription[] = [];
  isFilterApply = false;
  bodyFiltersApplied;
  location;

  public loading = true;
  public loadingPage = true;
  public loadingFeatured = true;
  public filterIcon = defaults.FILTER_ICON_URL;
  public error = false;

  public promos: IPromo[] = [];
  public promosRendered: IPromo[] = [];

  protected currentPageNumber = 1;
  protected lastPageNumber = 1;
  protected itemsByPage = 0;
  protected itemsInPage = 0;
  protected totalPromotionsNumber = 0;

  private readonly defaultPageSize = 48;

  protected title = 'Promociones';
  public rule: IBussinesRule;

  constructor(
    protected store: Store<IPromotions>,
    protected filterStore: Store<IPromotionsFiltered>,
    protected navigationStore: Store<NavigationState>,
    protected byBussinesRuleStore: Store<IByBussinesRulePromotions>,
    protected router: Router,
    protected navigationService: NavigationService,
    protected navigatorService: NavigatorService,
  ) {
    this.checkNavigationData();
  }

  checkNavigationData() {
    if (this.navigatorService.isBrowser) {
      const exist = localStorage.getItem('NpromoGeolocation'); // todo se puede por querystring¿?
      if (exist) {
        const locationString = exist;
        this.location = JSON.parse(locationString);
      }
    }
    this.storeSelectors();

    this.subscriptions.push(this.navigationStore
      .pipe(select(fromSelectorNavigation.selectData))
      .pipe(filter(val => !!val))
      .pipe(take(1))
      .subscribe(
        (data) => {
          if (data.history['BussinesRulesComponent']) {
            const BussinesRulesNavData: any = data.history['BussinesRulesComponent'].componentData;
            this.rule = BussinesRulesNavData.openRule;
            this.title = this.rule.description;
            this.dispatchActions();
          } else
            if (data.history['BussinesRulesDetailComponent']) {
              const BussinesRulesDetailNavData: any = data.history['BussinesRulesDetailComponent'].componentData;
              this.rule = BussinesRulesDetailNavData.rule;
              this.title = this.rule.description;
              this.dispatchActions();
            } else {
              if (this.rule) {
                this.dispatchActions();
              } else {
                this.router.navigate(['/todas']);
              }
            }
        }));
  }

  storeSelectors() {
    this.subscriptions.push(this.byBussinesRuleStore
      .pipe(select(fromSelectorByBussinesRules.selectByBussinesRulePromotionsData))
      .pipe(filter(val => !!val))
      .subscribe(
        (res) => {
          this.loading = false;
          if (res.data) {
            this.setPaginationInfoFromResponse(res.data.info);
            this.promos = res.data.data;
            this.getPaginatedPromos(this.promos);
          }
          if (res.error) {
            this.loading = false;
            this.error = true;
          }
        },
        (err) => {
          this.loading = false;
          this.error = true;
        }),
    );
  }

  onloadMorePromotionsRequested() {
    if (!this.currentPageNumberIsLastPage()) {
      this.dispatchActions();
    }
  }

  currentPageNumberIsLastPage(): boolean {
    return this.currentPageNumber === this.lastPageNumber;
  }

  onLoadPageNumberRequested(page: number) {
    this.loading = true;
    this.loadingPage = true;
    this.currentPageNumber = page;
    if (!this.isFilterApply) {
      const body: any = {
        aspect: {
          page: this.currentPageNumber,
          size: this.defaultPageSize,
          code: this.rule.code,
        },
        payload: {
          province: '*',
          locality: '*',
        },
      };
      if (this.location) {
        body.payload = {
          province: provinceMap[this.location.province] ? provinceMap[this.location.province] : this.location.province,
          locality: this.location.locality,
        };
      }
      // tslint:disable-next-line: max-line-length
      this.store.dispatch(new fromActionsByBussinesRules.FetchPending(body));
    } else {
      // tslint:disable-next-line: max-line-length
      this.filterStore.dispatch(new fromActionsByBussinesRules.FetchPending({ data: this.bodyFiltersApplied, page: this.currentPageNumber, size: this.defaultPageSize }));
    }

  }

  increaseCurrentPage() {
    if (this.currentPageNumber < this.lastPageNumber) {
      this.currentPageNumber = this.currentPageNumber + 1;
    }

    return this.currentPageNumber;
  }

  setPaginationInfoFromResponse(info: IPaginationInfo) {
    if (info) {
      this.totalPromotionsNumber = info.total;
      this.itemsByPage = info.items_by_page;
      this.itemsInPage = info.items_in_page;
      this.currentPageNumber = info.page;
      this.lastPageNumber = this.calculateLastPageNumber(info.total, info.items_by_page);
    }
  }

  calculateLastPageNumber(totalItems: number, itemsByPage: number): number {
    return Math.ceil(totalItems / itemsByPage);
  }

  abstract getPaginatedPromos(promotionsPage: IPromo[]);

  dispatchActions() {
    this.loadingPage = true;
    this.currentPageNumber = this.increaseCurrentPage();
    if (!this.isFilterApply) {
      const body: any = {
        aspect: {
          page: this.currentPageNumber,
          size: this.defaultPageSize,
          code: this.rule.code,
        },
        payload: {
          province: '*',
          locality: '*',
        },
      };
      if (this.location) {
        body.payload = {
          province: provinceMap[this.location.province] ? provinceMap[this.location.province] : this.location.province,
          locality: this.location.locality,
        };
      }
      // tslint:disable-next-line: max-line-length
      this.store.dispatch(new fromActionsByBussinesRules.FetchPending(body));
    } else {
      // tslint:disable-next-line: max-line-length
      this.filterStore.dispatch(new fromActionsByBussinesRules.FetchPending({ data: this.bodyFiltersApplied, page: this.currentPageNumber, size: this.defaultPageSize }));
    }
  }

  goBack() {
    this.navigationService.goBack();
  }

  saveNavigationData() {
    const scroll = document.documentElement.scrollTop;

    const componentData: any = {
      rule: this.rule,
    };

    const pageData: NavigationMetaData<any> = {
      componentData,
      scrollPosition: scroll,
      componentName: 'BussinesRulesDetailComponent',
    };

    this.store.dispatch(new fromActionsNavigation.SaveData(pageData));
  }

  ngOnDestroy() {
    this.saveNavigationData();

    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });

    // this.filterStore.dispatch(new fromActionsPromotionsFiltered.ClearData());
    this.byBussinesRuleStore.dispatch(new fromActionsByBussinesRules.ClearData());
  }
}
