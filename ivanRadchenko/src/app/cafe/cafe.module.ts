import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CafeCartComponent } from "./cafe-cart/cafe-cart.component";
import { CafeListComponent } from "./cafe-list/cafe-list.component";
import { CafeItemComponent } from "./cafe-item/cafe-item.component";
import { CafeContainerComponent } from "./cafe-container/cafe-container.component";

import { AppMaterialModule } from "../app-material/app-material.module";
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    CafeContainerComponent,
    CafeListComponent,
    CafeItemComponent,
    CafeCartComponent
  ],
  exports: [CafeContainerComponent],
  providers: [],
  imports: [CommonModule, AppMaterialModule]
})
export class CafeModule {}
