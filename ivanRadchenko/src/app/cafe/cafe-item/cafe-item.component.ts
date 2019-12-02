import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Actions } from "../../interfaces/actions";
import { Legend } from "src/app/interfaces/legend";
import { Observable } from "rxjs";
import { LegendCart } from "src/app/interfaces/legendCart";

@Component({
  selector: "app-cafe-item",
  templateUrl: "./cafe-item.component.html",
  styleUrls: ["./cafe-item.component.scss"]
})
export class CafeItemComponent implements OnInit {
  @Input() card$: Observable<Legend>;
  @Output()
  changeNotify: EventEmitter<LegendCart> = new EventEmitter<LegendCart>();

  public imgStyle;
  public counter = 0;
  public price = Math.floor(1 + Math.random() * 10);
  public id: string;
  public title: string;
  public description: string;
  public imgUrl: string;

  constructor() {}

  ngOnInit() {
    this.card$.subscribe(legend => this.populateLegendInfo(legend));
  }

  populateLegendInfo(legend: Legend): void {
    this.id = legend.id;
    this.title = legend.title;
    this.description = legend.blurb;
    this.imgUrl = legend.imgUrl;
    this.imgStyle = {
      background: "url(" + this.imgUrl + ") no-repeat",
      "background-size": "contain"
    };
  }

  increment(): void {
    this.counter += 1;
    this.changeNotify.emit(this.preparePayload(Actions.Increment));
  }

  decrement(): void {
    if (this.counter === 0) {
      return;
    }
    this.counter -= 1;
    this.changeNotify.emit(this.preparePayload(Actions.Decrement));
  }

  private preparePayload(action: string): LegendCart {
    return {
      price: this.price,
      count: this.counter,
      id: this.id,
      title: this.title,
      name: this.id,
      action
    };
  }
}
