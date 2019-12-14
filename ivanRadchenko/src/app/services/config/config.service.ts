import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Champion } from "src/app/interfaces/champions";
import { Observable, BehaviorSubject, of } from "rxjs";
import { Legend } from "src/app/interfaces/legend";
import { LegendCart } from "src/app/interfaces/legendCart";

@Injectable({ providedIn: "root" })
export class ConfigService {
  configUrl = "../../assets/champion.json";

  private legendsSouce$: Observable<Observable<Legend>[]>;
  public legends$: BehaviorSubject<any> = new BehaviorSubject([]);

  private cart: BehaviorSubject<LegendCart[]> = new BehaviorSubject<
  LegendCart[]
  >([]);
  public cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) {
    this.fetchLegends();
  }

  private fetchLegends(): void {
    this.http.get(this.configUrl).pipe(
      map((data: Champion) => {
        return Object.values(data.data);
      }),
      map((legends: Legend[]) =>
        legends.map(legend => {
          legend.imgUrl = this.setImgUrl(legend);
          legend.price = Math.floor(1 + Math.random() * 10);
          return of(legend);
        })
      )
    ).subscribe(legends => this.legends$.next(legends));
  }

  private setImgUrl(legend: Legend) {
    const imgUrl = `../../assets/heroes/${legend.id}_1.jpg`;
    return imgUrl;
  }

  getCart(): Observable<LegendCart[]> {
    return this.cart.asObservable();
  }

  addToCart(product: LegendCart): void {
    const cart = this.cart.getValue();
    const productIdx = cart.findIndex(item => item.id === product.id);
    if (productIdx !== -1) {
      cart[productIdx].count += 1;
      cart[productIdx].price += product.price;
    } else {
      cart.push({ ...product, count: 1 });
    }
    this.cart.next(cart);
  }

  removeFromCart(cartItem: LegendCart): void {
    this.cart.next(
      this.cart.getValue().filter(item => item.id !== cartItem.id)
    );
  }
}
