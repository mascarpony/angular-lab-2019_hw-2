import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { Increment } from "../../interfaces/incrementPayload";
import { Subscription } from "rxjs";
import { CommunicatorService } from "../services/communicator.service";
import { Champion } from "src/app/interfaces/champions";

@Component({
  selector: "app-cafe-list",
  templateUrl: "./cafe-list.component.html",
  styleUrls: ["./cafe-list.component.scss"]
})
export class CafeListComponent implements OnInit, OnDestroy {
  public cards: Champion[];
  private sub: Subscription;
  @Output() change: EventEmitter<Increment> = new EventEmitter<Increment>();

  constructor(private legendCommunicatorService: CommunicatorService) {}

  ngOnInit() {
    this.sub = this.legendCommunicatorService.legends$.subscribe(
      (data: Champion[]) => (this.cards = data)
    );
  }

  onChange(event: Increment): void {
    console.log(event);
    this.change.emit(event);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
