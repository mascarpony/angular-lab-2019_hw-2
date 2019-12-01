import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Increment } from "../../interfaces/incrementPayload";
import { Legend } from "src/app/interfaces/legend";
import { Observable, Subscription } from "rxjs";
import { ConfigService } from "src/app/services/config/config.service";

@Component({
  selector: "app-cafe-list",
  templateUrl: "./cafe-list.component.html",
  styleUrls: ["./cafe-list.component.scss"]
})
export class CafeListComponent implements OnInit {
  private sub: Subscription;
  legends$: Observable<Legend[]>;
  // legends$: Observable<Legend>;
  @Output() changeNotifyParent: EventEmitter<Increment> = new EventEmitter<
    Increment
  >();

  constructor(private configService: ConfigService) {}

  onChange(event: Increment): void {
    this.changeNotifyParent.emit(event);
  }
  ngOnInit() {
    this.legends$ = this.configService.legends$;
  }
}
