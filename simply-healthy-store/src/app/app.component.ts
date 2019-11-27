import { Component } from '@angular/core';
import 'hammerjs';

import { ProductsService } from './products.service';
import { Product } from './mock-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public products: Array<Product>;
  public cartProducts: Array<Product>;
  title = 'simply-healthy-store';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
    this.getCartProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }
  
  getCartProducts(): void {
    this.cartProducts = this.productService.getCartProducts();
  }

  pushProduct(product): void {
    console.log(product);
    this.productService.pushProductToCart(product);
    this.getCartProducts();
  }
}
