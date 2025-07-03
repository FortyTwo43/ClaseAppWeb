
import { useEffect, useState } from 'react';
import { obtenerIncidencias, insertarIncidencia, actualizarIncidencia, eliminarIncidencia,} from '../data/servicioIncidencia';
import type { Incidencia } from '../types/incidencia';
import IncidenciaList from '../components/incidenciaList';
import IncidenciaForm from '../components/IncidenciaForm';


//ESTO LO HIZO NEYSSER DELGADO MEZA
export default function IncidenciasPage() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([]);
  const [editando, setEditando] = useState<Incidencia | null>(null);

  const cargarIncidencias = async () => {
    const data = await obtenerIncidencias();
    setIncidencias(data);
  };

  useEffect(() => {
    cargarIncidencias();
  }, []);

  const handleCreateOrUpdate = async (data: any) => {
    if ('id_incidencia' in data) {
      await actualizarIncidencia(data);
    } else {
      await insertarIncidencia(data);
    }
    setEditando(null);
    cargarIncidencias();
  };

  const handleEdit = (incidencia: Incidencia) => {
    setEditando(incidencia);
  };

  const handleDelete = async (id: number) => {
    await eliminarIncidencia(id);
    cargarIncidencias();
  };

  return (
    <div>
      <IncidenciaForm initialData={editando!} onSubmit={handleCreateOrUpdate} />
      <IncidenciaList
        incidencias={incidencias}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
