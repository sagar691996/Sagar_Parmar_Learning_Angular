import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Flag } from '../Shared/Models/flag';
import { mockFlag } from '../Shared/mock-flag.data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {
  private apiUrl = 'api/flags';

  //local copy of flag list
  private local_flagList:Flag[] = mockFlag;
  constructor(private http: HttpClient){}

  getFlag(): Observable<Flag[]> {
    return this.http.get<Flag[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getFlagById(flagId: number): Observable<Flag> {
    return this.http.get<Flag>(`${this.apiUrl}/${flagId}`).pipe(catchError(this.handleError));
  }

  addFlag(newFlag:Flag) : Observable<Flag>{
    return this.http.post<Flag>(this.apiUrl, newFlag).pipe(catchError(this.handleError));
  }

  //Update flags if any chanages occur
  updateFlag(updatedFlag: Flag): Observable<Flag | undefined> {
    const url = `${this.apiUrl}/${updatedFlag.id}`;
    return this.http.put<Flag>(url, updatedFlag).pipe(catchError(this.handleError));
  }
  //Delete: Remove a user by ID
  deleteFlag(flagId: number): Observable<{}> {
    const url = `${this.apiUrl}/${flagId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.local_flagList.length > 0 ? Math.max(...this.local_flagList.map(flag => flag.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}