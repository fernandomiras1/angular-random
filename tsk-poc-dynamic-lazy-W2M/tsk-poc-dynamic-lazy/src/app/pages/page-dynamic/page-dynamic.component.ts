import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { DynamicDirective } from '../../core/directives/dynamic.directive'
@Component({
  selector: 'w2fly-page-dynamic',
  template: `
    <main id="content">
      <ng-container *ngFor="let section of data.sections">
        <ng-template [lazyComp]="section.type" [inputs]="{uuid: section.uuid}"></ng-template>
      </ng-container>
    </main>
  `,
  styles: [],
})
export class PageDynamicComponent implements OnInit {
  data: any

  @ViewChild(DynamicDirective, { static: true }) dynamicHost: DynamicDirective

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
  ) {
    this.data = this.route.snapshot.data.content
    console.log('PAGE', this.data)
  }

  ngOnInit() {
    if (this.data) {
      const { title } = this.data
      this.titleService.setTitle(title)
    }
  }
}
