import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //property
  homePage:string="Welcome to zds infotech";
  firstName:string="Prakash";
  lastName:string="Raut";
  age:number=23;
  locationOfImage:string="image222.png";

  //methods
  action1():void{
    alert('Welcome to ZDS INFOTECH')
  }
}
