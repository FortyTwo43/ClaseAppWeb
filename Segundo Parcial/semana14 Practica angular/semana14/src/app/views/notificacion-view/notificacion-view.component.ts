import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notificacion } from '../../models/notificacion.model';
import { NotificacionService } from '../../service/notificacion.service';
import { NotificacionFormComponent } from '../../components/notificacion-form/notificacion-form.component';
import { NotificacionListComponent } from '../../components/notificacion-list/notificacion-list.component';

@Component({
  selector: 'app-notificacion-view',
  standalone: true,
  imports: [CommonModule, NotificacionFormComponent, NotificacionListComponent],
  templateUrl: './notificacion-view.component.html',
  styleUrls: ['./notificacion-view.component.css']
})
export class NotificacionViewComponent implements OnInit {
  notificaciones: Notificacion[] = [];
  editando: Notificacion | undefined = undefined;

  constructor(private notificacionService: NotificacionService) {}

  ngOnInit(): void {
    this.cargarNotificaciones();
  }

  cargarNotificaciones() {
    this.notificaciones = this.notificacionService.getAll();
  }

  handleCreateOrUpdate(data: Partial<Notificacion>) {
    if (data.id_notificacion) {
      this.notificacionService.update(data.id_notificacion, data);
    } else {
      this.notificacionService.create(data);
    }
    this.cargarNotificaciones();
    this.editando = undefined;
  }

  editar(notificacion: Notificacion) {
    this.editando = { ...notificacion };
  }

  eliminar(id: number) {
    this.notificacionService.delete(id);
    this.cargarNotificaciones();
    if (this.editando && this.editando.id_notificacion === id) {
      this.editando = undefined;
    }
  }
}
