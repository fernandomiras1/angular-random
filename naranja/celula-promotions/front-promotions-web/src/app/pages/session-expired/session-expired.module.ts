import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionExpiredComponent } from './session-expired.component';
import { SessionExpiredPageRoutingModule } from './session-expired.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SessionExpiredPageRoutingModule,
    SharedModule,
  ],
  declarations: [SessionExpiredComponent],
})
export class SessionExpiredModule { }
