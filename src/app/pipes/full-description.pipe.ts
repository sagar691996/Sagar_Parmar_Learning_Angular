import { Pipe, PipeTransform } from '@angular/core';
import { Flag } from '../Shared/Models/flag';

@Pipe({
  name: 'fullDescription'
})
export class FullDescriptionPipe implements PipeTransform {
  transform(flag: Flag): string {
    return `${flag.country} Flag made of ${flag.material}`;
  }

  ngOnInit() {
    console.log('Custom Pipe Initialized - Version 2.0');
  }
}
