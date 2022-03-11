import { Method } from 'axios';
import formatUnicorn from 'format-unicorn/safe';

type NameOfArgIndices = {
  [name: string]: number;
};

type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

const HeaderMetadataKey = Symbol('Header');
const ParamMetadataKey = Symbol('Param');
const QueryMetadataKey = Symbol('Query');
const BodyMetadataKey = Symbol('Body');
const FormMetadataKey = Symbol('Form');

function getOptions(
  target: any,
  propertyName: string,
  args: any[]
): [headers: any, params: any, queries: any, body: any, form: any] {
  const headerOfArgIndices: NameOfArgIndices = Reflect.getOwnMetadata(
    HeaderMetadataKey,
    target,
    propertyName
  );

  const paramOfArgIndices: NameOfArgIndices = Reflect.getOwnMetadata(
    ParamMetadataKey,
    target,
    propertyName
  );

  const queryOfArgIndices: NameOfArgIndices = Reflect.getOwnMetadata(
    QueryMetadataKey,
    target,
    propertyName
  );

  const bodyOfArgIndex: number = Reflect.getOwnMetadata(BodyMetadataKey, target, propertyName);

  const formOfArgIndex: number = Reflect.getOwnMetadata(FormMetadataKey, target, propertyName);

  const headers: { [key: string]: any } = {};
  const params: { [key: string]: any } = {};
  const queries: { [key: string]: any } = {};
  const body: any = bodyOfArgIndex >= 0 ? args[bodyOfArgIndex] : {};
  const form: any = formOfArgIndex >= 0 ? args[formOfArgIndex] : undefined;

  for (const key in headerOfArgIndices) {
    headers[key] = args[headerOfArgIndices[key]];
  }

  for (const key in paramOfArgIndices) {
    params[key] = args[paramOfArgIndices[key]];
  }

  for (const key in queryOfArgIndices) {
    queries[key] = args[queryOfArgIndices[key]];
  }

  return [headers, params, queries, body, form];
}

async function invokeRequest(
  thiz: any,
  method: Method,
  url: string,
  options: {
    headers?: any;
    params?: any;
    queries?: any;
    data?: any;
    form?: any;
    responseType?: ResponseType;
  }
): Promise<any> {
  const { headers, params, queries, data, form, responseType } = options;

  for (const key in params) {
    params[key] = encodeURIComponent(params[key]);
  }

  let fmtUrl = formatUnicorn(url, params);
  if (Object.keys(queries).length > 0) {
    const query = Object.keys(queries)
      .map((key: string) => `${key}=${encodeURIComponent(queries[key])}`)
      .join('&');
    fmtUrl = `${fmtUrl}?${query}`;
    // for (const key in queries) {
    //   queries[key] = encodeURIComponent(queries[key]);
    // }
  }

  let customHeaders = { ...headers };
  let payload = data;
  if (form) {
    customHeaders = {
      ...headers,
      'Content-Type': 'multipart/form-data',
    };

    payload = new FormData();
    Object.keys(form).forEach((key) => {
      const value = form[key];

      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          if (value[i].name) {
            payload.append(key, value[i], value[i].name);
          } else {
            payload.append(key, value[i]);
          }
        }
      } else if (value.name) {
        payload.append(key, value, value.name);
      } else {
        payload.append(key, value);
      }
    });
  }

  const response = await thiz.request({
    method,
    url: fmtUrl,
    // params: queries,
    data: payload,
    headers: customHeaders,
    responseType,
  });

  return response;
}

export function Header(key: string) {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const existingHeaderOfArgIndices: NameOfArgIndices =
      Reflect.getOwnMetadata(HeaderMetadataKey, target, propertyKey) || {};
    existingHeaderOfArgIndices[key] = parameterIndex;
    Reflect.defineMetadata(HeaderMetadataKey, existingHeaderOfArgIndices, target, propertyKey);
  };
}

export function Param(key: string) {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const existingParamOfArgIndices: NameOfArgIndices =
      Reflect.getOwnMetadata(ParamMetadataKey, target, propertyKey) || {};
    existingParamOfArgIndices[key] = parameterIndex;
    Reflect.defineMetadata(ParamMetadataKey, existingParamOfArgIndices, target, propertyKey);
  };
}

export function Query(key: string) {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const existingQueryOfArgIndices: NameOfArgIndices =
      Reflect.getOwnMetadata(QueryMetadataKey, target, propertyKey) || {};
    existingQueryOfArgIndices[key] = parameterIndex;
    Reflect.defineMetadata(QueryMetadataKey, existingQueryOfArgIndices, target, propertyKey);
  };
}

export function Body() {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const bodyOfArgIndex = parameterIndex;
    Reflect.defineMetadata(BodyMetadataKey, bodyOfArgIndex, target, propertyKey);
  };
}

export function Form() {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const formOfArgIndex = parameterIndex;
    Reflect.defineMetadata(FormMetadataKey, formOfArgIndex, target, propertyKey);
  };
}

export function Get(url: string, responseType: ResponseType = 'json') {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // const method = descriptor.value!;

    descriptor.value = async function (...args: any[]): Promise<any> {
      // method.apply(this, args);

      const [headers, params, queries, data, form] = getOptions(target, propertyName, args);
      const response = await invokeRequest(this, 'GET', url, {
        headers,
        params,
        queries,
        data,
        form,
        responseType,
      });
      return response;
    };

    return descriptor;
  };
}

export function Post(url: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // const method = descriptor.value!;

    descriptor.value = async function (...args: any[]): Promise<any> {
      // method.apply(this, args);

      const [headers, params, queries, data, form] = getOptions(target, propertyName, args);
      const response = await invokeRequest(this, 'POST', url, {
        headers,
        params,
        queries,
        data,
        form,
      });
      return response;
    };

    return descriptor;
  };
}

export function Put(url: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // const method = descriptor.value!;

    descriptor.value = async function (...args: any[]): Promise<any> {
      // method.apply(this, args);

      const [headers, params, queries, data, form] = getOptions(target, propertyName, args);
      const response = await invokeRequest(this, 'PUT', url, {
        headers,
        params,
        queries,
        data,
        form,
      });
      return response;
    };

    return descriptor;
  };
}

export function Patch(url: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // const method = descriptor.value!;

    descriptor.value = async function (...args: any[]): Promise<any> {
      // method.apply(this, args);

      const [headers, params, queries, data, form] = getOptions(target, propertyName, args);
      const response = await invokeRequest(this, 'PATCH', url, {
        headers,
        params,
        queries,
        data,
        form,
      });
      return response;
    };

    return descriptor;
  };
}

export function Delete(url: string) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // const method = descriptor.value!;

    descriptor.value = async function (...args: any[]): Promise<any> {
      // method.apply(this, args);

      const [headers, params, queries, data, form] = getOptions(target, propertyName, args);
      const response = await invokeRequest(this, 'DELETE', url, {
        headers,
        params,
        queries,
        data,
        form,
      });
      return response;
    };

    return descriptor;
  };
}
