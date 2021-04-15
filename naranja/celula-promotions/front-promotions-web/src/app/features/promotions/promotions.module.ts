import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PromoCarouselArrowComponent } from './components/promo-carousel-arrow/promo-carousel-arrow.component';
import { PromoCarouselCardComponent } from './components/promo-carousel-card/promo-carousel-card.component';
import { PromoCarouselDotComponent } from './components/promo-carousel-dot/promo-carousel-dot.component';
import { PromoCarouselComponent } from './components/promo-carousel/promo-carousel.component';
import { PromotionBtnComponent } from './components/web/promotion-btn/promotion-btn.component';
import { ImageLazyLoadDirective } from './directives/image-lazy-load.directive';
import { SwiperDirective } from './directives/swiper.directive';
import { PromotionRulesService } from './services/promotion-rules.service';
import { PromotionsService } from './services/promotions.service';
import { ByLocationPromotionsEffects } from './store/by-location-promotions.effects';
import * as fromByLocationPromotionsReducer from './store/by-location-promotions.reducer';
import { FeaturedPromotionRuleEffects } from './store/featured-promotion-rule.effects';
import * as fromFeaturedPromotionRuleReducer from './store/featured-promotion-rule.reducer';
import { FeaturedPromotionEffects } from './store/featured-promotion.effects';
import * as fromFeaturedPromotionReducer from './store/featured-promotion.reducer';
import { PromotionEffects } from './store/promotion.effects';
import * as fromPromotionReducer from './store/promotion.reducer';
import { PromotionsCountEffects } from './store/promotions-count/promotions-count.effects';
import * as fromPromotionsCountReducer from './store/promotions-count/promotions-count.reducer';
import { PromotionsFilteredEffects } from './store/promotions-filtered.effects';
import * as fromPromotionFilteredReducer from './store/promotions-filtered.reducer';
import { PromotionsEffects } from './store/promotions.effects';
import * as fromPromotionsReducer from './store/promotions.reducer';
import { PaidMediaPromotionsEffects } from './store/paid-media-promotions.effects';
import * as fromPaidMediaPromotionsReducer from './store/paid-media-promotions.reducer';
import { SharedModule } from '../../shared/shared.module';
import { PromoGeolocationComponent } from './components/promo-geolocation/promo-geolocation.component';
import { BussinesRulesEffects } from './store/bussines-rules.effects';
import * as fromBussinesRulesReducer from './store/bussines-rules-reducer';
import * as fromBussinesRuleReducer from './store/by-bussinesRule-promotion.reducer';
import { ByBussinesRulePromotionsEffects } from './store/by-bussinesRule-promotion.effects';

// Effects
// Reducers
// Components
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('promotions', fromPromotionsReducer.reducer),
    StoreModule.forFeature('promotion', fromPromotionReducer.reducer),
    StoreModule.forFeature('promotions-filtered', fromPromotionFilteredReducer.reducer),
    StoreModule.forFeature('featured-promotion', fromFeaturedPromotionReducer.reducer),
    StoreModule.forFeature('featured-promotion-rule', fromFeaturedPromotionRuleReducer.reducer),
    StoreModule.forFeature('by-location-promotions', fromByLocationPromotionsReducer.reducer),
    StoreModule.forFeature('promotions-count', fromPromotionsCountReducer.reducer),
    StoreModule.forFeature('paid-media-promotions', fromPaidMediaPromotionsReducer.reducer),
    StoreModule.forFeature('bussines-rules', fromBussinesRulesReducer.reducer),
    StoreModule.forFeature('by-bussinesRule-promotions', fromBussinesRuleReducer.reducer),
    EffectsModule.forFeature([PromotionsEffects]),
    EffectsModule.forFeature([PromotionEffects]),
    EffectsModule.forFeature([PromotionsFilteredEffects]),
    EffectsModule.forFeature([FeaturedPromotionEffects]),
    EffectsModule.forFeature([FeaturedPromotionRuleEffects]),
    EffectsModule.forFeature([ByLocationPromotionsEffects]),
    EffectsModule.forFeature([PromotionsCountEffects]),
    EffectsModule.forFeature([PaidMediaPromotionsEffects]),
    EffectsModule.forFeature([BussinesRulesEffects]),
    EffectsModule.forFeature([ByBussinesRulePromotionsEffects]),
  ],
  declarations: [
    PromotionBtnComponent,
    PromoCarouselComponent,
    PromoCarouselCardComponent,
    PromoCarouselDotComponent,
    PromoCarouselArrowComponent,
    SwiperDirective,
    ImageLazyLoadDirective,
    PromoGeolocationComponent,
  ],
  exports: [
    PromotionBtnComponent,
    PromoCarouselComponent,
    PromoCarouselCardComponent,
    PromoCarouselDotComponent,
    PromoCarouselArrowComponent,
    ImageLazyLoadDirective,
    PromoGeolocationComponent,
  ],
  providers: [
    PromotionsService,
    PromotionRulesService,
  ],
})
export class PromotionsModule { }
