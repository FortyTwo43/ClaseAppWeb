import type { Incidencia } from "../types/incidencia";

// FUE HECHO POR NEYSSER DELGADO MEZA
function IncidenciaCard({ incidencia }: { incidencia: Incidencia }) {
    return (
        <div className="incidencia">
            <h2>Incidencia #{incidencia.id_incidencia}</h2>
            <p><strong>Descripción:</strong> {incidencia.descripcion}</p>
            <p><strong>Fecha:</strong> {incidencia.fecha}</p>
            <p><strong>Estado:</strong> {incidencia.estado}</p>
            <p><strong>ID Usuario:</strong> {incidencia.id_usuario}</p>
            <p><strong>ID Cliente:</strong> {incidencia.id_cliente}</p>
        </div>
    );
}

export default IncidenciaCard;