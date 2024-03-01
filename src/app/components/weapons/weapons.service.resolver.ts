import { Weapon } from '../../../types/weapons';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import WeaponsService from './weapons.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class WeaponsServiceResolver implements Resolve<Weapon>{
  constructor(private weaponsService: WeaponsService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Weapon | Promise<Weapon> | Observable<Weapon> {
      return this.weaponsService.fetchWeaponById(route.params["id"])
    }
}
