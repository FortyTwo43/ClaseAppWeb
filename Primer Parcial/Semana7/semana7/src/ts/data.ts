import type { Administrator, Comerciante, Notificacion_admin } from "./types";

export const administrators: Administrator[] = [
  { id_administrador: "admin1", nombre: "Ana", apellido: "Gomez", correo: "ana@example.com" },
  { id_administrador: "admin2", nombre: "Luis", apellido: "Perez", correo: "luis@example.com" },
];

export const comerciantes: Comerciante[] = [
  { id_comerciante: "1234567890", nombre: "Pepito Garcia", direccion: "Calle 1", telefono: "555-1111", email: "abc@tienda.com", habilitado: true },
  { id_comerciante: "0987654321", nombre: "Juanito Perez", direccion: "Av 5", telefono: "555-2222", email: "xyz@super.com", habilitado: false },
];

export let notificaciones: Notificacion_admin[] = [
  { id_notificacion: 1, mensaje: "Revisión del sistema", fecha_envio: "2025-06-05", id_administrador: "admin1", id_comerciante: "com1" },
];
