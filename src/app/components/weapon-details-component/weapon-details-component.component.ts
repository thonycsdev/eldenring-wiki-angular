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
    this.defineWeaponIdOnReload();
    this.fetchCurrentWeaponData();
  }


  private defineWeaponIdOnReload(){
    const weaponId = this.router.snapshot.params["id"];
    const storedValue = localStorage.getItem("weaponId");
    if (weaponId === storedValue) {
      this.weaponId = weaponId;
      return;
    }
    if(weaponId && weaponId != storedValue){
      localStorage.setItem("weaponId", weaponId);
      this.weaponId = weaponId;
      return;
    }
    if(!storedValue){
      localStorage.setItem("weaponId", weaponId);
      this.weaponId = weaponId;
      return;
    }
    if(!weaponId){
      this.weaponId = storedValue;
      return;
    }
  }
  private fetchCurrentWeaponData(){
    this.service
      .fetchWeaponById(this.weaponId)
      .then((r) => {
        this.weapon = r;
        console.log(r);
      });
  }
}
