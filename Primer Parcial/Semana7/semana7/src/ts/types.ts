export interface Administrator {
  id_administrador: string;
  nombre: string;
  apellido: string;
  correo: string;
}

export interface Notificacion_admin {
  id_notificacion: number;
  mensaje: string;
  fecha_envio: string; 
  id_administrador: string;
  id_comerciante?: string; // es el destinatario opcional
  id_cliente?: string; // es el destinatario opcional
}

export interface Comerciante {
  id_comerciante: string;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  habilitado: boolean;
}
