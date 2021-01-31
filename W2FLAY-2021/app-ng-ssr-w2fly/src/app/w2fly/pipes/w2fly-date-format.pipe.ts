import { Pipe, PipeTransform } from '@angular/core'
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'w2flyDateFormat',
})
export class W2flyDateFormatPipe extends DatePipe implements PipeTransform {
  public readonly DATE_FMT = 'dd-MM-yyyy'

  public readonly DATE_TIME_FMT = `${this.DATE_FMT} hh:mm:ss`

  transform(value: any, ...args: any[]): any {
    return super.transform(value, this.DATE_TIME_FMT)
  }
}
