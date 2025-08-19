import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  uname:string="prakash";

  @ViewChild('boxId')boxId:ElementRef={} as ElementRef;

  constructor(private rederer:Renderer2){

  }

  click():void{
    alert('yes it its working');
    console.log(this.boxId);
  //   this.boxId.nativeElement.style.color='red';
  //   this.boxId.nativeElement.style.backgroundColor='black';
  this.rederer.setStyle(this.boxId.nativeElement, "color", "white");
  this.rederer.setStyle(this.boxId.nativeElement, "backgroundColor", "red");
  }
}
