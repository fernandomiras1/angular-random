import {
  Injectable, Compiler, Inject, NgModuleFactory, Type, ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core'
import { LAZY_COMPONENT } from 'src/app/core/tokens'

@Injectable({
  providedIn: 'root',
})
export class LazyLoaderService {
  constructor(
    private compiler: Compiler,
    private componentFactory: ComponentFactoryResolver,
    @Inject(LAZY_COMPONENT) private lazyComponent: { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> },
  ) { }

  async load(name: string, props: string, component: any, container: ViewContainerRef) {
    const tempModule = await this.lazyComponent[name]()

    let moduleFactory
    if (tempModule instanceof NgModuleFactory) {
      // For AOT
      moduleFactory = tempModule
    } else {
      // For JIT
      moduleFactory = await this.compiler.compileModuleAsync(tempModule)
    }

    const entryComponent = (moduleFactory.moduleType as any).entry
    const compFactory = this.componentFactory.resolveComponentFactory(entryComponent)
    const componentRef = container.createComponent(compFactory);

    (<any>componentRef.instance)[props] = component.data
  }
}
