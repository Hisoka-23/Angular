import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RenderCustomizedStyleDirectiveDirective } from './render-customized-style-directive.directive';
import { MyeventdirectiveDirective } from './myeventdirective.directive';
import { Mydirective1Directive } from './mydirective1.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RenderCustomizedStyleDirectiveDirective, MyeventdirectiveDirective, Mydirective1Directive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondApp';
}
