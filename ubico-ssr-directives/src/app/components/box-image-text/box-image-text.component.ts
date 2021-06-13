import { Component, Input, OnInit } from '@angular/core'
import { BoxImageText } from './model/box-image-text-dto'

@Component({
  selector: 'app-box-image-text',
  templateUrl: './box-image-text.component.html',
  styleUrls: ['./box-image-text.component.scss'],
})
export class BoxImageTextComponent implements OnInit {
  @Input() data: BoxImageText

  ngOnInit(): void {
    console.log('BoxImageTextComponent', this.data)
  }

  getClass(): string {
    return this.data.textBox?.fullText
      ? 'app-box-image-text__img-float-text-full'
      : 'app-box-image-text__img-float-text'
  }
}
