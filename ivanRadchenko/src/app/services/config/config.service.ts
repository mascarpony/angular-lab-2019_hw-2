import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, mergeMap, switchMap } from "rxjs/operators";
import { Champion } from "src/app/interfaces/champions";
import { Observable, BehaviorSubject, of } from "rxjs";
import { Legend } from "src/app/interfaces/legend";

@Injectable({ providedIn: "root" })
export class ConfigService {
  configUrl = "../../assets/champion.json";

  private legendsDataSource$: Observable<
    Observable<Legend>[]
  > = this.fetchLegends();
  public legends$ = this.legendsDataSource$;
  private cart: BehaviorSubject<Legend[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  fetchLegends(): Observable<Observable<Legend>[]> {
    return this.http.get(this.configUrl).pipe(
      map((data: Champion) => {
        return Object.values(data.data);
      }),
      map((legends: Legend[]) =>
        legends.map(legend => {
          legend.imgUrl = this.setImgUrl(legend);
          return of(legend);
        })
      )
    );
  }

  setImgUrl(legend: Legend) {
    const imgUrl = `../../assets/heroes/${legend.id}_1.jpg`;
    return imgUrl;
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
