import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnChanges {
    @Input('msg')msg:string='';
  
    constructor(){
      console.log('--- inside the child2 constructor---');
      
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('--inside the child2 onChange methods--');
      
    }
}
