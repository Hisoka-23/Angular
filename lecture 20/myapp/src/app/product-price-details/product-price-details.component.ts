import { Component } from '@angular/core';

@Component({
  selector: 'app-product-price-details',
  standalone: true,
  imports: [],
  templateUrl: './product-price-details.component.html',
  styleUrl: './product-price-details.component.css'
})
export class ProductPriceDetailsComponent {

  product:Prodcut[]=[];

  constructor(){

  }

}

interface Prodcut{
  pid:number;
  pname:string;
  price:number;
}
