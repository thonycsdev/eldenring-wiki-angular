import { Component, Input } from "@angular/core";
import { Weapon } from "../../../types/weapons";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-requirements-table",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./requirements-table.component.html",
	styleUrl: "./requirements-table.component.css",
})
export class RequirementsTableComponent {
	@Input() weapon: Weapon = {} as Weapon;
}
