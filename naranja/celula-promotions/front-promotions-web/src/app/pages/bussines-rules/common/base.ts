import { AfterContentInit, AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { provinceMap } from '@app/constants/maps.constants';
import { ILocation } from '@app/core/models/geo-location.model';
import {
  PromoGeolocationComponent,
} from '@app/features/promotions/components/promo-geolocation/promo-geolocation.component';
import { IErrorStateData } from '@app/shared/components/web/error-state/error-state.model';
import { defaults } from '@constants/default-elements';
import { IBussinesRule } from '@core/models/bussines-rules.model';
import { IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';
import { IFilterBody } from '@core/models/filter-body.model';
import { IPaginationInfo } from '@core/models/pagination-info.model';
import { IPromo } from '@core/models/promo.model';
import { NavigationMetaData } from '@core/navigation/models/navigation.model';
import * as fromActionsNavigation from '@core/navigation/store/navigation.actions';
import { NavigationState } from '@core/navigation/store/navigation.reducer';
import * as fromSelectorNavigation from '@core/navigation/store/navigation.selectors';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PromoCarouselComponent } from '@promotions/components/promo-carousel/promo-carousel.component';
import { PromotionsService } from '@promotions/services/promotions.service';
import * as fromActionsBussinesRules from '@promotions/store/bussines-rules-actions';
import { IBussinesRules } from '@promotions/store/bussines-rules-reducer';
import * as fromSelectorBussinesRules from '@promotions/store/bussines-rules.selector';
import * as fromActionsByBussinesRules from '@promotions/store/by-bussinesRule-promotion.actions';
import { IByBussinesRulePromotions } from '@promotions/store/by-bussinesRule-promotion.reducer';
import * as fromSelectorByBussinesRules from '@promotions/store/by-bussinesRule-promotion.selectors';
import * as fromActionsFeaturedPromotion from '@promotions/store/featured-promotion.actions';
import { IFeaturedPromotion } from '@promotions/store/featured-promotion.reducer';
import * as fromSelectorFeaturedPromotion from '@promotions/store/featured-promotion.selectors';
import * as fromActionsPromotionsFiltered from '@promotions/store/promotions-filtered.actions';
import { IPromotions as IPromotionsFiltered } from '@promotions/store/promotions-filtered.reducer';
import * as fromSelectorPromotionsFiltered from '@promotions/store/promotions-filtered.selectors';
import * as fromActionsPromotions from '@promotions/store/promotions.actions';
import { IPromotions } from '@promotions/store/promotions.reducer';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

export abstract class BussinesRulesBase implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  @ViewChild(PromoCarouselComponent) carousel: PromoCarouselComponent;
  @ViewChild(PromoGeolocationComponent) geolocationComponent: PromoGeolocationComponent;

  protected subscriptions: Subscription[] = [];
  public openRule: IBussinesRule;
  public rules: IBussinesRule[] = [];
  protected featuredSelected: IFeaturedPromo;
  public featuredPromotions: IFeaturedPromo[] = [];
  public loading = true;
  public loadingPage = false;
  public error = false;
  public loadingFeatured = true;
  public lastSlideIndex: number = null;
  public selectedSlideIndex: number;
  public filtered = false;
  public hasHorizontalPromos = true;
  public countHorizontalPromos = 0;
  public loadingHPFinished = false;

  // filter stuff

  public promos: IPromo[] = [];
  public promosRendered: IPromo[] = [];
  public filterIcon = defaults.FILTER_ICON_URL;
  public categoriesFilteredItems: any[] = [];
  public provinceFiltered: string;
  public localityFiltered: string;
  public commerceNameFiltered: string;
  public isFilterApply = false;
  public openFilter = false;
  protected bodyFiltersApplied: any = {};

  protected totalPromotionsNumber = 0;
  protected currentPageNumber = 1;
  protected lastPageNumber = 1;
  protected itemsByPage = 0;
  protected itemsInPage = 0;
  protected scrollPosition = 0;
  private readonly defaultPageSize = 48;

  protected location = null;
  protected haslocation = false;
  protected messageLocationText: string;
  protected showLocationAlert = false;
  //

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
  ) {
    this.checkNavigationData();
  }

  public emptyStateData: IErrorStateData = {
    errorBtn: this.translate.instant('SHARED_COMPONENTS.EMPTY_STATE.BTN'),
    errorSubtitle: this.translate.instant('SHARED_COMPONENTS.EMPTY_STATE.SUBTITLE'),
    errorTitle: this.translate.instant('SHARED_COMPONENTS.EMPTY_STATE.TITLE'),
    errorIcon: 'GRID_EMPTY_ICON_URL',
  };

  public errorData: IErrorStateData = {
    errorBtn: this.translate.instant('SHARED_COMPONENTS.ERROR_STATE.BTN'),
    errorSubtitle: this.translate.instant('SHARED_COMPONENTS.ERROR_STATE.SUBTITLE'),
    errorTitle: this.translate.instant('SHARED_COMPONENTS.ERROR_STATE.TITLE'),
    errorIcon: 'EMPTY_ICON_URL',
  };

  retry() {
    this.error = false;
    this.loading = true;
    this.loadingFeatured = true;
    this.dispatchActions();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    document.documentElement.scrollTop = this.scrollPosition;

    if (this.error) {
      return;
    }

    this.goToNextSlide();
  }

  ngAfterContentInit(): void {
    this.messageLocationText = this.translate.instant('PAGES.GEOLOCATION.MESSAGE_LOCATION');
  }

  abstract setUrlImage(features: IFeaturedPromo[]);

  checkNavigationData() {
    if (this.navigatorService.isBrowser) {
      const exist = localStorage.getItem('NpromoGeolocation'); // todo se puede por querystring¿?
      this.showLocationAlert = this.showLocationMessage();
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
            this.rules = BussinesRulesNavData.rules;
            this.featuredPromotions = BussinesRulesNavData.featuredPromotions;
            this.loadingFeatured = false;
            this.loading = false;
            this.promos = BussinesRulesNavData.promos;
            this.promosRendered = BussinesRulesNavData.promosRendered;
            this.categoriesFilteredItems = BussinesRulesNavData.categoriesFilteredItems;
            this.featuredSelected = BussinesRulesNavData.selectedFeaturedPromo;
            this.localityFiltered = BussinesRulesNavData.localityFiltered;
            this.provinceFiltered = BussinesRulesNavData.provinceFiltered;
            this.lastSlideIndex = BussinesRulesNavData.lastIndexSlide;
            this.scrollPosition = data.history['BussinesRulesComponent'].scrollPosition - 30;
            this.isFilterApply = BussinesRulesNavData.isFilterApply;
            this.commerceNameFiltered = BussinesRulesNavData.commerceNameFiltered;
            // pagination info
            this.currentPageNumber = BussinesRulesNavData.currentPageNumber;
            this.lastPageNumber = BussinesRulesNavData.lastPageNumber;
            this.itemsByPage = BussinesRulesNavData.itemsByPage;
            this.itemsInPage = BussinesRulesNavData.itemsInPage;
            this.totalPromotionsNumber = BussinesRulesNavData.totalPromotionsNumber;
            this.loadingPage = BussinesRulesNavData.loadingPage;
            this.bodyFiltersApplied = BussinesRulesNavData.bodyFiltersApplied;
            this.hasHorizontalPromos = BussinesRulesNavData.hasHorizontalPromos;
            this.loadingHPFinished = BussinesRulesNavData.loadingHPFinished;
          } else {
            this.dispatchActions();
          }
        }));

    this.subscriptions.push(
      this.filterStore
        .pipe(select(fromSelectorPromotionsFiltered.selectData))
        .pipe(filter(val => !!val))
        .subscribe(
          (promos) => {
            this.loading = false;
            if (promos.data) {
              this.setPaginationInfoFromResponse(promos.data.info);
              this.getPaginatedPromos(promos.data.data);
            }
            if (promos.error) {
              this.error = true;
            }
          }),
    );
  }

  storeSelectors() {
    this.subscriptions.push(this.featuredStore
      .pipe(select(fromSelectorFeaturedPromotion.selectFeaturedPromotionData))
      .pipe(filter(val => !!val))
      .subscribe(
        (featured) => {
          if (featured.data) {
            this.featuredPromotions = featured.data;
            this.featuredPromotions = this.featuredPromotions.sort((a, b) => a.order - b.order);
            this.setUrlImage(this.featuredPromotions);
            this.loadingFeatured = false;
            this.loading = false;
          }
          if (featured.error) {
            this.loadingFeatured = false;
            this.loading = false;
            this.error = true;
          }
        }),
    );

    this.subscriptions.push(this.bussinesRulesStore
      .pipe(select(fromSelectorBussinesRules.selectBussinesRulesData))
      .pipe(filter(val => !!val))
      .subscribe(
        (res) => {
          this.rules = [];
          this.countHorizontalPromos = 0;
          this.loadingHPFinished = false;
          this.loading = false;
          if (res.data) {
            this.setGrids(res.data);
          }
          if (res.error) {
            this.loading = false;
          }
        }),
    );

    this.subscriptions.push(this.byBussinesRuleStore
      .pipe(select(fromSelectorByBussinesRules.selectByBussinesRulePromotionsData))
      .pipe(filter(val => !!val))
      .subscribe(
        (res) => {
          this.loading = false;
          this.countHorizontalPromos += 1;
          if (res.data) {
            const rule = this.rules.find((_rule) => {
              return _rule.code === res.data.code;
            });
            if (rule) {
              rule.promos = (res.data.data === undefined) ? [] : res.data.data;
              rule.total = (res.data.info === null) ? 0 : res.data.info.total;
            }
            this.hasHorizontalPromos =
              (this.rules.map(x => x.promos ? x.promos.length : 0)
                .reduce((acc, num) => acc + num, 0) > 0);

            this.loadingHPFinished = (this.rules.length === this.countHorizontalPromos);

          }
          if (res.error) {
            const rule = this.rules.find((_rule) => {
              return _rule.code === res.code;
            });
            rule.err = true;
            this.hasHorizontalPromos =
              (this.rules.map(x => x.promos ? x.promos.length : 0)
                .reduce((acc, num) => acc + num, 0) > 0);

            this.loadingHPFinished = (this.rules.length === this.countHorizontalPromos);
            this.loading = false;
          }
        },
        (err) => {
          this.loading = false;
        }),
    );
  }

  setGrids(rules: IBussinesRule[]) {
    rules.map((rule) => {
      if (!rule.dispatchRule) {
        this.getGridDetail(rule);
        this.rules.push(rule);
      } else {
        this.rules.push({ promos: rule.dispatched.data, ...rule });
      }
    });
  }

  getGridDetail(rule: IBussinesRule, page = 1, size = 8) {
    this.loading = true;
    const body: any = {
      aspect: {
        page,
        size,
        code: rule.code,
        cacheable: true,
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
    this.store.dispatch(new fromActionsByBussinesRules.FetchPending(body));
  }

  selectedSlide(featuredPromo: IFeaturedPromo) {
    this.featuredSelected = featuredPromo;
    this.lastSlideIndex = this.calculateNextSlideIndex();
    if (featuredPromo.type) {

      switch (featuredPromo.type.description) {
        case slideType.ARRAY:
          return this.router.navigate(['destacadas',
            this.navigatorService.gtmUrlResolve(this.featuredSelected)]);
        case slideType.DETAIL:
          return this.router.navigate(['destacada',
            this.navigatorService.gtmUrlResolve(this.featuredSelected)]);
        default:
          return this.router.navigate(['']);
      }
    }
  }

  onSelectedSlide(index: number) {
    this.selectedSlideIndex = index;
  }

  calculateNextSlideIndex(): number {
    const newIndex = this.selectedSlideIndex + 1;
    if (newIndex > this.featuredPromotions.length - 1) {
      return 0;
    }
    return newIndex;
  }

  goToNextSlide() {
    if (this.lastSlideIndex !== null) {
      if (this.lastSlideIndex > 0) {
        return this.carousel.goTo(this.lastSlideIndex);
      }
      this.carousel.fadeTo(this.lastSlideIndex);
    }
  }

  dispatchActions() {
    if (!this.featuredPromotions.length) {
      this.featuredStore.dispatch(new fromActionsFeaturedPromotion.FetchPending({ code: 'FEATURED' }));
    }
    const body: any = {
      page: 1,
      size: 8,
    };
    if (this.location) {
      body.province = provinceMap[this.location.province] ? provinceMap[this.location.province] : this.location.province,
        body.locality = this.location.locality;
    } else {
      body.province = '*';
      body.locality = '*';
    }
    this.bussinesRulesStore.dispatch(new fromActionsBussinesRules.FetchPending({ body }));
  }

  saveNavigationData() {
    const scroll = document.documentElement.scrollTop;

    const componentData: any = {
      rules: this.rules,
      featuredPromotions: this.featuredPromotions,
      openRule: this.openRule,
      promos: this.promos,
      promosRendered: this.promosRendered,
      categoriesFilteredItems: this.categoriesFilteredItems,
      selectedFeaturedPromo: this.featuredSelected,
      provinceFiltered: this.provinceFiltered,
      localityFiltered: this.localityFiltered,
      lastIndexSlide: this.lastSlideIndex,
      isFilterApply: this.isFilterApply,
      commerceNameFiltered: this.commerceNameFiltered,
      location: this.location,
      // pagination info
      currentPageNumber: this.currentPageNumber,
      lastPageNumber: this.lastPageNumber,
      itemsByPage: this.itemsByPage,
      itemsInPage: this.itemsInPage,
      totalPromotionsNumber: this.totalPromotionsNumber,
      loadingPage: this.loadingPage,
      bodyFiltersApplied: this.bodyFiltersApplied,
      hasHorizontalPromos: this.hasHorizontalPromos,
      loadingHPFinished: this.loadingHPFinished,
    };

    const pageData: NavigationMetaData<any> = {
      componentData,
      scrollPosition: scroll,
      componentName: 'BussinesRulesComponent',
    };

    this.store.dispatch(new fromActionsNavigation.SaveData(pageData));
  }

  openRuleDetail(e) {
    this.openRule = e;
    this.router.navigate(['detalle']);
  }

  ngOnDestroy() {
    this.saveNavigationData();

    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });

    this.store.dispatch(new fromActionsBussinesRules.ClearData());
    this.filterStore.dispatch(new fromActionsPromotionsFiltered.ClearData());
    this.featuredStore.dispatch(new fromActionsFeaturedPromotion.ClearData());
    this.bussinesRulesStore.dispatch(new fromActionsBussinesRules.ClearData());
    this.byBussinesRuleStore.dispatch(new fromActionsByBussinesRules.ClearData());
  }

  // filter stuff

  openFilterDialog() {
    this.openFilter = true;
  }

  closeFilterDialog() {
    this.openFilter = false;
    this.goToNextSlide();
  }

  onCloseChip(type: string) {
    this.promosRendered = [];

    if (type === 'categories') {
      this.categoriesFilteredItems = [];
    }

    if (type === 'location') {
      this.provinceFiltered = null;
      this.localityFiltered = null;
    }

    if (type === 'commerceName') {
      this.commerceNameFiltered = null;
    }

    if (!this.categoriesFilteredItems.length && !this.provinceFiltered && !this.localityFiltered && !this.commerceNameFiltered) {
      this.error = false;
      this.loading = true;
      this.isFilterApply = false;
      this.totalPromotionsNumber = 0;
      this.currentPageNumber = 0;
      this.lastPageNumber = 0;
      this.store.dispatch(new fromActionsPromotions.ClearData());
      this.bussinesRulesStore.dispatch(new fromActionsBussinesRules.ClearData());
      this.byBussinesRuleStore.dispatch(new fromActionsByBussinesRules.ClearData());
      const body: any = {
        page: 1,
        size: 8,
      };
      if (this.location) {
        body.province = provinceMap[this.location.province] ? provinceMap[this.location.province] : this.location.province,
          body.locality = this.location.locality;
      } else {
        body.province = '*';
        body.locality = '*';
      }
      this.bussinesRulesStore.dispatch(new fromActionsBussinesRules.FetchPending({ body }));
    }

    if (this.provinceFiltered || this.localityFiltered || this.categoriesFilteredItems.length > 0 || this.commerceNameFiltered) {
      const filterBody: IFilterBody = {
        province: { text: this.provinceFiltered },
        locality: { text: this.localityFiltered },
        categories: this.categoriesFilteredItems,
        commerceName: this.commerceNameFiltered,
      };

      return this.onFilterApplied(filterBody);
    }
  }

  onFilterApplied(filterBody: IFilterBody) {
    this.isFilterApply = true;
    this.scrollPosition = document.documentElement.scrollTop = 0;
    this.categoriesFilteredItems = [];
    this.provinceFiltered = null;
    this.localityFiltered = null;
    this.commerceNameFiltered = null;

    this.store.dispatch(new fromActionsPromotions.ClearData());
    this.filterStore.dispatch(new fromActionsPromotionsFiltered.ClearData());

    this.promosRendered = [];

    this.error = false;
    this.loading = true;
    this.closeFilterDialog();

    this.bodyFiltersApplied = {};

    if (filterBody.province && filterBody.province.text) {
      this.bodyFiltersApplied.province = filterBody.province.text;
      this.provinceFiltered = filterBody.province.text;
    }

    if (filterBody.locality && filterBody.locality.text) {
      this.bodyFiltersApplied.locality = filterBody.locality.text;
      this.localityFiltered = filterBody.locality.text;
    }

    if (filterBody.categories && filterBody.categories.length > 0) {
      this.bodyFiltersApplied.categories = filterBody.categories;
      this.categoriesFilteredItems = filterBody.categories;
    }

    if (filterBody.commerceName && filterBody.commerceName.trim().length > 0) {
      // trim the string, then take the first 50 characters and Title Case Transform It
      const userInputProcessed = filterBody.commerceName.trim().slice(0, 50);
      // this.titlecasePipe.transform((filterBody.commerceName.trim().slice(0, 50)));

      this.bodyFiltersApplied.commerceName = userInputProcessed;
      this.commerceNameFiltered = userInputProcessed;
    }

    if (Object.keys(this.bodyFiltersApplied).length === 0) {
      document.documentElement.scrollTop = 0;
      this.isFilterApply = false;
      // this.loading = false;
      // this.totalPromotionsNumber = 0;
      // this.currentPageNumber = 0;
      // this.lastPageNumber = 0;
      const body: any = {
        page: 1,
        size: 8,
      };
      if (this.location) {
        body.province = provinceMap[this.location.province] ? provinceMap[this.location.province] : this.location.province,
          body.locality = this.location.locality;
      } else {
        body.province = '*';
        body.locality = '*';
      }
      this.bussinesRulesStore.dispatch(new fromActionsBussinesRules.FetchPending({ body }));
      return;
    }

    if (!this.bodyFiltersApplied.province && !this.bodyFiltersApplied.locality && this.location) {
      this.bodyFiltersApplied.province = this.location.province;
      this.bodyFiltersApplied.locality = this.location.locality;
    }
    // tslint:disable-next-line: max-line-length
    this.filterStore.dispatch(new fromActionsPromotionsFiltered.FetchPending({ data: this.bodyFiltersApplied, page: 1, size: this.defaultPageSize }));

  }

  mapCategoriesFilteredFromFilterBody(): string[] {
    return this.categoriesFilteredItems.map(category => category.category);
  }

  isFilteredSearchActive() {
    return this.provinceFiltered || this.localityFiltered || this.categoriesFilteredItems.length > 0 || this.commerceNameFiltered;
  }

  locationFilteredData() {
    if (this.localityFiltered) { return [this.localityFiltered]; }
    if (this.provinceFiltered) { return [this.provinceFiltered]; }
    return [];
  }

  abstract getPaginatedPromos(promotionsPage: IPromo[]);

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

  onLoadPageNumberRequested(page: number) {
    this.loading = true;
    this.loadingPage = true;
    this.currentPageNumber = page;
    if (!this.isFilterApply) {
      // tslint:disable-next-line: max-line-length
      this.store.dispatch(new fromActionsPromotions.FetchPending({ pageNumber: this.currentPageNumber, size: this.defaultPageSize, location: this.location }));
    } else {
      // tslint:disable-next-line: max-line-length
      this.filterStore.dispatch(new fromActionsPromotionsFiltered.FetchPending({ data: this.bodyFiltersApplied, page: this.currentPageNumber, size: this.defaultPageSize }));
    }
  }

  currentPageNumberIsLastPage(): boolean {
    return this.currentPageNumber === this.lastPageNumber;
  }

  onloadMorePromotionsRequested() {
    if (!this.currentPageNumberIsLastPage()) {
      this.onLoadPageNumberRequested(this.currentPageNumber + 1);
    }
  }

  locationFetched(location: ILocation) {
    this.showLocationAlert = false;
    this.loading = true;
    this.promosRendered = [];
    this.totalPromotionsNumber = 0;
    this.location = location;
    this.currentPageNumber = 1;
    this.lastPageNumber = 0;
    this.rules = [];
    if (this.isFilterApply) {
      this.onFilterApplied(this.bodyFiltersApplied);
    } else {
      this.dispatchActions();
    }

  }

  locationBlocked() {
    this.location = null;
    this.showLocationAlert = true;
    if (this.navigatorService.isBrowser) {
      localStorage.removeItem('NpromoGeolocation');
    }
  }

  hideLocationMessage() {
    // expira en 24hs
    this.showLocationAlert = false;
    if (this.navigatorService.isBrowser) {
      this.promotionsService.setWithExpiry('messageLocation', 'hide', 1000 * 60 * 60 * 24);
    }
  }

  showLocationMessage(): boolean {
    if (this.navigatorService.isBrowser) {
      return (this.promotionsService.getWithExpiry('messageLocation') === null);
    }
  }
}
