import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CallbackComponent } from './callback.component';
import { CallbackPageRoutingModule } from './callback.routing';

@NgModule({
  imports: [
    CommonModule,
    CallbackPageRoutingModule,
    SharedModule,
  ],
  declarations: [CallbackComponent],
})
export class CallbackModule { }
