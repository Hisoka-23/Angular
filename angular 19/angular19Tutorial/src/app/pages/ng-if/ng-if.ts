import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {

  divVisible: boolean = false;

  hideDiv1(){
    this.divVisible = false;
  }

  showDiv1(){
    this.divVisible = true;
  }

}
