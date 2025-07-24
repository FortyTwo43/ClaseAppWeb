import { Injectable } from '@angular/core';
import { Incidencia } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  private incidencias: Incidencia[] = [
    {
      id_incidencia: 1,
      descripcion: 'Incidencia de prueba 1',
      fecha: '2025-07-01',
      estado: 'Abierta',
      id_comerciante: 1
    },
    {
      id_incidencia: 2,
      descripcion: 'Incidencia de prueba 2',
      fecha: '2025-07-02',
      estado: 'Cerrada',
      id_comerciante: 2
    }
  ];

  constructor() { }

  getIncidencias(): Incidencia[] {
    return [...this.incidencias];
  }

  addIncidencia(data: Partial<Incidencia>): Incidencia {
    const nuevo: Incidencia = {
      ...data,
      id_incidencia: Math.max(0, ...this.incidencias.map(i => Number(i.id_incidencia))) + 1,
      descripcion: data.descripcion || '',
      fecha: data.fecha || '',
      estado: data.estado || '',
      id_comerciante: data.id_comerciante ?? 0
    };
    this.incidencias.push(nuevo);
    return nuevo;
  }

  updateIncidencia(data: Partial<Incidencia>): Incidencia | null {
    if (!data.id_incidencia) return null;
    const idx = this.incidencias.findIndex(i => i.id_incidencia === data.id_incidencia);
    if (idx !== -1) {
      this.incidencias[idx] = { ...this.incidencias[idx], ...data };
      return this.incidencias[idx];
    }
    return null;
  }

  deleteIncidencia(id: number): void {
    this.incidencias = this.incidencias.filter(i => i.id_incidencia !== id);
  }
}