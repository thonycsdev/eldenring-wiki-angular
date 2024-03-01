import { HttpClient } from "@angular/common/http";
import { Weapon } from "../../../types/weapons";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
@Injectable({
	providedIn: "root",
})
export default class WeaponsService {
	private readonly URL = "https://eldenring.fanapis.com/api/weapons";
	private readonly URL_FETCH_PAGE_ONE = "https://eldenring.fanapis.com/api/weapons?limit=18&page=4";
	constructor(private http: HttpClient) {}

	fetchWeaponsData(): Observable<Weapon[]> {
		const result = this.http
			.get<any>(this.URL_FETCH_PAGE_ONE)
			.pipe(map((r) => r.data))
			.pipe(map((r: Weapon[]) => r));
		return this.normalizeWeaponData(result);
	}
	fetchWeaponById(id: string): Observable<Weapon> {
		const urlWithWeaponId = this.URL + "/" + id;
		return this.http.get<any>(urlWithWeaponId).pipe(map((r) => r.data));
	}

	private normalizeWeaponData(input: Observable<any>) {
		const normalizedData: Observable<Weapon[]> = input.pipe(
			map((r) => {
				return r.map((weapon: any) => {
					return {
						...weapon,
						scalesWith: weapon.scalesWith.map((s: any) => {
							return {
								name: s.name,
								amount: s.scaling,
							};
						}),
					};
				});
			}),
		);
		return normalizedData;
	}
}
