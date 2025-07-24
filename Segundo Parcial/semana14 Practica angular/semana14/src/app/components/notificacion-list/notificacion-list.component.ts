// Creado por Reyes Vinces Jeremy Daniel
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notificacion } from '../../models/notificacion.model';
import { CommonModule } from '@angular/common';
import { NotificacionCardComponent } from '../notificacion-card/notificacion-card.component';

@Component({
  selector: 'app-notificacion-list',
  standalone: true,
  templateUrl: './notificacion-list.component.html',
  styleUrls: ['./notificacion-list.component.css'],
  imports: [CommonModule, NotificacionCardComponent]
})
export class NotificacionListComponent {
  @Input() notificaciones: Notificacion[] = [];

  @Output() editar = new EventEmitter<Notificacion>();
  @Output() eliminar = new EventEmitter<number>();

  onEditar(notificacion: Notificacion) {
    this.editar.emit(notificacion);
  }

  onEliminar(id: number) {
    this.eliminar.emit(id);
  }
}
