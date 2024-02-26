import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import WeaponsService from "../weapons/weapons.service";
import { Weapon } from "../../../types/weapons";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-weapon-details-component",
  standalone: true,
  imports: [NgFor],
  templateUrl:
    "./weapon-details-component.component.html",
  styleUrl:
    "./weapon-details-component.component.css",
})
export class WeaponDetailsComponentComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  weapon: Weapon = {} as Weapon;
  private readonly service: WeaponsService =
    inject(WeaponsService);
  weaponId: string = "";
  constructor() {
    this.weaponId =
      this.router.snapshot.params["id"];
  }

  ngOnInit() {
    this.service
      .fetchWeaponById(this.weaponId)
      .then((r) => {
        this.weapon = r;
        console.log(r);
      });
  }
}
