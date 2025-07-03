import type { Incidencia } from "../types/incidencia";

// FUE HECHO POR NEYSSER DELGADO MEZA
interface Props {
  incidencia: Incidencia;
  onEdit: (incidencia: Incidencia) => void;
  onDelete: (id: number) => void;
}

export default function IncidenciaCard({ incidencia, onEdit, onDelete }: Props) {
  return (
    <div className="incidencia">
      <h3>Incidencia #{incidencia.id_incidencia}</h3>
      <p><strong>Descripción:</strong> {incidencia.descripcion}</p>
      <p><strong>Fecha:</strong> {incidencia.fecha}</p>
      <p><strong>Estado:</strong> {incidencia.estado}</p>
      <p><strong>ID Comerciante:</strong> {incidencia.id_comerciante}</p>
      <button onClick={() => onEdit(incidencia)}>Editar</button>
      <button onClick={() => onDelete(incidencia.id_incidencia)}>Eliminar</button>
    </div>
  );
}
