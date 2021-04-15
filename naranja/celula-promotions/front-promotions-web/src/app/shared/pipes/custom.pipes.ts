import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizeFirst' })
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) { return value; }

    const lower = value.toLowerCase().trim();

    const capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);
    return capitalized;

  }
}

@Pipe({ name: 'elypsis' })
export class ElypsisPipe implements PipeTransform {
  transform(value: string, length: number = 10): string {
    if (!value) { return value; }
    if (value.length <= length) { return value; }

    return `${value.slice(0, length)}...`;
  }
}
