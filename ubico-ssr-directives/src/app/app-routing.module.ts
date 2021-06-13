import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'info-covid',
    loadChildren: () => import('./pages/info-covid/info-covid.module').then(m => m.InfoCovidModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/mtrip/mtrip.module').then(m => m.MtripModule),
  },
  {
    path: 'section-team',
    loadChildren: () => import('./sections/section-team/section-team.module').then(m => m.SectionTeamModule),
  },
  {
    path: 'section-detail-news',
    loadChildren: () => import('./sections/section-detail-news/section-detail-news.module')
      .then(m => m.SectionDetailNewsModule),
  },
  {
    path: 'section-separator',
    loadChildren: () => import('./sections/section-separator/section-separator.module')
      .then(m => m.SectionSeparatorModule),
  },
  {
    path: 'section-banner-data',
    loadChildren: () => import('./sections/section-banner-data/section-banner-data.module')
      .then(m => m.SectionBannerDataModule),
  },
  {
    path: 'app-section',
    loadChildren: () => import('./sections/app-box-image-text/app-box-image-text.module')
      .then(m => m.AppBoxImageTextModule),
  },
  {
    path: 'app-news',
    loadChildren: () => import('./sections/app-news/app-news.module')
      .then(m => m.appNewsModule),
  },
  {
    path: 'section-banner-logos',
    loadChildren: () => import('./sections/section-carousel-logos/section-carousel-logos.module')
      .then(m => m.SectionCarouselLogosModule),
  },
  {
    path: 'section-info-text',
    loadChildren: () => import('./sections/section-info-text/section-info-text.module')
      .then(m => m.SectionInfoTextModule),
  },
  {
    path: 'es',
    data: { lng: 'es' },
    loadChildren: () => import('./pages/page-dynamic/page-dynamic.module')
      .then(m => m.PageDynamicModule),
  },
  {
    path: 'en',
    data: { lng: 'en' },
    loadChildren: () => import('./pages/page-dynamic/page-dynamic.module')
      .then(m => m.PageDynamicModule),
  },
  {
    path: '**',
    redirectTo: 'es',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
