import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Card } from '../../model/cards/card'
import { Carousel } from '../../model/cards/carousel'
import { MagnoliaService } from '../../services/magnolia.service'
import { ButtonDto } from '../../model/button/button-dto'

@Component({
  selector: 'w2fly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public listHoverCards$: Observable<Card[]>

  public listCards$: Observable<Card[]>

  public carousel$: Observable<Carousel>

  public button$: Observable<ButtonDto>

  constructor(private magonliaService: MagnoliaService) {}

  ngOnInit(): void {
    this.getsMagnoliaAPI()
  }

  private getsMagnoliaAPI(): void{
    this.listHoverCards$ = this.magonliaService.HoverCardsSection()
    this.listCards$ = this.magonliaService.cardsHomeSection()
    this.carousel$ = this.magonliaService.carouselHomeSection()
    this.button$ = this.magonliaService.buttonComponent()
  }
}
