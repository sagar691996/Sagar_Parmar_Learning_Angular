import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorText'
})
export class ColorTextPipe implements PipeTransform {
  transform(value: string, isInStock: boolean): string {
    if (!isInStock) {
      return `<span style="color: red">${value}</span>`;  // Display in red if out of stock
    }
    return value;
  }
}
