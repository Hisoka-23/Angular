import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  // imports: [FormsModule],
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  myColor:string="";
  myFont:string="";
  myClass:string="";

  // myColor:string="red";
  // location:string= "";


  action1():void{
    alert('from action1...!');
    // this.myColor="red";
    // this.myFont="30px";
    this.myClass="classA";
  }

  action2():void{
    alert('from action2...!');
    // this.myColor="blue";
    // this.myFont="40px";
    this.myClass="classB";
  }

}
