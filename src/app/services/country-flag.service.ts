import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flag } from '../Shared/Models/flag';
import { mockFlag } from '../Shared/mock-flag.data';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {

  // private flags: Flag[] = [
  //   { id: 1, country: 'India', material: 'Paper', size: '1.5 meter', isInStock: true },
  //   { id: 2, country: 'Canada', material: 'Plastic', size: '1.9 meter', isInStock: false },
  //   { id: 3, country: 'U.S.A', material: 'Paper', size: '1.0 meter', isInStock: true },
  //   { id: 4, country: 'U.K', material: 'Plastic', size: '1.7 meter', isInStock: false },
  //   { id: 5, country: 'Japan', material: 'Paper', size: '1.2 meter', isInStock: true }
  // ];

  //local copy of flag list
  private local_flagList:Flag[] = mockFlag;
  constructor(){}

getFlag(): Observable<Flag[]> {
  return of(this.local_flagList);
}

addFlag(newFlag:Flag) : Observable<Flag[]>{
  this.local_flagList.push(newFlag)
  return of(this.local_flagList);
}

//Update flags if any chanages occur
updateFlag(updatedFlag: Flag): Observable<Flag[]> {
  const index = this.local_flagList.findIndex(flag => flag.id === updatedFlag.id);
  if (index !== -1) {
    this.local_flagList[index] = updatedFlag;
  }
  return of(this.local_flagList);
}
//Delete: Remove a user by ID
deleteFlag(flagId: number): Observable<Flag> {
  this.local_flagList = this.local_flagList.filter(flag => flag.id !== flagId);
  return of(this.local_flagList[flagId]);
}
getFlagById(flagId: number): Observable<Flag | undefined> {
  const flag = this.local_flagList.find(flag => flag.id === flagId);
  return of(flag);
}
}