import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, DoCheck {
  title = 'myapp';

  constructor(){
    console.log('--inside the App Component constructor--');
  }

  ngOnInit(): void{
    console.log('--inside the ngOnInit method--');
  }

  ngDoCheck(): void {
    console.log('--inside the DoCheck--');
  }

  show():void{
    console.log('--inside the show method--');
  }

}
