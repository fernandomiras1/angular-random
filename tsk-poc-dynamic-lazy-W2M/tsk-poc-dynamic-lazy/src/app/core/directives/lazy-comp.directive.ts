import {
  Compiler,
  ComponentRef,
  Directive,
  EventEmitter,
  Injector,
  Input,
  NgModuleFactory,
  ViewContainerRef,
} from '@angular/core'
import { Subscription } from 'rxjs'
import { KNOWN_COMPONENT } from 'src/app/sections/known-component'

@Directive({
  selector: '[lazyComp]',
})
export class LazyCompDirective {
  private static KNOWN_COMPONENT = KNOWN_COMPONENT

  private inputsComp

  private outputsComp

  private subscription = new Subscription()

  @Input('lazyComp') set lazyComp(type: string) {
    if (type) {
      this.load(type)
    }
  }

  @Input() set inputs(data) {
    if (this.compRef) {
      this.refreshInputs(data)
      this.compRef.hostView.detectChanges()
    } else {
      this.inputsComp = data
    }
  }

  @Input() set outputs(data) {
    this.outputsComp = data
  }

  private compRef: ComponentRef<any>

  constructor(private vcr: ViewContainerRef,
    private compiler: Compiler,
    private injector: Injector) {}

  private async load(type: string) {
    if (!LazyCompDirective.KNOWN_COMPONENT[type]) {
      this.error(type)
    } else {
      const module = await LazyCompDirective.KNOWN_COMPONENT[type]()
      const moduleFactory = await this.compileModule(module)

      const section = moduleFactory.create(this.injector)
      const componentFactory = section.componentFactoryResolver
        .resolveComponentFactory<any>(module.entry)
      this.compRef = this.vcr.createComponent<any>(componentFactory)
      this.refreshInputs(this.inputsComp)
      this.refreshOutputs(this.outputsComp)
      this.compRef.hostView.detectChanges()
    }
  }

  private compileModule(module): NgModuleFactory<any> | Promise<NgModuleFactory<any>> {
    return (module instanceof NgModuleFactory
      ? module
      : this.compiler.compileModuleAsync<any>(module))
  }

  private error(sectionName: string): void {
    // eslint-disable-next-line no-console
    console.warn(`Unknown section: ${sectionName}`)
    return null
  }

  private refreshInputs(inputs) {
    if (inputs) {
      Object.keys(inputs).forEach(inputName => {
        this.compRef.instance[inputName] = inputs[inputName]
      })
    }
  }

  private refreshOutputs(outputs) {
    if (outputs) {
      Object.keys(outputs).forEach(output => {
        this.subscription.add((this.compRef.instance[output] as EventEmitter<any>)
          .subscribe(this.outputsComp[output]))
      })
    }
  }

  private ngOnDestroy() {
    if (this.compRef) {
      this.compRef.destroy()
    }
    this.compRef = null
    this.subscription.unsubscribe()
  }
}
