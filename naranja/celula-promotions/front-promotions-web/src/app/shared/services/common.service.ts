import { Injectable } from '@angular/core';
import { DocumentService } from '../../core/utils/services/document.service';

@Injectable({
  providedIn: 'root',
})

export class CommonService {

  constructor(
    private documentService: DocumentService) {
  }

  changeStyleBodyFixed(action: string): void {
    const body = this.documentService.nativeDocument.getElementsByTagName('body')[0];
    body.classList[action]('body-fixed');
  }
}
