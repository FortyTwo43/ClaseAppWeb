import { Component, OnInit } from '@angular/core';
import { ComercianteFormComponent } from '../../components/comerciante-form/comerciante-form.component';
import { ComercianteListComponent } from '../../components/comerciante-list/comerciante-list.component';
import { CommonModule } from '@angular/common';
import { Comerciante } from '../../models/comerciante.model';
import { ComercianteService } from '../../service/comerciante.service';

@Component({
  selector: 'app-comerciante-view',
  standalone: true,
  imports: [CommonModule, ComercianteFormComponent, ComercianteListComponent],
  templateUrl: './comerciante-view.component.html',
  styleUrls: ['./comerciante-view.component.css']
})
export class ComercianteViewComponent implements OnInit {
  comerciantes: Comerciante[] = [];
  editando: Comerciante | null = null;

  constructor(private comercianteService: ComercianteService) {}

  ngOnInit() {
    this.comerciantes = this.comercianteService.getComerciantes();
  }

  handleCreateOrUpdate(data: Partial<Comerciante>) {
    if (data.id_comerciante) {
      this.comercianteService.updateComerciante(data);
    } else {
      this.comercianteService.addComerciante(data);
    }
    this.comerciantes = this.comercianteService.getComerciantes();
    this.editando = null;
  }

  handleEdit(comerciante: Comerciante) {
    this.editando = { ...comerciante };
  }

  handleDelete(id: number) {
    this.comercianteService.deleteComerciante(id);
    this.comerciantes = this.comercianteService.getComerciantes();
  }
}
