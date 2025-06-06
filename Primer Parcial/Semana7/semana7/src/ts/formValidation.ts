export interface ValidationResult {
  isValid: boolean;
  errors: {
    mensaje?: string;
    administrador?: string;
    comerciante?: string;
  };
}

export function validateNotificationForm(
  mensaje: string,
  administrador: string,
  comerciante: string
): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!mensaje.trim()) {
    errors.mensaje = "El mensaje es obligatorio.";
  } else if (mensaje.trim().length < 5) {
    errors.mensaje = "El mensaje debe tener al menos 5 caracteres.";
  }

  if (!administrador) {
    errors.administrador = "Debe seleccionar un administrador.";
  }

  if (!comerciante) {
    errors.comerciante = "Debe seleccionar un comerciante.";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}
