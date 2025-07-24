import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../../models/incidencia.model';
import { IncidenciaService } from '../../service/incidencia.service';
import { CommonModule } from '@angular/common';
import { IncidenciaFormComponent } from '../../components/incidencia-form/incidencia-form.component';
import { IncidenciaListComponent } from '../../components/incidencia-list/incidencia-list.component';

@Component({
  selector: 'app-incidencia-view',
  standalone: true,
  templateUrl: './incidencia-view.component.html',
  styleUrls: ['./incidencia-view.component.css'],
  imports: [CommonModule, IncidenciaFormComponent, IncidenciaListComponent]
})
export class IncidenciaViewComponent implements OnInit {
  incidencias: Incidencia[] = [];
  editando: Incidencia | null = null;

  constructor(private incidenciaService: IncidenciaService) {
    this.incidencias = this.incidenciaService.getIncidencias();
  }

  ngOnInit(): void {
    // Inicializar o cargar datos si es necesario
  }

  handleCreateOrUpdate(data: Partial<Incidencia>) {
    if (data.id_incidencia) {
      // Actualizar
      const actualizada = this.incidenciaService.updateIncidencia(data);
      if (actualizada) {
        this.incidencias = this.incidenciaService.getIncidencias();
      }
    } else {
      // Crear
      const nueva = this.incidenciaService.addIncidencia(data);
      this.incidencias = this.incidenciaService.getIncidencias();
    }
    this.editando = null;
  }

  editar(incidencia: Incidencia) {
    this.editando = { ...incidencia };
  }

  eliminar(id: number) {
    this.incidenciaService.deleteIncidencia(id);
    this.incidencias = this.incidenciaService.getIncidencias();
    if (this.editando && this.editando.id_incidencia === id) {
      this.editando = null;
    }
  }
}
