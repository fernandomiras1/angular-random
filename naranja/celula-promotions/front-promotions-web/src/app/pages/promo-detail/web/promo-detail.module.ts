import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoDetailComponent } from './promo-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PromoDetailModule } from '../../../shared/components/web/promo-detail/promo-detail.module';
import { PromotionsModule } from '../../../features/promotions/promotions.module';

@NgModule({
  declarations: [PromoDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PromotionsModule,
    PromoDetailModule,
    RouterModule.forChild([
      {
        path: '',
        component: PromoDetailComponent,
      },
    ]),
  ],
})
export class PromoDetailWebModule { }
