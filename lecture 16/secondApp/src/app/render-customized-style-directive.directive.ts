import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderCustomizedStyleDirective]',
  standalone: true
})
export class RenderCustomizedStyleDirectiveDirective implements OnInit{

  constructor(private e: ElementRef, private render: Renderer2) {

    console.log(render);
    

  }

  ngOnInit(): void {
    this.render.setStyle(this.e.nativeElement, "backgroundColor", "prink");
    this.render.setStyle(this.e.nativeElement, "color", "red");
    this.render.setStyle(this.e.nativeElement, "font-size", "30px");
    this.render.setStyle(this.e.nativeElement, "text-align", "center");
    this.render.addClass(this.e.nativeElement, "myclass");
  }

}
