import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anatasia-component',
  standalone: true,
  imports: [],
  templateUrl: './anatasia-component.component.html',
  styleUrl: './anatasia-component.component.css',
})
export class AnatasiaComponentComponent {
  @Input() name: string = '';
}
