import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionExpiredComponent } from './session-expired.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todas',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionExpiredPageRoutingModule { }
