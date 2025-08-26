import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'myapp';

  form:FormGroup;

  constructor(){
    this.form = new FormGroup({
      username:new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9]+"),Validators.minLength(3)]),
      password:new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9]+"),Validators.minLength(3)])
    });
  }

  login(){
    console.log(this.form.value);
    let username = this.form.value.username;

    let password = this.form.value.password;

    if(username === password) alert('valid');

    else alert('invalid');
  }

}
