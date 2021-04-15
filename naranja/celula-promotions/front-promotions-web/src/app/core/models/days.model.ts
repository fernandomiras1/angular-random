import { ISelectedSpecificDays } from './selected-specific-days.model';

export interface IDays {
  type: number;
  selectedSpecificDays: ISelectedSpecificDays | any;
  daysApplied: string[];
  dateFrom: string;
  dateTo: string;
}
