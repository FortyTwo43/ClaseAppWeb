import { useEffect } from "react";
import { useState } from "react";
import type { Incidencia } from "../types/incidencia";
import IncidenciaCard from "./incidenciaCard";


// FUE HECHO POR NEYSSER DELGADO MEZA
function IncidenciaList() {
    const [incidencias, setIncidencias] = useState<Incidencia[]>([]);

    useEffect(() => {
        const data: Incidencia[] = [
            {
                id_incidencia: 1,
                descripcion: "Error en la aplicación al iniciar sesión",
                fecha: "2023-10-01",
                estado: "Pendiente",
                id_usuario: 101,
                id_cliente: 201
            },
            {
                id_incidencia: 2,
                descripcion: "Problema de conexión a la base de datos",
                fecha: "2023-10-02",
                estado: "En Progreso",
                id_usuario: 102,
                id_cliente: 202
            },
            {
                id_incidencia: 3,
                descripcion: "Fallo en la carga de la página principal",
                fecha: "2023-10-03",
                estado: "Resuelto",
                id_usuario: 103,
                id_cliente: 203
            }
        ]
        setTimeout(() => setIncidencias(data), 100);
    },[]);

    return (
        <div className="incidencia-list">
            <h1>Lista de Incidencias</h1>
            {incidencias.map((incidencia) => (
                <IncidenciaCard key={incidencia.id_incidencia} incidencia={incidencia} />
            ))}
        </div>
    );
}

export default IncidenciaList;