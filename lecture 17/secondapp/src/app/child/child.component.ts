import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {

  @Input('msg')msg:string='';

  constructor(){
    console.log('--- inside the child constructor---');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('--inside the child onChange methods--');
    
  }

}
