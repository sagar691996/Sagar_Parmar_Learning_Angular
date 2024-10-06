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


}