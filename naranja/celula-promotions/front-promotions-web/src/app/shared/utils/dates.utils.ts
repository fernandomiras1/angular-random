import { IDays } from '@core/models/days.model';
import { DateTime } from 'luxon';

export class DatesUtils {
  static remainingDays(dateEnd: string) {
    const actualDate = `${DateTime.local().toFormat('dd/MM/yyyy')} 00:00`;
    const untilDate = DateTime.fromFormat(dateEnd, 'dd/MM/yyyy');
    return (untilDate.diff(DateTime.fromFormat(actualDate, 'dd/MM/yyyy hh:mm'), 'days')).days;
  }

  static uniqueDay(date: string) {
    const actualDate = DateTime.local().toFormat('dd/MM/yyyy');
    const dateEnd = DateTime.fromFormat(date, 'dd/MM/yyyy').toFormat('dd/MM/yyyy');
    return actualDate === dateEnd;
  }

  static isPromoInForce(dateBegins: string) {
    const actualDate = DateTime.local();
    const promoBegins = DateTime.fromFormat(dateBegins, 'dd/MM/yyyy');
    return actualDate >= promoBegins;
  }

  static getVigencyText(days: IDays) {
    let response;
    if (days.selectedSpecificDays.selectedWeekDays && days.selectedSpecificDays.selectedWeekDays.length > 1) {
      if (days.selectedSpecificDays.selectedWeekDays.lenght === 2) {
        response = `${days.selectedSpecificDays.selectedWeekDays[0]} y ${days.selectedSpecificDays.selectedWeekDays[1]}`;
      } else {
        response = '';
        days.selectedSpecificDays.selectedWeekDays.map((weekDay, index) => {
          if (index === days.selectedSpecificDays.selectedWeekDays.length - 2) {
            response += `${weekDay} `;
          } else
            if (index < days.selectedSpecificDays.selectedWeekDays.length - 1) {
              response += `${weekDay}, `;
            } else {
              response += `y ${weekDay}`;
            }
        });
      }
    } else {
      if (days.selectedSpecificDays.selectedWeekDays[0].slice(-1) === 's') {
        return `Los ${days.selectedSpecificDays.selectedWeekDays[0].toLowerCase()}`;
      }
      return `Los ${days.selectedSpecificDays.selectedWeekDays[0].toLowerCase()}s`;
    }
    return response;
  }

  static checkIfConsecutiveDays(days: IDays): boolean {
    if (days.daysApplied.length) {
      if (days.daysApplied.length !== 2) {
        return false;
      }
      const first_date: string = days.daysApplied[0];
      const second_date: string = days.daysApplied[1];
      if (first_date.split('/')[1] === second_date.split('/')[1]) { // mismo mes
        if (parseFloat(first_date.split('/')[0]) + 1 === parseFloat(second_date.split('/')[0])) { // al otro dia ¿y si es fin de mes?
          return true;
        }
      }
    }
    return false;
  }
}
