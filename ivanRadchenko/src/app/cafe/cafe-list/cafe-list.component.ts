import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Legend } from "src/app/interfaces/legend";
import { Observable, Subscription } from "rxjs";
import { ConfigService } from "src/app/services/config/config.service";
import { LegendCart } from "src/app/interfaces/legendCart";

@Component({
  selector: "app-cafe-list",
  templateUrl: "./cafe-list.component.html",
  styleUrls: ["./cafe-list.component.scss"]
})
export class CafeListComponent implements OnInit {
  private sub: Subscription;
  legends$: Observable<Observable<Legend>[]>;
  @Output() changeNotifyParent: EventEmitter<LegendCart> = new EventEmitter<
    LegendCart
  >();

  constructor(private configService: ConfigService) {}

  onChange(event: LegendCart): void {
    switch (event.action) {
      case "decrement":
        this.configService.removeFromCart(event);
        break;
      default:
        this.configService.addToCart(event);
        break;
    }
  }
  ngOnInit() {
    this.legends$ = this.configService.legends$;
  }
}
