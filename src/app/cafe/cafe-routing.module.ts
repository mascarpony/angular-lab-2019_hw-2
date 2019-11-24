import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CafeListComponent } from "./cafe-list/cafe-list.component";
import { CafeCartComponent } from "./cafe-cart/cafe-cart.component";
import { CafeContainerComponent } from "./cafe-container/cafe-container.component";

const routes: Routes = [
  { path: "", redirectTo: "/legends", pathMatch: "full" },
  { path: "legends", component: CafeListComponent },
  { path: "cart", component: CafeCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeRoutingModule {}
