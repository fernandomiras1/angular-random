import {
  Compiler, ComponentFactoryResolver, Inject, Injectable, NgModuleFactory, Type,
} from '@angular/core'
import { forkJoin, Observable } from 'rxjs'
import { SectionsDynamic } from '../model/dynamic-page/dynamic-data-dto'
import { environment } from '../../../environments/environment'
import { DynamicDirective } from '../directives/dynamic.directive'
import { LAZY_COMPONENT } from '../model/tokens'

interface DynamicComponent {
  data: SectionsDynamic;
}

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  constructor(private compiler: Compiler,
    @Inject(LAZY_COMPONENT) private lazyArraySection:
    { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> },
    private componentFactory: ComponentFactoryResolver) { }

  processModules(fields: SectionsDynamic[]): Observable<(Type<any> | NgModuleFactory<any>)[]> {
    const observableBatch: Promise<Type<any> | NgModuleFactory<any>>[] = []
    fields.filter(item => this.lazyArraySection[item.typeSection]).forEach(item => {
      observableBatch.push(this.lazyArraySection[item.typeSection]())
    })
    return forkJoin(observableBatch)
  }

  hasModuleActive(typeSection): boolean {
    return !!this.lazyArraySection[typeSection]
  }

  loadComponent(tempModulos: NgModuleFactory<any> | Type<any>,
    type: string, data: SectionsDynamic, host: DynamicDirective) {
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
