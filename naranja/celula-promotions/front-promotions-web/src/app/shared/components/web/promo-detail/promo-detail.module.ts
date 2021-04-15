import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WebComponentsModule } from './components/web-components.module';
import { PromoDetailWebComponent } from './promo-detail.component';
import { SharedModule } from '../../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WebComponentsModule,
    TranslateModule.forChild(),
  ],
  exports: [
    TranslateModule,
    PromoDetailWebComponent,
  ],
  declarations: [
    PromoDetailWebComponent,
  ],
})
export class PromoDetailModule { }
