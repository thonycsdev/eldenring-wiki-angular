import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { Weapon } from "../../../types/weapons";
import WeaponsService from "./weapons.service";
import { NgFor } from "@angular/common";
import { PaginationComponentComponent } from "../pagination-component/pagination-component.component";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-weapons",
	standalone: true,
	imports: [CardComponent, NgFor, PaginationComponentComponent, RouterModule],
	templateUrl: "./weapons.component.html",
	styleUrl: "./weapons.component.css",
})
export class WeaponsComponent {
	public weapons: Weapon[] = [];
	public filteredWeapons: Weapon[] = [];
	public searchTerm: string = "";
	constructor(private weaponsService: WeaponsService) {}

	ngOnInit() {
		this.weaponsService.fetchWeaponsData().subscribe((r) => {
			this.filteredWeapons = r;
			this.weapons = [...r];
		});
	}
	filterByTerm(event: Event) {
		this.searchTerm = (event.target as HTMLInputElement).value;
		this.filteredWeapons = [...this.weapons].filter((x) => x.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
	}
}
