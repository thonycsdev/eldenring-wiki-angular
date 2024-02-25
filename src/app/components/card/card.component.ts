import { Component, Input } from '@angular/core';
import { User } from '../../../types/user';
import { Weapon } from '../../../types/weapons';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() weapon: Weapon = {} as Weapon
}

