import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	imports: [NavbarComponent, HttpClientModule, RouterModule],
})
export class AppComponent {}
