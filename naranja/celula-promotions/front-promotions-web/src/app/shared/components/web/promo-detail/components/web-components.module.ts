import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared.module';

// Components WEB
import { DescriptionWebComponent } from './description/description.component';
import { HeaderWebComponent } from './header/header.component';
import { LegalsComponent } from './legals/legals.component';
import { MapWebComponent } from './map/map.component';
import { AddressWebComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild(),
  ],
  exports: [
    TranslateModule,
    DescriptionWebComponent,
    HeaderWebComponent,
    LegalsComponent,
    MapWebComponent,
    AddressWebComponent,
  ],
  declarations: [
    DescriptionWebComponent,
    HeaderWebComponent,
    LegalsComponent,
    MapWebComponent,
    AddressWebComponent,
  ],
})
export class WebComponentsModule { }
