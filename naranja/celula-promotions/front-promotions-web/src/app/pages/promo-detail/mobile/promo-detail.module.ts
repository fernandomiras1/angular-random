import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoDetailComponent } from './promo-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { PromotionsModule } from '../../../features/promotions/promotions.module';
import { NavigationModule } from '../../../core/navigation/navigation.module';

@NgModule({
  declarations: [PromoDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: PromoDetailComponent,
      },
    ]),
  ],
})
export class PromoDetailModule { }
