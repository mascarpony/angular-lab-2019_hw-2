import { Injectable } from '@angular/core';
import { Iproduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Iproduct[]  = [];

  constructor() {
    this.generateProducts(10);
  }

  generateProducts(quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.addProduct({
        id: i,
        name: `Product ${i}`,
        price: 100 + i,
      });
    }
  }

  addProduct(product: Iproduct) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
