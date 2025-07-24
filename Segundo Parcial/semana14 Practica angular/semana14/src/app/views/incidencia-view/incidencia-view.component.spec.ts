import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaViewComponent } from './incidencia-view.component';

describe('IncidenciaViewComponent', () => {
  let component: IncidenciaViewComponent;
  let fixture: ComponentFixture<IncidenciaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
