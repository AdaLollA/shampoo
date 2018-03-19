import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {APIRequest, HTTP_METHOD} from './request';

/**
 * The base-class for each provider in this application making API-calls
 */
export abstract class ApiBaseProvider {

  public constructor(public http: HttpClient,
                     public baseURL: string,
                     public apiKey: string) {
  }

  /**
   * Perform an HTTP-Request with the provided apiRequest object instance
   * @param {APIRequest} apiRequest the apiRequest, which will be used for the HTTP-Request
   * @returns {Promise<any>} the results of the request
   */
  public request<T>(apiRequest: APIRequest) {
    return new Promise<T>((resolve, reject) => {

      //TODO: Abstract how the API key is added to the outgoing HTTP-Request here
      apiRequest.pathParams = apiRequest.pathParams.append('api_key', this.apiKey);

      this.httpCall<T>(apiRequest)
        .then(response => {
          //returns the result of the http call to the caller
          resolve(response.body)
        })
        .catch(error => {
          //handles the error for a higher level in the application
          reject(this.manageError(error));

          //low level handling for the programmer (see Debug window)
          return Observable.throw(error);
        });
    });
  }

  /**
   * Helper method for performing http calls of all sorts
   * @param {APIRequest} apiRequest the request, which should be performed
   * @returns {Promise<any>} the results of the http call
   */
  private httpCall<T>(apiRequest: APIRequest): Promise<HttpResponse<T>> {
    let concatinatedPath = '';
    apiRequest.path.forEach(pathPart => {
      concatinatedPath = concatinatedPath + pathPart;
    });

    switch (apiRequest.method) {
      case HTTP_METHOD.GET:
        return this.http.get<T>(this.baseURL + concatinatedPath,
          {params: apiRequest.pathParams, headers: apiRequest.headerParams, observe: 'response'})
          .toPromise();
      case HTTP_METHOD.POST:
        return this.http.post<T>(this.baseURL + concatinatedPath, apiRequest.data,
          {params: apiRequest.pathParams, headers: apiRequest.headerParams, observe: 'response'})
          .toPromise();
      case HTTP_METHOD.PUT:
        return this.http.put<T>(this.baseURL + concatinatedPath, apiRequest.data,
          {params: apiRequest.pathParams, headers: apiRequest.headerParams, observe: 'response'})
          .toPromise();
      default:
        return Promise.reject({
          error: {
            status: {
              message: 'HTTP-Request method not set (get,post,put)',
              status_code: 'NotYetSet'
            }
          }
        })
    }
  }

  /**
   * This function manages error massage and error code parsing.
   *
   * @param {Response} err Error that is to be parsed.
   * @returns {Promise<any> | BackendResponse.Error}
   */
  private manageError(err: any) {
    // Parse error message
    let parsedError: BackendResponse.Error = err.error;

    // Manage known errors
    if (err.headers.get('Retry-After')) {
      parsedError.status.message = parsedError.status.message + '. Cooldown: ' + err.headers.get('Retry-After') + 's.';
    }

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
