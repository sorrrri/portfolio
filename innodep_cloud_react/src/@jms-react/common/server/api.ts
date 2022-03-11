import { AxiosRequestConfig } from 'axios';

export type Api = {
  [key: string]: ApiOperator;
};

export type ApiOperator = (option?: ApiOption, data?: any) => Promise<AxiosRequestConfig>;

export type ApiOption = {
  pathVar?: { [uri: string]: string | number; [uri: number]: string | number };
  data?: any;
};
