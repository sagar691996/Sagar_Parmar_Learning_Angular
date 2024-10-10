import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flag } from '../Shared/Models/flag';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {

  private flags: Flag[] = [
    { id: 1, country: 'India', material: 'Paper', size: '1.5 meter', isInStock: true },
    { id: 2, country: 'Canada', material: 'Plastic', size: '1.9 meter', isInStock: false },
    { id: 3, country: 'U.S.A', material: 'Paper', size: '1.0 meter', isInStock: true },
    { id: 4, country: 'U.K', material: 'Plastic', size: '1.7 meter', isInStock: false },
    { id: 5, country: 'Japan', material: 'Paper', size: '1.2 meter', isInStock: true }
  ];

  constructor() { }

getFlag(): Observable<Flag[]> {
  return of(this.flags);
}

addFlag(newFlag:Flag) : Observable<Flag[]>{
  this.flags.push(newFlag)
  return of(this.flags);
}

//Update flags if any chanages occur
updateFlag(updatedFlag: Flag): Observable<Flag[]> {
  const index = this.flags.findIndex(flag => flag.id === updatedFlag.id);
  if (index !== -1) {
    this.flags[index] = updatedFlag;
  }
  return of(this.flags);
}
//Delete: Remove a user by ID
deleteFlag(flagId: number): Observable<Flag[]> {
  this.flags = this.flags.filter(flag => flag.id !== flagId);
  return of(this.flags);
}
getFlagById(flagId: number): Observable<Flag | undefined> {
  const flag = this.flags.find(flag => flag.id === flagId);
  return of(flag);
}
}