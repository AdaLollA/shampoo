declare module BackendResponse {
  export interface Status {
    message: string;
    status_code: number;
  }

  export interface Error {
    status: Status;
  }
}
