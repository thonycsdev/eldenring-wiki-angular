import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WeaponDetailsComponentComponent } from "./weapon-details-component.component";

describe("WeaponDetailsComponentComponent", () => {
	let component: WeaponDetailsComponentComponent;
	let fixture: ComponentFixture<WeaponDetailsComponentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WeaponDetailsComponentComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(WeaponDetailsComponentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
