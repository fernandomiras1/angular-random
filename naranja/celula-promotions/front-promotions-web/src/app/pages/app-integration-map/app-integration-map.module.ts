import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppIntegrationMapComponent } from './app-integration-map.component';
import { AppStatelessMapComponent } from './components/app-stateless-map/app-stateless-map.component';
import { SharedModule } from '../../shared/shared.module';
import { PromotionsModule } from '../../features/promotions/promotions.module';
import { NavigationModule } from '../../core/navigation/navigation.module';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [AppStatelessMapComponent, AppIntegrationMapComponent],
  imports: [
    CommonModule,
    SharedModule,
    PromotionsModule,
    NavigationModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppIntegrationMapComponent,
      },
    ]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.BASE_API_KEY,
      language: 'es',
    }),
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule,
  ],
})
export class AppMapIntegrationModule { }
