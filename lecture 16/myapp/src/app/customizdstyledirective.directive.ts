import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomizdstyledirective]',
  standalone: true
})
export class CustomizdstyledirectiveDirective implements OnInit {

  constructor(private e :ElementRef) {
    
  }

  ngOnInit(): void {
    // this.e.nativeElement.style.backgroundColor='cyan';
    // this.e.nativeElement.style.color='red';
    
  }

}
