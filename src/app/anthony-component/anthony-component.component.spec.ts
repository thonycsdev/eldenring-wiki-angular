import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthonyComponentComponent } from './anthony-component.component';

describe('AnthonyComponentComponent', () => {
  let component: AnthonyComponentComponent;
  let fixture: ComponentFixture<AnthonyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnthonyComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnthonyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
