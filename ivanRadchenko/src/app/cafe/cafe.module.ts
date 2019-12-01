import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CafeCartComponent } from "./cafe-cart/cafe-cart.component";
import { CafeListComponent } from "./cafe-list/cafe-list.component";
import { CafeItemComponent } from "./cafe-item/cafe-item.component";

import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [CafeListComponent, CafeItemComponent, CafeCartComponent],
  imports: [CommonModule, AppMaterialModule, AppRoutingModule]
})
export class CafeModule {}
