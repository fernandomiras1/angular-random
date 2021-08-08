import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { W2flyBasicCardComponent } from './w2fly-basic-card/w2fly-basic-card.component'
import { W2flyTagComponent } from './w2fly-tag/w2fly-tag.component'
import { PipesModule } from '../pipes/pipes.module'
import { W2flyHeaderComponent } from './header/w2fly-header/w2fly-header.component'
import { W2flyFloatMenuComponent } from './header/w2fly-float-menu/w2fly-float-menu.component'
import { W2flyModalMobileMenuComponent } from './header/w2fly-modal-mobile-menu/w2fly-modal-mobile-menu.component'
import { W2flyMobileMenuComponent } from './header/w2fly-mobile-menu/w2fly-mobile-menu.component'
import { SharedModule } from '../../shared/shared.module'
import { W2flyHoverCardComponent } from './w2fly-hover-card/w2fly-hover-card.component'
import { W2flyCarouselComponent } from './w2fly-carousel/w2fly-carousel.component'
import { W2flyFooterComponent } from './w2fly-footer/w2fly-footer.component'
import { W2flySubtitleComponent } from './w2fly-subtitle/w2fly-subtitle.component'
import { W2flyButtonComponent } from './w2fly-button/w2fly-button.component'
import { AppDatepickerHeaderComponent } from './datepicker-inside-price/app-datepicker-header/app-datepicker-header.component';
import { DatepickerInsidePriceComponent } from './datepicker-inside-price/datepicker-inside-price.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
]

const W2FLY_COMPONENTS = [
  W2flyBasicCardComponent,
  W2flyHoverCardComponent,
  W2flyTagComponent,
  W2flyHeaderComponent,
  W2flyFloatMenuComponent,
  W2flyMobileMenuComponent,
  W2flyModalMobileMenuComponent,
  W2flyCarouselComponent,
  W2flyFooterComponent,
  W2flySubtitleComponent,
  W2flyButtonComponent,
  AppDatepickerHeaderComponent,
  DatepickerInsidePriceComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ScrollingModule,
    ReactiveFormsModule,
    PipesModule,
    MATERIAL_MODULES,
    SharedModule,
    TranslateModule,
  ],
  declarations: [W2FLY_COMPONENTS],
  exports: [W2FLY_COMPONENTS],
})
export class W2flyModule { }
