import type { Administrator, Comerciante } from "./types";

export function createMensajeInput() {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = "Mensaje:";
  const textarea = document.createElement("textarea");
  textarea.name = "mensaje";
  textarea.rows = 3;
  textarea.maxLength = 200;
  textarea.required = true;
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";

  container.append(label, textarea, errorDiv);
  return { container, textarea, errorDiv };
}

export function createAdminSelect(admins: Administrator[]) {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = "Administrador:";
  const select = document.createElement("select");
  select.name = "administrador";
  select.required = true;
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "--Seleccione--";
  select.appendChild(defaultOption);

  admins.forEach(a => {
    const option = document.createElement("option");
    option.value = a.id_administrador;
    option.textContent = `${a.nombre} ${a.apellido}`;
    select.appendChild(option);
  });

  container.append(label, select, errorDiv);
  return { container, select, errorDiv };
}

export function createComercianteSelect(comers: Comerciante[]) {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = "Comerciante:";
  const select = document.createElement("select");
  select.name = "comerciante";
  select.required = true;
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "--Seleccione--";
  select.appendChild(defaultOption);

  comers.forEach(c => {
    if (c.habilitado) {
      const option = document.createElement("option");
      option.value = c.id_comerciante;
      option.textContent = c.nombre;
      select.appendChild(option);
    }
  });

  container.append(label, select, errorDiv);
  return { container, select, errorDiv };
}