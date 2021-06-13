import {
  ChangeDetectorRef,
  Component, OnDestroy, OnInit, ViewChild,
} from '@angular/core'
import { Router } from '@angular/router'
import { takeUntil } from 'rxjs/operators'
import { Title } from '@angular/platform-browser'
import { MagnoliaService } from 'src/app/core/services/magnolia.service'
import { I18nService } from 'src/app/shared/i18n/i18n.service'
import { Subject } from 'rxjs'
import { DynamicService } from '../../core/services/dynamic.service'
import { PageDynamic } from '../../core/model/dynamic-page/dynamic-data-dto'
import { DynamicDirective } from '../../core/directives/dynamic.directive'

@Component({
  selector: 'w2m-page-dynamic',
  template: `
    <main id="content">
      <ng-template appDynamicHost></ng-template>
    </main>
    <app-top-button></app-top-button>
  `,
})

export class PageDynamicComponent implements OnInit, OnDestroy {
  public fields: PageDynamic

  unsubscribe$ = new Subject<void>()

  CURRENT_URL: string

  @ViewChild(DynamicDirective, { static: true }) dynamicHost: DynamicDirective

  constructor(
    private titleService: Title,
    private dynamicService: DynamicService,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private magnoliaService: MagnoliaService,
    private i18nService: I18nService,
  ) {
    this.changeLanguage()
  }

  ngOnInit(): void {
    this.renderPage()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  private renderPage(): void {
    this.i18nService.init(this.router.url)
    this.CURRENT_URL = this.i18nService.getURL(this.router.url)

    this.magnoliaService.getPage(this.CURRENT_URL).subscribe((page: PageDynamic) => {
      this.dynamicHost.viewContainerRef.clear()
      const fields = page.data
      const { title } = fields
      this.titleService.setTitle(title)
      this.renderComponents(fields)
    })
  }

  private changeLanguage() {
    this.i18nService.changeLanguage$
      .pipe(
        takeUntil(this.unsubscribe$),
      ).subscribe(() => {
        if (this.CURRENT_URL !== undefined) {
          this.router.navigate([`${this.i18nService.currentLanguage}/${this.CURRENT_URL}`])
        }
      })
  }

  private renderComponents(fields: PageDynamic) {
    const { content } = fields
    this.dynamicService.processModules(content).subscribe(module => {
      content.filter(data => this.dynamicService.hasModuleActive(data.typeSection))
        .map((item, index) => this.dynamicService
          .loadComponent(module[index], item.typeSection, item, this.dynamicHost))
    })
  }
}
