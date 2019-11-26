import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ConfigService } from "../../services/config/config.service";
import { Champion } from "../../interfaces/champions";
import { Increment } from "../../interfaces/incrementPayload";
import { Legend } from "src/app/interfaces/legend";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-cafe-container",
  templateUrl: "./cafe-container.component.html",
  styleUrls: ["./cafe-container.component.scss"]
})
export class CafeContainerComponent {
  legends$: Observable<Legend[]> = this.configService
    .getConfig()
    .pipe(map((data: Champion) => [...Object.values(data.data)]));

  public cardCounter: string;
  public totalPrice = 0;
  public cartLegends = new Map();

  constructor(private configService: ConfigService) {}

  changePrice(event: Increment) {
    this.cartLegends.set(event.id, event);
    if (event.count === 0) {
      this.cartLegends.delete(event.id);
    }
    console.log(this.cartLegends);

    //Temp total price to watch for what we have
    event.action === "increment"
      ? (this.totalPrice += event.price)
      : (this.totalPrice -= event.price);
  }
}
