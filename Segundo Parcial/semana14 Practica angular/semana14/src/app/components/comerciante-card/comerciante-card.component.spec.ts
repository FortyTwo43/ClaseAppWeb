import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercianteCardComponent } from './comerciante-card.component';

describe('ComercianteCardComponent', () => {
  let component: ComercianteCardComponent;
  let fixture: ComponentFixture<ComercianteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercianteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercianteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
