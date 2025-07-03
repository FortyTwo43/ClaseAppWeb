import { useState, useEffect } from 'react';
import type { Comerciante } from '../types/comerciante';

// FUE HECHO POR Leo Holguin
interface Props {
  initialData?: Comerciante;
  onSubmit: (data: Partial<Comerciante>) => void;
}

export default function ComercianteForm({ initialData, onSubmit }: Props) {
  const [formData, setFormData] = useState<Partial<Comerciante>>({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    habilitado: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar' : 'Crear'} Comerciante</h2>
      <input name="nombre" value={formData.nombre || ''} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" value={formData.email || ''} onChange={handleChange} placeholder="Email" required />
      <input name="telefono" value={formData.telefono || ''} onChange={handleChange} placeholder="Teléfono" required />
      <input name="direccion" value={formData.direccion || ''} onChange={handleChange} placeholder="Dirección" required />
      <button type="submit">Guardar</button>
    </form>
  );
}
