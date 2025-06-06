import { administrators, comerciantes, notificaciones } from "./data";
import { createNotificationForm } from "./form";
import { renderNotificationList } from "./list";
import type { Notificacion_admin } from "./types";

const app = document.getElementById("app")!;
const formContainer = document.createElement("section");
const listContainer = document.createElement("section");

app.appendChild(formContainer);
app.appendChild(listContainer);

function refreshList() {
  renderNotificationList(
    listContainer,
    notificaciones,
    administrators,
    comerciantes,
    (id) => {
      const idx = notificaciones.findIndex(n => n.id_notificacion === id);
      if (idx !== -1) {
        notificaciones.splice(idx, 1);
        refreshList();
      }
    },
    (notif) => {
      // Simple edición: prompt para cambiar mensaje
      const nuevoMensaje = prompt("Editar mensaje:", notif.mensaje);
      if (nuevoMensaje && nuevoMensaje.trim().length >= 5) {
        notif.mensaje = nuevoMensaje.trim();
        refreshList();
      } else {
        alert("Mensaje no válido o demasiado corto.");
      }
    }
  );
}

createNotificationForm(formContainer, administrators, comerciantes, (nuevaNotificacion) => {
  notificaciones.push(nuevaNotificacion);
  refreshList();
});

refreshList();
