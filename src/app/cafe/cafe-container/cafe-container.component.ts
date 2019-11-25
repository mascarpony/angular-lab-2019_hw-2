import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../services/config/config.service";
import { Champion } from "../../interfaces/champions";
import { Increment } from "../../interfaces/incrementPayload";
import { Legend } from "src/app/interfaces/legend";

@Component({
  selector: "app-cafe-container",
  templateUrl: "./cafe-container.component.html",
  styleUrls: ["./cafe-container.component.scss"]
})
export class CafeContainerComponent implements OnInit {
  public products: Legend[] = [];
  public cardCounter: string;
  public totalPrice: number = 0;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig().subscribe((data: Champion) => {
      this.products = [...this.products, ...Object.values(data.data)];
      console.log(this.products);
      return this.products;
    });
  }

  changePrice(event: Increment) {
    event.action === "increment"
      ? (this.totalPrice += event.price)
      : (this.totalPrice -= event.price);
  }
}
