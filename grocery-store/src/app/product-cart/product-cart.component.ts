import { Component, OnInit } from '@angular/core';
import Product from "../product";

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cartProducts: Product[] = [];
  isEmpty: boolean = true;

  constructor() { }

  ngOnInit() {
    this.setProducts();
  }

  setProducts(): void {
    const products = []
    this.isEmpty = products.length === 0 ? false : true;
    this.cartProducts = products;
  }

  displayCounter(product: Product): void {
    product.stock += 1;
  }
}
