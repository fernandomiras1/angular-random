import { Component, Input, OnInit } from '@angular/core'
import { OrientationEnum } from '../../core/enum/orientation-enum'
import { W2mTextInfo } from '../../core/article/w2m-text-info'

@Component({
  selector: 'w2m-info-text',
  templateUrl: './w2m-info-text.component.html',
  styleUrls: ['./w2m-info-text.component.scss'],
})
export class W2mInfoTextComponent implements OnInit {
  @Input() public textInfo: W2mTextInfo

  private orientationType: typeof OrientationEnum = OrientationEnum

  public getOrientation({ orientation }: W2mTextInfo): boolean {
    return orientation === this.orientationType.HORIZONTAL
  }

  ngOnInit(): void {
    console.log('textInfo', this.textInfo)
  }
}
