import {
  Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation,
} from '@angular/core'
import { Observable } from 'rxjs'
import { LazyLoaderService } from 'src/app/core/services/lazy-loader.service'
import { MagnoliaService } from 'src/app/core/services/magnolia.service'
import { tap } from 'rxjs/operators'
import { ComponentsEnum } from '../../core/enum/components-enum'

@Component({
  selector: 'section-icons',
  templateUrl: './section-icons.component.html',
  styleUrls: ['./section-icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionIconsComponent implements OnInit {
  @ViewChild('infoItem', { read: ViewContainerRef, static: false })
  infoItem: ViewContainerRef

  public ComponentType: typeof ComponentsEnum = ComponentsEnum

  public uuid: string

  dataTest: any

  public data$: Observable<any>

  constructor(private magnoliaService: MagnoliaService,
    private lazyLoader: LazyLoaderService) {}

  ngOnInit(): void {
    // this.getSections()
  }

  private getSections() {
    this.data$ = this.magnoliaService.getSections(this.uuid).pipe(
      tap(resu => setTimeout(() => this.renderComponents(resu))),
    )
    // this.magnoliaService.getSections(this.uuid).subscribe(resu => {
    //   this.dataTest = resu
    //   console.log('dataTest----------', resu)
    //   setTimeout(() => this.renderComponents(resu))
    // })
  }

  private renderComponents({ components }) {
    console.log('this.infoItem----', this.infoItem)
    components.map((component: any) => this.lazyLoader
      .load(component.type, 'info', component, this.infoItem))
  }
}
