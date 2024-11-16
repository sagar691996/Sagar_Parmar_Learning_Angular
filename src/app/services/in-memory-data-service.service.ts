import { Injectable } from '@angular/core';
import { Flag } from '../Shared/Models/flag';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {
  createDb(): {flags: Flag[]} {
    const flags: Flag[] = [
      {
          id: 1,
          country: 'India',
          material: 'Paper',
          size: '1.5 meter',
          isInStock: true,
          image: 'india.jpg',
          createdAt: new Date('2022-01-01'),
          price: 100 // Add a price as it is required in the interface
      },
      {
          id: 2,
          country: 'Canada',
          material: 'Plastic',
          size: '1.9 meter',
          isInStock: false,
          image: 'canada.jpg',
          createdAt: new Date('2023-03-15'),
          price: 120 // Add a price as it is required in the interface
      },
      {
          id: 3,
          country: 'U.S.A',
          material: 'Paper',
          size: '1.0 meter',
          isInStock: true,
          image: 'usa.jpg',
          createdAt: new Date('2021-08-20'),
          price: 90 // Add a price as it is required in the interface
      },
      {
          id: 4,
          country: 'U.K',
          material: 'Plastic',
          size: '1.7 meter',
          isInStock: false,
          image: 'UK.jpg',
          createdAt: new Date('2024-02-24'),
          price: 110 // Add a price as it is required in the interface
      },
      {
          id: 5,
          country: 'Japan',
          material: 'Paper',
          size: '1.2 meter',
          isInStock: true,
          image: 'japan.png',
          createdAt: new Date('2024-08-16'),
          price: 105 // Add a price as it is required in the interface
      }
  ];
  

    return { flags };
}
}