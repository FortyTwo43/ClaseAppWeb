// Hook personalizado para usar con React y manejar estados de carga y errores
import { useState, useEffect } from 'react';
import * as db from '../data/basedatos';

// Hook genérico para obtener datos de cualquier tabla
export const useGetAll = <T>(table: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await db.getAll<T>(table);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await db.getAll<T>(table);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Hook para obtener un registro por ID
export const useGetById = <T>(table: string, id: string | number | null) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await db.getById<T>(table, id);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table, id]);

  return { data, loading, error };
};

// Hook para operaciones CRUD
export const useSupabaseCRUD = <T>(table: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (data: Partial<T>): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await db.insert<T>(table, data);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateRecord = async (id: string | number, data: Partial<T>): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = await db.update<T>(table, id, data);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id: string | number): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      const result = await db.deleteRecord(table, id);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { create, updateRecord, deleteRecord, loading, error };
};
