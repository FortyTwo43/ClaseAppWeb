// FUE HECHO POR LEO HOLGUIN
export interface Comerciante {
    id_comerciante: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    habilitado: boolean;
}

export type CreateComercianteInput = Omit<Comerciante, 'id_comerciante'>;
