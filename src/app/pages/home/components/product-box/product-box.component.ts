import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

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
}
