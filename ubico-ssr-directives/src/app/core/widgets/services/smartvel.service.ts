import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { ScriptStructure } from '../../../shared/models/script/script.model'
import { ScriptService } from '../../../shared/services/script.service'
import { SmartvelMap } from '../model/smartvel-map'
import { SmartvelSeach } from '../model/smartvel-seach'

@Injectable({
  providedIn: 'root',
})
export class SmartvelService {
  private CONFIG_WIDGET_SEARCH: SmartvelSeach = {
    apiKey: environment.APIKEY_SMARTVEL,
    withdisclaimer: 'enabled',
    lang: 'es',
    destination: '',
    origin: '15',
    world: true,
    version: '1.4.4',
    cdnWidget: 'https://cdn.smartvel.com/scripts/swidget/boot.min.js',
  }

  private CONFIG_WIDGET_MAP: SmartvelMap = {
    apiKey: environment.APIKEY_SMARTVEL,
    lang: 'es',
    iata: '',
    zoom: 3,
    cdnWidget: 'https://cdn.smartvel.com/scripts/cwidget/boot.min.js',
  }

  constructor(private scriptService: ScriptService) {}

  get configSearchSmartvel(): SmartvelSeach {
    return this.CONFIG_WIDGET_SEARCH
  }

  get configMapSmartvel(): SmartvelMap {
    return this.CONFIG_WIDGET_MAP
  }

  public getSeatsWidget(): void {
    const script: ScriptStructure = {
      src: 'https://w2fly.3dseatmapvr.com/lopa/LopaViewer.min.js',
    }
    this.scriptService.addScript(script)
  }

  public getSeatsMapWidget(): void {
    const script: ScriptStructure = {
      src: 'https://dnce566tx3ijn.cloudfront.net/lopa/dev/SeatMapVR3D.min.js',
    }
    this.scriptService.addScript(script)
  }

  public loadMapCDN(): void {
    const script: ScriptStructure = {
      src: 'https://cdn.smartvel.com/scripts/swidget/boot.min.js',
    }
    this.scriptService.addScript(script)
  }

  public loadSearchCDN(): void {
    const script: ScriptStructure = {
      src: 'https://cdn.smartvel.com/scripts/cwidget/boot.min.js',
    }
    this.scriptService.addScript(script)
  }
}
