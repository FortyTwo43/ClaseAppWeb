import type { Incidencia } from "../types/incidencia";
import IncidenciaCard from "./incidenciaCard";


// FUE HECHO POR NEYSSER DELGADO MEZA
interface Props {
  incidencias: Incidencia[];
  onEdit: (incidencia: Incidencia) => void;
  onDelete: (id: number) => void;
}

export default function IncidenciaList({ incidencias, onEdit, onDelete }: Props) {
  return (
    <div>
      <h2>Lista de Incidencias</h2>
      {incidencias.map((inc) => (
        <IncidenciaCard
          key={inc.id_incidencia}
          incidencia={inc}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
