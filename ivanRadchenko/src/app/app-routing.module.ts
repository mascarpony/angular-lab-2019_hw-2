import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CafeCartComponent } from "./cafe/cafe-cart/cafe-cart.component";
import { CafeListComponent } from "./cafe/cafe-list/cafe-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "legends",
    pathMatch: "full"
  },
  {
    path: "legends",
    component: CafeListComponent
  },
  {
    path: "cart",
    component: CafeCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
