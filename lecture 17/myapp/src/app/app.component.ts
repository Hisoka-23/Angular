import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  title = '';

  msg:string='Default value';

  constructor(){
    //Here we write the code of the following things:
    //1. It is used to initalize the some value into the property.
    //2. Inside the constructor we aslo write the code.
    // to invoke the services.
    this.title='Life Cycle Hocks';
    console.log('---inside the constructor---');
  }

  someChange(){
    this.msg='prakash';
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('---inside the ngOnChanges method---');
    
  }

}
