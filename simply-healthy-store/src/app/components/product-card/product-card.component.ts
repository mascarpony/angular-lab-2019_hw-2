import { Component, OnInit, Input, Output } from '@angular/core';
import { HighlightCardBorderDirective } from './../../directives/highlight-card-border.directive';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  private productCount: number = 0;
  private isAddButtonDisabled: boolean = false;
  private isAddToCartButtonDisabled: boolean = false;

  @Input() product;
  @Input() pageURL;
  @Output() pushProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  
  substractProducts(quantity) {
    this.productCount = this.productCount - 1;
    if (this.productCount < quantity) {
      this.isAddButtonDisabled = false;
    }
  }

  addProducts(quantity) {
    this.productCount = this.productCount + 1;
    if (this.productCount === quantity) {
      this.isAddButtonDisabled = true;
    }
  }

  addToCart() {
    if(this.product.available_quantity) {
      this.product.available_quantity -= this.productCount;
      this.productCount = 0;
    }

    if(!this.product.available_quantity) {
      this.isAddToCartButtonDisabled = true;
    }
    
    this.onPushProduct(this.product);
  }

  onPushProduct(product) {
    this.pushProduct.emit(product);
  }
}
