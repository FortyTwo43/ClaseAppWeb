import { SUPABASE_URL, SUPABASE_HEADERS } from '../config/supabase'
import type { Comerciante } from '../types/comerciante';

//ESTO LO HIZO Leo Holguin
export async function obtenerComerciantes(): Promise<Comerciante[]> {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/comerciante`, {
      method: "GET",
      headers: SUPABASE_HEADERS,
    });
    if (!response.ok) throw new Error("Error al obtener los comerciantes");
    return await response.json();
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

export async function actualizarComerciante(comerciante: Comerciante) {
  try {
    const url = `${SUPABASE_URL}/rest/v1/comerciante?id_comerciante=eq.${comerciante.id_comerciante}`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: SUPABASE_HEADERS,
      body: JSON.stringify(comerciante),
    });
    if (!response.ok) throw new Error('Error al actualizar el comerciante');
  } catch (error) {
    console.error('Error al actualizar comerciante:', error);
    throw error;
  }
}

export async function eliminarComerciante(id: string): Promise<void> {
  try {
    // 1. Eliminar notificaciones del comerciante
    const eliminarNotificaciones = await fetch(
      `${SUPABASE_URL}/rest/v1/notificacion_comerciante?id_comerciante=eq.${id}`,
      {
        method: 'DELETE',
        headers: SUPABASE_HEADERS,
      }
    );
    if (!eliminarNotificaciones.ok) {
      throw new Error('Error al eliminar las notificaciones del comerciante');
    }

    // 2. Eliminar incidencias del comerciante
    const eliminarIncidencias = await fetch(
      `${SUPABASE_URL}/rest/v1/incidencia?id_comerciante=eq.${id}`,
      {
        method: 'DELETE',
        headers: SUPABASE_HEADERS,
      }
    );
    if (!eliminarIncidencias.ok) {
      throw new Error('Error al eliminar las incidencias del comerciante');
    }

    // 3. Eliminar el comerciante
    const eliminarComerciante = await fetch(
      `${SUPABASE_URL}/rest/v1/comerciante?id_comerciante=eq.${id}`,
      {
        method: 'DELETE',
        headers: SUPABASE_HEADERS,
      }
    );
    if (!eliminarComerciante.ok) {
      throw new Error('Error al eliminar el comerciante');
    }
  } catch (error) {
    console.error('Error eliminando comerciante y datos relacionados:', error);
    throw error;
  }
}

export async function insertarComerciante(comerciante: Omit<Comerciante, 'id_comerciante'>): Promise<void> {
  try {
    const url = `${SUPABASE_URL}/rest/v1/comerciante`

    const response = await fetch(url, {
      method: 'POST',
      headers: SUPABASE_HEADERS,
      body: JSON.stringify(comerciante),
    })

    if (!response.ok) {
      throw new Error('Error al insertar el comerciante')
    }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
