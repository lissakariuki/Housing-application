import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home } from './home/home';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [Home, RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   title = 'homes';
}
