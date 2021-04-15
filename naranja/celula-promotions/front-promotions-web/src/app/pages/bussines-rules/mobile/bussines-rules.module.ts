import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussinesRulesMobileComponent } from './bussines-rules.component';
import { FilterModule } from '@filter/filter.module';
import { SharedModule } from '@shared/shared.module';
import { PromotionsModule } from '@promotions/promotions.module';
import { NavigationModule } from '@core/navigation/navigation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BussinesRulesMobileComponent],
  imports: [
    CommonModule,
    FilterModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: BussinesRulesMobileComponent,
      },
    ]),
  ],
})
export class BussinesRulesMobileModule { }
