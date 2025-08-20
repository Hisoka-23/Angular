import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { Child2Component } from "./child2/child2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ChildComponent, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  msg:string='Default Value';
  
  constructor(){
    this.title='Life Cycle Hooks';
    console.log('---inside the constructor---');
  }

  someChange(){
    this.msg="ZDS infoTech";
  }
}
