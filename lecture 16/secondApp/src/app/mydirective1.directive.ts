import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective1]',
  standalone: true
})
export class Mydirective1Directive implements OnInit {

  constructor(private e:ElementRef, private render:Renderer2) { 

  }
  ngOnInit(): void {
    this.e.nativeElement.style.color='brown';
  }

  @HostListener('click') show(event:Event){
    this.render.setStyle(this.e.nativeElement, 'color', 'red');
  }

}
