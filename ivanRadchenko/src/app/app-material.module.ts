import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatBadgeModule,
  MatTableModule
} from "@angular/material";
import { MaterialElevationDirective } from "./diractives/material-elevation/material-elevation.directive";

@NgModule({
  declarations: [MaterialElevationDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule
  ]
})
export class AppMaterialModule {}
