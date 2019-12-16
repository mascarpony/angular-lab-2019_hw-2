import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Product from "../product";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  valueChanged() { 
      this.valueChange.emit(this.product);
  }

}
