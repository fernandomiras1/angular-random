import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaidMediaComponent } from './paid-media.component';
import { SharedModule } from '../../../shared/shared.module';
import { PromotionsModule } from '../../../features/promotions/promotions.module';
import { PromoDetailModule } from '../../../shared/components/web/promo-detail/promo-detail.module';
import { NavigationModule } from '../../../core/navigation/navigation.module';

@NgModule({
  declarations: [PaidMediaComponent],
  imports: [
    CommonModule,
    SharedModule,
    PromotionsModule,
    PromoDetailModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaidMediaComponent,
      },
    ]),
  ],
})
export class PaidMediaModule { }
