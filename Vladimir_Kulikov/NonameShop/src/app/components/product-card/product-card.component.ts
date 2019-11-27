import { Component, OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  private quantity: number = 0;
  
  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

  onMinusOne() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

  onPlusOne() {
    this.quantity += 1;
  }
}
