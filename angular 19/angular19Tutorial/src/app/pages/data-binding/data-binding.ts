import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  firstName: string = 'prakash';
  rollno: number = 101;
  isAcitve: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = 'Enter your name';
  div1ClassName: string= 'bg-primary';
  selectedCity: string='';

  constructor() {
    console.log(this.firstName);
    
    this.isAcitve = false;
    console.log(this.isAcitve);

    this.showWelcomeMessage();

  }

  showWelcomeMessage(): void{
    alert('Welcome to Angular 19 Data Binding Tutorial');
  }

  onCityChange(){
    console.log('City changed');
  }

}
