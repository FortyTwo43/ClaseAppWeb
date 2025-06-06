// src/ts/list.ts
import type { Notificacion_admin, Administrator, Comerciante } from "./types";

export function renderNotificationList(
  container: HTMLElement,
  notifications: Notificacion_admin[],
  admins: Administrator[],
  merchants: Comerciante[],
  onDelete: (id: number) => void,
  onEdit: (notif: Notificacion_admin) => void
) {
  container.innerHTML = "";

  if (notifications.length === 0) {
    container.textContent = "No hay notificaciones.";
    return;
  }

  notifications.forEach(n => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";
    card.style.borderRadius = "5px";
    card.style.position = "relative";

    const mensajeP = document.createElement("p");
    mensajeP.textContent = `Mensaje: ${n.mensaje}`;

    const fechaP = document.createElement("p");
    fechaP.textContent = `Fecha: ${n.fecha_envio}`;

    const admin = admins.find(a => a.id_administrador === n.id_administrador);
    const comerciante = merchants.find(c => c.id_comerciante === n.id_comerciante);

    const adminP = document.createElement("p");
    adminP.textContent = `Administrador: ${admin ? admin.nombre + " " + admin.apellido : "Desconocido"}`;

    const comercianteP = document.createElement("p");
    comercianteP.textContent = `Comerciante: ${comerciante ? comerciante.nombre : "Desconocido"}`;

    // Botones
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.style.marginRight = "10px";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";

    editBtn.addEventListener("click", () => {
      onEdit(n);
    });

    deleteBtn.addEventListener("click", () => {
      if (confirm("¿Eliminar esta notificación?")) {
        onDelete(n.id_notificacion);
      }
    });

    card.append(mensajeP, fechaP, adminP, comercianteP, editBtn, deleteBtn);

    container.appendChild(card);
  });
}
