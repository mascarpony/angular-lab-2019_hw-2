import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.less']
})
export class ProductCounterComponent implements OnInit {


  productCounter = 0;
  addProduct() {
    this.productCounter++;
  }
  removeProduct() {
    if (this.productCounter > 0) {
      this.productCounter--;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
