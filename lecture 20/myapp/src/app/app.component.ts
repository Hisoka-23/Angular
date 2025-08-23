import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductPriceDetailsComponent } from "./product-price-details/product-price-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductDetailsComponent, ProductPriceDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
