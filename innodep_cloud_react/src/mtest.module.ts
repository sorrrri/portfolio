import 'reflect-metadata';
import { validate, minNumber } from './method.decorator';

export class Product {
  name: string;
  price: number;
  purchased: number = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  @validate
  public setPrice(@minNumber(2000) price: number) {
    this.price = price;
  }
}
