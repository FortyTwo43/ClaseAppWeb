import { Injectable } from '@angular/core';
import { Notificacion } from '../models/notificacion.model';

//Hecho por Reyes Vinces Jeremy Daniel
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private notificaciones: Notificacion[] = [
    {
      id_notificacion: 1,
      titulo: 'Bienvenido',
      mensaje: 'Gracias por registrarte',
      fecha_envio: '2025-07-24',
      id_comerciante: 1
    }
  ];

  constructor() {}

  getAll(): Notificacion[] {
    return [...this.notificaciones];
  }

  getById(id: number): Notificacion | undefined {
    return this.notificaciones.find(n => n.id_notificacion === id);
  }

  create(data: Partial<Notificacion>): Notificacion {
    const nueva: Notificacion = {
      id_notificacion: Math.max(0, ...this.notificaciones.map(n => n.id_notificacion)) + 1,
      titulo: data.titulo || '',
      mensaje: data.mensaje || '',
      fecha_envio: data.fecha_envio || new Date().toISOString().split('T')[0],
      id_comerciante: data.id_comerciante ?? 0
    };
    this.notificaciones.push(nueva);
    return nueva;
  }

  update(id: number, data: Partial<Notificacion>): Notificacion | null {
    const idx = this.notificaciones.findIndex(n => n.id_notificacion === id);
    if (idx !== -1) {
      this.notificaciones[idx] = { ...this.notificaciones[idx], ...data };
      return this.notificaciones[idx];
    }
    return null;
  }

  delete(id: number): void {
    this.notificaciones = this.notificaciones.filter(n => n.id_notificacion !== id);
  }
}
