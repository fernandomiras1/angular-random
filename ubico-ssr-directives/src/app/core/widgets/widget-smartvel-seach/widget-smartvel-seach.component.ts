import {
  AfterViewInit,
  Component, ElementRef, Input, Renderer2, ViewChild,
} from '@angular/core'
import { SmartvelService } from '../services/smartvel.service'
import { SmartvelSeach } from '../model/smartvel-seach'

@Component({
  selector: 'widget-smartvel-seach',
  template: '<smt-flyto #smtWidget></smt-flyto>',
})
export class WidgetSmartvelSeachComponent implements AfterViewInit {
  @Input() origin = ''

  @Input() destination = ''

  @ViewChild('smtWidget') smtWidget: ElementRef

  constructor(private renderer: Renderer2,
              private smartvelService: SmartvelService) { }

  ngAfterViewInit(): void {
    this.createSmartvelWidget(this.smartvelService.configSearchSmartvel)
  }

  private createSmartvelWidget(configSearch: SmartvelSeach): void {
    const smtvel = this.smtWidget.nativeElement
    this.renderer.setAttribute(smtvel, 'origin', this.origin)
    this.renderer.setAttribute(smtvel, 'destination', this.destination)
    this.renderer.setAttribute(smtvel, 'apikey', configSearch.apiKey)
    this.renderer.setAttribute(smtvel, 'lang', configSearch.lang)
    this.renderer.setAttribute(smtvel, 'withdisclaimer', configSearch.withdisclaimer)
    this.smartvelService.loadSearchCDN()
  }
}
