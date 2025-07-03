import { SUPABASE_URL, SUPABASE_HEADERS } from '../config/supabase'
import type { Notificacion } from '../types/notificaciones'

// Fue hecho por: Reyes Jeremy
export async function obtenerNotificaciones(): Promise<Notificacion[]> {
  try {
    const url = `${SUPABASE_URL}/rest/v1/notificacion_comerciante`
    const response = await fetch(url, {
      method: 'GET',
      headers: SUPABASE_HEADERS,
    })
    if (!response.ok) {
      throw new Error('Error al obtener las notificaciones')
    }
    const data = await response.json()
    return data as Notificacion[]
  } catch (error) {
    console.error('Error al obtener notificaciones:', error)
    throw error
  }
}

export async function actualizarNotificacion(notificacion: Notificacion): Promise<void> {
  try {
    const url = `${SUPABASE_URL}/rest/v1/notificacion_comerciante?id=eq.${notificacion.id_notificacion}`
    const response = await fetch(url, {
      method: 'PATCH',
      headers: SUPABASE_HEADERS,
      body: JSON.stringify(notificacion),
    })
    if (!response.ok) {
      throw new Error('Error al actualizar la notificación')
    }
  } catch (error) {
    console.error('Error al actualizar notificación:', error)
    throw error
  }
}

export async function eliminarNotificacion(id: number): Promise<void> {
  try {
    const url = `${SUPABASE_URL}/rest/v1/notificacion_comerciante?id=eq.${id}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: SUPABASE_HEADERS,
    })
    if (!response.ok) {
      throw new Error('Error al eliminar la notificación')
    }
  } catch (error) {
    console.error('Error al eliminar notificación:', error)
    throw error
  }
}

export async function insertarNotificacion(
  notificacion: Notificacion
): Promise<void> {
  try {
    const url = `${SUPABASE_URL}/rest/v1/notificacion_comerciante`;
    const response = await fetch(url, {
      method: 'POST',
      headers: SUPABASE_HEADERS,
      body: JSON.stringify(notificacion),
    });
    if (!response.ok) {
      throw new Error('Error al insertar la notificación');
    }
  } catch (error) {
    console.error('Error al insertar notificación:', error);
    throw error;
  }
}
