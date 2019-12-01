import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgmaterialModule } from './ngmaterial.module';
import { HighlightCardBorderDirective } from './directives/highlight-card-border.directive';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    HighlightCardBorderDirective,
    ProductsPageComponent,
    CartPageComponent,
    ErrorPageComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
