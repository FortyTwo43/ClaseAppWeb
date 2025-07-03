import { useEffect, useState } from 'react';
import { obtenerComerciantes, insertarComerciante, actualizarComerciante, eliminarComerciante } from '../data/servicioComerciante';
import type { Comerciante } from '../types/comerciante';
import ComercianteList from '../components/ComercianteList';
import ComercianteForm from '../components/ComercianteForm';

//ESTO LO HIZO Leo Holguin
export default function ComerciantePage() {
  const [comerciantes, setComerciantes] = useState<Comerciante[]>([]);
  const [editando, setEditando] = useState<Comerciante | null>(null);

  const cargarComerciantes = async () => {
    const data = await obtenerComerciantes();
    setComerciantes(data);
  };

  useEffect(() => {
    cargarComerciantes();
  }, []);

  const handleCreateOrUpdate = async (data: any) => {
    if (data.id_comerciante) {
      await actualizarComerciante(data);
    } else {
      await insertarComerciante(data);
    }
    setEditando(null);
    cargarComerciantes();
  };

  const handleEdit = (comerciante: Comerciante) => {
    setEditando(comerciante);
  };

  const handleDelete = async (id: string) => {
    await eliminarComerciante(id);
    cargarComerciantes();
  };

  return (
    <div>
      <ComercianteForm initialData={editando || undefined} onSubmit={handleCreateOrUpdate} />
      <ComercianteList comerciantes={comerciantes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
