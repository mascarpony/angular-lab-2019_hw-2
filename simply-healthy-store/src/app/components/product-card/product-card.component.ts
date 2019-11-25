import { Component, OnInit, Input } from '@angular/core';
import { HighlightCardBorderDirective } from './../../directives/highlight-card-border.directive';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  private productCount: number = 0;
  private isAddButtonDisabled: boolean = false;

  @Input() product;

  constructor() { }

  ngOnInit() {

  }

  addProducts() {
    this.productCount = this.productCount + 1;
    if (this.productCount === this.product.available_quantity) {
      this.isAddButtonDisabled = true;
    }
  }

  substractProducts() {
    this.productCount = this.productCount - 1;
    if (this.productCount < this.product.available_quantity) {
      this.isAddButtonDisabled = false;
    }
  }
}
