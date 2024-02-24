import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name = 'Anthony';
  address = { street: 'SMPW' };
  favoritesGames = ['God of War', 'Elden Ring', 'Dark Souls'];
}
