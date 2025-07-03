// FUE HECHO POR NEYSSER DELGADO MEZA
export interface Incidencia {
  id_incidencia: number;
  descripcion: string;
  fecha: string;
  estado: string; // pendiente, abierto, resuelto
  id_comerciante: number;
}

export type CreateIncidenciaInput = Omit<Incidencia, 'id_incidencia'>;
