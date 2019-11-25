import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Increment } from "../../interfaces/incrementPayload";
import { Legend } from "src/app/interfaces/legend";

@Component({
  selector: "app-cafe-list",
  templateUrl: "./cafe-list.component.html",
  styleUrls: ["./cafe-list.component.scss"]
})
export class CafeListComponent implements OnInit {
  @Input() cards: Legend[];
  @Output() change: EventEmitter<Increment> = new EventEmitter<Increment>();

  ngOnInit() {}

  onChange(event: Increment): void {
    console.log(event);
    this.change.emit(event);
  }
}
