import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Weapon } from "../../../types/weapons";

@Component({
	selector: "app-scale-table",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./scale-table.component.html",
	styleUrl: "./scale-table.component.css",
})
export class ScaleTableComponent {
	@Input() weapon: Weapon = {} as Weapon;
}
