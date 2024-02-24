import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatasiaComponentComponent } from './anatasia-component.component';

describe('AnatasiaComponentComponent', () => {
  let component: AnatasiaComponentComponent;
  let fixture: ComponentFixture<AnatasiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatasiaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnatasiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
