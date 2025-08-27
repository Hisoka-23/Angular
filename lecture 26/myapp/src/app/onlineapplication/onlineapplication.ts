import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-onlineapplication',
  standalone: true,
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './onlineapplication.html',
  styleUrl: './onlineapplication.css'
})
export class Onlineapplication {

}
