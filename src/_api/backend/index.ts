/* eslint-disable dot-notation */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { Cookies } from 'react-cookie';
import { AxiosRequestConfig } from 'axios';
import CryptoJS from 'crypto-js';
import toastr from 'toastr';
import {
  FeignClient,
  FeignErrorHandler,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  Form,
} from '../../@jms-react/common/feign';

const config = (): AxiosRequestConfig => {
  return {
    // baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000 * 10,
    headers: {
      // Authorization: window.localStorage.getItem('token'),
    },
  };
};

const transformConfig = (base: AxiosRequestConfig) => {
  try {
    const cookies = new Cookies();
    const storedToken = cookies.get('kcToken');
    const decodedStoredToken = atob(storedToken);
    const bodyOfDecodedStoredToken = decodedStoredToken.split('.')[1];
    const tokenBody = JSON.parse(atob(bodyOfDecodedStoredToken));
    const isFormData = base.data instanceof FormData;

    const uuid = process.env.REACT_APP_UUID!;
    const realm = tokenBody['azp'];
    const sessionState = tokenBody['session_state'];
    const username = tokenBody['preferred_username'];

    const reqMethod = base.method;
    const reqContentType = isFormData ? 'multipart/form-data' : 'application/json';
    const reqContentLength =
      !isFormData && base.data && Object.keys(base.data).length > 0
        ? unescape(encodeURIComponent(JSON.stringify(base.data))).length
        : undefined;
    const reqDate = new Date().toUTCString();
    const reqPath = base.url?.replace(':realm', realm).replace(':client_uuid', uuid);

    const stringToSign =
      `${reqMethod}\n` +
      `${reqContentType}\n` +
      `${reqContentLength ?? ''}\n` +
      `${reqDate}\n` +
      `${realm}\n` +
      `${username}\n` +
      `${reqPath}`;

    const reqHash = CryptoJS.HmacSHA256(stringToSign, sessionState);
    const reqHashString = CryptoJS.enc.Base64.stringify(reqHash);
    const reqAuth = `${username}:${reqHashString}`;

    return {
      ...base,
      url: reqPath,
      headers: {
        ...base.headers,
        'x-auth-token': reqAuth,
        'x-req-date': reqDate,
        Authorization: `Bearer ${decodedStoredToken}`,
      },
    };
  } catch (error) {
    return base;
  }
};

const errorHandler = (error: any) => {
  let message = error?.data?.message || error?.message;
  if (message) {
    if (Array.isArray(message)) {
      message = message.join('\n');
    }

    showErrorMessage(message);
  }
};

const showErrorMessage = (message: string) => {
  toastr.error(message, 'Error', {
    positionClass: 'toast-bottom-right',
    closeButton: true,
    tapToDismiss: false,
    progressBar: true,
    timeOut: 5000,
  });
};

@FeignClient(config, errorHandler, transformConfig)
class Server {
  /*
   * Devices
   */
  @Get('/platform/api/v2/:realm/device/:client_uuid/items/maps')
  async getDevicesForMap(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/platform/api/v2/:realm/device/:client_uuid/items/list')
  async getDevices(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Workspace
   */
  @Get('/platform/api/v2/:realm/workspace')
  async getWorkspace(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/platform/api/v2/:realm/workspace/{work_type}')
  async addWorkspace(@Param('work_type') workType: string, @Form() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/platform/api/v2/:realm/workspace/{work_type}/template')
  async getTemplate(@Param('work_type') workType: string): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Projects
   */
  @Get('/projects')
  async getProjects(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/projects')
  async addProject(@Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Services
   */
  @Get('/projects/services')
  async getServices(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/projects/services/{id}')
  async getService(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/projects/{project}/services')
  async addService(@Param('project') project: string, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Delete('/projects/services/{id}')
  async removeService(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/projects/services/{id}/run')
  async runService(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/projects/services/{id}/builds')
  async getBuilds(@Param('id') id: number): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/projects/services/{id}/builds/{buildNum}/console')
  async getConsoleLog(@Param('id') id: number, @Param('buildNum') buildNum: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Resource
   */
  @Post('/resource/upload')
  async uploadFiles(@Form() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Orders
   */
  @Get('/orders')
  async getOrders(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/orders/{id}')
  async getOrder(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/orders')
  async addOrder(@Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Patch('/orders/{id}')
  async modifyOrder(@Param('id') id: number, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Delete('/orders/{id}')
  async removeOrder(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * OrderItems
   */
  @Get('/orders/{id}/products')
  async getOrderItems(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/orders/{id}/products')
  async addOrderItems(@Param('id') id: number, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Patch('/products/{id}')
  async modifyOrderItem(@Param('id') id: number, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Delete('/products/{id}')
  async removeOrderItem(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * OrderProcesses
   */
  @Get('/orders/{id}/processes')
  async getOrderProcesses(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/orders/{id}/processes')
  async addOrderProcess(@Param('id') id: number, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/processes/{id}')
  async getOrderProcess(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Patch('/processes/{id}')
  async modifyOrderProcess(@Param('id') id: number, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Delete('/processes/{id}')
  async removeOrderProcess(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Cusomter
   */
  @Get('/customer')
  async getCustomers(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/customer/{id}')
  async getCustomer(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/customer')
  async addCustomer(@Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Patch('/customer/{id}')
  async modifyCustomer(@Param('id') id: number, @Body() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Delete('/customer/{id}')
  async removeCustomer(@Param('id') id: number): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }
}

export default new Server();
