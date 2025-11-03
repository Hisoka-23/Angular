import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from "./pages/ng-if/ng-if";
import { NgFor } from "./pages/ng-for/ng-for";
import { NgClass } from "./pages/ng-class/ng-class";
import { NgStyle } from "./pages/ng-style/ng-style";
import { ControlStatement } from "./pages/control-statement/control-statement";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, NgClass, NgStyle, ControlStatement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular19Tutorial');
}
