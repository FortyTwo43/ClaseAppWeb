<!-- Fue hecho por: Reyes Jeremy -->
<script setup lang="ts">
import type { Notificacion } from "../types/notificaciones"
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  notificacion: Notificacion
}>()

const emit = defineEmits<{
  (e: 'edit', notificacion: Notificacion): void
  (e: 'delete', id: number): void
}>()

function onEdit() {
  emit('edit', props.notificacion)
}

function onDelete() {
  emit('delete', props.notificacion.id_notificacion)
}
</script>

<template>
  <div class="notificacion">
    <h3>notificacion #{{ props.notificacion.id_notificacion }}</h3>
    <p><strong>title:</strong> {{ props.notificacion.titulo }}</p>
    <p><strong>message:</strong> {{ props.notificacion.mensaje }}</p>
    <button @click="onEdit">Editar</button>
    <button @click="onDelete">Eliminar</button>
  </div>
</template>

<style scoped>
.notificacion {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background:rgb(146, 10, 219);
  
}
button {
  margin-right: 8px;
}
</style>