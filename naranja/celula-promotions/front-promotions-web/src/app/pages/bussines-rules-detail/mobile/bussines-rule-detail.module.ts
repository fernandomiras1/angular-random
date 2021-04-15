import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussinesRuleDetailMobileComponent } from './bussines-rule-detail.component';
import { FilterModule } from '@filter/filter.module';
import { SharedModule } from '@shared/shared.module';
import { PromotionsModule } from '@promotions/promotions.module';
import { NavigationModule } from '@core/navigation/navigation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BussinesRuleDetailMobileComponent],
  imports: [
    CommonModule,
    FilterModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: BussinesRuleDetailMobileComponent,
      },
    ]),
  ],
})
export class BussinesRuleDetailMobileModule { }
