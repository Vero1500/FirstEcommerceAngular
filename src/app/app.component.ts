import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { Cart } from "./models/cart.model";

// import { BrowserModule } from "@angular/platform-browser";

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { HomeComponent } from './pages/home/home.component';

// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatGridListModule } from "@angular/material/grid-list";
// import { MatMenuModule } from "@angular/material/menu";
// import { MatButtonModule } from "@angular/material/button";
// import { MatCardModule } from "@angular/material/card";
// import { MatIconModule } from "@angular/material/icon";
// import { MatExpansionModule } from "@angular/material/expansion";
// import { MatTreeModule } from "@angular/material/tree";
// import { MatListModule } from "@angular/material/list";
// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatTableModule } from "@angular/material/table";
// import { MatBadgeModule } from "@angular/material/badge";
// import { MatSnackBarModule } from "@angular/material/snack-bar";

// import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
// import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
// import { FiltersComponent } from './pages/home/components/filters/filters.component';
// import { HeaderComponent } from './components/header/header.component';
// import { CartComponent } from './pages/cart/cart.component';
import { CartService } from "./services/cart.service";
// import { HttpClientModule } from '@angular/common/http';
// import { StoreService } from './services/store.service';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header [cart]="cart"></app-header>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  // title = "store";

  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
