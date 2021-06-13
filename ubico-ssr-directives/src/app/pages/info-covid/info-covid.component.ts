import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'
import { InfoCovidQueryParams } from './model/info-covid-query-params'

@Component({
  selector: 'app-info-covid',
  templateUrl: './info-covid.component.html',
  styleUrls: ['./info-covid.component.scss'],
})
export class InfoCovidComponent implements OnInit, OnDestroy {
  queryParamsSubscription: Subscription

  params: InfoCovidQueryParams

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe((params: Params) => {
        this.params = this.filterParams(params)
      })
  }

  filterParams(params: Params): InfoCovidQueryParams {
    return {
      or: params.or || '',
      dt: params.dt || '',
      iata: params.iata || '',
    }
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
}
