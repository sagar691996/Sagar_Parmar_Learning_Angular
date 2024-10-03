import { Injectable } from '@angular/core';
//import our mock data
import { mockFlag } from '../data/mock-flag';
import { Observable, of } from 'rxjs';
import { Flags } from '../Shared/Modules/flags';


@Injectable({
  providedIn: 'root'
})
export class FlagService {
  private flags : Flags[] = mockFlag;

  constructor() { }
  getFlag(): Observable<Flags[]> {
    return of (mockFlag);
  }


}