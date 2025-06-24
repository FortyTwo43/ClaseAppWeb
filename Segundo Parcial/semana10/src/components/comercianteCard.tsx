import type { Comerciante } from "../types/comerciante";

// FUE HECHO POR LEO HOLGUIN
function comercianteCard({ comerciante }: { comerciante: Comerciante }) {
    return (
        <div className="comerciante">
            <h2>comerciante #{comerciante.id_comerciante}</h2>
            <p><strong>Nombre:</strong> {comerciante.nombre}</p>
            <p><strong>Email:</strong> {comerciante.email}</p>
            <p><strong>Teléfono:</strong> {comerciante.telefono}</p>
            <p><strong>Dirección:</strong> {comerciante.direccion}</p>
        </div>
    );
}

export default comercianteCard;