import type { Notificacion } from "../types/notificaciones";

// FUE HECHO POR REYES JEREMY
interface Props {
  notificacion: Notificacion;
  onEdit?: (notificacion: Notificacion) => void;
  onDelete?: (id: number) => void;
onSubmit: (data: Notificacion | Notificacion) => void;

}

export default function NotificacionesCard({ notificacion, onEdit, onDelete }: Props) {
  return (
    <div className="notificacion">
      <h2>ID #{notificacion.id_notificacion}</h2>
      <p><strong>Título:</strong> {notificacion.titulo}</p>
      <p><strong>Mensaje:</strong> {notificacion.mensaje}</p>
      <p><strong>Fecha envío:</strong> {notificacion.fecha_envio}</p>
      <p><strong>ID Comerciante:</strong> {notificacion.id_comerciante}</p>
      
    </div>
  );
}
