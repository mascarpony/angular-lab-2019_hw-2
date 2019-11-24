import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Champion } from "src/app/interfaces/champions";

@Injectable()
export class CommunicatorService {
  private legendSource = new Subject<Champion[]>();

  public legends$ = this.legendSource.asObservable();

  publishLegends(legends: Champion[]) {
    this.legendSource.next(legends);
  }
}
