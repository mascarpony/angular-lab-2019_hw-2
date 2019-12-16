import { Injectable } from '@angular/core';
 
import Product from './product';
import { PRODUCTS } from './product-data';
 
@Injectable()
export class ProductService {
 
  constructor() { }
 
  getProducts(): Product[] {
    return PRODUCTS;
  }
 
  getProduct(id: number): Product {
    return PRODUCTS.find(product => product.id === id);
  }
}