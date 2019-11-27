import { Injectable } from '@angular/core';
import { PRODUCTS, CARTPRODUCTS, Product } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  ngOnInit() { }

  getProducts(): Array<Product> {
    return PRODUCTS;
  }

  getCartProducts(): Array<Product> {
    return CARTPRODUCTS;
  }

  pushProductToCart(product: Product) {
    CARTPRODUCTS.push(product);
  }
}
