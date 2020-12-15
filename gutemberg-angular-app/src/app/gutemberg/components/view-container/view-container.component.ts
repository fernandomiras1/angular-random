import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { flatMap, mergeMap, tap } from 'rxjs/operators';
import { ViewEngineService } from '@services/view-engine.service';
import { ViewManagerService } from '@services/view-manager.service';

export interface CardSmallData {
  image?: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss'],
})
export class ViewContainerComponent implements OnInit, OnChanges {
  @Input() domain: string;
  @Input() id: string;

  viewTemplate: string;

  newView$: Observable<any> = this.viewManager.showNewView$
            .pipe(
              mergeMap( newView =>
                this.viewEngine.createViewTemplate(newView.domain, newView.id, newView.payload)
              )
            );

  initialView$: Observable<any>;

  currentView$: Observable<any>;

  constructor(
    public  viewEngine: ViewEngineService,
    public  viewManager: ViewManagerService
  ) {}

  ngOnInit(): void {
    this.initialView$ = this.viewEngine.createViewTemplate(this.domain, this.id);
    this.currentView$ = merge( this.initialView$, this.newView$).pipe( tap( t => console.log(t)));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.viewManager.showNewView({domain: this.domain, id: this.id});
  }
}
