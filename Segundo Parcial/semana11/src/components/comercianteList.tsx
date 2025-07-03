import type { Comerciante } from "../types/comerciante";
import ComercianteCard from "./ComercianteCard";

// FUE HECHO POR LEO HOLGUIN
interface Props {
  comerciantes: Comerciante[];
  onEdit: (comerciante: Comerciante) => void;
  onDelete: (id: string) => void;
}

export default function ComercianteList({ comerciantes, onEdit, onDelete }: Props) {
  return (
    <div>
      <h2>Lista de Comerciantes</h2>
      {comerciantes.map((inc) => (
        <ComercianteCard
          key={inc.id_comerciante}
          comerciante={inc}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
