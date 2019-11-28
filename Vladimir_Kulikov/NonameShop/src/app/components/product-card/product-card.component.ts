import { Component, OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  private quantity: number = 0;
  private disabled: boolean = true;

  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

  onChangeQuantity(sign: '+' | '-') {
    if (sign === '+') {
      this.quantity += 1;
      this.switchDisabled(this.quantity);
      return;
    }

    if (this.quantity >= 1) {
      this.quantity -= 1;
      this.switchDisabled(this.quantity);
    }
  }

  switchDisabled(quantity: number) {
    this.disabled = this.quantity > 0 ? false : true;
  }
}
