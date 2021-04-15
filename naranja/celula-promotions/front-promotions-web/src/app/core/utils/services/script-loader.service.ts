import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentService } from './document.service';

export interface ScriptModel {
  name: string;
  src: string;
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private scripts: ScriptModel[] = [];

  constructor(
    private documentService: DocumentService,
  ) {}

  public load(script: ScriptModel): Observable<ScriptModel> {
    return new Observable((observer) => {
      const existingScript = this.scripts.find(s => s.name === script.name);

      // Complete if already loaded
      if (existingScript && existingScript.loaded) {
        observer.next(existingScript);
      } else {
        // Add the script
        this.scripts = [...this.scripts, script];

        // Load the script
        const scriptElement = this.documentService.nativeDocument.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = script.src;

        scriptElement.onload = () => {
          script.loaded = true;
          observer.next(script);
        };

        scriptElement.onerror = (error: any) => {
          observer.error(`Couldn\'t load script  ${script.src}`);
        };

        this.documentService.nativeDocument.getElementsByTagName('body')[0].appendChild(scriptElement);
      }
    });
  }
}
