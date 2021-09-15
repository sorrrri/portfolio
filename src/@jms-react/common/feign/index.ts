import { FeignClient, FeignErrorHandler } from './client.decorator';
import {
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Header,
  Param,
  Query,
  Body,
  Form,
} from './method.decorator';

export { FeignClient };
export type { FeignErrorHandler };
export { Get, Post, Put, Patch, Delete, Header, Param, Query, Body, Form };
