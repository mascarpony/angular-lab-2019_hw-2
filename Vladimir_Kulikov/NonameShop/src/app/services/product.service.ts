import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[]  = [];

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

  addProduct(product: IProduct) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
