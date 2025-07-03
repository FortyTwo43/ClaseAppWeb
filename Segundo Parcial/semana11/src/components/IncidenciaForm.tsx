import { useState, useEffect } from 'react';
import type { CreateIncidenciaInput, Incidencia } from '../types/incidencia';


// FUE HECHO POR NEYSSER DELGADO MEZA
interface Props {
  initialData?: Incidencia;
  onSubmit: (data: CreateIncidenciaInput | Incidencia) => void;
}

export default function IncidenciaForm({ initialData, onSubmit }: Props) {
  const [formData, setFormData] = useState<CreateIncidenciaInput>({
    descripcion: '',
    fecha: '',
    estado: 'pendiente',
    id_comerciante: 0,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Editar' : 'Crear'} Incidencia</h2>
      <input
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <input
        name="fecha"
        type="date"
        value={formData.fecha}
        onChange={handleChange}
        required
      />
      <select name="estado" value={formData.estado} onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="abierto">Abierto</option>
        <option value="resuelto">Resuelto</option>
      </select>
      <input
        name="id_comerciante"
        type="number"
        value={formData.id_comerciante}
        onChange={handleChange}
        placeholder="ID Comerciante"
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
