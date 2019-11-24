import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ConfigService } from "../../services/config/config.service";
import { Champion } from "../../interfaces/champions";
import { Increment } from "../../interfaces/incrementPayload";
import { CommunicatorService } from "../services/communicator.service";

@Component({
  selector: "app-cafe-container",
  templateUrl: "./cafe-container.component.html",
  styleUrls: ["./cafe-container.component.scss"]
})
export class CafeContainerComponent implements OnInit, AfterViewInit {
  public products: Champion[] = [];
  public cardCounter: string;
  public totalPrice: number = 0;

  constructor(
    private configService: ConfigService,
    private legendCommunicatorService: CommunicatorService
  ) {}

  ngOnInit() {
    this.showConfig();
  }

  ngAfterViewInit() {
    this.legendCommunicatorService.publishLegends(this.products);
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
