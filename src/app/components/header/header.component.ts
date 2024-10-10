import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from "@angular/common";
// import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    CommonModule,
    // MatButtonModule,
  ],
  // template: `
  //   <p>
  //     header works!
  //   </p>
  // `,
  // styles: ``
  templateUrl: "./header.component.html",
})
export class HeaderComponent {}
