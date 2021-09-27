import {
  Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation,
} from '@angular/core'
import { Observable } from 'rxjs'
import { LazyLoaderService } from 'src/app/core/services/lazy-loader.service'
import { MagnoliaService } from 'src/app/core/services/magnolia.service'
import { tap } from 'rxjs/operators'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ComponentsEnum } from '../../core/enum/components-enum'
import { SectionsDynamic } from '../../core/model/dynamic-page/dynamic-data-dto'

@Component({
  selector: 'section-info-image-cards',
  templateUrl: './section-info-image-cards.component.html',
  styleUrls: ['./section-info-image-cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionInfoImageCardsComponent implements OnInit {
  form: FormGroup

  // @ViewChild('subtitle', { read: ViewContainerRef, static: false })
  // subtitle: ViewContainerRef

  // @ViewChild('image', { read: ViewContainerRef, static: false })
  // image: ViewContainerRef

  // @ViewChild('cardText', { read: ViewContainerRef, static: false })
  // cardText: ViewContainerRef

  public ComponentType: typeof ComponentsEnum = ComponentsEnum

  public uuid: string

  // dataTest: any

  // public data$: Observable<any>

  // constructor(private magnoliaService: MagnoliaService,
  //   private lazyLoader: LazyLoaderService) {}

  // ngOnInit(): void {
  //   this.getSections()
  // }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      inputText: ['Hola Mundo'],
    })
  }

  private getSections() {
    // this.data$ = this.magnoliaService.getSections(this.uuid).pipe(
    //   tap(resu => setTimeout(() => this.renderComponents(resu))),
    // )

    // this.magnoliaService.getSections(this.uuid).subscribe(resu => {
    //   this.dataTest = resu
    //   console.log('dataTest----------', resu)
    //   setTimeout(() => this.renderComponents(resu))
    // })
  }

  // private renderComponents({ components }) {
  //   components.map((component: any) => this.renderComponent(component))
  // }

  // private renderComponent(c: any) {
  //   switch (c.type) {
  //     case this.ComponentType.ComponentInfoText:
  //       this.lazyLoader.load(c.type, 'w2flyTitle', c, this.subtitle)
  //       break

  //     case this.ComponentType.ComponentImage:
  //       this.lazyLoader.load(c.type, 'data', c, this.image)
  //       break

  //     case this.ComponentType.ComponentCardsText:
  //       this.lazyLoader.load(c.type, 'data', c, this.cardText)
  //       break

  //     default:
  //       break
  //   }
  // }
}
