import {
  AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild,
} from '@angular/core'
import { SmartvelService } from '../services/smartvel.service'
import { SmartvelMap } from '../model/smartvel-map'

@Component({
  selector: 'widget-smartvel-map',
  template: '<smt-swidget #smtWidget></smt-swidget>',
})
export class WidgetSmartvelMapComponent implements AfterViewInit {
  @Input() iata = ''

  @ViewChild('smtWidget') smtWidget: ElementRef

  constructor(private renderer: Renderer2,
              private smartvelService: SmartvelService) { }

  ngAfterViewInit(): void {
    this.createSmartvelWidget(this.smartvelService.configMapSmartvel)
  }

  private createSmartvelWidget(configMap: SmartvelMap): void {
    const smtvel = this.smtWidget.nativeElement
    this.renderer.setAttribute(smtvel, 'apikey', configMap.apiKey)
    this.renderer.setAttribute(smtvel, 'lang', configMap.lang)
    this.renderer.setAttribute(smtvel, 'iata', this.iata)
    this.smartvelService.loadMapCDN()
  }
}
