import { HttpClient } from "@angular/common/http";
import { Weapon } from "../../../types/weapons";
import { Injectable } from "@angular/core";
import {
  Observable,
  Subscribable,
  map,
} from "rxjs";
@Injectable({
  providedIn: "root",
})
export default class WeaponsService {
  private readonly URL =
    "https://eldenring.fanapis.com/api/weapons";
  private readonly URL_FETCH_PAGE_ONE =
    "https://eldenring.fanapis.com/api/weapons?limit=18&page=4";
  constructor(private http: HttpClient) {}

  fetchWeaponsData(): Observable<Weapon[]> {
    return this.http
      .get<any>(this.URL_FETCH_PAGE_ONE)
      .pipe(map((r) => r.data));
  }
  fetchWeaponById(
    id: string
  ): Observable<Weapon> {
    const urlWithWeaponId = this.URL + "/" + id;
    return this.http
      .get<any>(urlWithWeaponId)
      .pipe(map((r) => r.data));
  }
}
