import { Pipe, PipeTransform } from '@angular/core'
import { from } from 'rxjs'
import { filter, first } from 'rxjs/operators'
import { TimeAgoConstants, TimeAgoInterval } from '../model/constants/time-ago-constants'
@Pipe({
  name: 'w2flyTimeAgo',
})
export class W2flyTimeAgoPipe implements PipeTransform {
  transform(value: string) {
    const d = new Date(value)
    const now = new Date()
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000))
    return this.getTimeAgo(seconds)
  }

  getTimeAgo(seconds: number): string {
    let translateKey = ''
    if (seconds === 0) {
      translateKey = 'COMMON.TIME_AGO.JUST_KNOW'
    }
    if (seconds > 0) {
      from(TimeAgoConstants.Intervals).pipe(
        filter((time: TimeAgoInterval) => Math.floor(seconds / time.seconds) > 0),
        first(),
      ).subscribe((time: TimeAgoInterval) => {
        const count: number = Math.floor(seconds / time.seconds)
        if (count > 0) {
          translateKey = count === 1 ? time.name : `${time.name}S`
        }
      })
    }
    return translateKey
  }
}
