import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import type { Incidencia } from '../../models/incidencia.model';
import { CommonModule } from '@angular/common';
import { IncidenciaCardComponent } from '../incidencia-card/incidencia-card.component';

@Component({
  selector: 'app-incidencia-list',
  standalone: true,
  templateUrl: './incidencia-list.component.html',
  styleUrls: ['./incidencia-list.component.css'],
  imports: [CommonModule, IncidenciaCardComponent]
})
export class IncidenciaListComponent implements OnInit {
  @Input() incidencias: Incidencia[] = [];

  @Output() editar = new EventEmitter<Incidencia>();
  @Output() eliminar = new EventEmitter<number>();

  ngOnInit() {
    
  }

  onEditar(incidencia: Incidencia) {
    this.editar.emit(incidencia);
  }

  onEliminar(id: number) {
    this.eliminar.emit(id);
  }
}
