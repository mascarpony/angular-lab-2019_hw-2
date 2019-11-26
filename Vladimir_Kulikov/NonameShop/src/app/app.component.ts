import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 250,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 1350,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 800,
    },
    {
      id: 1,
      name: 'Product 1',
      price: 250,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 1350,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 800,
    },
  ];
}
