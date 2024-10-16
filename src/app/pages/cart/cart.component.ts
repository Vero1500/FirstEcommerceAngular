import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "../../models/cart.model";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { CartService } from "../../services/cart.service";
import { HttpClient } from "@angular/common/http";
import { loadStripe } from "./../../../../node_modules/@stripe/stripe-js/pure.d";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  // template: `
  //   <p>
  //     cart works!
  //   </p>
  // `,
  templateUrl: "./cart.component.html",
  styles: ``,
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
        id: 2,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.http
      .post("http://localhost:4242/checkout", {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          "pk_test_51QARgrCo6hnsJgDTr9uLyTOgu2Jh7TupzygmOreccqS9NvFDLA0kxreRAzpX0zAYIZQG8VL3aHh0rOcle0t50Nom00K3ggE5vn"
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
