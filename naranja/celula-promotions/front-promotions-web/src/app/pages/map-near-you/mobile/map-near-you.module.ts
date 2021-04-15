import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapNearYouComponent } from './map-near-you.component';
import { SharedModule } from '../../../shared/shared.module';
import { PromotionsModule } from '../../../features/promotions/promotions.module';
import { FilterModule } from '../../../features/filter/filter.module';
import { NavigationModule } from '../../../core/navigation/navigation.module';
import { environment } from '../../../../environments/environment';

@NgModule({
  declarations: [MapNearYouComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    FilterModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapNearYouComponent,
      },
    ]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.BASE_API_KEY,
      language: 'es',
    }),
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule,
  ],
  providers: [TitleCasePipe],
})
export class MapNearYouModule { }
