import type { Administrator, Comerciante, Notificacion_admin } from "./types";
import { validateNotificationForm } from "./formValidation";
import { createMensajeInput, createAdminSelect, createComercianteSelect } from "./formElements";
import { notificaciones } from "./data";

export function createNotificationForm(
  container: HTMLElement,
  admins: Administrator[],
  merchants: Comerciante[],
  onAdd: (notif: Notificacion_admin) => void
) {
  const form = document.createElement("form");

  const { container: mensajeDiv, textarea: mensajeInput, errorDiv: mensajeError } = createMensajeInput();
  const { container: adminDiv, select: adminSelect, errorDiv: adminError } = createAdminSelect(admins);
  const { container: comercianteDiv, select: comercianteSelect, errorDiv: comercianteError } = createComercianteSelect(merchants);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Crear Notificación";

  form.append(mensajeDiv, adminDiv, comercianteDiv, submitBtn);

  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";
  form.style.maxWidth = "400px";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar
    const { isValid, errors } = validateNotificationForm(
      mensajeInput.value,
      adminSelect.value,
      comercianteSelect.value
    );

    mensajeError.textContent = errors.mensaje ?? "";
    adminError.textContent = errors.administrador ?? "";
    comercianteError.textContent = errors.comerciante ?? "";

    if (!isValid) return;

    const nuevaNotificacion: Notificacion_admin = {
      id_notificacion: (notificaciones.length ? Math.max(...notificaciones.map(n => n.id_notificacion)) + 1 : 1),
      mensaje: mensajeInput.value.trim(),
      fecha_envio: new Date().toISOString().slice(0, 10),
      id_administrador: adminSelect.value,
      id_comerciante: comercianteSelect.value,
    };

    onAdd(nuevaNotificacion);
    form.reset();
  });

  container.appendChild(form);
}
