import { useEffect, useState } from 'react';
import type { Notificacion } from '../types/notificaciones';
import {
  obtenerNotificaciones,
  insertarNotificacion,
  actualizarNotificacion,
  eliminarNotificacion,
} from '../data/servicioNotificaciones';
import NotificacionesList from '../components/notificacionesList';
import NotificacionesForm from '../components/notificacionesForm';

// Fue hecho por: Reyes Jeremy
export default function NotificacionesPages() {
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);
  const [editando, setEditando] = useState<Notificacion | null>(null);

  const cargarNotificaciones = async () => {
    const data = await obtenerNotificaciones();
    setNotificaciones(data);
  };

  useEffect(() => {
    cargarNotificaciones();
  }, []);

const handleCreateOrUpdate = async (data: Notificacion) => {
  if (data.id_notificacion) {
    await actualizarNotificacion(data);
  } else {
    const { id_notificacion, ...nuevo } = data;
    await insertarNotificacion(nuevo as Notificacion);
  }
  setEditando(null);
  cargarNotificaciones();
};

  const handleEdit = (notificacion: Notificacion) => {
    setEditando(notificacion);
  };

  const handleDelete = async (id: number) => {
    await eliminarNotificacion(id);
    cargarNotificaciones();
  };

  return (
    <div className="notificaciones-pages">
      <h1>Notificaciones</h1>
      <NotificacionesForm initialData={editando ?? undefined} onSubmit={handleCreateOrUpdate} />
      <NotificacionesList
        notificacionesList={notificaciones}  onEdit={handleEdit} onDelete={handleDelete}
      />

    </div>
  );
}