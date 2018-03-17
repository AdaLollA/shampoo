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
  baseUrl: string = 'https://euw1.api.riotgames.com/lol/';
  urlParam: string = '?api_key=RGAPI-ca6e16ba-67a7-4027-b7f6-3ca41ec5e5bb';

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
        .get(this.baseUrl + path + this.urlParam)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // Really useful. The app can't catch this in "(err)" closure
          reject(this.manageError(err));

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
        .post(this.baseUrl + path + this.urlParam, data)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // Really useful. The app can't catch this in "(err)" closure
          reject(this.manageError(err));

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
        .put(this.baseUrl + path + this.urlParam, data)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // Really useful. The app can't catch this in "(err)" closure
          reject(this.manageError(err));

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
   * This function manages error massage and error code parsing.
   *
   * @param {Response} err Error that is to be parsed.
   * @returns {Promise<any> | BackendResponse.Error}
   */
  private manageError(err: Response) {
    // Parse error message
    let parsedError = err.json();

    // Define unknown error in case it is needed
    let unknownError: BackendResponse.Error = {
      status: {
        message: 'Sorry, an unknown error occured.',
        status_code: 400
      }
    };

    return (parsedError || unknownError);
  }

}
