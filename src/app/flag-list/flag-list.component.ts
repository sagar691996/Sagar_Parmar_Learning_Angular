import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FlagListItemComponent } from '../flag-list-item/flag-list-item.component';
import { Flag } from '../Shared/Models/flag';

@Component({
  selector: 'app-flag-list',
  standalone: true,
  imports: [NgForOf,NgForOf,FlagListItemComponent],
  templateUrl: './flag-list.component.html',
  styleUrl: './flag-list.component.scss'
})
export class FlagListComponent {

  flaglist:Flag[] = [
    { id: 1, country: 'India', material: 'Paper', size: '1.5 meter', isInStock: true },
    { id: 2, country: 'Canada', material: 'Plastic', size: '1.9 meter', isInStock: false },
    { id: 3, country: 'U.S.A', material: 'Paper', size: '1.0 meter', isInStock: true },
    { id: 4, country: 'U.K', material: 'Plastic', size: '1.7 meter', isInStock: false },
    { id: 5, country: 'Japan', material: 'Paper', size: '1.2 meter', isInStock: true }
  ];
}
