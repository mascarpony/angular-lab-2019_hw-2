import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  public pageURL: string;

  @Input() products;
  @Output() pushProduct = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.pageURL = this.router.url;
  }

  onPushProduct(product): void {
    this.pushProduct.emit(product);
  }
}
