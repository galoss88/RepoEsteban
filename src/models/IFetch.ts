/* istanbul ignore file */
export interface IBaseFetch {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface IFetchOptions {
  url: string;
  params: RequestInit;
}

export interface IFetchResponse<T> extends IBaseFetch {
  data: T;
}

export interface IFetchReject extends IBaseFetch {
  error: string;
}

export type TFetchStatus = 'idle' | 'loading' | 'failed' | 'success';
