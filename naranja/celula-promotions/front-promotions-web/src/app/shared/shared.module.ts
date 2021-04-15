import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PromoCardWebComponent } from '@app/features/promotions/components/web/promo-card-web/promo-card-web.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppShellNoRenderDirective } from '@shared/directives/shell-no-render';
import { AppShellRenderDirective } from '@shared/directives/shell-render.directive';
import { NcomFooterModule } from '@zumo/ncom-footer';

import { NavigationModule } from '../core/navigation/navigation.module';
import { ChatModalComponent } from './components/common/chat-modal/chat-modal.component';
import { EmptyStateGridComponent } from './components/common/empty-state-grid/empty-state-grid.component';
import { ErrorStateComponent } from './components/common/error-state/error-state.component';
import { FooterNComComponent } from './components/common/footer-ncom/footer-ncom.component';
import { InfiniteScrollComponent } from './components/common/infinite-scroll/infinite-scroll.component';
import { LazyImageComponent } from './components/common/lazy-image/lazy-image.component';
import { MapInfoWindowComponent } from './components/common/map-info-window/map-info-window.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { PromoCounterLabelComponent } from './components/common/promo-counter-label/promo-counter-label.component';
import { CardWithTagMobileComponent } from './components/mobile/card-with-tag/card-with-tag.component';
import { InfoChipsMobileComponent } from './components/mobile/info-chips/info-chips.component';
import { NavbarMobileComponent } from './components/mobile/navbar/navbar.component';
import { PromoCardSmallComponent } from './components/mobile/promo-card-small/promo-card-small.component';
import { PromoDetailMobileComponent } from './components/mobile/promo-detail/promo-detail.component';
import {
  PromoHorizontalGridMobileComponent,
} from './components/mobile/promo-horizontal-grid/promo-horizontal-grid.component';
import { PromoListMobileComponent } from './components/mobile/promo-list/promo-list.component';
import { RoutingTabsComponent } from './components/mobile/routing-tabs/routing-tabs.component';
import { NavbarNComComponent } from './components/ncom/navbar-ncom/navbar-ncom.component';
import { CardWithTagWebComponent } from './components/web/card-with-tag/card-with-tag.component';
import { ErrorStateWebComponent } from './components/web/error-state/error-state.component';
import { InfoChipsWebComponent } from './components/web/info-chips/info-chips.component';
import { NavbarWebComponent } from './components/web/navbar/navbar.component';
import { PaginatorComponent } from './components/web/paginator/paginator.component';
import { PromoHorizontalGridWebComponent } from './components/web/promo-horizontal-grid/promo-horizontal-grid.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { GradientBackgroundDirective } from './directives/gradient-by-image.directive';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { LazysizesDirective } from './directives/lazysizes.directive';
import { LazysizespictureDirective } from './directives/lazysizespicture.directive';
import { CapitalizeFirstPipe, ElypsisPipe } from './pipes/custom.pipes';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { AddressesService } from './services/addresses.service';
import { ContentfulService } from './services/contentful.service';
import { WINDOW_PROVIDERS } from './services/window.service';
import { ZumoComponentesModule } from './zumo-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    NavigationModule,
    ZumoComponentesModule.forRoot(),
    NcomFooterModule,
  ],
  exports: [
    ZumoComponentesModule,
    TranslateModule,
    InfiniteScrollComponent,
    CapitalizeFirstPipe,
    ElypsisPipe,
    NavbarMobileComponent,
    ModalComponent,
    ImagePreloadDirective,
    MapInfoWindowComponent,
    ErrorStateComponent,
    EmptyStateGridComponent,
    RoutingTabsComponent,
    ErrorStateWebComponent,
    PromoListMobileComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective,
    GradientBackgroundDirective,
    PromoCardSmallComponent,
    PromoCardWebComponent,
    PromoDetailMobileComponent,
    NavbarWebComponent,
    InfoChipsMobileComponent,
    InfoChipsWebComponent,
    NavbarNComComponent,
    FooterNComComponent,
    ChatModalComponent,
    LazysizesDirective,
    LazysizespictureDirective,
    PromoCounterLabelComponent,
    LazyImageComponent,
    PaginatorComponent,
    PromoHorizontalGridMobileComponent,
    PromoHorizontalGridWebComponent,
    SlugifyPipe,
    CardWithTagMobileComponent,
    CardWithTagWebComponent,
    DebounceClickDirective,
  ],
  declarations: [
    InfiniteScrollComponent,
    CapitalizeFirstPipe,
    ElypsisPipe,
    AppShellRenderDirective,
    AppShellNoRenderDirective,
    GradientBackgroundDirective,
    NavbarMobileComponent,
    ModalComponent,
    ImagePreloadDirective,
    MapInfoWindowComponent,
    ErrorStateComponent,
    EmptyStateGridComponent,
    RoutingTabsComponent,
    ErrorStateWebComponent,
    PromoListMobileComponent,
    PromoCardSmallComponent,
    PromoCardWebComponent,
    PromoDetailMobileComponent,
    NavbarWebComponent,
    InfoChipsMobileComponent,
    InfoChipsWebComponent,
    NavbarNComComponent,
    FooterNComComponent,
    ChatModalComponent,
    LazysizesDirective,
    LazysizespictureDirective,
    PromoCounterLabelComponent,
    LazyImageComponent,
    PaginatorComponent,
    PromoHorizontalGridMobileComponent,
    PromoHorizontalGridWebComponent,
    SlugifyPipe,
    CardWithTagMobileComponent,
    CardWithTagWebComponent,
    DebounceClickDirective,
  ],
  providers: [
    AddressesService,
    WINDOW_PROVIDERS,
    ContentfulService,
  ],
})
export class SharedModule { }
