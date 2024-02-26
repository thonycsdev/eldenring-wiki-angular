import { Component, Input } from '@angular/core';
import { Weapon } from '../../../types/weapons';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() weapon: Weapon = {} as Weapon
}

