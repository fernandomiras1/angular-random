import { Pipe, PipeTransform } from '@angular/core'
import { from, Observable, of } from 'rxjs'
import { filter, first, map } from 'rxjs/operators'
import { TimeAgoConstants, TimeAgoInterval } from '../model/constants/time-ago-constants'
@Pipe({
  name: 'w2flyTimeAgoCount',
})
export class W2flyTimeAgoCountPipe implements PipeTransform {
  transform(value: string) {
    const d = new Date(value)
    const now = new Date()
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000))
    return this.getTimeCount(seconds)
  }

  getTimeCount(seconds: number): Observable<string> {
    if (Number.isNaN(seconds)) {
      return of('')
    }
    return from(TimeAgoConstants.Intervals).pipe(
      filter((time: TimeAgoInterval) => Math.floor(seconds / time.seconds) > 0),
      first(),
      map((time: TimeAgoInterval) => Math.floor(seconds / time.seconds).toString()),
    )
  }
}
