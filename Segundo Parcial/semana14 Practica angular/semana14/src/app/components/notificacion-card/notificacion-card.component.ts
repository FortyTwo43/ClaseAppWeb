// Creado por Reyes Vinces Jeremy Daniel
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notificacion } from '../../models/notificacion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificacion-card',
  standalone: true,
  templateUrl: './notificacion-card.component.html',
  styleUrls: ['./notificacion-card.component.css'],
  imports: [CommonModule]
})
export class NotificacionCardComponent {
  @Input() notificacion!: Notificacion;

  @Output() editar = new EventEmitter<Notificacion>();
  @Output() eliminar = new EventEmitter<number>();

  onEditar() {
    this.editar.emit(this.notificacion);
  }

  onEliminar() {
    this.eliminar.emit(this.notificacion.id_notificacion);
  }
}
