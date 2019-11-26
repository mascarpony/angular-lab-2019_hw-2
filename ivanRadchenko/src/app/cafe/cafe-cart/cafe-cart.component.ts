import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cafe-cart',
  templateUrl: './cafe-cart.component.html',
  styleUrls: ['./cafe-cart.component.scss']
})
export class CafeCartComponent implements OnInit {
  @Input() pickedLegends: [];

  constructor() { }

  ngOnInit() {
  }

}
