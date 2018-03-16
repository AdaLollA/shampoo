import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
// Define base url
  baseUrl: string = 'http://localhost:5000/api/kw/';

  // Define headers
  headers: any = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
  }

  /**
   * Get base function.
   *
   * @param {string} path Path to api call
   * @returns {Promise<any>} Async return
   */
  getData(path: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(this.baseUrl + path)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // Parse error message
          let parsedError = err.json();

          // Define unknown error in case it is needed
          let unknownError: BackendResponse.Error = {
            errorInformation: 'Ein Fehler ist aufgetreten.'
          };

          // Really useful. The app can't catch this in "(err)" closure
          reject((parsedError || unknownError));

          // This return is required to compile but unuseable in your app
          return Observable.throw(err);
        })
        // The (err) => {} param on subscribe can't catch server down error so I keep only the catch
        .subscribe(data => {
          resolve(data)
        })
    });
  }

  /**
   * Post base function.
   *
   * @param {string} path Path to api call
   * @param data Body containing data
   * @returns {Promise<any>} Async return
   */
  postData(path: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(this.baseUrl + path, data)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // Parse error message
          let parsedError = err.json();

          // Define unknown error in case it is needed
          let unknownError: BackendResponse.Error = {
            errorInformation: 'Ein Fehler ist aufgetreten.'
          };

          // Really useful. The app can't catch this in "(err)" closure
          reject((parsedError || unknownError));

          // This return is required to compile but unuseable in your app
          return Observable.throw(err);
        })
        // The (err) => {} param on subscribe can't catch server down error so I keep only the catch
        .subscribe(data => {
          resolve(data)
        })
    });
  }

  /**
   * Put base function.
   *
   * @param {string} path Path to api call
   * @param data Body containing data
   * @returns {Promise<any>} Async return
   */
  putData(path: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .put(this.baseUrl + path, data)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // Parse error message
          let parsedError = err.json();

          // Define unknown error in case it is needed
          let unknownError: BackendResponse.Error = {
            errorInformation: 'Ein Fehler ist aufgetreten.'
          };

          // Really useful. The app can't catch this in "(err)" closure
          reject((parsedError || unknownError));

          // This return is required to compile but unuseable in your app
          return Observable.throw(err);
        })
        // The (err) => {} param on subscribe can't catch server down error so I keep only the catch
        .subscribe(data => {
          resolve(data)
        })
    });
  }

}
