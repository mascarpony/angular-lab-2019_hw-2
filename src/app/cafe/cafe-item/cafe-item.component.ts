import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Increment } from "../../interfaces/incrementPayload";
import { Actions } from "../../interfaces/actions";

@Component({
  selector: "app-cafe-item",
  templateUrl: "./cafe-item.component.html",
  styleUrls: ["./cafe-item.component.scss"]
})
export class CafeItemComponent implements OnInit {
  @Input() card: any;
  @Output()
  change: EventEmitter<Increment> = new EventEmitter<Increment>();

  public imgUrl: string;
  public imgStyle;
  public counter: number = 0;
  public price: number = Math.floor(1 + Math.random() * 10);
  public totalPrice: number = this.counter * this.price;

  constructor() {}

  ngOnInit() {
    this.getImgUrl();
  }

  getImgUrl() {
    this.imgUrl = `../../assets/heroes/${this.card.id}_1.jpg`;
    this.imgStyle = {
      background: "url(" + this.imgUrl + ") no-repeat",
      "background-size": "contain"
    };
  }

  increment(): void {
    this.counter += 1;
    this.change.emit(this.preparePayload(Actions.Increment));
  }

  decrement(): void {
    if (this.counter === 0) return;
    this.counter -= 1;
    this.change.emit(this.preparePayload(Actions.Decrement));
  }

  private preparePayload(action: string): Increment {
    return {
      action: action,
      price: this.price
    };
  }
}
