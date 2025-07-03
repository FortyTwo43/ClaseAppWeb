//Fue hecho por: Reyes Jeremy
export interface Notificacion {
    id_notificacion: number,
    titulo: string,
    mensaje: string;
    fecha_envio: string;
    id_comerciante: number;
};

export type NuevaNotificacion = Omit<Notificacion, 'id_notificacion'>;