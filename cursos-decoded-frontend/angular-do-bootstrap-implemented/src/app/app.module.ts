import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent as ProAppComponent } from './pro/app.component';
import { BasicComponent } from './basic/basic.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@NgModule({
  declarations: [
    ProAppComponent,
    BasicComponent
  ],
  imports: [BrowserModule, HttpClientModule], 
})
export class AppModule implements DoBootstrap {

  constructor(private http: HttpClient) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    // this.http.get<{ active: boolean }>(`http://localhost:5001/decoded-license-server/us-central1/checkEU001`).subscribe(
    //   (data) => {
    //     const APP = data.active ? ProAppComponent : BasicComponent;
    //     appRef.bootstrap(APP, document.getElementById('app'))
    //   }
    // )
    this.mockAnyAPI().subscribe(
      (data) => {
        console.log('DATA API', data);

        // Por ej: si queremos mostrar una APP mobile, podemos hacer algo asi. 
        const APP_DESK_MOBILE = window.innerWidth > 300 ? ProAppComponent : BasicComponent
        console.log('APP_DESK_MOBILE', APP_DESK_MOBILE);
        const APP = data.active ? ProAppComponent : BasicComponent;
        appRef.bootstrap(APP, document.getElementById('app'))
      }
    )
  }
  
  mockAnyAPI(): Observable<{ active: boolean }> {
    return of({
      active: true
    })
  }
}
