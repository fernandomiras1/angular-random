import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';



/**
 * 
 * withComponentInputBinding
 * 
 * Tenemos que acticar esto para que funcione el binding por inputs
 * 
 * 
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding()
    ),
    provideHttpClient()
  ]
};
