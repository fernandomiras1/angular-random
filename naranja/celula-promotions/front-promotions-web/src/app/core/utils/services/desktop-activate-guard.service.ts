import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NavigatorService } from './navigator.service';

@Injectable({
  providedIn: 'root',
})
export class DesktopActivateGuardService implements CanActivate {

  public message: string;

  constructor(private navigatorService: NavigatorService, private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (!this.navigatorService.isMobile()) {
        this.router.navigate(['/desktop'], { replaceUrl: true });
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }
}
