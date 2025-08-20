import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyeventdirective]',
  standalone: true
})
export class MyeventdirectiveDirective implements OnInit {

  constructor(private e:ElementRef, private render:Renderer2) { 
    
  }

  ngOnInit(): void {
    this.e.nativeElement.style.color='green';
  }

  @HostListener('mouseover') mehtod1(event:Event){
    this.e.nativeElement.style.color='red';
  }

  @HostListener('mouseenter') mehtod2(event:Event){
    // this.e.nativeElement.style.color='yellow';
    this.render.setStyle(this.e.nativeElement, 'backgroundColor', 'black');
    this.render.setStyle(this.e.nativeElement, 'color', 'white');
  }

}
