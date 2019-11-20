import { Injectable } from '@angular/core';
import { PRODUCTS, Product } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  ngOnInit() { }

  getProducts(): Array<Product> {
    return PRODUCTS;
  }
}
