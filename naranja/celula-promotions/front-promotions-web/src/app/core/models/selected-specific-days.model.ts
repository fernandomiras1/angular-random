import { ISelectedMonths } from './selected-months.model';

export interface ISelectedSpecificDays {
  selectedWeekDays: string [];
  selectedMonths: ISelectedMonths;
  daysApplied: string [];
}
