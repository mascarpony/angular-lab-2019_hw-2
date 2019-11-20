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
  title = 'simply-healthy-store';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
    console.log(this.products);
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
