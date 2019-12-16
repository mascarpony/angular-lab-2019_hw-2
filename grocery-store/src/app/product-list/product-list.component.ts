import { Component, OnInit } from '@angular/core';
import Product from "../product";
import { ProductService }  from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = [];
  isEmpty: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.setProducts();
  }

  setProducts(): void {
    const products = this.productService.getProducts();
    this.isEmpty = products.length === 0 ? false : true;
    this.allProducts = products;
  }

  displayCounter(product: Product): void {
    product.stock += 1;
  }
}
