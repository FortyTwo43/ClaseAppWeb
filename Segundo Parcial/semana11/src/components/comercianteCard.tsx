import type { Comerciante } from "../types/comerciante";

// FUE HECHO POR LEO HOLGUIN
interface Props {
  comerciante: Comerciante;
  onEdit: (comerciante: Comerciante) => void;
  onDelete: (id: string) => void;
}

export default function ComercianteCard({ comerciante, onEdit, onDelete }: Props) {
  return (
    <div className="comerciante">
      <h3>Comerciante #{comerciante.id_comerciante}</h3>
      <p><strong>Nombre:</strong> {comerciante.nombre}</p>
      <p><strong>Email:</strong> {comerciante.email}</p>
      <p><strong>Teléfono:</strong> {comerciante.telefono}</p>
      <p><strong>Dirección:</strong> {comerciante.direccion}</p>
      <p><strong>Habilitado:</strong> {comerciante.habilitado}</p>

      <button onClick={() => onEdit(comerciante)}>Editar</button>
      <button onClick={() => onDelete(comerciante.id_comerciante)}>Eliminar</button>
    </div>
  );
}
