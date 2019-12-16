import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductListContainerComponent
  },
  {
    path: 'cart',
    component: CartpageComponent
  },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotfoundComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
