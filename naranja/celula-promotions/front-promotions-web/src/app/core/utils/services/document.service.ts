import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as domino from 'domino';

@Injectable()
export class DocumentService {
  private _document: Document;
  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (!isPlatformBrowser(platformId)) {
      this._document = domino.createDocument();
    } else {
      this._document = window.document;
    }
  }

  get nativeDocument(): Document {
    return this._document;
  }
}
