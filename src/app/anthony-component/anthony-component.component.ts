import { Component } from "@angular/core";
import { AnatasiaComponentComponent } from "../components/anatasia-component/anatasia-component.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { CardComponent } from "../components/card/card.component";
import { User } from "../../types/user";

@Component({
  selector: "app-anthony-component",
  standalone: true,
  imports: [
    AnatasiaComponentComponent,
    NavbarComponent,
    CardComponent,
  ],
  templateUrl:
    "./anthony-component.component.html",
  styleUrl: "./anthony-component.component.css",
})
export class AnthonyComponentComponent {
}
