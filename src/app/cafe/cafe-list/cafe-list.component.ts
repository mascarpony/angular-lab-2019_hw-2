import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";
import { Increment } from "../../interfaces/incrementPayload";
import { Legend } from "src/app/interfaces/legend";

@Component({
  selector: "app-cafe-list",
  templateUrl: "./cafe-list.component.html",
  styleUrls: ["./cafe-list.component.scss"]
})
export class CafeListComponent implements OnInit {
  @Input() legends: Legend[];
  @Output() changeNotify: EventEmitter<Increment> = new EventEmitter<Increment>();

  onChange(event: Increment): void {
    console.log(event);
    this.changeNotify.emit(event);
  }
  ngOnInit() {
    console.log(this.legends);
  }

}
