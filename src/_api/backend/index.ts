/* eslint-disable no-nested-ternary */
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
  Header,
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
    const isAuth = base.url!.indexOf('/auth/') > 0;

    const uuid = process.env.REACT_APP_UUID!;
    const realm = tokenBody['azp'];
    const sessionState = tokenBody['session_state'];
    const username = tokenBody['preferred_username'];

    const reqMethod = base.method;
    const reqContentType = isFormData ? 'multipart/form-data' : isAuth ? '' : 'application/json';
    const reqContentLength =
      !isFormData && !isAuth && base.data && Object.keys(base.data).length > 0
        ? unescape(encodeURIComponent(JSON.stringify(base.data))).length
        : '';
    const reqDate = new Date().toUTCString();
    const reqPath = base.url?.replace(':realm', realm).replace(':client_uuid', uuid);

    const stringToSign =
      `${reqMethod}\n` +
      `${reqContentType}\n` +
      `${reqContentLength}\n` +
      `${reqDate}\n` +
      `${realm}\n` +
      `${username}\n` +
      `${reqPath}`;
    // console.log(stringToSign);

    const reqHash = CryptoJS.HmacSHA256(stringToSign, sessionState);
    const reqHashString = CryptoJS.enc.Base64.stringify(reqHash);
    const reqAuth = `${username}:${reqHashString}`;

    return {
      ...base,
      url: reqPath,
      headers: {
        ...base.headers,
        'Content-Type': reqContentType,
        'x-auth-token': reqAuth,
        'x-req-date': reqDate,
        Authorization: `Bearer ${decodedStoredToken}`,
        // 'x-auth-token': 'dingcoding:DmZlhqguLnqpay9Pb4g54qDg6QV0rSe72Ew5r+B6SSg=',
        // 'x-req-date': 'Mon, 13 Sep 2021 07:34:08 GMT',
        // Authorization:
        //   'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJMYVdqWk1ySUJyblVKTW5LbEVuSl9lVWx5OFlkV1Vna040UVZKam1PdmxRIn0.eyJleHAiOjE2MzE1MTgwNDAsImlhdCI6MTYzMTUxNjI0MCwianRpIjoiMzAyOWQyZWMtMGFkYS00NWE3LTkyYWEtZDA2MDQwZjU1NTg2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLTE3Mi0zMC0xMC0xMDEudnVyaXgua3IvYXV0aC9yZWFsbXMvam1zb2Z0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImMzMjk1MzZmLTE2MzMtNDk5Ny1iYzAxLTRjNmUzNTMyZjcwYiIsInR5cCI6IkJlYXJlciIsImF6cCI6Imptc29mdCIsInNlc3Npb25fc3RhdGUiOiI0MTllYjVlMC00ZWQ3LTRlMWUtODlhOS03MGM2YmUwMWM3OWQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vcG9ydGFsLTE3Mi0zMC0xMC0xMDEudnVyaXgua3IiLCJodHRwczovL2RhdGEtMTcyLTMwLTEwLTEwMS52dXJpeC5rciIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1qbXNvZnQiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImRpbmdjb2RpbmcifQ.bEB8-0_eLWPZVGB7wJYZDAE7NDxjrxbFPF73spyX5lEcdhKBjGy1Zn-6NcILWYOsGwA8z7ee9Y0FOmWmLi3UKYbp4qL25QVs5b30Dc_9qa1TJD_bS0Ercn3CczbkVCsCPRUPOpALUMj18RCJ0aWPwlc1Xi88smC364tGcO91avg1QToM7Z-jBLxljomhYU-8ZWnC3HQNXFc6exbU3onx5E8VH8hVeCCkFl2GGILcpQAuuMgKxspkHlOmw1Ke-ikVsr0qLty5f4BWR6Yzy7sRDuWPB1EtHAzEfxR9qrjF6Hr0HVDboCJpP7SpMv9zSnA7tWOLOG0qA6ODGLcwi0yLuA',
      },
      data: isAuth ? null : base.data,
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
   * Authenticate
   */
  @Post('/platform/api/v2/auth/login')
  async login(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/platform/api/v2/auth/logout')
  async logout(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Devices
   */
  @Get('/platform/api/v2/:realm/device/:client_uuid/items/maps')
  async getDevicesForMap(
    @Query('corrd') corrd: string,
    @Query('radius') radius: string
  ): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/platform/api/v2/:realm/device/:client_uuid/items/list')
  async getDevices(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/platform/api/v2/:realm/device/:client_uuid/items/{item_uuid}')
  async getDeviceDetail(@Param('item_uuid') uuid: string): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * Workspace
   */
  @Get('/platform/api/v2/:realm/workspace')
  async getWorkspaceList(): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/platform/api/v2/:realm/workspace/{work_type}/template')
  async getWorkspaceTemplate(@Param('work_type') workType: string): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Get('/platform/api/v2/:realm/workspace/detail/{work_uuid}')
  async getWorkspaceDetail(@Param('work_uuid') workUuid: string): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/platform/api/v2/:realm/workspace/{work_type}')
  async addWorkspace(@Param('work_type') workType: string, @Form() data: any): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/platform/api/v2/:realm/workspace/comment/{work_type}')
  async addComment(@Param('work_type') workType: string, @Form() data: any): Promise<any> {
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
