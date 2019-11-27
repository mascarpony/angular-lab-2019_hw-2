import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  @Input() products;
  @Input() cartProducts;
  @Output() pushProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onPushProduct(product): void {
    this.pushProduct.emit(product);
  }
}
