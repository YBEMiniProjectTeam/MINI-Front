export type ApiResponseBase<T> = {
  statusCode: number;
  message: string;
  data?: T;
  successful?: boolean;
};
