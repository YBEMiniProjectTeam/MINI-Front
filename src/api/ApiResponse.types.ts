export type ApiResponseBase<T> = {
  statusCode: number;
  message: string;
  data?: T;
  successful?: boolean;
};

export interface ResponseType {
  statusCode: number;
  message: string;
}
