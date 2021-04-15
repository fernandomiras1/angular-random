import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createWindow } from 'domino';

@Injectable()
export class WindowService {
  private _window: Window;
  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (!isPlatformBrowser(platformId)) {
      this._window = createWindow() as Window;
    } else {
      this._window = window;
    }
  }

  get nativeWindow(): any {
    return this._window;
  }
}
