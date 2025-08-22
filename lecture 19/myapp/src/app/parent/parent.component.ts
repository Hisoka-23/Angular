import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, DoCheck {

  flag:any=false;

  constructor(){
    console.log('--inside the parent component Constructor--');
  }

  ngOnInit(): void {
    console.log('--inside the parent ngOnInit method--');
  }

  performSomeAction():void{
    // this.flag=true;
    this.flag=!this.flag;
  }

  ngDoCheck(): void {
    console.log('--inside the parent ngDocheck method--');
  }

}
