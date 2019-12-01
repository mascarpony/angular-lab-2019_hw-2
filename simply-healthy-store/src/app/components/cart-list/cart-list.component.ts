import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() products;

  displayedColumns = ['image', 'name', 'price', 'button-substract', 'count', 'button-add', 'total', 'delete'];
  constructor() { }

  ngOnInit() {
  }

}
