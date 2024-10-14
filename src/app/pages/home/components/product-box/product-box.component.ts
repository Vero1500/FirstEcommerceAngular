import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Product } from "../../../../models/product.model";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  // template: `
  //   <p>
  //     product-box works!
  //   </p>
  // `,
  templateUrl: "./product-box.component.html",
  styles: ``,
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "Snickers",
    price: 150,
    category: "shoes",
    description: "description",
    image: "https://via.placeholder.com/150",
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
