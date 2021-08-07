import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { DataFooter } from '../../model/footer'
import { MagnoliaFooterService } from '../../services/magnolia-footer.service'

@Component({
  selector: 'w2fly-footer',
  templateUrl: './w2fly-footer.component.html',
  styleUrls: ['./w2fly-footer.component.scss'],
})
export class W2flyFooterComponent implements OnInit {
  public dataFooter$: Observable<DataFooter[]>

  constructor(private footerService: MagnoliaFooterService) { }

  ngOnInit(): void {
    this.dataFooter$ = this.footerService.getData()
  }
}
