import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionViewComponent } from './notificacion-view.component';

describe('NotificacionViewComponent', () => {
  let component: NotificacionViewComponent;
  let fixture: ComponentFixture<NotificacionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
