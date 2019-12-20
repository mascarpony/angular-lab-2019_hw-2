import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../product';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.less']
})
export class ProductListContainerComponent implements OnInit {
  product = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
