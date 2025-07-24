import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Incidencia } from "../../models/incidencia.model.ts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidencia-card',
  standalone: true,
  templateUrl: './incidencia-card.component.html',
  styleUrls: ['./incidencia-card.component.css'],
  imports: [CommonModule]
})
export class IncidenciaCardComponent {
  @Input() incidencia!: Incidencia;

  @Output() eliminar = new EventEmitter<number>();
  @Output() editar = new EventEmitter<Incidencia>();

      
  onEliminar(id: number) {
    this.eliminar.emit(id);
  }

  onEditar(incidencia: Incidencia) {
    this.editar.emit(incidencia);
  }
}
