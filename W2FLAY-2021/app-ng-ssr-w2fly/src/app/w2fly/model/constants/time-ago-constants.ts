export class TimeAgoConstants {
 private static readonly intervals: TimeAgoInterval[]=[
   { name: 'COMMON.TIME_AGO.YEAR', seconds: 31536000 },
   { name: 'COMMON.TIME_AGO.MONTH', seconds: 2592000 },
   { name: 'COMMON.TIME_AGO.WEEK', seconds: 604800 },
   { name: 'COMMON.TIME_AGO.DAY', seconds: 86400 },
   { name: 'COMMON.TIME_AGO.HOUR', seconds: 3600 },
   { name: 'COMMON.TIME_AGO.MINUTE', seconds: 60 },
   { name: 'COMMON.TIME_AGO.SECOND', seconds: 1 },
 ]

 public static get Intervals(): TimeAgoInterval[] {
   return this.intervals
 }
}

export interface TimeAgoInterval{
  name: string;
  seconds: number;
}
