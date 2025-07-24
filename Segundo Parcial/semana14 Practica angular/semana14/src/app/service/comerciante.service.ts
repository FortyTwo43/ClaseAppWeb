import { Injectable } from '@angular/core';
import { Comerciante } from '../models/comerciante.model';

@Injectable({
  providedIn: 'root'
})
export class ComercianteService {
  private comerciantes: Comerciante[] = [
    {
      id_comerciante: 1,
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      telefono: '555-1234',
      direccion: 'Calle Falsa 123',
      habilitado: true
    },
    {
      id_comerciante: 2,
      nombre: 'Ana López',
      email: 'ana@example.com',
      telefono: '555-5678',
      direccion: 'Avenida Siempre Viva 742',
      habilitado: false
    }
  ];

  constructor() { }

  getComerciantes(): Comerciante[] {
    return [...this.comerciantes];
  }

  addComerciante(data: Partial<Comerciante>): Comerciante {
    const nuevo: Comerciante = {
      ...data,
      id_comerciante: Math.max(0, ...this.comerciantes.map(c => Number(c.id_comerciante))) + 1,
      nombre: data.nombre || '',
      email: data.email || '',
      telefono: data.telefono || '',
      direccion: data.direccion || '',
      habilitado: data.habilitado ?? true
    };
    this.comerciantes.push(nuevo);
    return nuevo;
  }

  updateComerciante(data: Partial<Comerciante>): Comerciante | null {
    if (!data.id_comerciante) return null;
    const idx = this.comerciantes.findIndex(c => c.id_comerciante === data.id_comerciante);
    if (idx !== -1) {
      this.comerciantes[idx] = { ...this.comerciantes[idx], ...data };
      return this.comerciantes[idx];
    }
    return null;
  }

  deleteComerciante(id: number): void {
    this.comerciantes = this.comerciantes.filter(c => c.id_comerciante !== id);
  }
}
