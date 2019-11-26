import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'Pinzeria';
  products = [
    new Product('Salame and Parma', 30 , 'Сlassic and most delicious pinza'),
    new Product('Cola', 5 , 'Legendary drink'),
    new Product('Coffe', 5 , 'Will keep you awake'),
    new Product('Salad', 5 , 'Always fresh')
  ];
}

