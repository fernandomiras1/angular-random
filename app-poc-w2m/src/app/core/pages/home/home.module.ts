import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { SharedModule } from '../../../shared/shared.module'
import { HomeRoutingModule } from './home.routing'
import { W2flyModule } from '../../components/w2fly.module'
import { SectionBannerDataModule } from '../../sections/section-banner-data/section-banner-data.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    W2flyModule,
    SharedModule,
    SectionBannerDataModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
