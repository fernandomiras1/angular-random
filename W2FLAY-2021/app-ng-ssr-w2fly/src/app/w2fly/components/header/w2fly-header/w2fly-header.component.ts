import { Component, OnInit } from '@angular/core'
import { HeaderDto } from '../../../model/header/header-dto'
import { MagnoliaHeaderService } from '../../../services/magnolia-header.service'

@Component({
  selector: 'w2fly-header',
  templateUrl: './w2fly-header.component.html',
  styleUrls: ['./w2fly-header.component.scss'],
})
export class W2flyHeaderComponent implements OnInit {
  public showMobileMenu = false

  public listMenu: HeaderDto[] = []

  constructor(private magnoliaHeaderService: MagnoliaHeaderService) {}

  ngOnInit(): void {
    this.magnoliaHeaderService.getMenu()
      .subscribe((listMenu: HeaderDto[]) => {
        this.listMenu = listMenu
      })
  }

  public onCloseMobileMenu(): void {
    this.showMobileMenu = false
  }
}
