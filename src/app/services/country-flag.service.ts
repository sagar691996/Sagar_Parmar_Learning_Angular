import { Injectable } from '@angular/core';
//import our mock data
import { mockFlag } from '../data/mock-flag';
import { Observable, of } from 'rxjs';
import { Flag } from '../Shared/Models/flag';


@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {
  private flags : Flag[] = mockFlag;

  constructor() { }
  getFlag(): Observable<Flag[]> {
    return of (mockFlag);//Return and observable that emits mock flag data
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