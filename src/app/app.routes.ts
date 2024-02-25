import { Routes } from '@angular/router';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { SpellsComponent } from './components/spells/spells.component';
import { ArmorComponent } from './components/armor/armor.component';

export const routes: Routes = [
  {path: "weapons", component: WeaponsComponent},
  {path: "spells", component: SpellsComponent},
  {path: "armor", component: ArmorComponent}
];
