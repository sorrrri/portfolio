/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { AxiosRequestConfig } from 'axios';
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
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000 * 10,
    headers: {
      Authorization: window.localStorage.getItem('token'),
    },
  };
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

@FeignClient(config, errorHandler)
class Server {
  /*
   * Sign
   */
  @Post('/signin')
  async signin(@Body() data: { email: string; password: string }): Promise<any[]> {
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
