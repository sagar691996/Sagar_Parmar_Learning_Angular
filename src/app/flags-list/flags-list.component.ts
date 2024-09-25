import { Component } from '@angular/core';
import { Flags } from '../flags';

@Component({
  selector: 'app-flags-list',
  templateUrl: './flags-list.component.html',
  styleUrls: ['./flags-list.component.css']
})
export class FlagsListComponent {
  flags: Flags[] = [
    { id: 1, country: 'Canada', material: 'Nylon', size: 'Medium', isInStock: true },
    { id: 2, country: 'USA', material: 'Polyester', size: 'Large', isInStock: false },
    { id: 3, country: 'Mexico', material: 'Cotton', size: 'Small', isInStock: true },
    { id: 4, country: 'UK', material: 'Silk', size: 'Large', isInStock: false }
  ];
}
