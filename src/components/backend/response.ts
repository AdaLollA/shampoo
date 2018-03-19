declare module BackendResponse {

  export interface Error {
    status: Status;
  }

  export interface Status {
    message: string;
    status_code: number;
  }
}
