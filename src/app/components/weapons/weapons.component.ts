import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Weapon } from '../../../types/weapons';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
 public readonly weapons: Weapon = {} as Weapon


}
