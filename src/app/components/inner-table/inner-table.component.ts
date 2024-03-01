import { Component, Input } from "@angular/core";
import { Weapon } from "../../../types/weapons";
import { CommonModule, NgFor } from "@angular/common";

@Component({
	selector: "app-inner-table",
	standalone: true,
	imports: [NgFor, CommonModule],
	templateUrl: "./inner-table.component.html",
	styleUrl: "./inner-table.component.css",
})
export class InnerTableComponent {
	@Input() weapon: Weapon = {} as Weapon;
}
