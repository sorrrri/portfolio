import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { ApiOperator, ApiOption } from './api';

export class Server {
  private instacne: AxiosInstance;

  private errorHandler?: (_: any) => void;

  constructor(options: { config?: AxiosRequestConfig; errorHandler?: (_: any) => void }) {
    const { config, errorHandler } = options;

    this.instacne = axios.create(config);
    this.errorHandler = errorHandler;

    this.instacne.interceptors.request.use(
      (_) => {
        return _;
      },
      (_) => {
        if (errorHandler) {
          errorHandler(_);
        }
        return Promise.reject(_);
      }
    );
    this.instacne.interceptors.response.use(
      (_) => {
        return _.data ? _.data : _;
      },
      (_) => {
        if (errorHandler) {
          if (_.response) {
            const { data, status, headers } = _.response;
            errorHandler({ data, status, headers });
          } else {
            errorHandler(_);
          }
        }

        return Promise.reject(_);
      }
    );
  }

  public async request(operator: ApiOperator, option?: ApiOption): Promise<any> {
    const api = await operator(option).catch((_) => {
      if (this.errorHandler) {
        this.errorHandler(_);
      }
      return Promise.reject(_);
    });

    return this.instacne.request(api);
  }
}
