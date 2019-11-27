import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
