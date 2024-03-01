import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RequirementsTableComponent } from "./requirements-table.component";

describe("RequirementsTableComponent", () => {
	let component: RequirementsTableComponent;
	let fixture: ComponentFixture<RequirementsTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RequirementsTableComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RequirementsTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
