import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flag } from '../Shared/Models/flag';
import { mockFlag } from '../Shared/mock-flag.data';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {

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