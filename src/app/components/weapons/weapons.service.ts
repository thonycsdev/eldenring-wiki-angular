import { Weapon } from "../../../types/weapons";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export default class WeaponsService {
  private readonly URL = "https://eldenring.fanapis.com/api/weapons?limit=18&page=4";

  async fetchWeaponsData(): Promise<Weapon[]> {
    const result = await fetch(this.URL).then(
      (r) => r.json()
    );
    return result.data as Weapon[];
  }
}
