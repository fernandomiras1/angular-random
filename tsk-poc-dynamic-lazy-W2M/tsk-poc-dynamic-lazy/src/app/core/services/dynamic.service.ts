import {
  Compiler, ComponentFactoryResolver, Inject, Injectable, NgModuleFactory, Type,
} from '@angular/core'
import { forkJoin } from 'rxjs'
import { SectionsDynamic } from '../model/dynamic-page/dynamic-data-dto'
import { environment } from '../../../environments/environment'
import { DynamicDirective } from '../directives/dynamic.directive'
import { LAZY_COMPONENT } from '../tokens'

interface DynamicComponent {
  data: SectionsDynamic;
}

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  constructor(private compiler: Compiler,
    @Inject(LAZY_COMPONENT) private lazyComponentWidgets:
    { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>>; dataa?: any },
    private componentFactory: ComponentFactoryResolver) { }

  processModules(fields) {
    const observableBatch: any = []
    fields.forEach(item => {
      observableBatch.push(this.lazyComponentWidgets[item.typeSection]())
    })
    return forkJoin(observableBatch)
  }

  loadComponent(tempModulos: any, type: string, data: any, host: DynamicDirective) {
    if (!tempModulos && environment.production) {
      throw new Error(`Component "${type}" not defined in dynamic service.`)
    } else if (!tempModulos && !environment.production) {
      return null
    }

    let moduleFactory
    if (tempModulos instanceof NgModuleFactory) {
      // For AOT
      moduleFactory = tempModulos
    } else {
      // For JIT
      moduleFactory = this.compiler.compileModuleSync(tempModulos)
    }

    const entryComponent = (moduleFactory.moduleType as any).entry
    const compFactory = this.componentFactory.resolveComponentFactory(entryComponent)
    const componentRef = host.viewContainerRef.createComponent(compFactory);

    (<DynamicComponent>componentRef.instance).data = data

    return componentRef
  }
}
