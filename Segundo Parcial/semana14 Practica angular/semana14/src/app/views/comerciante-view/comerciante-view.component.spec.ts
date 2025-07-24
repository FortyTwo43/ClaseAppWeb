import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercianteViewComponent } from './comerciante-view.component';

describe('ComercianteViewComponent', () => {
  let component: ComercianteViewComponent;
  let fixture: ComponentFixture<ComercianteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercianteViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercianteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
