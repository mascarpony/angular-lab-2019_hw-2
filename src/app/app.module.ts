import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";

import { HttpClientModule } from "@angular/common/http";

import { CafeModule } from "./cafe/cafe.module";
import { AppMaterialModule } from "./app-material/app-material.module";
import { ConfigService } from "./services/config/config.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CafeModule,
    AppMaterialModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
