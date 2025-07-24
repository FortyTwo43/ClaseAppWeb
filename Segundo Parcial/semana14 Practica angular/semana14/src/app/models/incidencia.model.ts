// Hecho por Neysser Delgado Meza
export interface Incidencia {
  id_incidencia: number;
  descripcion: string;
  fecha: string;
  estado: string; // pendiente, abierto, resuelto
  id_comerciante: number;
}