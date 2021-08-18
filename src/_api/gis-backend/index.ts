/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable lines-between-class-members */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { AxiosRequestConfig } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import CryptoJS from 'crypto-js';
import toastr from 'toastr';
import * as loading from '../../_store/slice/loading';
import configureStore from '../../_store';
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
import { Header } from '../../@jms-react/common/feign/method.decorator';

const baseConfig = (): AxiosRequestConfig => {
  return {
    // baseURL: process.env.REACT_APP_DMS_API_URL,
    timeout: 1000 * 10,
    headers: {
      Authorization: window.localStorage.getItem('token') ?? undefined,
    },
  };
};

const transformConfig = (base: AxiosRequestConfig) => {
  const now = new Date();
  const siteId = 'dongae';
  const reqDate = now.toUTCString();
  const contentType = 'application/json';
  let contentLength;
  if (base.data && Object.keys(base.data).length > 0) {
    contentLength = unescape(encodeURIComponent(JSON.stringify(base.data))).length;
  }

  const stringToSign =
    `${base.method}\n` +
    `${contentType}\n` +
    `${contentLength ?? ''}\n` +
    `${reqDate}\n` +
    `${base.url}\n` +
    `${siteId}`;
  const reqHash = CryptoJS.HmacSHA256(stringToSign, siteId);
  const reqHashString = CryptoJS.enc.Base64.stringify(reqHash);
  const sharedKey = `${siteId}:${reqHashString}`;

  return {
    ...base,
    headers: {
      ...base.headers,
      'x-site-id': siteId,
      'x-date': reqDate,
      'x-shared-key': sharedKey,
    },
  };
};

const errorHandler = (error: any) => {
  const { status, data } = error;
  if (status) {
    if (status === 401) {
      alert('보안을 위하여 다시 로그인해 주시기 바랍니다.');
      window.location.href = `${process.env.REACT_APP_CONTEXT ?? ''}/login`;
    }
  }

  let message = data?.message || error.message;
  if (message) {
    if (Array.isArray(message)) {
      message = message.join('\n');
    }

    showErrorMessage(message);
  }
};

const showErrorMessage = (message: string, title?: string) => {
  toastr.error(message, title ?? 'Error', {
    positionClass: 'toast-top-center',
    closeButton: true,
    tapToDismiss: false,
    progressBar: true,
    timeOut: 5000,
  });
};

type GetClusterFeaturesPayload = {
  typenames: string[];
  bbox: string;
  icon_size: number;
  cluster_distance: number;
  cluster_layers: string[];
  sublayer_filter?: any;
};

type GetClusterFeatureDetailPayload = {
  typenames: string[];
  cluster_distance: number;
  sublayer_filter?: any;
  [kye: string]: any;
};

type GetFeaturesByNamePayload = {
  typenames: string[];
  srsname: 'EPSG:5179' | 'EPSG:4326';
  cql_filter: string;
  orderby: string[];
};
@FeignClient(baseConfig, errorHandler, transformConfig)
class Server {
  /*
   * 사용가능한 지역 정보 조회
   */
  @Get('/vurix-dms/api/v1/code/getCode/area?is_used=true')
  async getAreas(): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 인증번호 발송
   */
  @Post('/vurix-dms/api/v1/sms/postSendPinCode')
  async issuePin(@Body() payload: { dest_phone: string }): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 인증번호 확인
   */
  @Get('/vurix-dms/api/v1/sms/getValiPinCode')
  async checkPin(
    @Query('dest_phone') phoneNumber: string,
    @Query('pin_code') pin: string
  ): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 아이디 찾기
   */
  @Post('/vurix-dms/api/v1/user/userAccount')
  async findId(
    @Header('x-id-jwt') token: string,
    @Body() payload: { user_name: string; birth_day: string; area: string; mobile_number: string }
  ): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 비밀번호 찾기
   */
  @Post('/vurix-dms/api/v1/user/userPassword')
  async findPwd(
    @Header('x-id-jwt') token: string,
    @Body()
    payload: {
      user_account: string;
      user_name: string;
      birth_day: string;
      area: string;
      mobile_number: string;
    }
  ): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 비밀번호 초기화
   */
  @Put('/vurix-dms/api/v1/user/resetPassword')
  async resetPwd(
    @Header('x-id-jwt') token: string,
    @Body()
    payload: {
      pwd: string;
    }
  ): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 로그인 및 토큰발급
   */
  @Post('/vurix-dms/api/v1/auth/doLogin')
  async signin(@Body() data: { id: string; pwd: string }): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 토큰 갱신
   */
  @Post('/vurix-dms/api/v1/auth/token')
  async refreshToken(@Body() data: { refresh_token: string }): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 권한 조회
   */
  @Get('/vurix-dms/api/v1/user/userMenu')
  async getRoles(): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 시스템 설정 정보 조회
   */
  @Get(
    '/vurix-dms/api/v1/globalProp/getGlobalPropInfo?prop_group=MONITORING&prop_key=BASIC_HOME_COORD'
  )
  async getGlobalPropOfHomeCoordinates(): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 프로필 조회
   */
  @Get('/vurix-dms/api/v1/user/userById')
  async getProfile(): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 자산 레이어 생성시 필요한 레이어의 스타일 목록을 조회 한다.
   */
  @Post('/dms-gis/api/v1/layer/postLayerStyle')
  async getLayerStyles(@Body() data: { layer_id: string[]; icon_size: number }): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 지도 위 feature를 그리기 위한 geoJson 형태의 공간정보를 가진 자산데이터를 return 한다.
   */
  @Post('/dms-gis/api/geo/giswfs/postFeature')
  async getClusterFeatures(@Body() data: GetClusterFeaturesPayload): Promise<any[]> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 자산의 상세정보를 return 한다.
   */
  @Post('/dms-gis/api/geo/giswfs/postFeatureDetail')
  async getClusterFeatureDetail(@Body() data: GetClusterFeatureDetailPayload): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  @Post('/dms-gis/api/geo/giswfs/postFeature')
  async getFeaturesByFilter(@Body() data: GetFeaturesByNamePayload): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 주소로 자산 리스트 검색
   */
  @Get('/dms-gis/api/v1/addr/getGeoCode')
  async searchFeaturesByAddress(
    @Query('query') keyword: string,
    @Query('pagetoken') pagetoken?: string
  ): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }

  /*
   * 좌표로 자산 리스트 검색
   */
  @Get('/dms-gis/api/v1/area/getIncludedArea?address_type=HJD')
  async searchFeaturesByCoordinates(
    @Query('lat') lat: number,
    @Query('lng') lon: number
  ): Promise<any> {
    return Promise.reject(new Error('Not implemented.'));
  }
}

export default new Server();
