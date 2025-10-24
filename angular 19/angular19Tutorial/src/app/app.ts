import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./pages/admin/admin";
import { User } from "./pages/user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular19Tutorial');
}
