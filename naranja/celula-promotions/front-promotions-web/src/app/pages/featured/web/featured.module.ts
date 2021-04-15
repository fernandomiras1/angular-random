import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturedComponent } from './featured.component';
import { SharedModule } from '../../../shared/shared.module';
import { NavigationModule } from '../../../core/navigation/navigation.module';
import { PromotionsModule } from '../../../features/promotions/promotions.module';

@NgModule({
  declarations: [FeaturedComponent],
  imports: [
    CommonModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeaturedComponent,
      },
    ]),
  ],
})
export class FeaturedModule { }
