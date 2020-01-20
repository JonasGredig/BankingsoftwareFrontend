import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../shared/customer';
import {Account} from '../shared/account';
import {Observable, throwError} from 'rxjs';
import {retry, catchError, map} from 'rxjs/operators';
import {Transaction} from './transaction';
import {logger} from 'codelyzer/util/logger';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080/web_war_exploded/api';

  constructor(private http: HttpClient) {
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL + '/customer')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCustomer(userId: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + '/customer/' + userId)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getAccounts(customerId: number): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiURL + '/account/' + customerId)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiURL + '/transaction/new', transaction, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError));
  }


  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
