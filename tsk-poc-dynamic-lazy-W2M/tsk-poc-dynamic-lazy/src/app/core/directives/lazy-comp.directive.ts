import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
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

  constructor(private vcr: ViewContainerRef, private resolver: ComponentFactoryResolver) {}

  private async load(type: string) {
    const moduleClass = await LazyCompDirective.KNOWN_COMPONENT[type]()

    const factory = this.resolver.resolveComponentFactory(moduleClass.entry)
    this.compRef = this.vcr.createComponent(factory)
    this.compRef.hostView.detectChanges()
    this.refreshInputs(this.inputsComp)
    this.refreshOutputs(this.outputsComp)
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
