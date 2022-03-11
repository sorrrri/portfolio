import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export type FeignErrorHandler = (error: any) => void;

export function FeignClient(
  baseConfig: () => AxiosRequestConfig,
  errorHandler?: FeignErrorHandler,
  transformConfig?: (base: AxiosRequestConfig) => AxiosRequestConfig
) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      getBaseConfig = baseConfig;

      // errorHandler = errorHandler;

      getInstance(): AxiosInstance {
        const instance = axios.create(this.getBaseConfig());

        instance.interceptors.request.use(
          (_) => {
            // console.log('axios request', _);
            return _;
          },
          (_) => {
            if (errorHandler) {
              errorHandler(_);
            }
            return Promise.reject(_);
          }
        );
        instance.interceptors.response.use(
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

        return instance;
      }

      async request(_config: AxiosRequestConfig) {
        const conf = transformConfig ? transformConfig(_config) : _config;
        const response = await this.getInstance().request(conf);
        return response;
      }
    };
  };
}
