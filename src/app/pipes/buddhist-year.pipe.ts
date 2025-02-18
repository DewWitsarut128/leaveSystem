import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBuddhistYear',
  standalone: true
})
export class BuddhistYearPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = (date.getFullYear() + 543).toString();

    return `${day}/${month}/${year}`;
  }
}
