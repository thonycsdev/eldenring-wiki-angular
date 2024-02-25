import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Weapon } from '../../../types/weapons';
import WeaponsService from './weapons.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
 public weapons: Weapon[] = [];
  private readonly service: WeaponsService = inject(WeaponsService)


  constructor(){
    this.service.fetchWeaponsData().then(x => this.weapons = x);
  }
}
