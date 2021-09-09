import {
  Component,
} from '@angular/core'
// import { MagnoliaService } from 'src/app/core/services/magnolia.service'
// import { Observable } from 'rxjs'
// import { LazyLoaderService } from 'src/app/core/services/lazy-loader.service'
// import { tap } from 'rxjs/operators'
import { ComponentDto } from '../../core/model/component-dto'
import { ColorsEnum } from '../../core/enum/colors-enum'
import { ComponentsEnum } from '../../core/enum/components-enum'

@Component({
  selector: 'section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent extends ComponentDto {
  // OLD
  // @ViewChild('subtitle', { read: ViewContainerRef, static: false })
  // subtitle: ViewContainerRef

  // instancia. EJ: 1afa65c1-c7aa-46d6-ad6e-c711419c1cdb
  public uuid: string

  public ComponentType: typeof ComponentsEnum = ComponentsEnum

  public colors: typeof ColorsEnum = ColorsEnum

  outputs = {
    titleChanges: v => {
      console.log('Oputs de los imputs::: ==>', v)
    },
  }

  // public data$: Observable<any>

  // ngOnInit(): void {
  //   this.getSections()
  // }

  // private getSections() {
  //   this.data$ = this.magnoliaService.getSections(this.uuid).pipe(
  //     tap(resu => setTimeout(() => this.renderComponents(resu))),
  //   )

  // this.magnoliaService.getSections(this.uuid).subscribe(resu => {
  //   this.dataTest = resu
  //   setTimeout(() => this.renderComponents(resu))
  // })
  // }

  // private renderComponents({ components }) {
  //   // this.subtitle.clear()
  //   components.map((component: any) => this.lazyLoader
  //     .load(component.type, 'w2flyTitle', component, this.subtitle))
  // }
}
