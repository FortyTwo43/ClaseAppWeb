import { useEffect } from "react";
import { useState } from "react";
import type { Notificacion } from "../types/notificaciones";
import NotificacionesCard from "./notificacionesCard";

//Fue hecho por: Reyes Jeremy
function NotificacionesList() {
    const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);

    useEffect(() => {
        const data: Notificacion[] = [
            {
                id: 1,
                titulo: "Bienvenido",
                mensaje: "Gracias por registrarte en nuestra plataforma."
            },
            {
                id: 2,
                titulo: "Actualización de cuenta",
                mensaje: "Tu cuenta ha sido actualizada exitosamente."
            },
            {
                id: 3,
                titulo: "Recordatorio",
                mensaje: "No olvides completar tu perfil para mejorar tu experiencia."
            }
        ];
        setTimeout(() => setNotificaciones(data), 100);
    }, []);

    return (
        <div className="notificaciones-list">
            <h1>Lista de Notificaciones</h1>
            {notificaciones.map((notificacion) => (
                <NotificacionesCard key={notificacion.id} notificacion={notificacion} />
            ))}
        </div>
    );
}
export default NotificacionesList;