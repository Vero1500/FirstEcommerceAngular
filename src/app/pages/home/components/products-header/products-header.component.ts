import { Component, EventEmitter, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-products-header",
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatIconModule],
  // template: `
  //   <p>
  //     products-header works!
  //   </p>
  // `,
  templateUrl: "./products-header.component.html",
  styles: ``,
})
export class ProductsHeaderComponent {
  @Output() columnCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNumb: number): void {
    this.columnCountChange.emit(colsNumb);
  }
}
