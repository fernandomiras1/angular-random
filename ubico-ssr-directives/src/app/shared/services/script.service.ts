import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { DOCUMENT, isPlatformBrowser } from '@angular/common'
import { ScriptStructure } from '../models/script/script.model'

@Injectable({
  providedIn: 'root',
})

export class ScriptService {
  constructor(@Inject(PLATFORM_ID) private platform: string,
              @Inject(DOCUMENT) private document: Document) { }

  public addScript(scriptEstructure: ScriptStructure) {
    if (isPlatformBrowser(this.platform)) {
      const script: HTMLScriptElement = this.document.createElement('script')
      const append: string = scriptEstructure.append || 'head'
      script.defer = true
      script.type = 'text/javascript'
      script.crossOrigin = 'anonymous'
      if (scriptEstructure.src) script.src = scriptEstructure.src
      if (scriptEstructure.body) script.text = scriptEstructure.body
      if (scriptEstructure.setAttribute) {
        script.setAttribute(
          scriptEstructure.setAttribute.name, scriptEstructure.setAttribute.value,
        )
      }

      this.document.getElementsByTagName(append)[0].appendChild(script)
    }
  }

  public removeScript(fileName: string, typeFile: string) {
    if (isPlatformBrowser(this.platform)) {
      const tags = document.getElementsByTagName('script')
      for (let i = tags.length; i >= 0; i -= 1) {
        if (tags[i] && tags[i].getAttribute(typeFile) != null
          && tags[i].getAttribute(typeFile).indexOf(fileName) !== -1) {
          tags[i].parentNode.removeChild(tags[i])
        }
      }
    }
  }

  public addNoScriptChild(child: HTMLElement, append = 'body') {
    if (isPlatformBrowser(this.platform)) {
      const noScript: HTMLElement = this.document.createElement('noscript')
      noScript.appendChild(child)
      this.document.getElementsByTagName(append)[0].prepend(noScript)
    }
  }
}
