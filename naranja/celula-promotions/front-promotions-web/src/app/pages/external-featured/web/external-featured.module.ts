import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExternalFeaturedComponent } from './external-featured.component';
import { SharedModule } from '../../../shared/shared.module';
import { PromotionsModule } from '../../../features/promotions/promotions.module';
import { NavigationModule } from '../../../core/navigation/navigation.module';
import { PromoDetailModule } from '../../../shared/components/web/promo-detail/promo-detail.module';

@NgModule({
  declarations: [ExternalFeaturedComponent],
  imports: [
    CommonModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    PromoDetailModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExternalFeaturedComponent,
      },
    ]),
  ],
})
export class ExternalFeaturedModule { }
