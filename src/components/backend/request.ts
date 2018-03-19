import {HttpHeaders, HttpParams} from '@angular/common/http';

export enum HTTP_METHOD {
  GET,
  POST,
  PUT
}

/**
 * Interface, which describes how an API-Request should look like
 */
export interface APIRequest {
  path: string[];
  pathParams: HttpParams;
  headerParams: HttpHeaders;
  data: any;
  method: HTTP_METHOD;
}

/**
 * Builder Pattern class for creating new API-Requests
 */
export class APIRequestBuilder {

  private bPath: string[] = [];
  private bPathParams: HttpParams = new HttpParams();
  private bHeaderParams: HttpHeaders = new HttpHeaders();
  private bData: any;
  private bMethod: HTTP_METHOD;

  public constructor(private path: string,
                     private method: HTTP_METHOD) {
    this.bPath.push(path);
    this.bMethod = method;
  }

  public addToPath(path: string) {
    this.bPath.push('/' + path);
  }

  public addURLParameter(key: string, value: string) {
    this.bPathParams = this.bPathParams.append(key, value);
  }

  public addHeaderParameter(key: string, value: string) {
    this.bHeaderParams = this.bHeaderParams.append(key, value);
  }

  public setData(data: any) {
    this.bData = data;
  }

  public build(): APIRequest {
    return {
      path: this.bPath,
      method: this.bMethod,
      pathParams: this.bPathParams,
      headerParams: this.bHeaderParams,
      data: this.bData
    };
  }
}
