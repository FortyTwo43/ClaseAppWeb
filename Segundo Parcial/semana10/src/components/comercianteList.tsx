import { useEffect } from "react";
import { useState } from "react";
import type { Comerciante } from "../types/comerciante";
import ComercianteCard from "./comercianteCard";


// FUE HECHO POR LEO HOLGUIN
function ComercianteList() {
    const [Comerciantes, setComerciantes] = useState<Comerciante[]>([]);

    useEffect(() => {
        const data: Comerciante[] = [
            {   
                id_comerciante: 1,
                nombre: "LEO",
                email: "leito@gmail.com",
                telefono: "123456789",
                direccion: "Calle Falsa 123"
            },
            {
                id_comerciante: 2,
                nombre: "JUAN",
                email: "juanito12@gmail.com",
                telefono: "987654321",
                direccion: "Avenida Siempre Viva 456"
            }
        ]
        setTimeout(() => setComerciantes(data), 100);
    },[]);

    return (
        <div className="Comerciante-list">
            <h1>Lista de Comerciantes</h1>
            {Comerciantes.map((Comerciante) => (
                <ComercianteCard key={Comerciante.id_comerciante} comerciante={Comerciante} />
            ))}
        </div>
    );
}

export default ComercianteList;