import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() products;
  @Output() deleteProduct = new EventEmitter();

  private isAddButtonDisabled: boolean = false;

  displayedColumns = ['image', 'name', 'price', 'button-substract', 'count', 'button-add', 'total', 'delete'];
  constructor() { }

  ngOnInit() {
  }

  substractProduct(product) {
    product.quantity_in_cart -= 1;
    product.available_quantity +=1;
    if (!product.quantity_in_cart) {
      this.onDeleteProduct(product);
    }
  }

  addProduct(product) {
    product.quantity_in_cart += 1;
    product.available_quantity -= 1;
    if (!product.available_quantity) {
      this.isAddButtonDisabled = true;
    }
  }

  onDeleteProduct(product) {
    this.deleteProduct.emit(product);
  }

}
