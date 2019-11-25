import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CafeCartComponent } from "./cafe-cart/cafe-cart.component";
import { CafeListComponent } from "./cafe-list/cafe-list.component";
import { CafeItemComponent } from "./cafe-item/cafe-item.component";
import { CafeContainerComponent } from "./cafe-container/cafe-container.component";

import { ConfigService } from "../services/config/config.service";
import { AppMaterialModule } from "../app-material/app-material.module";

@NgModule({
  declarations: [
    CafeContainerComponent,
    CafeListComponent,
    CafeItemComponent,
    CafeCartComponent
  ],
  exports: [CafeContainerComponent],
  providers: [ConfigService],
  imports: [CommonModule, AppMaterialModule]
})
export class CafeModule {}
