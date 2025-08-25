import { ProductServiceService } from './product-service.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Procut } from './procut';
import { NgForOf } from "../../node_modules/@angular/common/index";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  providers: [ProductServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myapp';

  massage: string = '';

  products : Procut[]=[];

  constructor(private ProductService:ProductServiceService){
    console.log(this.ProductService);
  }

  ngOnInit(): void {
    this.massage = this.ProductService.greetingMessage();
    // console.log(this.ProductService.getData());
    this.ProductService.getData().subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
  }

}
