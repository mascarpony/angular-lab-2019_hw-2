import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatBadgeModule,
  MatTableModule,
  MatMenuModule,
  MatSliderModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule
  ]
})
export class NgmaterialModule { }
