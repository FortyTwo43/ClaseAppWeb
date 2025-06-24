import type { Notificacion } from "../types/notificaciones";

// FUE HECHO POR REYES JEREMY

function NotificacionesCard({ notificacion }: { notificacion: Notificacion }) {
    return (
        <div className="notificacion">
            <h2>ID #{notificacion.id}</h2>
            <p><strong>Titulo:</strong> {notificacion.titulo}</p>
            <p><strong>Mensage:</strong> {notificacion.mensaje}</p>
        </div>
    );
}
export default NotificacionesCard;