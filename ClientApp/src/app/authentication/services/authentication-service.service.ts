import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  serverUrl = 'https://localhost:44385/';
  errorData = {};

  constructor(private http: HttpClient) { }

  redirectUrl = '';

  login(phoneNumber: string, password: string) {
    return this.http.post<any>(`${this.serverUrl}api/Account/login`, {phoneNumber: phoneNumber, password: password})
    .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loggedIn.next(true);
        }
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn.next(true);
      return true;
    }
    this.loggedIn.next(false);
    return false;
  }
 
  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser.token;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
