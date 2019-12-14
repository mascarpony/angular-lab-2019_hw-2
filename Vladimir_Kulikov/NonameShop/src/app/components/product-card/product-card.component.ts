import { Component, OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  private quantity: number = 0;
  private isQtyDecreaseDisabled: boolean = true;

  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

  onChangeQuantity(operator: '+' | '-') {
    if (operator === '+') {
      this.quantity += 1;
      this.switchQtyDecreaseDisabled(this.quantity);
      return;
    }

    if (this.quantity >= 1) {
      this.quantity -= 1;
      this.switchQtyDecreaseDisabled(this.quantity);
    }
  }

  switchQtyDecreaseDisabled(quantity: number) {
    this.isQtyDecreaseDisabled = this.quantity > 0 ? false : true;
  }
}
