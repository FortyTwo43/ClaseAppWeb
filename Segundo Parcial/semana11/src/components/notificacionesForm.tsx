import { useState, useEffect } from 'react';
import type { Notificacion } from '../types/notificaciones';

// Fue hecho por: Reyes Jeremy

interface Props {
  initialData?: Notificacion;
  onSubmit: (data: Partial<Notificacion>) => void;
}

export default function NotificacionesForm({ initialData, onSubmit }: Props) {
  const [formData, setFormData] = useState<Partial<Notificacion>>({
    titulo: '',
    mensaje: '',
    fecha_envio: '',
    id_comerciante: 0,
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'id_comerciante' ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar' : 'Crear'} Notificación</h2>
      <input
        name="titulo"
        value={formData.titulo || ''}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <textarea
        name="mensaje"
        value={formData.mensaje || ''}
        onChange={handleChange}
        placeholder="Mensaje"
        required
      />
      <input
        name="fecha_envio"
        type="date"
        value={formData.fecha_envio || ''}
        onChange={handleChange}
        required
      />
      <input
        name="id_comerciante"
        type="number"
        value={formData.id_comerciante || 0}
        onChange={handleChange}
        placeholder="ID Comerciante"
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
