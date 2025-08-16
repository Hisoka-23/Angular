import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';

  country:string="";

  // productName:string[]=["item1", "item2", "item3"];
  // productPrices:number[]=[20.0, 30.0, 40.0];
//   products=[
//   {
//     'id':'1001',
//     'name':'item1',
//     'img':'../assets/image1.avif',
//     'price':30.0,
//   },
//   {
//     'id':'1002',
//     'name':'item2',
//     'img':'../assets/image2.avif',
//     'price':40.0,
//   },
//   {
//     'id':'1003',
//     'name':'item3',
//     'img':'../assets/image3.avif',
//     'price':50.0,
//   },
//   {
//     'id':'1004',
//     'name':'item4',
//     'img':'../assets/image4.avif',
//     'price':60.0,
//   },
//   {
//     'id':'1005',
//     'name':'item5',
//     'img':'../assets/image5.avif',
//     'price':70.0,
//   }
// ];

  itemValue:string='';
  items:any=[];

  addItem(someData:any){
    this.items.push({
      item:someData.value
    });
  }

}
