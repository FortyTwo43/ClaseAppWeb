import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercianteListComponent } from './comerciante-list.component';

describe('ComercianteListComponent', () => {
  let component: ComercianteListComponent;
  let fixture: ComponentFixture<ComercianteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercianteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercianteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
