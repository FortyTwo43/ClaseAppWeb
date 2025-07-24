import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaCardComponent } from './incidencia-card.component';

describe('IncidenciaCardComponent', () => {
  let component: IncidenciaCardComponent;
  let fixture: ComponentFixture<IncidenciaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
