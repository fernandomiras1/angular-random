import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { ContentTypeContentResolver } from '@shared/services/contentful.service';

const commonsRoutes: Routes = [
  {
    path: 'callback',
    loadChildren: './pages/callback/callback.module#CallbackModule',
  },
  {
    path: 'desktop',
    loadChildren: './pages/desktop/desktop.module#DesktopModule',
  },
  {
    path: 'not-found',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule',
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'not-found' },
];

export const desktopRoutes: Routes = [
  {
    path: '',
    redirectTo: 'todas',
    pathMatch: 'full',
  },
  {
    path: 'sugeridas',
    loadChildren: './pages/bussines-rules/web/bussines-rules.module#BussinesRulesWebModule' ,
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'todas',
    loadChildren: './pages/bussines-rules/web/bussines-rules.module#BussinesRulesWebModule' ,
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'detalle',
    loadChildren: './pages/bussines-rules-detail/web/bussines-rule-detail.module#BussinesRuleDetailWebModule' ,
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'promo/:id',
    loadChildren: './pages/promo-detail/web/promo-detail.module#PromoDetailWebModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'promo/:id/:ga',
    loadChildren: './pages/promo-detail/web/promo-detail.module#PromoDetailWebModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'cerca-tuyo',
    loadChildren: './pages/map-near-you/web/map-near-you.module#MapNearYouWebModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacadas',
    loadChildren: './pages/featured/web/featured.module#FeaturedModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacadas/:ga',
    loadChildren: './pages/featured/web/featured.module#FeaturedModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacada',
    loadChildren: './pages/featured-detail/web/featured-detail.module#FeaturedDetailModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacada/:ga',
    loadChildren: './pages/featured-detail/web/featured-detail.module#FeaturedDetailModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'medios/:paidMediaData',
    loadChildren: './pages/paid-media/web/paid-media.module#PaidMediaModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacada-externa/:featureName',
    loadChildren: './pages/external-featured/web/external-featured.module#ExternalFeaturedModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  ...commonsRoutes,
];

export const mobileRoutes: Routes = [
  {
    path: '',
    redirectTo: 'todas',
    pathMatch: 'full',
  },
  {
    path: 'sugeridas',
    loadChildren: './pages/bussines-rules/mobile/bussines-rules.module#BussinesRulesMobileModule' ,
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'todas',
    loadChildren: './pages/bussines-rules/mobile/bussines-rules.module#BussinesRulesMobileModule' ,
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'detalle',
    loadChildren: './pages/bussines-rules-detail/mobile/bussines-rule-detail.module#BussinesRuleDetailMobileModule' ,
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'integracion-mapa',
    loadChildren: './pages/app-integration-map/app-integration-map.module#AppMapIntegrationModule',
  },
  {
    path: 'promo/:id',
    loadChildren: './pages/promo-detail/mobile/promo-detail.module#PromoDetailModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'promo/:id/:ga',
    loadChildren: './pages/promo-detail/mobile/promo-detail.module#PromoDetailModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'cerca-tuyo',
    loadChildren: './pages/map-near-you/mobile/map-near-you.module#MapNearYouModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacadas',
    loadChildren: './pages/featured/mobile/featured.module#FeaturedModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacadas/:ga',
    loadChildren: './pages/featured/mobile/featured.module#FeaturedModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacada',
    loadChildren: './pages/featured-detail/mobile/featured-detail.module#FeaturedDetailModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacada/:ga',
    loadChildren: './pages/featured-detail/mobile/featured-detail.module#FeaturedDetailModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'medios/:paidMediaData',
    loadChildren: './pages/paid-media/mobile/paid-media.module#PaidMediaModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  {
    path: 'destacada-externa/:featureName',
    loadChildren: './pages/external-featured/mobile/external-featured.module#ExternalFeaturedModule',
    data: { contentful: { name: 'promociones' } },
    resolve: { content: ContentTypeContentResolver },
  },
  ...commonsRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [...desktopRoutes, ...mobileRoutes],
      { scrollPositionRestoration: 'enabled', initialNavigation: true },
    ),
  ],
  exports: [RouterModule],
  providers: [ContentTypeContentResolver],
})
export class AppRoutingModule {
  constructor(private router: Router, private navigatorService: NavigatorService) {
    if (this.navigatorService.isMobile()) {
      this.router.resetConfig(mobileRoutes);
    } else {
      this.router.resetConfig(desktopRoutes);
    }
  }
}
