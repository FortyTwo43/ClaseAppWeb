import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionCardComponent } from './notificacion-card.component';

describe('NotificacionCardComponent', () => {
  let component: NotificacionCardComponent;
  let fixture: ComponentFixture<NotificacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
