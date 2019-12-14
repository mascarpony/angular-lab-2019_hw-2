import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Legend } from "src/app/interfaces/legend";
import { ConfigService } from "src/app/services/config/config.service";

@Component({
  selector: "app-cafe-cart",
  templateUrl: "./cafe-cart.component.html",
  styleUrls: ["./cafe-cart.component.scss"]
})
export class CafeCartComponent implements OnInit {
  private sub: Subscription;
  dataSource = [];
  displayedColumns = ["seqNo", "description", "count", "price"];

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.sub = this.configService.cart$.subscribe(
      data => (this.dataSource = data)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
