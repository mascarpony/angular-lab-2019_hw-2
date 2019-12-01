import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Champion } from "src/app/interfaces/champions";
import { Observable, BehaviorSubject } from "rxjs";
import { Legend } from "src/app/interfaces/legend";

@Injectable({ providedIn: "root" })
export class ConfigService {
  configUrl = "../../assets/champion.json";

  private legendsDataSource$: Observable<Legend[]> = this.fetchLegends();
  public legends$ = this.legendsDataSource$;
  private cart: BehaviorSubject<Legend[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  fetchLegends(): Observable<Legend[]> {
    return this.http
      .get(this.configUrl)
      .pipe(map((data: Champion) => Object.values(data.data)));
  }

  // getCart(): Observable<Legend[]> {
  //   return this.cart.asObservable();
  // }

  // addToCart(legend: Legend): void {
  //   const cart = this.cart.getValue();
  //   const productIdx = cart.findIndex(item => item.id === legend.id);
  //   if (productIdx !== -1) {
  //     cart[productIdx].quantity += 1;
  //   } else {
  //     cart.push({ ...legend, quantity: 1 });
  //   }
  // }
}
