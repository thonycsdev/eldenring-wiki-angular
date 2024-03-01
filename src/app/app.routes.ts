import { Routes } from "@angular/router";
import { WeaponsComponent } from "./components/weapons/weapons.component";
import { SpellsComponent } from "./components/spells/spells.component";
import { ArmorComponent } from "./components/armor/armor.component";
import { WeaponDetailsComponentComponent } from "./components/weapon-details-component/weapon-details-component.component";
import { WeaponsServiceResolver } from "./components/weapons/weapons.service.resolver";

export const routes: Routes = [
	{ path: "weapons", component: WeaponsComponent },
	{ path: "spells", component: SpellsComponent },
	{ path: "armor", component: ArmorComponent },
	{ path: "weapon/:id", component: WeaponDetailsComponentComponent, resolve: [WeaponsServiceResolver] },
];
