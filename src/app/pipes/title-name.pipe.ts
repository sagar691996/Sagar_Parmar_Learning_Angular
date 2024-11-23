import { Pipe, PipeTransform } from '@angular/core';
import { Flag } from '../Shared/Models/flag';

@Pipe({
  name: 'titleName',
  standalone: true
})
export class TitleNamePipe implements PipeTransform {

  transform(flag:Flag | undefined): string {
    return `${flag?.country}`;
  }

}
