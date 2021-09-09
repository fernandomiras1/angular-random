import { ComponentFactoryResolver, Injectable } from '@angular/core'
import { KNOWN_SECTIONS } from 'src/app/sections/known-sections'
import { SectionsDynamic } from '../model/dynamic-page/dynamic-data-dto'
import { DynamicDirective } from '../directives/dynamic.directive'

interface DynamicComponent {
  uuid: string;
}

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  private static KNOWN_SECTIONS = KNOWN_SECTIONS

  constructor(private componentFactory: ComponentFactoryResolver) { }

  public loadSection(type: string, data: SectionsDynamic, host: DynamicDirective) {
    const moduleClass = DynamicService.KNOWN_SECTIONS[type]
    if (!moduleClass) {
      return null
    }
    const entryComponent = moduleClass.entry
    const componentFactory = this.componentFactory.resolveComponentFactory<DynamicComponent>(entryComponent)
    const componentRef = host.viewContainerRef.createComponent<DynamicComponent>(componentFactory)
    componentRef.instance.uuid = data.uuid
    return componentRef
  }
}
