import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import WeaponsService from "../weapons/weapons.service";
import { Weapon } from "../../../types/weapons";
import {
  CommonModule,
  NgFor,
} from "@angular/common";

@Component({
  selector: "app-weapon-details-component",
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl:
    "./weapon-details-component.component.html",
  styleUrl:
    "./weapon-details-component.component.css",
})
export class WeaponDetailsComponentComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  isLoading: boolean = true;
  weapon: Weapon = {} as Weapon;
  weaponId: string = "";
  constructor(private service: WeaponsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.router.params.subscribe(
      (params) => (this.weaponId = params["id"])
    );
    this.service
      .fetchWeaponById(this.weaponId)
      .subscribe((r) => {
        this.isLoading = false;
        this.weapon = r;
      });
    console.log({ Weapon: this.weapon });
  }
}
