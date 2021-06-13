import { Injectable } from '@angular/core'
import { ScriptStructure } from '../models/script/script.model'
import { ScriptService } from './script.service'

@Injectable({
  providedIn: 'root',
})
export class FontawesomeService {
  constructor(private scriptService: ScriptService) { }

  public load(): void {
    const script: ScriptStructure = {
      src: 'https://kit.fontawesome.com/f8f81c8ec2.js',
    }
    this.scriptService.addScript(script)
  }
}
