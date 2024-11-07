import { Injectable } from '@angular/core';
import { Flag } from '../Shared/Models/flag';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {
  createDb(): {flags: Flag[]} {
    const flags: Flag[] = [
      { id: 1, country: 'India', material: 'Paper', size: '1.5 meter', isInStock: true, image: "india.jpg" },
      { id: 2, country: 'Canada', material: 'Plastic', size: '1.9 meter', isInStock: false, image: "canada.jpg" },
      { id: 3, country: 'U.S.A', material: 'Paper', size: '1.0 meter', isInStock: true, image: "USA.png"},
      { id: 4, country: 'U.K', material: 'Plastic', size: '1.7 meter', isInStock: false, image: "UK.jpg"},
      { id: 5, country: 'Japan', material: 'Paper', size: '1.2 meter', isInStock: true, image: "japan.png"}
   ];

    return { flags };
}
}