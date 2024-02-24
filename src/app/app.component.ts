import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AnthonyComponentComponent } from './anthony-component/anthony-component.component';
import { AnatasiaComponentComponent } from './components/anatasia-component/anatasia-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    FirstComponentComponent,
    AnthonyComponentComponent,
    AnatasiaComponentComponent,
    NavbarComponent,
    CardComponent
  ],
})
export class AppComponent {
  title = 'curso-angular';
  user: User = {
    id: 1,
    name: "Anthony",
    age: 25,
  };
}
