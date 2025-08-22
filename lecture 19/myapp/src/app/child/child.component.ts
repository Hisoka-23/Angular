import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy {

  constructor(){
    console.log('--inside the child component Constructor--');
  }

  ngOnInit(): void {
    console.log('--inside the child ngOnInit method--');
  }

  ngOnDestroy(): void {
    console.log('--inside the child ngOnDestroy method--');
  }

}
