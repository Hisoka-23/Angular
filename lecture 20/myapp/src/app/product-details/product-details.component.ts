import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import {  } from "../../assets/product.json";
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  products:Product[]=[];

  constructor(){
    
  }

}

interface Product{
  pid:number;
  pname:string;
  price:number;
}
