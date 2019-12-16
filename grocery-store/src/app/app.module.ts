import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductService } from "./product.service";
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BorderChangeDirective } from ".//directives/product-card.directive";
import { ProductCartComponent } from './product-cart/product-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    BorderChangeDirective,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
