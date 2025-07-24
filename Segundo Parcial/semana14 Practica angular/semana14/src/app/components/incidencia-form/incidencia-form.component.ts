import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import type { Incidencia } from '../../models/incidencia.model.ts'; // Ajusta la ruta si es necesario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incidencia-form',
  standalone: true,
  templateUrl: './incidencia-form.component.html',
  styleUrls: ['./incidencia-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class IncidenciaFormComponent implements OnChanges{
  @Input() incidencia?: Incidencia;
  @Output() submit = new EventEmitter<Partial<Incidencia>>();

  formData: Partial<Incidencia> = {
    descripcion: '',
    fecha: '',
    estado: '',
    id_comerciante: 0,
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['incidencia']) {
      if (this.incidencia) {
        this.formData = { ...this.incidencia };
      } else {
        this.formData = {
          descripcion: '',
          fecha: '',
          estado: '',
          id_comerciante: 0,
        };
      }
    }
  }

  onSubmit() {
    this.submit.emit({ ...this.formData });
  }
}
