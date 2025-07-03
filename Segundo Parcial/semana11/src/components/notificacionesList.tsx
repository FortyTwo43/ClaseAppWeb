import type { Notificacion } from "../types/notificaciones";
import NotificacionesCard from "./notificacionesCard";

//Fue hecho por: Reyes Jeremy
interface Props {
  notificacionesList: Notificacion[];
  onEdit?: (notificacion: Notificacion) => void;
  onDelete?: (id: number) => void;
}

export default function NotificacionesList({ notificacionesList, onEdit, onDelete }: Props) {
    return (
    <div className="notificaciones-list">
      <h1>Lista de Notificaciones</h1>
      {notificacionesList.map((notificacion) => (   
        <NotificacionesCard
              key={notificacion.id_notificacion}
              notificacion={notificacion}
              onEdit={onEdit}
              onDelete={onDelete} onSubmit={function (): void {
                  throw new Error("Function not implemented.");
              } }/>
      ))}
    </div>
  );
}
