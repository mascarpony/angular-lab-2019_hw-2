import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
