import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit,AfterViewInit {
  
  @ViewChild(ChildComponent)boxId:ChildComponent={} as ChildComponent;

  constructor(){
    this.boxId={} as ChildComponent;//empty object
    console.log('inside the constructor');
  }

  ngOnInit():void{
    console.log('inside the ngOnInit mehtod');
  }

  accessProperty():void{
    // this.boxId.click();
    // this.boxId.uname='zds infotect'
    console.log('inside the accessProperty');
    this.boxId.uname="Ashok It"
    
  }

  ngAfterViewInit(): void {
    console.log('inside the ngAfterViewInit');
    this.boxId.uname="hello world";
  }

}
